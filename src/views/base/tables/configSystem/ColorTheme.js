import React, { Component } from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button, Input,
} from 'reactstrap';

import {
  CLabel,
  CRow,
  CCol,
  CButton,
  CTooltip,
  CTextarea,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import 'moment-timezone';
import "react-datepicker/dist/react-datepicker.css";
import Constants from "./../../../../contants/contants";
import axios from 'axios'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class ColorTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      updated: '',
      dataApi: [],
      delete: null,
      hidden: true,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      role: localStorage.getItem('role'),
      type: localStorage.getItem('type'),
      company_id: localStorage.getItem('user'),
      current_slug: '',
      companyID: '',
      arrTotalPackage: [],
      isChange: true,
      isChangeSlug: true,
      currentPassword: '',
      isLoading: false,
      isDisable: true,
      Email: "",
      sub2_mainColor: "",
      button_color: "",
      sucess_color: "",
      error_color:"",
      text_mainColor: "",

      Name: "",
      Phone: "",
      Address: "",
      UserName: "",
      Message_Code: "",
      sub_mainColor: ""
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

  getData = async () => {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.CONFIG_THEME_GET+"/"+"61ce79c4d19f5244aa161b36",
      method: 'GET',
      headers: this.state.token
    });
    let val = res.data.data
   ;


    this.setState({
      dataApi: val, data: val, currentPassword: val.Password,
      isLoading: false,
      current_slug: val.Company_Id == null || val.Company_Id == undefined ? null : val.Company_Id.Slug,
      companyID: val.Company_Id == null || val.Company_Id == undefined ? null : val.Company_Id._id,

      mainColor: val.mainColor,
      sub_mainColor: val.sub_mainColor,
      Phone: val.Phone,
      Address: val.Address,
      UserName: val.UserName,
      Message_Code: val.Message_Code,
      sub2_mainColor: val.sub2_mainColor,
      button_color: val.button_color,
      sucess_color: val.sucess_color,
      error_color:val.error_color,
      text_mainColor: val.text_mainColor,
      isDisable: true
    });
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  openUpdate(name_link) {
    this.setState({
      [name_link]: !this.state[name_link]
    });
  }

  getPackageName = async (package_id) => {
    const resPackage = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_DATA_PACKAGE,
      method: 'POST',
      data: {
        package_id: package_id
      }
    });
    return resPackage.data.data;
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async updatePassword(id, password) {
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_UPDATE_PASSWORD,
      method: 'POST',
      data: {
        id: id,
        new_password: password
      }
    });

    if (res.data.is_success == true) {
      this.getData();
      this.setState({ isChange: true });
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }
  }

  async updateSlug() {
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_SLUG,
      method: 'POST',
      data: {
        id: this.state.companyID,
        Slug: this.state.current_slug,
      }
    });

    if (res.data.is_success == true) {
      this.getData();
      this.setState({ isChangeSlug: true });
    } else {
      alert(res.data.message);
      this.setState({ isChangeSlug: false });
    }
  }

  async updateCompany() {
    const {
            mainColor, sub_mainColor, button_color,
            sucess_color,error_color,
            text_mainColor,Phone,
            sub2_mainColor,  Address, UserName, data, Message_Code
          
          } = this.state
  
    if (mainColor == null || mainColor == '') {
      alert("Vui lòng nhập đầy đủ trường !!!");
      return
    }

    const body = {
      isHash: false,
      sub_mainColor: sub_mainColor,
      mainColor:  mainColor,
      sub2_mainColor: sub2_mainColor,
      company_id: "61ce79c4d19f5244aa161b36",
      button_color: button_color,
      sucess_color: sucess_color,
      error_color: error_color,
      text_mainColor: text_mainColor
    }
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.CONFIG_THEME_UPDATE,
      method: 'POST',
      data: body
    });

    if (res.data.is_success == true) {
      this.getData();
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { data, current_slug, isChange,error_color, sucess_color,button_color , sub2_mainColor, currentPassword, isChangeSlug, type, isDisable,
      sub_mainColor, mainColor, Phone, Address, UserName, Message_Code,text_mainColor } = this.state;

    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <p style={styles.success}>{this.state.updated}</p>
              <p style={styles.danger}>{this.state.deleted}</p>
              <Card>
                <CardHeader>THÔNG TIN MÀU</CardHeader>
                <CardBody className="table__overflow">
                  <CRow>
                    <CCol sm="12" lg="12">
                      <CRow>
                        <CCol sm="12" lg="10">
                          <CLabel>
                            <strong>Thay đổi màu</strong>
                          </CLabel>
                        </CCol>
                        {type == "0" || type == "1" ? (
                          ""
                        ) : (
                          <CCol sm="12" lg="2">
                            <CTooltip content="Xem chi tiết đơn hàng">
                              {isDisable ? (
                                <CButton
                                  outline
                                  color="info"
                                  size="xm"
                                  onClick={async (e) => {
                                    this.setState({ isDisable: !isDisable });
                                  }}
                                >
                                  <CIcon name="cil-pencil" /> Cập nhật
                                </CButton>
                              ) : (
                                <CButton
                                  outline
                                  color="info"
                                  size="sm"
                                  onClick={async (e) => {
                                    this.updateCompany();
                                  }}
                                >
                                  <CIcon name="cil-pencil" /> Xác nhận cập nhật
                                </CButton>
                              )}
                            </CTooltip>
                          </CCol>
                        )}
                      </CRow>
                      <CRow>
                        <CCol sm="12" lg="12">
                          <div>
                            <CLabel>Màu chủ đạo</CLabel>
                            <Input
                              style={styles.searchInput}
                              onChange={(e) => {
                                this.setState({ mainColor: e.target.value });
                              }}
                              value={mainColor}
                              readOnly={isDisable}
                            />
                          </div>
                        </CCol>

                        <CCol sm="12" lg="12">
                          <CLabel>Màu chủ đạo 1</CLabel>
                          <Input
                            style={styles.searchInput}
                            value={sub_mainColor}
                            onChange={(e) => {
                              this.setState({ sub_mainColor: e.target.value });
                            }}
                            readOnly={isDisable}
                          />
                        </CCol>
                        <CCol sm="12" lg="12">
                          <CLabel>Màu chủ đạo 2</CLabel>
                          <Input
                            style={styles.searchInput}
                            value={sub2_mainColor}
                            onChange={(e) => {
                              this.setState({ sub2_mainColor: e.target.value });
                            }}
                            readOnly={isDisable}
                          />
                        </CCol>
                        <CCol sm="12" lg="12">
                          <div>
                            <CLabel>Màu chữ</CLabel>
                            <Input
                              style={styles.searchInput}
                              value={text_mainColor}
                              onChange={(e) => {
                                this.setState({
                                  text_mainColor: e.target.value,
                                });
                              }}
                              readOnly={isDisable}
                            />
                          </div>
                        </CCol>

                        <CCol sm="12" lg="12">
                          <CLabel>Màu button </CLabel>
                          <Input
                            style={styles.searchInput}
                            value={button_color}
                            onChange={(e) => {
                              this.setState({ button_color: e.target.value });
                            }}
                            readOnly={isDisable}
                          />
                        </CCol>

                        <CCol sm="12" lg="12">
                          <div>
                            <CLabel>Màu báo thành công</CLabel>
                            <Input
                              style={styles.searchInput}
                              value={sucess_color}
                              onChange={(e) => {
                                this.setState({ sucess_color: e.target.value });
                              }}
                              readOnly={isDisable}
                            />
                          </div>
                        </CCol>

                        <CCol sm="12" lg="12">
                          <div>
                            <CLabel>Màu báo lỗi</CLabel>
                            <Input
                              style={styles.searchInput}
                              value={error_color}
                              onChange={(e) => {
                                this.setState({ error_color: e.target.value });
                              }}
                              readOnly={isDisable}
                            />
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
}

export default ColorTheme;
