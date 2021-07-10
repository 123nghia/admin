import React, { Component } from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table, Button, Input,
  ModalHeader, ModalBody, ModalFooter, Modal,
  Alert
} from 'reactstrap';
import Select from 'react-select'
import {
  CBadge,
  CRow,
  CCol,
  CSelect,
  CInput
} from '@coreui/react'

import 'moment-timezone';
import Constants from "../../../contants/contants";
import TextFieldGroup from "../../Common/TextFieldGroup";
import axios from 'axios'
import md5 from "md5";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      Company_Id: '',
      keyDateCreate: new Date(),
      keyStatus: '',
      activePage: 1,
      page: 1,
      itemsCount: 0,
      limit: 20,
      totalActive: 0,
      modalCom: false,
      viewingUser: {},
      communities: [],
      updated: '',
      dataApi: [],
      action: 'new',
      Name: '',
      Email: '',
      Phone: '',
      Fax: 'Nam',
      Address: '',
      Website: '',
      Code: '',
      Status: '',
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      dataCompany: [],
      currentCompany: '',
      arrHardWard: [],
      dataHardWard: [],
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      company_id: localStorage.getItem('user')
    };
  }

  async componentDidMount() {
    this.getCompanyData();

    let arr = JSON.parse(localStorage.getItem('url'));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to == window.location.hash) {
        if (arr[i].hidden == true) {
          window.location.href = '#/'
        }
      }
    }

  }

  async addOrder() {
    const { arrHardWard, Company_Id, token } = this.state;

    const resOrder = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.ADD_ORDER,
      method: 'PUT',
      data: {
        "Company_Id": Company_Id,
        "Count": arrHardWard.length
      },
      headers: token
    });

    if (resOrder.data.is_success == true) {
      await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.ADD_ORDER_DETAIL,
        method: 'PUT',
        data: {
          "OrderID": resOrder.data.data._id,
          "arrHard": arrHardWard,
          "Company_Id": resOrder.data.data.Company_Id
        },
        headers: token
      });

      this.setState({ arrHardWard: [] });

    } else {
      alert(resOrder.data.message);
    }
  }

  async getCompanyData() {
    const resCompany = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_COMPANY,
      method: 'POST',
    });

    this.setState({ dataCompany: resCompany.data.data });
  }

  async getHardWardData() {
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_HARDWARE,
      method: 'POST',
      headers: this.state.token
    });
    this.setState({ dataHardWard: res.data.data });
  }

  async toggleModal(key) {
    const { arrHardWard } = this.state;
    this.getHardWardData()
    let arrTemp = new Array();
    if (key == 'new') {
      this.setState({
        modalCom: !this.state.modalCom,
        action: key
      })
    }

    for (let i = 0; i < arrHardWard.length; i++) {
      const arrHW = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_HARDWARE_WITH_ID + arrHardWard[i],
        method: 'POST',
        headers: this.state.token
      });

      arrTemp.push(arrHW.data.data)
    }

    this.setState({ arrHardWard: arrTemp })
  }

  getBadge(status) {
    switch (status) {
      case 'INSTOCK': return 'success'
      case 'AVAILABLE': return 'secondary'
      case 'Locked': return 'warning'
      case 'Deactived': return 'danger'
      default: return 'primary'
    }
  }

  render() {
    const { dataCompany, currentCompany, dataHardWard, arrHardWard } = this.state;
    const arrT = [];
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Quản lý đơn hàng
          </CardHeader>
          <CardBody>
            <div style={styles.tags}>
              <CRow>
                <CCol sm="12" lg="12">
                  <div>
                    <label style={styles.flexLabel} htmlFor="tag">Chọn công ty:    </label>
                    <select style={styles.flexOption} onChange={e => { this.setState({ Company_Id: e.target.value }); console.log(this.state.arrHardWard) }}>
                      <option value={this.state.Company_Id}>-----</option>
                      {
                        dataCompany.map((item, i) => {
                          return (
                            <option value={item._id}>{item.Name}</option>
                          );
                        })
                      }
                    </select>
                  </div>
                </CCol>

                <CCol sm="12" lg="12">
                  <CRow>
                    <CCol sm="12" lg="6">
                      <label htmlFor="tag">DANH SÁCH PHẦN CỨNG ĐÃ CHỌN    </label>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <Button outline color="primary" style={styles.floatRight} size="sm" onClick={e => { this.toggleModal("new") }}>Chọn phần cứng</Button>
                    </CCol>
                  </CRow>
                </CCol>

                <CCol sm="12" lg="12">
                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Mã phần cứng</th>
                        <th className="text-center">Trạng thái</th>
                        <th className="text-center">Ngày tạo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <td colSpan="10" hidden={false} className="text-center">Không tìm thấy dữ liệu</td> */}
                      {
                        arrHardWard != undefined ?
                          arrHardWard.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td className="text-center">{item.Key}</td>
                                <td className="text-center">
                                  <CBadge color={this.getBadge(item.Status)}>
                                    {item.Status}
                                  </CBadge>
                                </td>
                                <td className="text-center">{item.Create_Date}</td>
                              </tr>
                            );
                          }) : ""
                      }
                    </tbody>
                  </table>
                </CCol>

                <CCol sm="12" lg="12">
                  <label style={{ marginTop: 10 }} htmlFor="tag">Số lượng phần cứng: {this.state.arrHardWard.length}    </label>
                </CCol>

                <CCol sm="12" lg="12">
                  <CRow>
                    <CCol sm="12" lg="6">
                    </CCol>
                    <CCol sm="12" lg="6">
                      <Button outline color="primary" style={styles.floatRight} size="sm" onClick={async e => { await this.addOrder() }}>Save</Button>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </div>
          </CardBody>
        </Card>

        <Modal isOpen={this.state.modalCom} >
          <ModalHeader>Danh sách phần cứng</ModalHeader>

          <ModalBody>
            <div>
              <label style={styles.flexLabel} htmlFor="tag">Chọn phần cứng:    </label>
              <select style={styles.flexOption} onChange={e => { arrT.push(e.target.value) }}>
                {
                  dataHardWard.map((item, i) => {
                    return (
                      <option value={item._id}>{item.Name}</option>
                    );
                  })
                }
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={e => { this.setState({ arrHardWard: arrT }); }}>Save</Button>{' '}
            <Button color="secondary" onClick={e => this.toggleModal("new")}>Close</Button>
          </ModalFooter>
        </Modal>
      </div >

    )

  }
}

