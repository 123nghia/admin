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
import Constants from "../../../../contants/contants_app";
import API_CONNECT from "../../../../functions/callAPI_APP";
import axios from 'axios'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      website: "",
      vnp_TmnCode: "",
      vnp_HashSecret: "",
      vnp_Url: "",
      api_Url: "",
      isLoading: false,
      isDisable: true
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
    var res = await API_CONNECT(
      Constants.GET_CONFIG_VNPAY, {}, "", "POST")

    let val = res.data;

    console.log(val)
    this.setState({
      isDisable: true,
      isLoading: false,
      website: val.website,
      vnp_TmnCode: val.vnp_TmnCode,
      vnp_HashSecret: val.vnp_HashSecret,
      vnp_Url: val.vnp_Url,
      api_Url: val.api_Url,
    });
  }

  onChange(key, val) {
    this.setState({ [key]: val.target.value })
  }

  async update() {
    const { website, vnp_TmnCode, vnp_HashSecret, vnp_Url, api_Url } = this.state

    const res = await API_CONNECT(
        Constants.CHANGE_CONFIG_VNPAY, {
        website: website,
        vnp_TmnCode: vnp_TmnCode,
        vnp_HashSecret: vnp_HashSecret,
        vnp_Url: vnp_Url,
        api_Url: api_Url,
    }, "", "POST")

    if (res.is_success == true) {
      this.getData();
    } else {
      alert(res.message);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isDisable, website, vnp_TmnCode, vnp_HashSecret, vnp_Url, api_Url } = this.state;

    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  THÔNG TIN CẤU HÌNH VN PAY
                </CardHeader>
                <CardBody>
                  <CRow>
                    <CCol sm="12" lg="12">
                      <CRow>
                        <CCol sm="12" lg="10">
                          <CLabel><strong>Quản lý tài khoản</strong></CLabel>
                        </CCol>
                        {
                          isDisable ?
                            <CButton outline color="info" size="xm" onClick={async (e) => {
                              this.setState({ isDisable: !isDisable })
                            }}>
                              <CIcon name="cil-pencil" /> Cập nhật
                            </CButton> :
                            <CButton outline color="info" size="sm" onClick={async (e) => {
                              this.update()
                            }}>
                              <CIcon name="cil-pencil" /> Xác nhận cập nhật
                            </CButton>
                        }
                      </CRow>
                      <CRow>
                        <CCol sm="12" lg="12">
                          <div>
                            <CLabel>Link website</CLabel>
                            <Input style={styles.searchInput} onChange={(e) => { this.onChange('website', e) }} value={website} readOnly={isDisable} />
                          </div>

                          <div>
                            <CLabel>Mã website</CLabel>
                            <Input style={styles.searchInput} onChange={(e) => { this.onChange('vnp_TmnCode', e) }} value={vnp_TmnCode} readOnly={isDisable} />
                          </div>

                          <div>
                            <CLabel>Khoá bí mật</CLabel>
                            <Input style={styles.searchInput} onChange={(e) => { this.onChange('vnp_HashSecret', e) }} value={vnp_HashSecret} readOnly={isDisable} />
                          </div>

                          <div>
                            <CLabel>Đường dẫn thanh toán</CLabel>
                            <Input style={styles.searchInput} onChange={(e) => { this.onChange('vnp_Url', e) }} value={vnp_Url} readOnly={isDisable} />
                          </div>

                          <div>
                            <CLabel>Đường dẫn Refund</CLabel>
                            <Input style={styles.searchInput} onChange={(e) => { this.onChange('api_Url', e) }} value={api_Url} readOnly={isDisable} />
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

export default Users;
