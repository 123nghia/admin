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
  CBadge,
  CRow,
  CCol,
  CSelect,
  CInput,
  CButton
} from '@coreui/react'

import 'moment-timezone';
import Constants from "./../../../../contants/contants";
import TextFieldGroup from "../../../../views/Common/TextFieldGroup";
import axios from 'axios'
import md5 from "md5";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class PluginCustomerManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
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
      Key: '',
      Value: '',
      Type: '',
      Image: '',
      Status: '',
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      dataCompany: [],
      currentCompany: '',
      hidden: false,
      type: localStorage.getItem('type')
    };
  }
  async componentDidMount() {
    this.getData();
    // this.getCompanyData();
    let arr = JSON.parse(localStorage.getItem('url'));
    console.log(arr)
    // for (let i = 0; i < arr.length; i++) {
    //   if ("#" + arr[i].to == window.location.hash) {
    //     if (arr[i].hidden == true) {
    //       window.location.href = '#/'
    //     }
    //   }
    // }
  }

  async getCompanyData() {
    const resCompany = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_COMPANY,
      method: 'POST'
    });
    this.setState({ dataCompany: resCompany.data.data });
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
      url: Constants.LIST_FEATURE,
      method: 'POST',
    });
    this.pagination(res.data.data);
    this.setState({ dataApi: res.data.data });

    let active = 0

    res.data.data.map(val => {
      if (val.Status == "Actived") {
        active = active + 1
      }
    })

    this.setState({ isLoading: false, totalActive: active });
  }

  searchKey() {
    const { indexPage, key, keyEmail, keyCompany, keyPhone, keyFax, keyAddress,
      keyWebsite, keyCode, keyDateCreate, keyStatus } = this.state;
    // this.setState({ key: key })

    if (key != '' || keyStatus != '') {
      let d = []
      this.state.dataApi.map(val => {
        if ((val.Key.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.Value.toLocaleUpperCase().includes(key.toLocaleUpperCase())) &&
          val.Status.toLocaleUpperCase().includes(keyStatus.toLocaleUpperCase())) {

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

  toggleModal(key) {
    if (key == 'new') {
      this.setState({
        modalCom: !this.state.modalCom,
        action: key,
        Key: '',
        Value: '',
        Type: '',
        Image: ''
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addCompany() {
    const { Key, Value, Type, Status, Image } = this.state

    if (Key == null || Key == ''
      || Value == null || Value == ''
      || Type == null || Type == '') {
      alert("Please fill in all the requirements");
      return
    }

    const body = {
      Key: Key,
      Value: Value,
      Type: Type,
      Image: Image
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.ADD_FEATURE,
      method: 'PUT',
      data: body
    });
    console.log(res.data.data)
    if (res.data.is_success == true) {
      this.getData();
      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }
  }

  openUpdate(item) {
    console.log(item.Image)
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      Key: item.Key,
      Value: item.Value,
      Type: item.Type,
      Image: item.Image,
      id: item['_id'],
      Status: item.Status
    })
  }

  async updateCompany() {
    const { Key, Value, Type, Status, Image } = this.state

    if (Key == null || Key == ''
      || Value == null || Value == ''
      || Type == null || Type == '') {
      alert("Please fill in all the requirements");
      return
    }

    const body = {
      Key: Key,
      Value: Value,
      Type: Type,
      Image: Image,
      Status: Status,
      id: this.state.id
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_FEATURE,
      method: 'POST',
      data: body
    });

    if (res.data.is_success == true) {
      this.getData();
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
      url: Constants.DELETE_FEATURE,
      method: 'DELETE',
      data: {
        "id": this.state.delete['_id']
      }
    });

    if (res.data.is_success == true) {
      this.getData();
      this.setState({ modalDelete: !this.state.modalDelete, delete: null })
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }

  }

  getUsers(page = 1) {
    const limit = this.state.limit;
    const key = this.state.key || '';
    const fetchData = {
      method: 'GET',
      headers: headers
    };
    fetch(global.BASE_URL + '/admin/users?key=' + key + '&page=' + page + '&limit=' + limit, fetchData).then(users => {
      users.json().then(result => {
        this.setState({
          data: result.data,
          itemsCount: result.total,
          activePage: page,
          totalActive: result.totalActive,
          updated: '',
        });
      })
    }).catch(console.log);
  }
  async handlePageChange(pageNumber) {
    this.getUsers(pageNumber);
  }

  getBadge(status) {
    switch (status) {
      case "0": return 'danger'
      case "1": return 'success'

      default: return 'primary'
    }
  }

  getBadge_string(status) {
    switch (status) {
      case "0": return 'Đã vô hiệu'
      case "1": return 'Đang kích hoạt'

      default: return 'primary'
    }
  }

  toggle(action = '') {
    this.setState({
      modal: !this.state.modal,
      image: '',
      url: '',
      isActive: false,
      isLoading: false,
      errors: {},
      action,
      position: 1,
      data: [],
      updated: '',
    });
  }
  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  goSearch() {
    this.getUsers();
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
      key: '',
      keyStatus: ''
    }, () => {
      this.searchKey();
    });
  }

  getBadge_type(status) {
    switch (status) {
      case "0": return 'primary'
      case "1": return 'success'

      default: return 'primary'
    }
  }

  getBadge_type_string(status) {
    switch (status) {
      case "0": return 'ADMIN'
      case "1": return 'FRONTEND'

      default: return 'primary'
    }
  }

  render() {
    const { data, key, viewingUser, communities, action, arrPagination, type,
      indexPage, dataCompany, keyAddress, keyCode, keyCompany, keyEmail, keyFax, keyPhone, keyWebsite,
      keyDateCreate, keyStatus } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <p style={styles.success}>{this.state.updated}</p>
              <p style={styles.danger}>{this.state.deleted}</p>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Danh sách tính năng (Page: {this.state.indexPage + 1})
                  <div style={styles.tags}>
                    <CRow>
                      <CCol sm="12" lg="12">
                        <CRow>
                          <CCol sm="12" lg="4">
                            <div>
                              <Input style={styles.searchInput} onChange={(e) => {
                                this.actionSearch(e, "key");
                              }} name="key" value={key} placeholder="Từ khóa" />
                            </div>
                          </CCol>
                          {/* <CCol sm="6" lg="2">
                            <CInput type="date" onChange={e => {
                              this.actionSearch(e, "keyDateCreate");
                            }} value={keyDateCreate} placeholder="Create Date" />
                          </CCol> */}
                          <CCol sm="12" lg="4">
                            <CSelect style={styles.flexOption} onChange={e => {

                              this.actionSearch(e, "keyStatus");

                            }} custom>
                              {
                                [0, 1].map((item, i) => {
                                  return (
                                    <option value={item}>{item == '0' ? 'Đã vô hiệu' : 'Đang kích hoạt'}</option>
                                  );
                                })
                              }
                            </CSelect>
                          </CCol>
                          <CCol sm="12" lg="4">
                            <CButton color="primary" style={{ width: '100%', marginTop: 5 }} size="sm" onClick={e => { this.resetSearch() }}>Làm mới tìm kiếm</CButton>
                          </CCol>
                        </CRow>
                      </CCol>
                      <CCol sm="12" lg="12">
                        <CButton outline color="primary" style={styles.floatRight} size="sm" onClick={e => this.toggleModal("new")}>Thêm mới</CButton>
                      </CCol>
                    </CRow>
                  </div>
                </CardHeader>
                <CardBody>
                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Khóa</th>
                        <th className="text-center">Giá trị</th>
                        <th className="text-center">Logo</th>
                        <th className="text-center">Loại</th>
                        <th className="text-center">Trạng thái</th>
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
                                <td className="text-center">{item.Key}</td>
                                <td className="text-center">{item.Value}</td>
                                <td className="text-center">
                                  <img width="80" height="80" src={item.Image} />
                                </td>
                                <td className="text-center">
                                  <CBadge color={this.getBadge_type(item.Type)}>
                                    {this.getBadge_type_string(item.Type)}
                                  </CBadge>
                                </td>
                                <td className="text-center">
                                  <CBadge color={this.getBadge(item.Status)}>
                                    {this.getBadge_string(item.Status)}
                                  </CBadge>
                                </td>
                                <td className="text-center">
                                  <CButton outline color="primary" size="sm" onClick={(e) => this.openUpdate(item)} >
                                    <CIcon name="cilPencil" />
                                  </CButton>{' '}
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
              {
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
              }

            </Col>
          </Row>

          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>{this.state.action == 'new' ? `Create` : `Update`}</ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="Key"
                label="Khóa"
                value={this.state.Key}
                placeholder={"Nhập tên khóa"}
                // error={errors.title}
                onChange={e => this.onChange("Key", e.target.value)}
              // rows="5"
              />
              <TextFieldGroup
                field="Value"
                label="Giá trị"
                value={this.state.Value}
                placeholder={"Nhập giá trị của khóa"}
                // error={errors.title}
                onChange={e => this.onChange("Value", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="Image"
                label="Logo"
                value={this.state.Image}
                placeholder={"Nhập link image"}
                // error={errors.title}
                onChange={e => this.onChange("Image", e.target.value)}
              // rows="5"
              />

              <div>
                <label style={styles.flexLabel} htmlFor="tag">Loại    </label>
                <select style={styles.flexOption} name="Type" onChange={e => this.onChange("Type", e.target.value)}>
                  <option value={this.state.Type}>{this.state.Type == '' ? ` - - - - - - - - - - ` : this.state.Type}</option>
                  {
                    ["0", "1"].map((item, i) => {
                      if (item == this.state.Type) {
                        return (
                          <option selected value={item}>{item == "0" ? 'ADMIN' : 'FRONTEND'}</option>
                        );
                      } else {
                        return (
                          <option value={item}>{item == "0" ? 'ADMIN' : 'FRONTEND'}</option>
                        );
                      }

                    })
                  }
                </select>
              </div>
              {
                action == 'new' ? "" : <div>
                  <label style={styles.flexLabel} htmlFor="tag">Status    </label>
                  <select style={styles.flexOption} name="Status" onChange={e => this.onChange("Status", e.target.value)}>
                    <option value={this.state.Status}>{this.state.Status == '' ? ` - - - - - - - - - - ` : this.state.Status}</option>
                    {
                      ["0", "1"].map((item, i) => {
                        if (item == this.state.Status) {
                          return (
                            <option selected value={item}>{item == 0 ? 'Đã vô hiệu' : 'Đang kích hoạt'}</option>
                          );
                        } else {
                          return (
                            <option value={item}>{item == 0 ? 'Đã vô hiệu' : 'Đang kích hoạt'}</option>
                          );
                        }

                      })
                    }
                  </select>
                </div>
              }

            </ModalBody>

            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addCompany() : this.updateCompany() }} disabled={this.state.isLoading}>Save</CButton>{' '}
              <CButton color="secondary" onClick={e => this.toggleModal("new")}>Cancel</CButton>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalDelete} toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })} className={this.props.className}>
            <ModalHeader toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>{`Delete`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Do you want to delete user "${this.state.delete ? this.state.delete.Email : ''}" ?`}</label>
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => this.delete()} disabled={this.state.isLoading}>Delete</CButton>{' '}
              <CButton color="secondary" onClick={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>Cancel</CButton>
            </ModalFooter>
          </Modal>
        </div >
      );
    }
    return (
      <div id="page-loading">
        <div className="three-balls">
          <div className="ball ball1"></div>
          <div className="ball ball2"></div>
          <div className="ball ball3"></div>
        </div>
      </div>
    );
  }
}

const styles = {
  pagination: {
    marginRight: '5px'
  },
  flexLabel: {
    width: 100
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
    float: "right",
    marginRight: "5px"
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

export default PluginCustomerManager;