const styles = {
  pagination: {
    marginRight: '5px'
  },
  flexLabel: {
    width: '100%'
  },
  flexOption: {
    width: 160,
    margin: '1px'
  },
  a: {
    textDecoration: 'none'
  },
  floatRight: {
    float: 'right',
    margin: '5px'
  },
  spinner: {
    width: "30px"
  },
  center: {
    textAlign: "center"
  },
  tbody: {
    height: "380px",
    overflowY: "auto"
  },
  wh12: {
    width: "8%",
    float: "left",
    height: "80px"
  },
  wh15: {
    width: "15%",
    float: "left",
    height: "80px"
  },
  w5: {
    width: "12%",
    float: "left",
    height: "80px"
  },
  wa10: {
    width: "5%",
    float: "left",
    height: "80px"
  },
  row: {
    float: "left",
    width: "100%"
  },
  success: {
    color: 'green'
  },
  danger: {
    color: 'red'
  },
  mgl5: {
    marginLeft: '5px'
  },
  tags: {
    padding: 10,
  },
  searchInput: {
    width: "160px",
    display: 'inline-block',
    margin: '1px'
  },
  userActive: {
    color: 'green'
  },
  userPending: {
    color: 'red'
  },
  nagemonNameCol: {
    width: '328px'
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '99999px'
  },
  mgl5: {
    marginBottom: '5px'
  }
}

export default Order;
