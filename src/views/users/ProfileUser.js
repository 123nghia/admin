import React, { Component } from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button, Input
} from 'reactstrap';

import {
  CBadge,
  CLabel,
  CRow,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CButton,
  CTooltip
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import 'moment-timezone';
import "react-datepicker/dist/react-datepicker.css";
import Constants from "./../../contants/contants";
import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
      type: localStorage.getItem('type'),
      company_id: localStorage.getItem('user'),
      link_shop: true,
      data_link_shop: '',
      link_recommand: true,
      data_link_recommand: '',
      link_sku: true,
      data_link_sku: '',
      toggleView: false,
      company_name: '',
      arrDetailPackage: [],
      phone_number: '',
      current_slug: '',
      arrTotalPackage: [],
      isChange: true,
      currentPassword: '',
      isLoading: false
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
      url: Constants.PLUGIN_DATA_COMPANY,
      method: 'POST',
      data: {
        company_id: company_id
      }
    });
    this.setState({ current_slug: resCom.data.data == null ? "" : resCom.data.data.Slug })
    return resCom.data.data == null ? "" : resCom.data.data.Name;
  }


  getBadge(status) {
    switch (status) {
      case 'Actived': return 'success'
      case 'Deactived': return 'danger'
      default: return 'primary'
    }
  }

  getData = async () => {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_GET_USER_BYID,
      method: 'POST',
      headers: this.state.token
    });
    let val = res.data.data
    val.com_name = await this.getCompanyName(val.Company_Id)

    this.setState({ dataApi: res.data.data, data: val, currentPassword: val.Password, isLoading: false });
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

  async getPackageData(company_id) {
    let arrTemp = []
    const resPackage = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_PLUGIN_ORDER_BY_ID,
      method: 'POST',
      headers: this.state.token
    });
    let val = resPackage.data.data.result;

    for (let i = 0; i < val.length; i++) {
      let data = await this.getPackageName(val[i].Package_Id);
      val[i].Name = data.Name
      val[i].Unit = data.Unit
      val[i].Value = data.Value
      arrTemp.push(val[i])
    }

    this.setState({ arrTotalPackage: arrTemp })
    return arrTemp;
  }

  async onView(name, com_id, phone_number) {
    let data = await this.getPackageData(com_id)
    this.setState({
      toggleView: !this.state.toggleView, company_name: name,
      arrDetailPackage: data.length == 0 ? [] : data[0].Array_Feature, phone_number: phone_number
    })
  }

  renderDetailPackage() {
    return (
      <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th className="text-center">STT.</th>
            <th className="text-center">Tên dịch vụ</th>
            <th className="text-center">Đường dẫn</th>
            <th className="text-center">#</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.arrDetailPackage.length == 0 ?
              <td colSpan="10" hidden={false} className="text-center">Không tìm thấy dữ liệu</td> :
              <td colSpan="10" hidden={true} className="text-center">Không tìm thấy dữ liệu</td>

          }

          {
            this.state.arrDetailPackage != undefined || this.state.arrDetailPackage.length != 0 || this.state.arrDetailPackage != null ?
              this.state.arrDetailPackage.map((item, i) => {
                return (
                  <tr key={i}>
                    <td className="text-center">{i + 1}</td>
                    <td className="text-center">{item.Key}</td>
                    <td className="text-center">{item.Value + this.state.current_slug}</td>
                    <td className="text-center">
                      <CTooltip content="Copy">
                        <CopyToClipboard text={item.Value + this.state.current_slug}
                          onCopy={() => { }}>
                          <CIcon name="cil-pencil" />
                        </CopyToClipboard>
                      </CTooltip>
                    </td>
                  </tr>
                );
              }) : ""
          }
        </tbody>
      </table>
    )
  }

  convertUnitToDate(unit) {
    switch (unit) {
      case '0': return 'Ngày'
      case '1': return 'Tháng'
      case '2': return 'Năm'
    }
  }

  CalculatorDateLeft(dateStart, dateEnd) {
    return Math.ceil(Math.abs(new Date(dateEnd) - new Date(dateStart)) / (1000 * 60 * 60 * 24))
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  calDateLeft(end, active) {
    return this.CalculatorDateLeft(new Date(end), new Date(active))
  }

  getBadgeStatus(status) {
    switch (status) {
      case "0": return 'danger'
      case "1": return 'success'
      default: return 'primary'
    }
  }

  getStatus(status) {
    switch (status) {
      case "0": return 'Chờ duyệt'
      case "1": return 'Đã duyệt'
      default: return 'primary'
    }
  }

  async updatePassword(id, password) {
    console.log(id)
    console.log(password)
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

  render() {
    const { data, role, type, arrTotalPackage, company_name, current_package, phone_number, isChange, currentPassword } = this.state;

    if (!this.state.isLoading) {
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
                    <CCol sm="12" lg="12">
                      <CRow>
                        <CCol sm="12" lg="6">
                          <CLabel><strong>Quản lý tài khoản</strong></CLabel>
                        </CCol>
                        {
                          type == '0' || type == '1' ? "" :
                            <CCol sm="12" lg="6">
                              <CTooltip content="Xem chi tiết đơn hàng">
                                <CButton outline color="info" size="sm" onClick={async (e) => {
                                  await this.onView(data.Name, data.Company_Id, data.Phone)
                                }}>
                                  <CIcon name="cil-magnifying-glass" /> Chi tiết các đơn hàng đã mua
                                </CButton>
                              </CTooltip>
                            </CCol>
                        }
                      </CRow>
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
                            <Input style={styles.searchInput} value={data.com_name} />
                          </div>
                        </CCol>


                        <CCol sm="12" lg="12">
                          <div>
                            <CLabel>Quyền hạn</CLabel>
                            <Input style={styles.searchInput} value={role} />
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
                              <Input type={"password"} style={styles.searchInput} readOnly={isChange} onChange={(e) => { this.setState({ currentPassword: e.target.value }) }} value={currentPassword} />
                            </CCol>
                            <CCol sm="3" lg="3">
                              {
                                isChange ?
                                  <Button color="primary" onClick={e => {
                                    this.setState({ isChange: false })
                                  }}>Thay đổi</Button> :
                                  <Button color="primary" onClick={async e => {
                                    await this.updatePassword(data._id, currentPassword);
                                  }}>Cập nhật</Button>
                              }

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

          <CModal
            show={this.state.toggleView}
            onClose={() => { this.setState({ toggleView: !this.state.toggleView }) }}
            size="xl"
          >
            <CModalHeader closeButton>
              <CModalTitle>Danh sách đơn hàng của {company_name}</CModalTitle>
              <CModalTitle style={{ marginLeft: 50 }}>Số điện thoại: {phone_number}</CModalTitle>
            </CModalHeader>

            <CModalBody>
              <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">STT.</th>
                    <th className="text-center">Tên Gói</th>
                    <th className="text-center">Danh sách tính năng</th>
                    <th className="text-center">Gói</th>
                    <th className="text-center">Ngày kích hoạt</th>
                    <th className="text-center">Ngày hết hạn</th>
                    <th className="text-center">Thời gian hết hạn</th>
                    <th className="text-center">Trạng thái</th>
                    <th className="text-center">#</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    arrTotalPackage == 0 ?
                      <td colSpan="10" hidden={false} className="text-center">Không tìm thấy dữ liệu</td> :
                      <td colSpan="10" hidden={true} className="text-center">Không tìm thấy dữ liệu</td>

                  }
                  {
                    arrTotalPackage != undefined ?
                      arrTotalPackage.map((item, i) => {
                        return (
                          <tr key={i}>
                            <th className="text-center">{i + 1}</th>
                            <th className="text-center">{item.Name}</th>
                            <th className="text-center">
                              {item.Array_Feature.map((item, i) => {
                                if (i < 2) {
                                  return (
                                    <div><a href={item.Value} target="_blank" key={i}>{item.Value}</a></div>
                                  )
                                }
                              })}
                              {
                                (item.Array_Feature.length - 2) <= 0 ? "" : item.Array_Feature.length - 2 + " mores..."
                              }
                            </th>
                            <th className="text-center">{`${item.Value} ${this.convertUnitToDate(item.Unit)}`}</th>
                            <th className="text-center">
                              {item.Status == "1" ? new Date(item.Active_Date).toLocaleDateString() : "-----"}
                            </th>
                            <th className="text-center">
                              {item.Status == "1" ? new Date(item.End_Date).toLocaleDateString() : "-----"}
                            </th>
                            {
                              item.Status == "1" ? <th className="text-center" style={
                                this.calDateLeft(item.End_Date, item.Active_Date) > 30 ? { color: 'green' } :
                                  this.calDateLeft(item.End_Date, item.Active_Date) < 15 ? { color: 'yellow' } : { color: 'red' }
                              }>
                                {
                                  this.calDateLeft(item.End_Date, item.Active_Date)
                                } ngày nữa
                              </th> : <th className="text-center">-----</th>
                            }
                            <th className="text-center" >
                              <CBadge color={this.getBadgeStatus(item.Status)}>
                                {this.getStatus(item.Status)}
                              </CBadge>
                            </th>

                            <td className="text-center">
                              <CButton outline color="info" size="sm"
                                onClick={async (e) => {
                                  this.setState({
                                    arrDetailPackage: item.Array_Feature, current_package: item.Name
                                  })
                                }}>
                                <CIcon name="cil-magnifying-glass" />
                              </CButton>
                            </td>
                          </tr>
                        )
                      }) : ""
                  }
                </tbody>
              </table>
              <br />
              <CModalHeader>
                <CModalTitle>Chi tiết tính năng ({current_package})</CModalTitle>
              </CModalHeader>
              {
                this.renderDetailPackage()
              }
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => { this.setState({ toggleView: !this.state.toggleView }) }}>Đóng</CButton>
            </CModalFooter>
          </CModal>

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
