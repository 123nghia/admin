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

import {
  CBadge,
  CRow,
  CCol,
  CSelect,
  CInput,
  CLabel
} from '@coreui/react'

import 'moment-timezone';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Constants from "./../../contants/contants";
import TextFieldGroup from "../../views/Common/TextFieldGroup";
import axios from 'axios'
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
      modalDelete: false,
      delete: null,
      dataCompany: [],
      currentCompany: '',
      dataTypeKey: [],
      currentTypeKey: '',
      dataHardWare: [],
      currentHardWare: '',
      arrPagination: [],
      indexPage: 0,
      hidden: true,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      role: localStorage.getItem('role'),
      company_id: localStorage.getItem('user'),
      Name: '',
      Email: '',
      Phone: '',
      Gender: '',
      Address: '',
      Company_Id: '',
      Role_Id: '',
      UserName: '',
      Password: '',
      Status: '',
      link_shop: true,
      data_link_shop: '',
      link_recommand: true,
      data_link_recommand: '',
      link_sku: true,
      data_link_sku: ''
    };
  }
  async componentDidMount() {
    this.getData();

    let arr = JSON.parse(localStorage.getItem('url'));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to == window.location.hash) {
        if (arr[i].hidden == true) {
          window.location.href = '#/'
        }
      }
    }
  }

  getCompanyName = async (company_id) => {
    const resCom = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.DATA_COMPANY,
      method: 'POST',
      data: {
        company_id: company_id
      }
    });

    return resCom.data.data.Name;
  }


  getBadge(status) {
    switch (status) {
      case 'Actived': return 'success'
      case 'Deactived': return 'danger'
      default: return 'primary'
    }
  }

  getData = async () => {
    const { data_link_shop, data_link_recommand, data_link_sku } = this.state;
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_GET_USER_BYID,
      method: 'POST',
      headers: this.state.token
    });
    console.log(res)
    this.setState({ dataApi: res.data.data, data: res.data.data });
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  openUpdate(name_link) {
    this.setState({
      [name_link]: !this.state[name_link]
    });
  }

  async updateLink() {
    const { data_link_shop, data_link_recommand, data_link_sku  } = this.state;
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_LINK,
      method: 'POST',
      data: {
        link_shop: data_link_shop,
        link_recommand: data_link_recommand,
        link_sku_hair: data_link_sku,
      },
      headers: this.state.token
    });
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { data, link_shop, link_recommand, link_sku } = this.state;


    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <p style={styles.success}>{this.state.updated}</p>
            <p style={styles.danger}>{this.state.deleted}</p>
            <Card>
              <CardHeader>
                THÔNG TIN TÀI KHOẢN
              </CardHeader>
              <CardBody>
                <CRow>
                  <CCol sm="12" lg="6">
                    <CLabel><strong>Quản lý tài khoản</strong></CLabel>
                    <CRow>
                      <CCol sm="12" lg="12">
                        <div>
                          <CLabel>Tên</CLabel>
                          <Input style={styles.searchInput} value={data.Name} />
                        </div>
                      </CCol>

                      <CCol sm="12" lg="12">
                        <CLabel>Email</CLabel>
                        <Input style={styles.searchInput} value={data.Email} />
                      </CCol>

                      <CCol sm="12" lg="12">
                        <CLabel>Số điện thoại</CLabel>
                        <Input style={styles.searchInput} value={data.Phone} />
                      </CCol>

                      <CCol sm="12" lg="12">
                        <div>
                          <CLabel>Giới tính</CLabel>
                          <Input style={styles.searchInput} value={data.Gender} />
                        </div>
                      </CCol>


                      <CCol sm="12" lg="12">
                        <div>
                          <CLabel>Địa chỉ</CLabel>
                          <Input style={styles.searchInput} value={data.Address} />
                        </div>
                      </CCol>


                      <CCol sm="12" lg="12">
                        <div>
                          <CLabel>Tên công ty</CLabel>
                          <Input style={styles.searchInput} value={async () => { await this.getCompanyName(data.Company_Id) }} />
                        </div>
                      </CCol>


                      <CCol sm="12" lg="12">
                        <div>
                          <CLabel>Quyền hạn</CLabel>
                          <Input style={styles.searchInput} value={data.Role_Id} />
                        </div>
                      </CCol>


                      <CCol sm="12" lg="12">
                        <div>
                          <CLabel>Tên đăng nhập</CLabel>
                          <Input style={styles.searchInput} value={data.UserName} />
                        </div>
                      </CCol>

                      <CCol sm="12" lg="12">
                        <CLabel>Mật khẩu</CLabel>
                        <CRow>
                          <CCol sm="9" lg="9">
                            <Input type={"password"} style={styles.searchInput} readOnly onChange={(e) => { }} value={data.Password} />
                          </CCol>
                          <CCol sm="3" lg="3">
                            <Button color="primary" onClick={e => { }}>Thay đổi</Button>
                          </CCol>
                        </CRow>
                      </CCol>


                      <CCol sm="12" lg="12">
                        <div>
                          <CLabel>Trạng thái</CLabel>
                          <Input style={styles.searchInput} onChange={(e) => { }} value={data.Status} />
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );

  }
}

const styles = {
  datePicker: {
    marginBottom: 20
  },
  wa10: {
    width: "5%",
    float: "left",
    height: "80px"
  },
  pagination: {
    marginRight: '5px'
  },
  flexLabel: {
    width: 100
  },
  flexOption: {
    width: 200,
    margin: '1px'
  },
  a: {
    textDecoration: 'none'
  },
  floatRight: {
    float: "right",
    marginTop: '3px'
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
    width: "10%",
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
    float: "right",
    marginRight: "5px"
  },
  searchInput: {
    width: '100%',
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
    marginBottom: '0px'
  }
}

export default Users;
