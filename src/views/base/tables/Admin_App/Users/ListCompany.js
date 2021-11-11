import React, { Component } from 'react';
import CIcon from '@coreui/icons-react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Input,
  ModalHeader, ModalBody, ModalFooter, Modal,
} from 'reactstrap';

import {
  CButton,
  CRow, CCol
} from '@coreui/react'

import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../../../../contants/contants";
import ConstantApp from "../../../../../contants/contants_app";
import TextFieldGroup from "../../../../Common/TextFieldGroup";
import axios from 'axios'
import { css } from "@emotion/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DotLoader from "react-spinners/DotLoader";
import API_CONNECT from "../../../../../functions/callAPI_APP";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class ListCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      activePage: 1,
      page: 1,
      itemsCount: 0,
      limit: 20,
      totalActive: 0,
      modalCom: false,
      viewingUser: { },
      communities: [],
      updated: '',
      dataApi: [],
      hidden: false,
      action: 'new',
      products: [],
      Email: '',
      Phone: "",
      Name: '',
      UserName: '',
      Password: '',
      Status: "",
      id: '',
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      type: localStorage.getItem('type'),
      user: localStorage.getItem('user'),
      isLoading: false
    };
  }
  async componentDidMount() {
    this.getData()

    let arr = JSON.parse(localStorage.getItem('url'));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url == window.location.hash) {
        if (arr[i].isHidden == true) {
          window.location.href = '#/'
        }
      }
    }
  }

  pagination(dataApi) {
    var i, j, temparray, chunk = 5;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }

    if (arrTotal.length == 0) {
      this.setState({
        hidden: false
      })
    } else {
      this.setState({
        hidden: true
      })
    }

    this.setState({ arrPagination: arrTotal, data: arrTotal[0] });
  }

  getData = async () => {
    this.setState({ isLoading: true });

    const res_user = await API_CONNECT(
      ConstantApp.GET_LIST_COMPANY, { }, "", "GET")

    let val = res_user.data;

    this.pagination(val);
    this.setState({ dataApi: val, isLoading: false })
  }

  async toggleModal(key) {
    if (key == 'new') {
      this.setState({
        modalCom: !this.state.modalCom,
        action: key,
        Email: '',
        Name: '',
        Phone: '',
        Password: '',
        UserName: '',
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }


  async addUser() {
    const { Email, Name, Phone, UserName, Password } = this.state

    if (Email == null || Email == ''
      || Phone == null || Phone == ""
      || Name == null || Name == ''
      || UserName == null || UserName == ''
      || Password == null || Password == '') {
      alert("Vui lòng nhập đủ trường dữ liệu");
      return
    }

    const body = {
      Email: Email,
      Phone: Phone,
      Name: Name,
      UserName: UserName,
      Password: Password
    }

    this.setState({ isLoading: true });
    const res_add = await API_CONNECT(
      ConstantApp.ADD_COMPANY, body, "", "POST")

    if (res_add.status == 200) {

      this.getData()

      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert("Thêm màu thất bại");
      this.setState({ isLoading: false });
    }
  }

  async openUpdate(item) {
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      Email: item.Email,
      Name: item.Name,
      Phone: item.Phone,
      Status: item.Status,
      id: item['_id'],
    })
  }

  async updateUser() {
    const { Email, Name, Phone, Status } = this.state

    if (Email == null || Email == ''
      || Phone == null || Phone == ""
      || Name == null || Name == '') {
      alert("Vui lòng nhập đủ trường dữ liệu");
      return
    }

    const body = {
      Email: Email,
      Phone: Phone,
      Name: Name,
      Status: Status,
      id: this.state.id
    }

    this.setState({ isLoading: true });
    const res = await API_CONNECT(
      ConstantApp.UPDATE_COMPANY, body, "", "POST")

    if (res.status == 200) {

      this.getData()

      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert("Cập nhật thất bại");
      this.setState({ isLoading: false });
    }
  }

  openDelete = (item) => {
    this.setState({
      modalDelete: !this.state.modalDelete,
      id: item._id
    })
  }

  async delete() {
    this.setState({ isLoading: true });
    const res = await API_CONNECT(
      ConstantApp.DELETE_COMPANY, {
        "id": this.state.id
      }, "", "POST")

    if (res.status == 200) {
      this.getData()
      this.setState({ modalDelete: !this.state.modalDelete, delete: null })
    } else {
      alert("Xóa sản phẩm thất bại");
      this.setState({ isLoading: false });
    }

  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  searchKey() {
    const { indexPage, key } = this.state;
    // this.setState({ key: key })

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.Name.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.Phone.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {

          d.push(val)
        }
      })
      let active = 0

      d.map(val => {
        if (val.Status == "Actived") {
          active = active + 1
        }
      })

      this.setState({ data: d, totalActive: active })
    } else {
      let active = 0

      this.state.dataApi.map(val => {
        if (val.Status == "Actived") {
          active = active + 1
        }
      })

      this.setState({ data: this.state.arrPagination[indexPage], totalActive: active })
    }
  }

  actionSearch(e, name_action) {
    this.setState({
      [name_action]: e.target.value
    }, () => {
      this.searchKey();
    });
  }

  resetSearch() {
    this.setState({
      key: ''
    }, () => {
      this.searchKey();
    });
  }

  render() {
    const { data, arrPagination, key, Email, Phone, Name } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Danh sách công ty
                  <div style={styles.tags}>
                    <CRow>
                      <CCol sm="12" lg="12">
                        <CRow>
                          <CCol sm="12" lg="6">
                            <div>
                              <Input style={styles.searchInput} onChange={(e) => {
                                this.actionSearch(e, "key");
                              }} name="key" value={key} placeholder="Từ khóa" />
                            </div>
                          </CCol>
                          <CCol sm="12" lg="6">
                            <CButton color="primary" style={{ width: '100%', marginTop: 5 }} size="sm" onClick={e => { this.resetSearch() }}>Làm mới tìm kiếm</CButton>
                          </CCol>
                        </CRow>
                      </CCol>
                      <CCol sm="12" lg="12">
                        <CButton outline color="primary" style={styles.floatRight} size="sm" onClick={async e => await this.toggleModal("new")}>Thêm</CButton>
                      </CCol>
                    </CRow>

                  </div>
                </CardHeader>
                <CardBody>

                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Phone</th>
                        <th className="text-center">#</th>
                      </tr>
                    </thead>
                    <tbody>
                      <td colSpan="10" hidden={this.state.hidden} className="text-center">Không tìm thấy dữ liệu</td>
                      {
                        data != undefined ?
                          data.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td className="text-center">{item.Name}</td>
                                <td className="text-center">{item.Phone}</td>
                                <td className="text-center">{item.Email}</td>
                                <td className="text-center">
                                  <CButton style={styles.mgl5} outline color="primary" size="sm" onClick={async (e) => await this.openUpdate(item)} >
                                    <CIcon name="cilPencil" />
                                  </CButton>
                                  <CButton outline color="danger" size="sm" onClick={(e) => { this.openDelete(item) }}>
                                    <CIcon name="cilTrash" />
                                  </CButton>
                                </td>
                              </tr>
                            );
                          }) : ""
                      }
                    </tbody>
                  </table>
                </CardBody>
              </Card>
              <div style={{ float: 'right' }}>
                <Pagination count={arrPagination.length} color="primary" onChange={(e, v) => {
                  this.setState({ data: arrPagination[v - 1], indexPage: v - 1 })
                }} />
              </div>
            </Col>
          </Row>

          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>{this.state.action == 'new' ? `Tạo mới` : `Cập nhật`}</ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="Email"
                label="Email"
                value={Email}
                placeholder={"Email"}
                onChange={e => this.onChange("Email", e.target.value)}
              />
              <TextFieldGroup
                field="Phone"
                label="Số điện thoại"
                value={Phone}
                type="number"
                placeholder={"Số điện thoại"}
                onChange={e => this.onChange("Phone", e.target.value)}
              />
              <TextFieldGroup
                field="Name"
                label="Tên"
                value={Name}
                placeholder={"Tên"}
                onChange={e => this.onChange("Name", e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addUser() : this.updateUser() }} disabled={this.state.isLoading}>Lưu</CButton>{' '}
              <CButton color="secondary" onClick={e => this.toggleModal("new")}>Đóng</CButton>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalDelete} toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })} className={this.props.className}>
            <ModalHeader toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>{`Xoá`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Xác nhận xóa !!!`}</label>
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => this.delete()} disabled={this.state.isLoading}>Delete</CButton>{' '}
              <CButton color="secondary" onClick={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>Đóng</CButton>
            </ModalFooter>
          </Modal>
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
  pagination: {
    marginRight: '5px'
  },
  flexLabel: {
    width: 100
  },
  flexOption: {
    width: 300
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
  wh25: {
    width: "25%",
    float: "left",
    height: "80px"
  },
  w5: {
    width: "15%",
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
    margin: '5px'
  },
  tags: {
    float: "right",
    marginRight: "5px"
  },
  searchInput: {
    width: "190px",
    display: 'inline-block',
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

export default ListCompany;
