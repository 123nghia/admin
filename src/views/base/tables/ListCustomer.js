import React, { Component } from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Button, Input,
  ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';

import {
  CSelect,
  CRow,
  CCol,
  CBadge

} from '@coreui/react'

import { connect } from 'react-redux';
import {
  onSaveID,
  onSaveSeed
} from '../../../redux/data/actions'
import 'moment-timezone';
import Pagination from '@material-ui/lab/Pagination';
import Constants from "./../../../contants/contants";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
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
      key: '',
      keyName: '',
      keyEmail: '',
      keyPhone: '',
      keyGender: '',
      keyStatus: '',
      totalActive: 0,
      modalCom: false,
      updated: '',
      dataApi: [],
      action: 'new',
      Email: '',
      Address: '',
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
      arrPagination_All: [],
      indexPage_All: 0,
      role: localStorage.getItem('role'),
      company_id: localStorage.getItem('user'),
      see_detail: true,
      isLoading: true,
      hidden: false,
      nameSale: '',
      dataAll: [],
      hidden_all: false,
      isSale: false,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      arrAllUser: []
    };
  }
  async componentDidMount() {
    this.getAllData();
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

  pagination_all(dataApi) {
    var i, j, temparray, chunk = 5;
    let arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }
    if (arrTotal.length == 0) {
      this.setState({
        hidden_all: false
      })
    } else {
      this.setState({
        hidden_all: true
      })
    }
    this.setState({ arrPagination_All: arrTotal, dataAll: arrTotal[this.state.indexPage_All] });
  }

  getUserSale = async (sale_id) => {
    const { company_id } = this.state;
    this.setState({ isLoading: true });
    var id = JSON.parse(company_id);

    var bodyCustomer = {
      condition: {
        Company_Id: id.company_id,
        Sale_Id: sale_id
      }
    }

    var res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_CUSTOMER,
      method: 'POST',
      data: bodyCustomer,
      headers: this.state.token
    })

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

  countType(arr, phone) {
    const count = arr.filter(data => data.Phone == phone);
    return count.length;
  }

  getAllData = async () => {
    this.setState({ isLoading: true });

    var resAll = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_CUSTOMER,
      method: 'POST',
      headers: this.state.token
    })

    let dataRes = resAll.data.data;

    if (dataRes.length == 0) {
      this.setState({
        hidden_all: false
      })
    } else {
      this.setState({
        hidden_all: true
      })
    }

    this.setState({ dataApi: dataRes });

    this.pagination_all(dataRes);
    this.setState({ isLoading: false });
  }

  async getSaleDataOfUser(sale_id) {
    let res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.DATA_SALE,
      method: 'POST',
      data: {
        sale_id: sale_id
      }
    });
    console.log(res.data.data[0])
    return { Address: res.data.data[0].Address, Name: res.data.data[0].Name } ;

  }

  async getRoleData(id) {
    const resRole = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_ROLE,
      method: 'GET',
      headers: this.state.token
    });

    if (id != '' || id != undefined) {
      const currentRole = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_ROLE_WITH_ID + id,
        method: 'GET',
        headers: this.state.token
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

  getBadge(status) {
    switch (status) {
      case 'Actived': return 'success'
      case 'Inactive': return 'secondary'
      case 'Locked': return 'warning'
      case 'Deactived': return 'danger'
      default: return 'primary'
    }
  }

  searchKey() {
    const { indexPage, indexPage_All, key, keyName, keyEmail, keyPhone, keyGender, keyStatus } = this.state;

    if (key != '' || keyStatus != '') {
      let d = []
      this.state.dataApi.map(val => {
        if ((val.Name.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.Email.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
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

      this.setState({ dataAll: d, totalActive: active })
    } else {
      let active = 0

      this.state.dataApi.map(val => {
        if (val.Status == "Actived") {
          active = active + 1
        }
      })

      this.setState({ dataAll: this.state.arrPagination_All[indexPage_All], totalActive: active })
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
      keyName: '',
      keyEmail: '',
      keyPhone: '',
      keyGender: '',
      keyStatus: ''
    }, () => {
      this.searchKey();
    });
  }

  render() {
    const { key, dataCompany, dataAll, arrPagination_All,
      currentCompany, action, dataRole, currentRole,
      hidden_all } = this.state;

    if (!this.state.isLoading) {
      return (
        <div>
          <Card>
            <CardHeader>

              Danh sách khách hàng

              <div style={styles.tags}>
                <CRow>
                  <CCol sm="6" lg="12">
                    <CRow>
                      <CCol sm="6" lg="4">
                        <div>
                          <Input style={styles.searchInput} onChange={(e) => {
                            this.actionSearch(e, "key");
                          }} name="key" value={key} placeholder="Từ khóa" />
                        </div>
                      </CCol>
                      <CCol sm="6" lg="4">
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
                      <CCol sm="6" lg="4">
                        <Button color="primary" style={{ width: '100%', marginTop: 5 }} size="sm" onClick={e => { this.resetSearch() }}>Làm mới tìm kiếm</Button>
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol sm="6" lg="12">
                    {/* <Button outline color="primary" style={styles.floatRight} size="sm" onClick={e => this.toggleModal("new")}>Thêm mới</Button> */}
                  </CCol>
                </CRow>
              </div>
            </CardHeader>
            <CardBody>
              {
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">STT.</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Email</th>
                      <th className="text-center">Số điện thoại</th>
                      <th className="text-center">Số lần đến</th>
                      <th className="text-center">Ngày tạo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td colSpan="8" hidden={hidden_all} className="text-center">Không tìm thấy dữ liệu</td>
                    {
                      dataAll != undefined ?
                        dataAll.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td className="text-center">{i + 1}</td>
                              <td className="text-center">{item.Name}</td>
                              <td className="text-center">{item.Email}</td>
                              <td className="text-center">{item.Phone}</td>
                              <td className="text-center">{item.count}</td>
                              <td className="text-center">
                                {(new Date(item.Create_Date)).toLocaleDateString() + ' ' + (new Date(item.Create_Date)).toLocaleTimeString()}
                              </td>
                            </tr>
                          );
                        }) : ""
                    }
                  </tbody>
                </table>
              }
            </CardBody>
          </Card>
          <div style={{ float: 'right' }}>
            <Pagination count={arrPagination_All.length} color="primary" onChange={(e, v) => {
              this.setState({ dataAll: arrPagination_All[v - 1], indexPage_All: v - 1 })
            }} />
          </div>

          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>{this.state.action == 'new' ? `Tạo mới` : `Cập nhật`}</ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="Email"
                label="Email"
                value={this.state.Email}
                placeholder={"Email"}
                type={'email'}
                onChange={e => this.onChange("Email", e.target.value)}
              // rows="5"
              />
              <TextFieldGroup
                field="Address"
                label="Address"
                value={this.state.Address}
                placeholder={"Email"}
                type={'email'}
                onChange={e => this.onChange("Address", e.target.value)}
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
            </ModalBody>
            <ModalFooter>

            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalDelete} toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })} className={this.props.className}>
            <ModalHeader toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>{`Delete`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Do you want to delete user "${this.state.delete ? this.state.delete.Email : ''}" ?`}</label>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={e => this.delete()} disabled={this.state.isLoading}>Xoá</Button>{' '}
              <Button color="secondary" onClick={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>Đóng</Button>
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
  wa10: {
    width: "5%",
    float: "left",
    height: "60px"
  },
  sale_times: {
    width: "8%",
    float: "left",
    height: "60px",
    textAlign: 'center'
  },
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
    width: "11%",
    float: "left",
    height: "60px",
    textAlign: 'center'
  },
  ws12: {
    width: "13%",
    float: "left",
    height: "60px",
    textAlign: 'center'
  },
  wh15: {
    width: "15%",
    float: "left",
    height: "60px",
    textAlign: 'center'
  },
  w5: {
    width: "22%",
    float: "left",
    height: "60px"
  },
  w5_10: {
    width: "5%",
    float: "left",
    height: "60px"
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
    marginBottom: '0px'
  }
}

const mapStateToProps = state => {
  return {
    data: state.getData_AllAPI
  }
}


export default connect(mapStateToProps, { onSaveID, onSaveSeed })(Users);

