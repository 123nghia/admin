import React, { lazy, Component } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CForm,
  CFormGroup,
  CLabel,
  CSelect
} from '@coreui/react'


import {
  Button
} from 'reactstrap';
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import Constants from "./../../contants/contants";
import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class ShopManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 0,
      dataUserSale: [],
      arrPagination: [],
      indexPage: 0,
      dataStatistical: [],
      arrPaginationStatistical: [],
      indexPageStatistical: 0,
      company_id: localStorage.getItem('user'),
      dataApi: [],
      arrTemp: [],
      hidden: true,
    };
  }

  async componentDidMount() {
    await this.getCustomer();
  }

  countType(arr, phone) {
    const count = arr.filter(data => data.Phone == phone);
    return count.length;
  }

  pagination(dataApi) {
    var i, j, temparray, chunk = 5;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }
    this.setState({ arrPagination: arrTotal, dataUserSale: arrTotal[this.state.indexPage] });
  }

  pagination_statistical(dataApi) {
    var i, j, temparray, chunk = 5;
    var arrTotal_Statistical = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal_Statistical.push(temparray);
    }
    this.setState({ arrPaginationStatistical: arrTotal_Statistical, dataStatistical: arrTotal_Statistical[this.state.indexPageStatistical] });
  }

  async getCustomer() {
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_CUSTOMER,
      method: 'POST'
    });
    this.pagination(res.data.data);
    this.setState({ dataApi: res.data.data });
  }

  async getCustomerByMonth(month) {
    const { company_id } = this.state;
    var id = JSON.parse(company_id);
    var bodyUser = {
      company_id: id.company_id,
      month: month
    }

    if (month == 0) {
      await this.getCustomer();
    } else {
      const res = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_CUSTOMER_BY_MONTH,
        method: 'POST',
        data: bodyUser
      });

      if (res.data.data.length == 0) {
        this.setState({ hidden: false })
      } else {
        this.setState({ hidden: true })
      }
      this.pagination(res.data.data);
      this.setState({ dataApi: res.data.data, arrTemp: res.data.data });

      //STATISTICAL
      let arrCount_User = [];
      for (let i = 0; i < this.state.arrTemp.length; i++) {
        //check if exits in arr
        if (!arrCount_User.some(item => this.state.arrTemp[i].Phone == item.Phone)) {
          this.state.arrTemp[i].count = this.countType(this.state.arrTemp, this.state.arrTemp[i].Phone);
          const resCal = await axios({
            baseURL: Constants.BASE_URL,
            url: Constants.GET_COEFFICIENT,
            method: 'POST',
            data: {
              "company_id": id.company_id,
              "phone": this.state.arrTemp[i].Phone
            }
          });
          this.state.arrTemp[i].coefficient = resCal.data.data.calculator;
          arrCount_User.push(this.state.arrTemp[i])
        }
      }

      this.pagination_statistical(arrCount_User);
    }
  }

  render() {
    const { dataUserSale, hidden, arrPagination, indexPage,
      dataStatistical, arrPaginationStatistical, indexPageStatistical } = this.state;
    return (
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="selectSm">LIST USER SALE ON MONTH</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect onChange={async e => { await this.getCustomerByMonth(e.target.value) }} custom size="sm" name="selectSm" id="SelectLm">
                    <option value="0">Choose month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </CSelect>
                </CCol>
              </CFormGroup>
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">No.</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Phone</th>
                    <th className="text-center">Gender</th>
                    <th className="text-center">Times Invite</th>
                  </tr>
                </thead>
                <tbody>
                  <td colSpan="6" hidden={hidden} className="text-center">No users in this month</td>
                  {
                    dataUserSale != undefined ?
                      dataUserSale.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td className="text-center">{i + 1}</td>
                            <td className="text-center">{item.Name}</td>
                            <td className="text-center">{item.Email}</td>
                            <td className="text-center">{item.Phone}</td>
                            <td className="text-center">{item.Gender}</td>
                            <td className="text-center">
                              {(new Date(item.Create_Date)).toLocaleDateString() + ' ' + (new Date(item.Create_Date)).toLocaleTimeString()}
                            </td>
                          </tr>
                        );
                      }) : ""
                  }
                </tbody>
              </table>
              {
                arrPagination.length == 1 ? "" :
                  <div style={{ float: 'right', marginRight: '10px', padding: '10px' }}>
                    <tr style={{ float: "left", width: "100%" }}>
                      {
                        arrPagination.map((item, i) => {
                          return (
                            <td>
                              <Button style={{ marginRight: '5px' }} color={i == indexPage ? 'primary' : 'danger'} onClick={e => { this.setState({ dataUserSale: arrPagination[i], indexPage: i }) }}>{i + 1}</Button>
                            </td>
                          );
                        })
                      }
                    </tr>
                  </div>
              }
            </CCardBody>
          </CCard>

          <CCard>
            <CCardHeader>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="selectSm">STATISTICAL LIST USER SALE ON MONTH</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  {/*  */}
                </CCol>
              </CFormGroup>
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">No.</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Phone</th>
                    <th className="text-center">Gender</th>
                    <th className="text-center">Times Count</th>
                    <th className="text-center">Coefficient</th>
                  </tr>
                </thead>
                <tbody>
                  <td colSpan="6" hidden={hidden} className="text-center">No users in this month</td>
                  {
                    dataStatistical != undefined ?
                      dataStatistical.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td className="text-center">{i + 1}</td>
                            <td className="text-center">{item.Name}</td>
                            <td className="text-center">{item.Email}</td>
                            <td className="text-center">{item.Phone}</td>
                            <td className="text-center">{item.Gender}</td>
                            <td className="text-center">{item.count}</td>
                            <td className="text-center">{item.coefficient}</td>
                          </tr>
                        );
                      }) : ""
                  }
                </tbody>
              </table>

              {
                arrPaginationStatistical.length == 1 ? "" :
                  <div style={{ float: 'right', marginRight: '10px', padding: '10px' }}>
                    <tr style={{ float: "left", width: "100%" }}>
                      {
                        arrPaginationStatistical.map((item, i) => {
                          return (
                            <td>
                              <Button style={{ marginRight: '5px' }} color={i == indexPageStatistical ? 'primary' : 'danger'} onClick={e => { this.setState({ dataStatistical: arrPaginationStatistical[i], indexPageStatistical: i }) }}>{i + 1}</Button>
                            </td>
                          );
                        })
                      }
                    </tr>
                  </div>
              }
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    )
  }
}

export default ShopManager
