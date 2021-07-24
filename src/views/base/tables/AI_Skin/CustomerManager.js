import React, { Component } from 'react';
import CIcon from '@coreui/icons-react'
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
  CLabel,
  CSelect,
  CContainer,
  CRow,
  CCol,
  CCardGroup,
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CBadge,
  CButton
} from '@coreui/react'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../../../contants/contants";
import TextFieldGroup from "../../../Common/TextFieldGroup";
import axios from 'axios'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));
class CustomerManager extends Component {
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
      viewingUser: {},
      communities: [],
      updated: '',
      dataApi: [],
      hidden: false,
      action: 'new',
      UserName: '',
      FullName: '',
      Phone: '',
      Company_Id: '',
      Address: '',
      Email: '',
      Type: "0",
      Status: '',
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      company_id: localStorage.getItem('user'),
      isLoading: false,
      arrTypeRequest: [],
      type: localStorage.getItem('type')
    };
  }
  async componentDidMount() {
    if (this.state.type == '0' || this.state.type == '1') {
      this.getData();
    } else {
      this.getDataForCompany();
    }

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

    this.setState({ arrPagination: arrTotal, data: arrTotal[this.state.indexPage] });
  }

  getData = async () => {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_CUSTOMER,
      method: 'POST'
    });
    let val = res.data.data.result;
    let valCount = res.data.data.Count;
    let valName = res.data.data.arrName;
    if (res.data.is_success) {
      for (let i = 0; i < val.length; i++) {
        val[i].Count = valCount[i]
        val[i].CompanyName = valName[i]
      }

      this.pagination(val);
      this.setState({ dataApi: val });

      let active = 0

      val.map(val => {
        if (val.Status == "Actived") {
          active = active + 1
        }
      })

      this.setState({ isLoading: false, totalActive: active });
    }
  }

  getDataForCompany = async () => {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_CUSTOMER_FOR_COMPANY,
      method: 'POST',
      data: {
        Company_Id: JSON.parse(this.state.company_id).company_id
      }
    });

    let val = res.data.data.result;
    let valCount = res.data.data.Count;
    let valName = res.data.data.arrName;

    if (res.data.is_success) {
      for (let i = 0; i < val.length; i++) {
        val[i].Count = valCount[i]
        val[i].CompanyName = valName[i]
      }

      this.pagination(val);
      this.setState({ dataApi: val });

      let active = 0

      val.map(val => {
        if (val.Status == "Actived") {
          active = active + 1
        }
      })

      this.setState({ isLoading: false, totalActive: active });
    }
  }

  searchKey(key) {
    this.setState({ key: key })

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if ((val.UserName.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.FullName.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.Phone.toLocaleUpperCase().includes(key.toLocaleUpperCase()))) {
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

      this.setState({ data: this.state.dataApi, totalActive: active })
    }
  }

  async toggleModal(key) {
    if (key == 'new') {
      this.setState({
        modalCom: !this.state.modalCom,
        action: key,
        UserName: '',
        FullName: '',
        Phone: '',
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addRoles() {
    const { UserName, Phone, Type, FullName } = this.state

    if (UserName == null || UserName == '' ||
      Phone == null || Phone == '' || FullName == '') {
      alert("Please fill in all the requirements");
      return
    }

    const body = {
      UserName: UserName,
      FullName: FullName,
      Phone: Phone,
      Company_Id: this.state.type == '0' || this.state.type == '1' ? null : JSON.parse(this.state.company_id).company_id,
      Type: Type
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.CUS_RES_ADD,
      method: 'PUT',
      data: body
    });

    if (res.data.is_success == true) {
      if (this.state.type == '0' || this.state.type == '1') {
        this.getData();
      } else {
        this.getDataForCompany();
      }
      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }
  }

  async openUpdate(item) {
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      UserName: item.UserName,
      FullName: item.FullName,
      Phone: item.Phone,
      Type: item.Type,
      id: item['_id'],
      Status: item.Status
    })
  }

  async updateUser() {
    const { UserName, Phone, Type, FullName, Status } = this.state
    if (UserName == null || UserName == '' ||
      Phone == null || Phone == '' || FullName == null || FullName == '') {
      alert("Please fill in all the requirements");
      return

    }

    const body = {
      UserName: UserName,
      FullName: FullName,
      Phone: Phone,
      Type: Type,
      id: this.state.id,
      Status: Status
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.CUS_RES_UPDATE,
      method: 'POST',
      data: body
    });

    if (res.data.is_success == true) {
      if (this.state.type == '0' || this.state.type == '1') {
        this.getData();
      } else {
        this.getDataForCompany();
      }
      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }
  }

  openDelete = (item) => {
    this.setState({
      modalDelete: !this.state.modalDelete,
      delete: item
    })
  }

  async delete() {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.CUS_RES_DELETE,
      method: 'DELETE',
      data: {
        "id": this.state.delete['_id']
      }
    });

    if (res.data.is_success == true) {
      if (this.state.type == '0' || this.state.type == '1') {
        this.getData();
      } else {
        this.getDataForCompany();
      }
      this.setState({ modalDelete: !this.state.modalDelete, delete: null })
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }

  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  getBadge(status) {
    switch (status) {
      case '0': return 'danger'
      case '1': return 'success'
      default: return 'primary'
    }
  }

  getBadge_String(status) {
    switch (status) {
      case '0': return 'Chưa nhận quà'
      case '1': return 'Đã nhận quà'
      default: return 'primary'
    }
  }

  render() {
    const { data, action, arrPagination, indexPage, arrTypeRequest, type, key } = this.state;
    const { classes } = this.props;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <p style={styles.success}>{this.state.updated}</p>
              <p style={styles.danger}>{this.state.deleted}</p>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Thống kê lượt khách hàng(Page: {this.state.indexPage + 1}))
                  <div style={styles.tags}>
                    <Input style={styles.searchInput} onChange={(e) => this.searchKey(e.target.value)} name="key" value={key} placeholder="Tìm kiếm" />
                  </div>
                </CardHeader>
                <CardBody>

                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Tên đầy đủ</th>
                        <th className="text-center">Số điện thoại</th>
                        <th className="text-center">Công ty</th>
                        <th className="text-center">Ngày tạo</th>
                        <th className="text-center">Số lần đến</th>
                        {/* <th className="text-center">Trạng thái</th> */}
                        {/* <th className="text-center">#</th> */}
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
                                <td className="text-center">{item.UserName}</td>
                                <td className="text-center">{item.FullName}</td>
                                <td className="text-center">{item.Phone}</td>
                                <td className="text-center">{item.CompanyName}</td>
                                <td className="text-center">
                                  {(new Date(item.Create_Date)).toLocaleDateString() + ' ' + (new Date(item.Create_Date)).toLocaleTimeString()}
                                </td>
                                <td className="text-center">{item.Count}</td>
                                {/* <td className="text-center">
                                  <CButton style={styles.mgl5} outline color="primary" size="sm" onClick={async (e) => await this.openUpdate(item)} >
                                    <CIcon name="cilPencil" />
                                  </CButton>{' '}
                                  <CButton outline color="danger" size="sm" onClick={(e) => { this.openDelete(item) }}>
                                    <CIcon name="cilTrash" />
                                  </CButton>
                                </td> */}
                              </tr>
                            );
                          }) : ""
                      }
                    </tbody>
                  </table>
                </CardBody>
              </Card>
              <div style={{ float: 'right' }}>
                <Pagination count={arrPagination} color="primary" onChange={(e, v) => {
                  this.setState({ data: arrPagination[v - 1], indexPage: v - 1 })
                }} />
              </div>
              {/* {
                arrPagination.length == 1 ? "" :
                  <div style={{ float: 'right', marginRight: '10px', padding: '10px' }}>
                    <tr style={styles.row}>
                      {
                        arrPagination.map((item, i) => {
                          return (
                            <td>
                              <CButton style={styles.pagination} color={i == indexPage ? 'primary' : 'danger'} onClick={e => { this.setState({ data: arrPagination[i], indexPage: i }) }}>{i + 1}</CButton>
                            </td>
                          );
                        })
                      }
                    </tr>
                  </div>
              } */}
            </Col>
          </Row>

          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>{this.state.action == 'new' ? `Create` : `Update`}</ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="UserName"
                label="Tên đăng nhập"
                value={this.state.UserName}
                placeholder={"Tên đăng nhập"}
                // error={errors.title}
                onChange={e => this.onChange("UserName", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="FullName"
                label="Tên đầy đủ"
                value={this.state.FullName}
                placeholder={"Tên đầy đủ"}
                // error={errors.title}
                onChange={e => this.onChange("FullName", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="Phone"
                label="Số điện thoại"
                value={this.state.Phone}
                placeholder={"Số điện thoại"}
                // error={errors.title}
                onChange={e => this.onChange("Phone", e.target.value)}
              // rows="5"
              />

              {/* <TextFieldGroup
              field="Type"
              label="Loại"
              value={this.state.Type}
              placeholder={"Loại"}
              // error={errors.title}
              onChange={e => this.onChange("Type", e.target.value)}
            // rows="5"
            /> */}

              <label htmlFor="tag">Chọn loại khuyến mãi </label>
              <CSelect onChange={async e => {
                this.setState({ Type: e.target.value });
              }}>
                {
                  arrTypeRequest.map((item, i) => {
                    if (item.Value == this.state.Type) {
                      return (
                        <option selected value={item.Value}>{item.Value}</option>
                      );
                    } else {
                      return (
                        <option value={item.Value}>{item.Value}</option>
                      );
                    }
                  })
                }
              </CSelect>

              {
                action == 'new' ? "" : <div>
                  <label style={styles.flexLabel} htmlFor="tag">Status:</label>
                  <select style={styles.flexOption} name="Status" onChange={e => this.onChange("Status", e.target.value)}>
                    <option value={this.state.Status}>{this.state.Status == '' ? ` - - - - - - - - - - ` : this.state.Status}</option>
                    <option value={'0'}>Chưa nhận quà</option>
                    <option value={'1'}>Đã nhận quà</option>
                  </select>
                </div>
              }
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addRoles() : this.updateUser() }} disabled={this.state.isLoading}>Save</CButton>{' '}
              <CButton color="secondary" onClick={e => this.toggleModal("new")}>Cancel</CButton>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalDelete} toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })} className={this.props.className}>
            <ModalHeader toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>{`Delete`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Xác nhận xóa !!!`}</label>
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => this.delete()} disabled={this.state.isLoading}>Delete</CButton>{' '}
              <CButton color="secondary" onClick={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>Cancel</CButton>
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
    marginLeft: '5px'
  },
  tags: {
    float: "right",
    marginRight: "5px",
    width: "250px"
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
  mgl5: {
    marginBottom: '0px'
  }
}

export default CustomerManager;
