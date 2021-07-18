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
import CIcon from '@coreui/icons-react'
import {
  CBadge,
  CRow,
  CCol,
  CSelect,
  CInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CButton,
  CTooltip
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
class PluginCustomerManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      UserName: "",
      Password: "",
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
      Fax: '',
      Address: '',
      Website: '',
      Code: '',
      Slug: '',
      Status: '',
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      toggleView: false,
      company_name: '',
      current_package: '',
      arrTotalPackage: [],
      arrDetailPackage: [],
      phone_number: '',
      current_slug: '',
      type: localStorage.getItem('type'),
      province: [],
      current_province: '',
    };
  }
  async componentDidMount() {
    this.getData();
    this.getProvince();
    // this.getCompanyData();
    let arr = JSON.parse(localStorage.getItem('url'));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to == window.location.hash) {
        if (arr[i].hidden == true) {
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
    this.setState({ arrPagination: arrTotal, data: arrTotal[this.state.indexPage] });
  }

  getData = async () => {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_LIST_COMPANY,
      method: 'POST',
    });
    let val = res.data.data;

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

  async onView(name, com_id, phone_number, slug) {
    let data = await this.getPackageData(com_id)
    try {
      this.setState({
        toggleView: !this.state.toggleView, company_name: name, current_package: data.length == 0 ? '' : data[0].Name,
        arrDetailPackage: data.length == 0 ? [] : data[0].Array_Feature, phone_number: phone_number, current_slug: slug
      })
    } catch (error) {
      throw error;
    }
  }

  searchKey() {
    const { indexPage, key, keyEmail, keyCompany, keyPhone, keyFax, keyAddress,
      keyWebsite, keyCode, keyDateCreate, keyStatus } = this.state;
    // this.setState({ key: key })

    if (key != '' || keyStatus != '') {
      let d = []
      this.state.dataApi.map(val => {
        if ((val.Email.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.Name.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.Phone.toLocaleUpperCase().includes(key.toLocaleUpperCase())) &&
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
        Email: '',
        Phone: '',
        Fax: '',
        Address: '',
        Website: '',
        Slug: '',
        Code: '',
        Status: '',
        username: '',
        password: ''
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addCompany() {
    const { Email, Name, Phone, Fax, Address, Website, Code, UserName, Password, Slug, current_province } = this.state

    if (Email == null || Email == ''
      || Name == null || Name == ''
      || Phone == null || Phone == ''
      || Address == null || Address == ''
      || Slug == null || Slug == ''
      || UserName == null || UserName == ''
      || Password == null || Password == '') {
      alert("Please fill in all the requirements");
      return
    }

    const body = {
      Name: Name,
      Email: Email,
      Phone: Phone,
      Fax: Fax,
      Address: Address + "," + current_province,
      Slug: Slug,
      Website: Website,
      Code: Code,
      UserName: UserName,
      Password: Password
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_ADD_COMPANY,
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
      Email: item.Email,
      Phone: item.Phone,
      Fax: item.Fax,
      Address: item.Address,
      Slug: item.Slug,
      Website: item.Website,
      Code: item._id,
      id: item['_id'],
      Status: item.Status,
      current_province: item.Address.split(',')[item.Address.split(',').length-1]
    })
  }

  async updateCompany() {
    const { Email, Name, Phone, Fax, Address, Website, Slug, Status, current_province } = this.state

    if (Email == null || Email == ''
      || Name == null || Name == ''
      || Phone == null || Phone == ''
      || Slug == null || Slug == ''
      || Address == null || Address == '') {
      alert("Please fill in all the requirements");
      return
    }
    let add = Address.split(',');
    add.splice(Address.split(',').length - 1, 1)

    const body = {
      Name: Name,
      Email: Email,
      Phone: Phone,
      Fax: Fax,
      Address: add + "," + current_province,
      Website: Website,
      Slug: Slug,
      Code: this.state.id,
      Status: Status,
      id: this.state.id
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_UPDATE_COMPANY,
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
      url: Constants.PLUGIN_DELETE_COMPANY,
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

  async getPackageData(company_id) {
    let arrTemp = []
    const resPackage = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_PLUGIN_ORDER_BY_ID,
      method: 'POST',
      data: {
        company_id: company_id
      }
    });
    let val = resPackage.data.data.result;
    for (let i = 0; i < val.length; i++) {
      let data = await this.getPackageName(val[i].Package_Id);
      data.Active_Date = val[i].Active_Date;
      data.End_Date = val[i].End_Date;
      data.Status_Order = val[i].Status
      arrTemp.push(data)
    }

    this.setState({ arrTotalPackage: arrTemp })

    return arrTemp;
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

  getBadge(status) {
    switch (status) {
      case 'Actived': return 'success'
      case 'Inactive': return 'secondary'
      case 'Locked': return 'warning'
      case 'Deactived': return 'danger'
      default: return 'primary'
    }
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

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
      keyEmail: '',
      keyPhone: '',
      keyFax: '',
      keyAddress: '',
      keyWebsite: '',
      keyCode: '',
      keyCompany: '',
      keyDateCreate: new Date(),
      keyStatus: ''
    }, () => {
      this.searchKey();
    });
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

  renderDetailPackage() {
    return (
      <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th className="text-center">STT.</th>
            <th className="text-center">Tên dịch vụ</th>
            <th className="text-center">Đường dẫn</th>
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
                  </tr>
                );
              }) : ""
          }
        </tbody>
      </table>
    )
  }

  calDateLeft(end, active) {
    return this.CalculatorDateLeft(new Date(end), new Date(active))
  }

  async getProvince() {
    const res = await axios({
      baseURL: 'https://vapi.vnappmob.com',
      url: '/api/province',
      method: 'GET',
    });

    this.setState({ province: res.data.results })
  }
  render() {
    const { data, key, viewingUser, communities, action, arrPagination, type, current_province,
      indexPage, arrTotalPackage, company_name, current_package, phone_number, province } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <p style={styles.success}>{this.state.updated}</p>
              <p style={styles.danger}>{this.state.deleted}</p>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Danh sách công ty (Page: {this.state.indexPage + 1})
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
                                ['Actived', 'Deactived', 'Locked'].map((item, i) => {
                                  return (
                                    <option value={item}>{item}</option>
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
                        <th className="text-center">Tên Công Ty</th>
                        <th className="text-center">Email - SĐT</th>
                        <th className="text-center">Địa chỉ</th>
                        <th className="text-center">Ngày tạo</th>
                        <th className="text-center">Trạng thái</th>
                        <th className="text-center">#</th>

                      </tr>
                    </thead>
                    <tbody>
                      {
                        data != undefined ?
                          data.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td className="text-center">{item.Name}</td>
                                <td className="text-center">
                                  <div>{item.Email}</div>
                                  <div>------------</div>
                                  <div>{item.Phone}</div>
                                </td>
                                <td className="text-center">{item.Address}</td>
                                <td className="text-center">
                                  {(new Date(item.Create_Date)).toLocaleDateString()}
                                </td>
                                <td className="text-center">
                                  <CBadge color={this.getBadge(item.Status)}>
                                    {item.Status}
                                  </CBadge>
                                </td>
                                <td className="text-center">

                                        <CButton outline color="primary" size="sm" onClick={(e) => this.openUpdate(item)} >
                                          <CIcon name="cilPencil" />
                                        </CButton>{' '}
                                        {
                                          type == "0" ?
                                            <CButton outline color="danger" size="sm" onClick={(e) => { this.openDelete(item) }}>
                                              <CIcon name="cilTrash" />
                                            </CButton> : ""
                                        }
                                        {' '}
                                        <CTooltip content="Xem chi tiết đơn hàng">
                                          <CButton outline color="info" size="sm" onClick={async (e) => { await this.onView(item.Name, item._id, item.Phone, item.Slug) }}>
                                            <CIcon name="cil-magnifying-glass" />
                                          </CButton>
                                        </CTooltip>
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
                    <th className="text-center">Số lượng tính năng</th>
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
                            <th className="text-center">{item.Array_Feature.length}</th>
                            <th className="text-center">{`${item.Value} ${this.convertUnitToDate(item.Unit)}`}</th>
                            <th className="text-center">
                              {item.Status_Order == "1" ? new Date(item.Active_Date).toLocaleDateString() : "-----"}
                            </th>
                            <th className="text-center">
                              {item.Status_Order == "1" ? new Date(item.End_Date).toLocaleDateString() : "-----"}
                            </th>
                            {
                              item.Status_Order == "1" ? <th className="text-center" style={
                                this.calDateLeft(item.End_Date, item.Active_Date) > 30 ? { color: 'green' } :
                                  this.calDateLeft(item.End_Date, item.Active_Date) < 15 ? { color: 'yellow' } : { color: 'red' }
                              }>
                                {
                                  this.calDateLeft(item.End_Date, item.Active_Date)
                                } ngày nữa
                              </th> : <th className="text-center">-----</th>
                            }
                            <th className="text-center" >
                              <CBadge color={this.getBadgeStatus(item.Status_Order)}>
                                {this.getStatus(item.Status_Order)}
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

          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>{this.state.action == 'new' ? `Create` : `Update`}</ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="Email"
                label="Email"
                value={this.state.Email}
                type={"email"}
                placeholder={"Emal"}
                // error={errors.title}
                onChange={e => this.onChange("Email", e.target.value)}
              // rows="5"
              />
              <TextFieldGroup
                field="Name"
                label="Tên công ty"
                value={this.state.Name}
                placeholder={"Tên công ty"}
                // error={errors.title}
                onChange={e => this.onChange("Name", e.target.value)}
              // rows="5"
              />

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
                field="Password"
                label="Mật khẩu"
                type={"password"}
                value={this.state.Password}
                placeholder={"Mật khẩu"}
                // error={errors.title}
                onChange={e => this.onChange("Password", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="Phone"
                label="Số điện thoại"
                value={this.state.Phone}
                placeholder={"Số điện thoại"}
                onChange={e => this.onChange("Phone", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="Fax"
                label="Fax"
                value={this.state.Fax}
                placeholder={"Fax"}
                // error={errors.title}
                onChange={e => this.onChange("Fax", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="Address"
                label="Địa chỉ"
                value={this.state.Address}
                placeholder={"Địa chỉ"}
                // error={errors.title}
                onChange={e => this.onChange("Address", e.target.value)}
              // rows="5"
              />

              <label style={styles.flexLabel} htmlFor="tag">Tỉnh  </label>
              <CSelect onChange={async e => { this.setState({ current_province: e.target.value }) }} custom size="sm" name="selectSm" id="SelectLm">
                {
                  province.map((item, i) => {
                    if(item.province_name == current_province){
                      return (
                        <option selected value={item.province_name}>{item.province_name}</option>
                      );
                    } else {
                      return (
                        <option value={item.province_name}>{item.province_name}</option>
                      );
                    }
                  })
                }
              </CSelect>

              <TextFieldGroup
                field="Slug"
                label="Slug"
                value={this.state.Slug}
                placeholder={"Slug"}
                // error={errors.title}
                onChange={e => this.onChange("Slug", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="Website"
                label="Website"
                value={this.state.Website}
                placeholder={"Website"}
                // error={errors.title}
                onChange={e => this.onChange("Website", e.target.value)}
              // rows="5"
              />
              {
                action == 'new' ? "" : <div>
                  <label style={styles.flexLabel} htmlFor="tag">Status    </label>
                  <select style={styles.flexOption} name="Status" onChange={e => this.onChange("Status", e.target.value)}>
                    <option value={this.state.Status}>{this.state.Status == '' ? ` - - - - - - - - - - ` : this.state.Status}</option>
                    <option value={'Actived'}>Actived</option>
                    <option value={'Locked'}>Locked</option>
                    <option value={'Deactived'}>Deactived</option>
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
