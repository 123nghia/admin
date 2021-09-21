import React, { lazy, Component } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CLabel,
  CSelect, CCardGroup
} from '@coreui/react'

import {
  CChartBar,
} from '@coreui/react-chartjs'

import {
  Button
} from 'reactstrap';
import axios from 'axios'
import Constants from "./../../contants/contants";

import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

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
      hidden_all: true,
      arrAllUser: [],
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    await this.getCustomer();
    await this.getCustomerByMonth("01");
    await this.getDataForCharts();

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

    console.log(arrTotal)
    this.setState({ arrPagination: arrTotal, dataUserSale: arrTotal[this.state.indexPage] });
  }

  pagination_statistical(dataApi) {
    var i, j, temparray, chunk = 2;
    var arrTotal_Statistical = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal_Statistical.push(temparray);
    }
    this.setState({ arrPaginationStatistical: arrTotal_Statistical, dataStatistical: arrTotal_Statistical[this.state.indexPageStatistical] });
  }

  async getCustomer() {

    const { company_id } = this.state;
    var id = JSON.parse(company_id);

    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_CUSTOMER,
      method: 'POST',
      data: {
        "condition": {
          "Company_Id": id.company_id,
          "Sale_Id": id.sale_id
        }
      },
      headers: this.state.token
    });

    let data = res.data.data

    this.setState({ dataApi: data });

    if (data.length == 0) {
      this.setState({ hidden_all: false, isLoading: false })
    } else {
      this.setState({ hidden_all: true, isLoading: false })
    }
    this.pagination(data);

  }

  async getDataForCharts() {
    const { company_id } = this.state;
    var id = JSON.parse(company_id);
    let arrMonth = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    let arrTemp = [];
    for (let i = 0; i < arrMonth.length; i++) {
      const res = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.GET_USER_SALE_BY_MONTH,
        method: 'POST',
        data: {
          company_id: id.company_id,
          month: arrMonth[i],
          sale_id: id.sale_id
        }
      });
      let data = res.data.data

      // let count = 0;
      // for(let i = 0; i < data.length; i++) {
      //   count = count + data[i].count
      // }

      arrTemp.push(data.length)
      //count = 0;
    }

    this.setState({ arrAllUser: arrTemp, isLoading: false })
  }

  async getCustomerByMonth(month) {
    const { company_id } = this.state;
    var id = JSON.parse(company_id);
    var bodyUser = {
      company_id: id.company_id,
      month: month,
      sale_id: id.sale_id
    }

    if (month == 0) {
      await this.getCustomer();
    } else {
      const res = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.GET_USER_SALE_BY_MONTH,
        method: 'POST',
        data: bodyUser
      });

      let data = res.data.data

      if (data.length == 0) {
        this.setState({ hidden: false })
      } else {
        this.setState({ hidden: true })
      }
      this.setState({ dataApi: data, arrTemp: data, isLoading: false });

      this.pagination_statistical(data);
    }
  }

  render() {
    const { dataUserSale, hidden, arrPagination, indexPage, hidden_all,
      dataStatistical, arrPaginationStatistical, indexPageStatistical } = this.state;
    if (!this.state.isLoading) {
      return (
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="selectSm">Thống kê tổng số lượt user</CLabel>
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
                      <th className="text-center">Tên</th>
                      <th className="text-center">Email</th>
                      <th className="text-center">Số điện thoại</th>
                      <th className="text-center">Giới tính</th>
                      <th className="text-center">Số lần đến</th>
                      <th className="text-center">Hệ số</th>
                      <th className="text-center">Lần cuối đến</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td colSpan="9" hidden={hidden_all} className="text-center">Không có người dùng trong tháng</td>
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
                              <td className="text-center">{item.count}</td>
                              <td className="text-center">{Number(item.coefficient).toFixed(2)}</td>
                              <td className="text-center">
                                {(new Date(item.Create_Date)).toLocaleDateString() + ' ' + (new Date(item.Create_Date)).toLocaleTimeString()}
                              </td>
                            </tr>
                          );
                        }) : ""
                    }
                  </tbody>

                </table>
                <tfoot>
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
                </tfoot>
                <br />

                <CRow>
                  <CCol xs="12" sm="5">
                    <CCard>
                      <CCardHeader>
                        Biểu đồ người dùng qua từng tháng
                      </CCardHeader>
                      <CCardBody>
                        <CChartBar
                          datasets={[
                            {
                              label: 'Total user of month ',
                              backgroundColor: '#0008ff',
                              data: this.state.arrAllUser
                            }
                          ]}
                          labels="months"
                          options={{
                            tooltips: {
                              enabled: true
                            }
                          }}
                        />
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol xs="12" sm="7">
                    <CCard>
                      <CCardHeader>
                        <CFormGroup row>
                          <CCol xs="12" md="7" ls="12">
                            <CLabel htmlFor="selectSm">Người dùng trong từng tháng</CLabel>
                          </CCol>
                          <CCol xs="12" md="5" ls="12">
                            <div style={{ float: "right", width: "250px" }}>
                              <CSelect onChange={async e => { await this.getCustomerByMonth(e.target.value) }} custom size="sm" name="selectSm" id="SelectLm">
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
                            </div>
                          </CCol>
                        </CFormGroup>
                      </CCardHeader>
                      <CCardBody>
                        <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                          <thead className="thead-light">
                            <tr>
                              <th className="text-center">Tên</th>
                              <th className="text-center">Email</th>
                              <th className="text-center">Số điện thoại</th>
                              <th className="text-center">Giới tính</th>
                              <th className="text-center">Số lần đến</th>
                              <th className="text-center">Hệ số</th>
                            </tr>
                          </thead>
                          <tbody>
                            <td colSpan="7" hidden={hidden} className="text-center">Không có người dùng nào trong tháng</td>
                            {
                              dataStatistical != undefined ?
                                dataStatistical.map((item, i) => {
                                  return (
                                    <tr key={i}>
                                      <td className="text-center">{item.Name}</td>
                                      <td className="text-center">{item.Email}</td>
                                      <td className="text-center">{item.Phone}</td>
                                      <td className="text-center">{item.Gender}</td>
                                      <td className="text-center">{item.count}</td>
                                      <td className="text-center">{Number(item.coefficient).toFixed(2)}</td>
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
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

      )
    }
    return (
      <div className="sweet-loading">
        <DotLoader css={override} size={50} color={"#123abc"} loading={this.state.isLoading} speedMultiplier={1.5} />
      </div>
    );
  }
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default ShopManager
