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

import {
  CBadge,
  CRow,
  CCol,
  CSelect,
  CInput
} from '@coreui/react'


import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'

import { connect } from 'react-redux';
import {
  onSaveID,
  onSaveSeed
} from '../../../redux/data/actions'
import 'moment-timezone';
import Constants from "./../../../contants/contants";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
import axios from 'axios'
import LazyLoad from 'react-lazyload';
import ReactLoading from 'react-loading';

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
      keyUserName: '',
      keyName: '',
      keyEmail: '',
      keyCompanyCode: '',
      keyPhone: '',
      keyGender: '',
      keyCode: '',
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
      month: 0,
      arrTemp: [],
      arrMonth: [
        "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",
      ],
      arrMonthWithDefault: [
        "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",
      ],
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
    this.getData();
    console.log(this.state.role)
  }

  async getSeeder() {
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.GET_SEEDER,
      method: 'POST',
      data: {
        "email": "ktpm489@gmail.com"
      }
    })
    console.log(res)
    this.props.onSaveSeed(res.data.data);
    this.props.history.push('/history')
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
      data: bodyCustomer
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

  getUserSale_ByMonth = async (sale_id, month) => {
    const { company_id } = this.state;
    var id = JSON.parse(company_id);

    var bodyCustomer = {
      "month": month,
      "company_id": id.company_id,
      "sale_id": sale_id
    }

    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.GET_USER_SALE_BY_MONTH,
      method: 'POST',
      data: bodyCustomer
    })

    this.setState({ dataApi: res.data.data, arrTemp: res.data.data });
    let arrCount_User_Per = [];
    var getArrTemp = this.state.arrTemp;
    for (let i = 0; i < getArrTemp.length; i++) {
      //check if exits in arr
      if (!arrCount_User_Per.some(item => getArrTemp[i].Phone == item.Phone)) {
        getArrTemp[i].count = this.countType(getArrTemp, getArrTemp[i].Phone);
        const resCal = await axios({
          baseURL: Constants.BASE_URL,
          url: Constants.GET_COEFFICIENT_PER_SALE,
          method: 'POST',
          data: {
            "month": month,
            "company_id": id.company_id,
            "phone": getArrTemp[i].Phone,
            "sale_id": this.props.data.idSale
          }
        });
        getArrTemp[i].coefficient = resCal.data.data.calculator;
        arrCount_User_Per.push(getArrTemp[i])
      }
    }

    this.pagination(arrCount_User_Per);
    this.setState({ isLoading: false });
  }

  getUserSale_ByMonth_forSale = async (sale_id, month) => {
    const { company_id } = this.state;
    this.setState({ isLoading: true });
    var id = JSON.parse(company_id);

    var bodyCustomer = {
      "month": month,
      "company_id": id.company_id,
      "sale_id": sale_id
    }

    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.GET_USER_SALE_BY_MONTH,
      method: 'POST',
      data: bodyCustomer
    })

    this.setState({ dataApi: res.data.data, arrTemp: res.data.data });
    let arrCount_User_Per = [];
    var getArrTemp = this.state.arrTemp;
    for (let i = 0; i < getArrTemp.length; i++) {
      //check if exits in arr
      if (!arrCount_User_Per.some(item => getArrTemp[i].Phone == item.Phone)) {
        getArrTemp[i].count = this.countType(getArrTemp, getArrTemp[i].Phone);
        const resCal = await axios({
          baseURL: Constants.BASE_URL,
          url: Constants.GET_COEFFICIENT_PER_SALE,
          method: 'POST',
          data: {
            "month": month,
            "company_id": id.company_id,
            "phone": getArrTemp[i].Phone,
            "sale_id": sale_id
          }
        });
        getArrTemp[i].coefficient = resCal.data.data.calculator;
        arrCount_User_Per.push(getArrTemp[i])
      }
    }
    this.pagination(arrCount_User_Per);
    this.setState({ isLoading: false });
  }

  getAllData = async () => {
    const { company_id } = this.state;
    this.setState({ isLoading: true });
    var id = JSON.parse(company_id);

    var resAll = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_CUSTOMER,
      method: 'POST',
      data: {
        condition: {
          Company_Id: id.company_id,
          Sale_Id: this.props.data.idSale
        }
      }
    })

    this.setState({ dataApi: resAll.data.data });

    let arrCount_All_User = [];

    for (let i = 0; i < resAll.data.data.length; i++) {
      //check if exits in arr
      if (!arrCount_All_User.some(item => resAll.data.data[i].Phone == item.Phone)) {
        resAll.data.data[i].count = this.countType(resAll.data.data, resAll.data.data[i].Phone);

        var resCal_all = await axios({
          baseURL: Constants.BASE_URL,
          url: Constants.CALCULATOR_ALL_USER_OF_SALE,
          method: 'POST',
          data: {
            "company_id": id.company_id,
            "phone": resAll.data.data[i].Phone,
            "sale_id": this.props.data.idSale
          }
        });
        resAll.data.data[i].coefficient = resCal_all.data.data.calculator;
        arrCount_All_User.push(resAll.data.data[i])
      }
    }

    this.pagination_all(arrCount_All_User);
    this.setState({ isLoading: false });
  }

  getData = async () => {
    const { company_id } = this.state;
    this.setState({ isLoading: true });

    var res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.GET_SHOP,
      method: 'POST',
      headers: this.state.token
    });

    console.log(res)

    this.pagination(res.data.data);
    this.setState({ dataApi: res.data.data });

    let active = 0

    // res.data.data.map(val => {
    //   if (val.Status == "Actived") {
    //     active = active + 1
    //   }
    // })

    this.setState({ isLoading: false, totalActive: active });
  }

  searchKey() {
    const { indexPage, keyUserName, keyName, keyEmail, keyCompanyCode,
      keyPhone, keyGender, keyCode, keyStatus } = this.state;

    if (keyUserName != '' || keyName != '' || keyEmail != '' || keyCompanyCode != '' ||
      keyPhone != '' || keyGender != '' || keyCode != '' || keyStatus != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.UserName.toLocaleUpperCase().includes(keyUserName.toLocaleUpperCase()) &&
          val.Name.toLocaleUpperCase().includes(keyName.toLocaleUpperCase()) &&
          val.Email.toLocaleUpperCase().includes(keyEmail.toLocaleUpperCase()) &&
          val.Company_Id.toLocaleUpperCase().includes(keyCompanyCode.toLocaleUpperCase()) &&
          val.Gender.toLocaleUpperCase().includes(keyGender.toLocaleUpperCase()) &&
          val.Code.toLocaleUpperCase().includes(keyCode.toLocaleUpperCase()) &&
          val.Status.toLocaleUpperCase().includes(keyStatus.toLocaleUpperCase()) &&
          val.Phone.toLocaleUpperCase().includes(keyPhone.toLocaleUpperCase())) {
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
      keyUserName: '',
      keyName: '',
      keyEmail: '',
      keyCompanyCode: '',
      keyPhone: '',
      keyGender: '',
      keyCode: '',
      keyStatus: ''
    }, () => {
      this.searchKey();
    });
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
    const { Email, Name, Phone, UserName, Code, Password, Gender, Role_Id, Company_Id, Sale_Id, Address } = this.state

    if (Email == null || Email == ''
      || Name == null || Name == ''
      || Phone == null || Phone == ''
      || UserName == null || UserName == ''
      || Password == null || Password == '') {
      alert("Please fill in all the requirements");
      return
    }

    const { company_id } = this.state;
    var id = JSON.parse(company_id);
    console.log(id.company_id)
    const body = {
      Email: Email,
      Address: Address,
      Name: Name,
      Phone: Phone,
      Gender: Gender,
      Company_Id: this.state.role == 'ADMIN' || this.state.role == 'ADMINSALE' ? Company_Id : id.company_id,
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

  async openUpdate(item) {
    await this.getCompanyData(item.Company_Id)
    await this.getSaleData(item.Sale_Id)
    await this.getRoleData(item.Role_Id)

    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      Email: item.Email,
      Address: item.Address,
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
    const { company_id } = this.state;
    var id = JSON.parse(company_id);

    const { Email, Name, Phone, UserName, Code, Password, Gender, Role_Id,
      Company_Id, Sale_Id, Status, Address } = this.state

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
      Address: Address,
      Name: Name,
      Phone: Phone,
      Gender: Gender,
      Company_Id: this.state.role == 'ADMIN' || this.state.role == 'ADMINSALE' ? Company_Id : id.company_id,
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

  getBadge(status) {
    switch (status) {
      case 'Actived': return 'success'
      case 'Inactive': return 'secondary'
      case 'Locked': return 'warning'
      case 'Deactived': return 'danger'
      default: return 'primary'
    }
  }
  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { data, key, dataCompany, role, hidden, dataAll, arrPagination_All, indexPage_All,
      currentCompany, action, dataRole, currentRole, arrPagination, indexPage,
      hidden_all, isSale, keyUserName, keyName, keyEmail, keyCompanyCode, keyPhone, keyGender, keyCode,
      keyStatus } = this.state;

    if (!this.state.isLoading) {
      return (
        <div>
          <Card>
            <CardHeader>

              Danh sách chủ shop ( Page: {this.state.indexPage + 1} )

              <div style={styles.tags}>
                <CRow>
                  <CCol sm="6" lg="12">
                    <CRow>
                      <CCol sm="6" lg="2">
                        <div>
                          <Input style={styles.searchInput} onChange={(e) => {
                            this.actionSearch(e, "keyUserName");
                          }} name="key" value={keyUserName} placeholder="Tên đăng nhập" />
                        </div>
                      </CCol>
                      <CCol sm="6" lg="2">
                        <div>
                          <Input style={styles.searchInput} onChange={(e) => {
                            this.actionSearch(e, "keyName");
                          }} name="key" value={keyName} placeholder="Tên" />
                        </div>
                      </CCol>
                      <CCol sm="6" lg="2">
                        <div>
                          <Input style={styles.searchInput} onChange={(e) => {
                            this.actionSearch(e, "keyEmail");
                          }} name="key" value={keyEmail} placeholder="Email" />
                        </div>
                      </CCol>
                      <CCol sm="6" lg="2">
                        <div>
                          <Input style={styles.searchInput} onChange={(e) => {
                            this.actionSearch(e, "keyCompanyCode");
                          }} name="key" value={keyCompanyCode} placeholder="Mã công ty" />
                        </div>
                      </CCol>
                      <CCol sm="6" lg="2">
                        <div>
                          <Input style={styles.searchInput} onChange={(e) => {
                            this.actionSearch(e, "keyPhone");
                          }} name="key" value={keyPhone} placeholder="Số điện thoại" />
                        </div>
                      </CCol>
                      <CCol sm="6" lg="2">
                        <div>
                          <Input style={styles.searchInput} onChange={(e) => {
                            this.actionSearch(e, "keyCode");
                          }} name="key" value={keyCode} placeholder="Code" />
                        </div>
                      </CCol>
                      <CCol sm="6" lg="2">
                        <CSelect style={styles.flexOption} onChange={e => {

                          this.actionSearch(e, "keyGender");

                        }} custom>
                          {
                            ['Nam', 'Nữ'].map((item, i) => {
                              return (
                                <option value={item}>{item}</option>
                              );
                            })
                          }
                        </CSelect>
                      </CCol>
                      <CCol sm="6" lg="2">
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
                      <CCol sm="6" lg="2">
                        <Button color="primary" style={{ width: '100%', marginTop: 5 }} size="sm" onClick={e => { this.resetSearch() }}>Làm mới tìm kiếm</Button>
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol sm="6" lg="12">
                    <Button outline color="primary" style={styles.floatRight} size="sm" onClick={e => this.toggleModal("new")}>Thêm mới</Button>
                  </CCol>
                </CRow>
              </div>



              {/* <CRow>
                <CCol lg="5" sm="5" md="5" xs="12">
                  <div style={styles.tags}>
                    {
                      role == 'SALES' ? "" :
                        <div>
                          <Input style={styles.searchInput} onChange={(e) => this.searchKey(e.target.value)} name="key" value={key} placeholder="Search" />
                          <Button outline color="primary" style={styles.floatRight} size="sm" onClick={async e => await this.toggleModal("new")}>Add</Button>
                        </div>
                    }
                  </div>
                </CCol>
                <CCol lg="7" sm="7" md="7" xs="12">
                  <div>Choose Month</div>
                  <CSelect style={{ width: 300, float: 'left', backgroundColor: '#ffff99' }} onChange={async e => { await this.check(e) }} custom size="sm" name="selectSm" id="SelectLm">
                    {
                      this.state.arrMonthWithDefault.map((item, i) => {
                        if (item == "00") {
                          return (
                            <option selected value={item}>Get All</option>
                          );
                        } else {
                          if (item == this.state.month) {
                            return (
                              <option selected value={item}>{item}</option>
                            );
                          } else {
                            return (
                              <option value={item}>{item}</option>
                            );
                          }
                        }
                      })
                    }
                  </CSelect>
                </CCol>
              </CRow> */}
            </CardHeader>
            <CardBody>
              {
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">STT.</th>
                      <th className="text-center">Tên đăng nhập</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Email</th>
                      <th className="text-center">Mã công ty</th>
                      <th className="text-center">Số điện thoại</th>
                      <th className="text-center">Giới tính</th>
                      <th className="text-center">Code</th>
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
                              <td className="text-center">{item.UserName}</td>
                              <td className="text-center">{item.Name}</td>
                              <td className="text-center">{item.Email}</td>
                              <td className="text-center">{item.Company_Id}</td>
                              <td className="text-center">{item.Phone}</td>
                              <td className="text-center">{item.Gender}</td>
                              <td className="text-center">{item.Code}</td>
                              <td className="text-center">
                                {(new Date(item.Create_Date)).toLocaleDateString() + ' ' + (new Date(item.Create_Date)).toLocaleTimeString()}
                              </td>
                              <td className="text-center">
                                <CBadge color={this.getBadge(item.Status)}>
                                  {item.Status}
                                </CBadge>
                              </td>
                              <td className="text-center">
                                <Button style={styles.mgl5} outline color="primary" size="sm" onClick={async (e) => await this.openUpdate(item)} >Update</Button>{' '}
                                <Button outline color="danger" size="sm" onClick={(e) => { this.openDelete(item) }}>Delete</Button>{' '}
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

          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>{this.state.action == 'new' ? `Create` : `Update`}</ModalHeader>
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

              {/* <div>
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
              </div> */}

              <div>
                <label style={styles.flexLabel} htmlFor="tag">Role:    </label>
                <select style={styles.flexOption} name="Role_Id" onChange={e => this.onChange("Role_Id", e.target.value)}>
                  <option value={this.state.Role_Id}>-----</option>
                  {
                    this.state.role == 'ADMIN' || this.state.role == 'ADMINSALE' ?
                      dataRole.map((item, i) => {
                        if (item.Name == currentRole) {
                          return (
                            <option selected value={item._id}>{item.Name}</option>
                          );
                        }
                        else {
                          return (
                            <option value={item._id}>{item.Name}</option>
                          );
                        }
                      }) : dataRole.map((item, i) => {
                        if (item.Name == 'SHOPMANAGER') {
                          return (
                            <option value={item._id}>{item.Name}</option>
                          );
                        }
                      })
                  }
                </select>
              </div>

              {
                action == 'new' ? "" : <div>
                  <label style={styles.flexLabel} htmlFor="tag">Status:</label>
                  <select style={styles.flexOption} name="Status" onChange={e => this.onChange("Status", e.target.value)}>
                    <option value={this.state.Status}>{this.state.Status == '' ? ` - - - - - - - - - - ` : this.state.Status}</option>
                    <option value={'Actived'}>Actived</option>
                    <option value={'Locked'}>Locked</option>
                    <option value={'Deactived'}>Deactived</option>
                  </select>
                </div>
              }
              {/* {
                this.state.role == 'ADMIN' ? <div>
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
                </div> : ""
              } */}

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
      <div className="d-flex justify-content-center">
        <ReactLoading type={"balls"} color={"orange"} height={'5%'} width={'5%'} />
      </div>
    );
  }
}

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
    width: "200px",
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

