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
import Multiselect from 'multiselect-react-dropdown';
import {
  CBadge,
  CRow,
  CCol,
  CSelect,
  CInput
} from '@coreui/react'

import 'moment-timezone';
import Constants from "./../../../contants/contants";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
import axios from 'axios'
import md5 from "md5";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class Company extends Component {
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
      Name: '',
      Value: '',
      Unit: '',
      arrFeature: '',
      Status: '',
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      dataCompany: [],
      dataFeature: [],
      currentCompany: '',
      hidden: false,
      arrFeature_Save: []
    };
  }
  async componentDidMount() {
    this.getData();
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

  async getCompanyData() {
    this.getFeatureData()
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
      url: Constants.LIST_PACKAGE,
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
        if ((val.Name.toLocaleUpperCase().includes(key.toLocaleUpperCase())) &&
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
        Name: '',
        Value: '',
        Unit: '',
        Status: ''
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addCompany() {
    const { Name, Value, Unit, Status, arrFeature_Save } = this.state

    if (Name == null || Name == ''
      || Value == null || Value == ''
      || Unit == null || Unit == '') {
      alert("Please fill in all the requirements");
      return
    }

    const body = {
      Name: Name,
      Value: Value,
      Unit: Unit,
      Status: Status,
      Array_Feature: arrFeature_Save
    }
    console.log(arrFeature_Save)
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.ADD_PACKAGE,
      method: 'PUT',
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

  openUpdate(item) {

    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      Name: item.Name,
      Value: item.Value,
      Array_Feature: item.Array_Feature,
      Unit: item.Unit,
      id: item['_id'],
      Status: item.Status
    })
  }

  async updateCompany() {
    const { Name, Value, Unit, Status, arrFeature_Save } = this.state

    if (Name == null || Name == ''
      || Value == null || Value == ''
      || Unit == null || Unit == '') {
      alert("Please fill in all the requirements");
      return
    }
    const body = {
      Name: Name,
      Value: Value,
      Unit: Unit,
      Array_Feature: arrFeature_Save,
      Status: Status,
      id: this.state.id
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_PACKAGE,
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

  async getFeatureData() {
    const resFeature = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_FEATURE,
      method: 'POST',
    });

    this.setState({ dataFeature: resFeature.data.data });
  }

  renderSelect() {
    const { dataFeature } = this.state;
    var arrChoose = new Array();
    let arrTemp = [];
    for (let i = 0; i < dataFeature.length; i++) {
      arrTemp.push({ name: dataFeature[i].Key, id: dataFeature[i]._id })
    }

    return (
      <div style={{ marginTop: 5 }}>
        <label style={{ width: '100%' }} htmlFor="tag">Chọn tính năng cho gói    </label>
        <Multiselect
          options={arrTemp}
          // selectedValues={this.state.selectedValue}
          onSelect={async (e) => {
            arrChoose = new Array();
            for (let i = 0; i < e.length; i++) {
              arrChoose.push(e[i].id); this.setState({ arrFeature: arrChoose });
            }

            this.getFeatureChoose(arrChoose)
          }}
          onRemove={async (e) => {
            arrChoose = new Array();
            for (let i = 0; i < e.length; i++) {
              arrChoose.push(e[i].id); this.setState({ arrFeature: arrChoose });
            }

            this.getFeatureChoose(arrChoose)
          }}
          displayValue="name"
        />
      </div>
    )
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
      url: Constants.DELETE_PACKAGE,
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

  getBadge_isDelete(status) {
    switch (status) {
      case true: return 'danger'
      case false: return 'success'

      default: return 'primary'
    }
  }

  getBadge_isDelete_string(status) {
    switch (status) {
      case true: return 'Đã xóa'
      case false: return 'Còn hạn dùng'

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

  getFeatureChoose = async (feature) => {
    const resPackage = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.DATA_CHOOSE_FEATURE,
      method: 'POST',
      data: {
        feature: feature
      }
    });

    this.setState({ arrFeature_Save: resPackage.data.data })
  }

  resetSearch() {
    this.setState({
      key: '',
      keyDateCreate: new Date(),
      keyStatus: ''
    }, () => {
      this.searchKey();
    });
  }

  render() {
    const { data, key, viewingUser, communities, action, arrPagination,
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
                  <i className="fa fa-align-justify"></i> Danh sách gói sản phẩm (Page: {this.state.indexPage + 1})
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

                          <CCol sm="12" lg="4">
                            <CSelect style={styles.flexOption} onChange={e => {

                              this.actionSearch(e, "keyStatus");

                            }} custom>
                              {
                                ["0", "1"].map((item, i) => {
                                  return (
                                    <option value={item}>{item == 0 ? 'DISABLE' : 'ENABLE'}</option>
                                  );
                                })
                              }
                            </CSelect>
                          </CCol>
                          <CCol sm="12" lg="4">
                            <Button color="primary" style={{ width: '100%', marginTop: 5 }} size="sm" onClick={e => { this.resetSearch() }}>Làm mới tìm kiếm</Button>
                          </CCol>
                        </CRow>
                      </CCol>
                      <CCol sm="12" lg="12">
                        <Button outline color="primary" style={styles.floatRight} size="sm" onClick={e => this.toggleModal("new")}>Thêm mới</Button>
                      </CCol>
                    </CRow>
                  </div>
                </CardHeader>
                <CardBody>
                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên gói</th>
                        <th className="text-center">Giá trị</th>
                        <th className="text-center">Đơn vị</th>
                        <th className="text-center">Trạng thái</th>
                        <th className="text-center">Tình trạng</th>
                        <th className="text-center">#</th>

                      </tr>
                    </thead>
                    <tbody>
                      <td colSpan="7" hidden={this.state.hidden} className="text-center">Không tìm thấy dữ liệu</td>
                      {
                        data != undefined ?
                          data.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td className="text-center">{item.Name}</td>
                                <td className="text-center">{item.Value}</td>
                                <td className="text-center">{item.Unit == '0' ? 'Ngày' : item.Unit == '1' ? "Tháng" : "Năm"}</td>
                                <td className="text-center">
                                  <CBadge color={this.getBadge(item.Status)}>
                                    {this.getBadge_string(item.Status)}
                                  </CBadge>
                                </td>
                                <td className="text-center">
                                  <CBadge color={this.getBadge_isDelete(item.isDelete)}>
                                    {this.getBadge_isDelete_string(item.isDelete)}
                                  </CBadge>
                                </td>
                                <td className="text-center">
                                  <Button outline color="primary" size="sm" onClick={(e) => this.openUpdate(item)} >Update</Button>{' '}
                                  <Button outline color="danger" size="sm" onClick={(e) => { this.openDelete(item) }}>Delete</Button>
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
                              <Button style={styles.pagination} color={i == indexPage ? 'primary' : 'danger'} onClick={e => { this.setState({ data: arrPagination[i], indexPage: i }) }}>{i + 1}</Button>
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
                field="Name"
                label="Tên gói"
                value={this.state.Name}
                placeholder={"Nhập tên gói"}
                // error={errors.title}
                onChange={e => this.onChange("Name", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="Vualue"
                label="Giá trị"
                value={this.state.Value}
                placeholder={"Nhập giá trị"}
                // error={errors.title}
                onChange={e => this.onChange("Value", e.target.value)}
              // rows="5"
              />

              {/* <TextFieldGroup
                field="Unit"
                label="Đơn vị (Ngày, tháng, năm)"
                value={this.state.Unit}
                placeholder={"Đơn vị"}
                // error={errors.title}
                onChange={e => this.onChange("Unit", e.target.value)}
              // rows="5"
              /> */}
              <div style={{ marginTop: 5 }}>
                <label style={styles.flexLabel} htmlFor="tag">Đơn vị    </label>
                <CSelect style={styles.flexOption} onChange={e => this.onChange("Unit", e.target.value)} custom>
                  <option value={this.state.Unit}>{this.state.Unit == '' ? ` - - - - - - - - - - ` : this.state.Status}</option>
                  {
                    ['0', '1', '2'].map((item, i) => {
                      if (item == this.state.Unit) {
                        return (
                          <option selected value={item}>{item == '0' ? "Ngày" : item == '1' ? "Tháng" : "Năm"}</option>
                        );
                      } else {
                        return (
                          <option value={item}>{item == '0' ? "Ngày" : item == '1' ? "Tháng" : "Năm"}</option>
                        );
                      }
                    })
                  }
                </CSelect>
                {
                  action == 'new' ? "" : <div>
                    <label style={styles.flexLabel} htmlFor="tag">Status    </label>
                    <select style={styles.flexOption} name="Status" onChange={e => this.onChange("Status", e.target.value)}>
                      <option value={this.state.Status}>{this.state.Status == '' ? ` - - - - - - - - - - ` : this.state.Status}</option>
                      {
                        ["0", "1"].map((item, i) => {
                          if (item == this.state.Status) {
                            return (
                              <option selected value={item}>{item == 0 ? 'DISABLE' : 'ENABLE'}</option>
                            );
                          } else {
                            return (
                              <option value={item}>{item == 0 ? 'DISABLE' : 'ENABLE'}</option>
                            );
                          }

                        })
                      }
                    </select>
                  </div>

                }
              </div>
              {
                this.renderSelect()
              }
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={e => { this.state.action === 'new' ? this.addCompany() : this.updateCompany() }} disabled={this.state.isLoading}>Save</Button>{' '}
              <Button color="secondary" onClick={e => this.toggleModal("new")}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalDelete} toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })} className={this.props.className}>
            <ModalHeader toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>{`Delete`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Do you want to delete user "${this.state.delete ? this.state.delete.Email : ''}" ?`}</label>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={e => this.delete()} disabled={this.state.isLoading}>Delete</Button>{' '}
              <Button color="secondary" onClick={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>Cancel</Button>
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

export default Company;
