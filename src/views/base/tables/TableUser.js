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
import 'moment-timezone';
import Constants from "./../../../contants/contants";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
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
      action: 'new',
      Email: '',
      Name: '',
      Phone: '',
      Gender: 'Nam',
      Company_Id: '',
      Role_Id: '',
      UserName: '',
      Password: '',
      Sale_Id: '',
      Code: '',
      Status: '',
      modalDelete: false,
      delete: null,
      dataCompany: [],
      currentCompany: '',
      dataSale: [],
      currentSale: '',
      dataRole: [],
      currentRole: '',
      arrPagination: [],
      indexPage: 0,
      role: localStorage.getItem('role'),
      company_id: localStorage.getItem('user')
    };
  }
  async componentDidMount() {
    this.getData()
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
    const { company_id, role } = this.state;
    this.setState({ isLoading: true });
    var id = JSON.parse(company_id);
    console.log(id)
    var bodyUser = {
      condition: {
        Company_Id: id.company_id
      }
    }

    var bodyCustomer = {
      condition: {
        Company_Id: id.company_id,
        Sale_Id: id.sale_id
      }
    }
    if (role == 'ADMIN') {
      var res = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_USER,
        method: 'POST'
      });

    } else if (role == 'SHOPMANAGER') {
      var res = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_USER,
        method: 'POST',
        data: bodyUser
      });

    } else if (role == 'SALES') {
      var res = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_CUSTOMER,
        method: 'POST',
        data: bodyCustomer
      })
    }

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

  searchKey(key) {
    const { indexPage } = this.state;
    this.setState({ key: key })

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.Name.toLocaleUpperCase().includes(key.toLocaleUpperCase()) || val.Email.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {
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

  async toggleModal(key) {
    await this.getCompanyData()
    await this.getSaleData()
    await this.getRoleData()
    if (key == 'new') {
      this.setState({
        modalCom: !this.state.modalCom,
        action: key,
        Email: '',
        Name: '',
        Phone: '',
        Gender: 'Nam',
        Company_Id: '',
        Role_Id: '',
        UserName: '',
        Password: '',
        Sale_Id: '',
        Code: ''
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addUser() {
    const { Email, Name, Phone, UserName, Code, Password, Gender, Role_Id, Company_Id, Sale_Id } = this.state

    if (Email == null || Email == ''
      || Name == null || Name == ''
      || Phone == null || Phone == ''
      || UserName == null || UserName == ''
      || Role_Id == null || Role_Id == ''
      || Password == null || Password == '') {
      alert("Please fill in all the requirements");
      return
    }

    const body = {
      Email: Email,
      Name: Name,
      Phone: Phone,
      Gender: Gender,
      Company_Id: Company_Id,
      Role_Id: Role_Id,
      UserName: UserName,
      Password: Password,
      Sale_Id: Sale_Id,
      Code: Code
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.ADD_USER,
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

  async openUpdate(item) {
    await this.getCompanyData(item.Company_Id)
    await this.getSaleData(item.Sale_Id)
    await this.getRoleData(item.Role_Id)

    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      Email: item.Email,
      Name: item.Name,
      Phone: item.Phone,
      Gender: item.Gender,
      Company_Id: item.Company_Id,
      Role_Id: item.Role_Id,
      UserName: item.UserName,
      Password: item.Password,
      Sale_Id: item.Sale_Id,
      Code: item.Code,
      id: item['_id'],
      Status: item.Status
    })
  }

  async updateUser() {
    const { Email, Name, Phone, UserName, Code, Password, Gender, Role_Id,
      Company_Id, Sale_Id, Status } = this.state

    if (Email == null || Email == ''
      || Name == null || Name == ''
      || Phone == null || Phone == ''
      || UserName == null || UserName == ''
      || Password == null || Password == '') {
      alert("Please fill in all the requirements");
      return
    }

    const body = {
      Email: Email,
      Name: Name,
      Phone: Phone,
      Gender: Gender,
      Company_Id: Company_Id,
      Role_Id: Role_Id,
      UserName: UserName,
      Password: Password,
      Sale_Id: Sale_Id,
      Code: Code,
      id: this.state.id,
      Status: Status
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_USER,
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
      url: Constants.DELETE_USER,
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

  async getCompanyData(id) {
    const resCompany = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_COMPANY,
      method: 'GET',
    });

    if (id != '' || id != undefined) {
      const currentC = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_COMPANY_WITH_ID + id,
        method: 'GET',
      });
      if (currentC.data.data != null || currentC.data.data != undefined) {
        this.setState({ currentCompany: currentC.data.data.Name });
      }
    }
    this.setState({ dataCompany: resCompany.data.data });
  }

  async getSaleData(id) {
    const resSale = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_SALE,
      method: 'GET',
    });

    if (id != '' || id != undefined) {
      const currentSale = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_SALE_WITH_ID + id,
        method: 'GET',
      });
      if (currentSale.data.data != null || currentSale.data.data != undefined) {
        this.setState({ currentSale: currentSale.data.data.Name });
      }
    }
    this.setState({ dataSale: resSale.data.data });
  }

  async getRoleData(id) {
    const resRole = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_ROLE,
      method: 'GET',
    });

    if (id != '' || id != undefined) {
      const currentRole = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_ROLE_WITH_ID + id,
        method: 'GET',
      });
      if (currentRole.data.data != null || currentRole.data.data != undefined) {
        this.setState({ currentRole: currentRole.data.data.Name });
      }
    }
    this.setState({ dataRole: resRole.data.data });
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { data, key, viewingUser, communities, dataCompany, role,
      currentCompany, dataSale, currentSale, action, dataRole, currentRole, arrPagination, indexPage } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <p style={styles.success}>{this.state.updated}</p>
              <p style={styles.danger}>{this.state.deleted}</p>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> USERS (Total: {this.state.data != undefined || this.state.data != null ?
                    this.state.data.length : 0}, Active: {this.state.totalActive}, Page: {this.state.indexPage + 1})
                  <div style={styles.tags}>
                    {
                      role == 'SALES' ? "" :
                        <div>
                          <Input style={styles.searchInput} onChange={(e) => this.searchKey(e.target.value)} name="key" value={key} placeholder="Search" />
                          <Button outline color="primary" style={styles.floatRight} size="sm" onClick={async e => await this.toggleModal("new")}>Add</Button>
                        </div>
                    }
                  </div>
                </CardHeader>
                <CardBody>
                  {
                    role == 'SALES' ? <Table responsive>
                                        <thead>
                                          <tr>
                                            <th style={styles.wa10}>No.</th>
                                            <th style={styles.wh12}>Name</th>
                                            <th style={styles.wh12}>Email</th>
                                            <th style={styles.wh15}>Phone</th>
                                            <th style={styles.wh12}>Gender</th>
                                            <th style={styles.wh12}>Company Id</th>
                                            <th style={styles.wh12}>Sale Id</th>
                                            <th style={styles.wh12}>Date</th>
                                            <th style={styles.w5}>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {
                                            data != undefined ?
                                              data.map((item, i) => {
                                                return (
                                                  <tr key={i} style={styles.row}>
                                                    <td style={styles.wa10}>{i + 1}</td>
                                                    <td style={styles.wh12}>{item.Name}</td>
                                                    <td style={styles.wh12}>{item.Email}</td>
                                                    <td style={styles.wh15}>{item.Phone}</td>
                                                    <td style={styles.wh12}>{item.Gender}</td>
                                                    <td style={styles.wh12}>{item.Company_Id}</td>
                                                    <td style={styles.wh12}>{item.Sale_Id}</td>
                                                    <td style={styles.wh12}>
                                                      {(new Date(item.Create_Date)).toLocaleDateString() + ' ' + (new Date(item.Create_Date)).toLocaleTimeString()}
                                                    </td>
                                                    <td style={styles.w5}>
                                                      <Button style={styles.mgl5} outline color="primary" size="sm" onClick={async (e) => await this.openUpdate(item)} >Update</Button>{' '}
                                                      <Button outline color="danger" size="sm" onClick={(e) => { this.openDelete(item) }}>Delete</Button>
                                                    </td>
                                                  </tr>
                                                );
                                              }) : ""
                                          }
                                        </tbody>
                                      </Table> :
                                      <Table responsive>
                                        <thead>
                                          <tr>
                                            <th style={styles.wa10}>No.</th>
                                            <th style={styles.wh12}>Username</th>
                                            <th style={styles.wh12}>Name</th>
                                            <th style={styles.wh15}>Email</th>
                                            <th style={styles.wh12}>Phone</th>
                                            <th style={styles.wh12}>Gender</th>
                                            <th style={styles.wh12}>Status</th>
                                            <th style={styles.wh12}>Code</th>
                                            <th style={styles.w5}>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {
                                            data != undefined ?
                                              data.map((item, i) => {
                                                return (
                                                  <tr key={i} style={styles.row}>
                                                    <td style={styles.wa10}>{i + 1}</td>
                                                    <td style={styles.wh12}>{item.UserName}</td>
                                                    <td style={styles.wh12}>{item.Name}</td>
                                                    <td style={styles.wh15}>{item.Email}</td>
                                                    <td style={styles.wh12}>{item.Phone}</td>
                                                    <td style={styles.wh12}>{item.Gender}</td>
                                                    <td style={styles.wh12}>{item.Status}</td>
                                                    <td style={styles.wh12}>{item.Code}</td>
                                                    <td style={styles.w5}>
                                                      <Button style={styles.mgl5} outline color="primary" size="sm" onClick={async (e) => await this.openUpdate(item)} >Update</Button>{' '}
                                                      <Button outline color="danger" size="sm" onClick={(e) => { this.openDelete(item) }}>Delete</Button>
                                                    </td>
                                                  </tr>
                                                );
                                              }) : ""
                                          }
                                        </tbody>
                                      </Table>
                  }
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
                field="Email"
                label="Email"
                value={this.state.Email}
                placeholder={"Email"}
                // error={errors.title}
                onChange={e => this.onChange("Email", e.target.value)}
              // rows="5"
              />
              <TextFieldGroup
                field="Name"
                label="Name"
                value={this.state.Name}
                placeholder={"Name"}
                // error={errors.title}
                onChange={e => this.onChange("Name", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="Password"
                label="Password"
                value={this.state.Password}
                type={"password"}
                placeholder={"Password"}
                readOnly={action == 'new' ? false : true}
                onChange={e => this.onChange("Password", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="Code"
                label="Code"
                placeholder={"Code"}
                value={this.state.Code}
                // error={errors.title}
                onChange={e => this.onChange("Code", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="UserName"
                label="UserName"
                placeholder={"Username"}
                value={this.state.UserName}
                // error={errors.title}
                onChange={e => this.onChange("UserName", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="Phone"
                label="Phone"
                value={this.state.Phone}
                placeholder={"Phone"}
                // error={errors.title}
                onChange={e => this.onChange("Phone", e.target.value)}
              // rows="5"
              />

              <div>
                <label style={styles.flexLabel} htmlFor="tag">Gender:    </label>
                <select style={styles.flexOption} name="Gender" onChange={e => this.onChange("Gender", e.target.value)}>
                  <option value={this.state.Gender}>{this.state.Gender == '' ? ` - - - - - - - - - - ` : this.state.Gender}</option>
                  <option value={'Nam'}>Nam</option>
                  <option value={'Nữ'}>Nữ</option>
                </select>
              </div>

              <div>
                <label style={styles.flexLabel} htmlFor="tag">Company:    </label>
                <select style={styles.flexOption} name="Company_Id" onChange={e => this.onChange("Company_Id", e.target.value)}>
                  <option value={this.state.Company_Id}>-----</option>
                  {
                    dataCompany.map((item, i) => {
                      if (item.Name == currentCompany) {
                        return (
                          <option selected value={item._id}>{item.Name}</option>
                        );
                      } else {
                        return (
                          <option value={item._id}>{item.Name}</option>
                        );
                      }
                    })
                  }
                </select>
              </div>

              <div>
                <label style={styles.flexLabel} htmlFor="tag">Role:    </label>
                <select style={styles.flexOption} name="Role_Id" onChange={e => this.onChange("Role_Id", e.target.value)}>
                  <option value={this.state.Role_Id}>-----</option>
                  {
                    dataRole.map((item, i) => {
                      if (item.Name == currentRole) {
                        return (
                          <option selected value={item._id}>{item.Name}</option>
                        );
                      } else {
                        return (
                          <option value={item._id}>{item.Name}</option>
                        );
                      }
                    })
                  }
                </select>
              </div>

              <div>
                <label style={styles.flexLabel} htmlFor="tag">Sale:    </label>
                <select style={styles.flexOption} name="Sale_Id" onChange={e => this.onChange("Sale_Id", e.target.value)}>
                  <option value={this.state.Sale_Id}>-----</option>
                  {
                    dataSale.map((item, i) => {
                      if (item.Name == currentSale) {
                        return (
                          <option selected value={item._id}>{item.Name}</option>
                        );
                      } else {
                        return (
                          <option value={item._id}>{item.Name}</option>
                        );
                      }
                    })
                  }
                </select>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={e => { this.state.action === 'new' ? this.addUser() : this.updateUser() }} disabled={this.state.isLoading}>Save</Button>{' '}
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
        </div>
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
    width: "20%",
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

export default Users;
