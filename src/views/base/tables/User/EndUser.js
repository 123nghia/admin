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
  CRow,
  CCol
} from '@coreui/react'

import API_CONNECT from "../../../../functions/callAPI";
import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../../../contants/contants";
import TextFieldGroup from "../../../Common/TextFieldGroup";
import axios from 'axios'
import md5 from 'md5'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";

import { BsDownload} from "@react-icons/all-files/bs/BsDownload";
import { FaFileImport } from "@react-icons/all-files/fa/FaFileImport";

let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');

class EndUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_id: JSON.parse(localStorage.getItem("user")).company_id ? JSON.parse(localStorage.getItem("user")).company_id : null,

      phoneSearch : "",
      emailSearch : "",
      data: [],
      key: '',
      totalActive: 0,
      modalCom: false,
      updated: '',
      dataApi: [],
      hidden: false,
      action: 'new',
      email: "",
      username: "",
      phone: "",
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
  OpenFileExcel=()=>{
    this.setState({
      statusExcel : !this.state.statusExcel
    })
  }
  readExcel = (file) => {

		var btnOuter = document.getElementById("button_outer"),

    name_excel = document.getElementById("name_excel");

    btnOuter.classList.add("file_uploading");
    
    setTimeout(function(){
      btnOuter.classList.add("file_uploaded");
      btnOuter.style.borderRadius = "50%";

     

    },3000);

 
  name_excel.innerHTML = `${file.name}`;

    console.log(file);
   
  };
  async ExportsFileExcel(){
    const { company_id } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.EXPORT_CUSTOMER;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          company_id,
        },
      })
      .then((res) => {
        console.log(res);
        let a = document.getElementById("download_excel");
        if(a){
          a.href = `${baseUrlapi}${res.data.data.url}`;
        }
        a.click();
      });
  };
  async componentDidMount() {
    const { type } = this.state;

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
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_END_USER,
      method: 'POST',
      data : {
        phone : "",
        tokensearch : "",
      }
    }).then((res)=>{
      console.log("end user",res.data.data)
    

    let val = res.data.data;
    this.pagination(val);
    this.setState({ dataApi: val });

    let active = 0

    this.setState({ isLoading: false, totalActive: active });
  });
  }
  async newSearch(){
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_END_USER,
      method: 'POST',
      data : {
        phone : this.state.phoneSearch,
        tokensearch : this.state.emailSearch,
      }
    }).then((res)=>{
      console.log("end user",res.data.data)
    

    let val = res.data.data;
    this.pagination(val);
    this.setState({ dataApi: val });

    let active = 0

    this.setState({ isLoading: false, totalActive: active });
  });
  }
  searchKey() {
    const { indexPage, key } = this.state;
    // this.setState({ key: key })

    if (key != '') {
      let d = []
      console.log(this.state.dataApi)
      this.state.dataApi.map(val => {
     
       if(val.phone){

       
      
        if (
          val.phone.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {

          d.push(val)
        }
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

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async openUpdate(item) {
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      email: item.email,
      phone: item.phone,
      username: item.username,
      id: item['_id']
    })
  }

  async updateUser() {
    const { email, phone, password, username } = this.state

    if (email == null || email == '' ||
      phone == null || phone == '' ||
      username == null || username == '') {
      alert("Hãy nhập đầy đủ trường !!!");
      return
    }

    const body = {
      email: email,
      phone: phone,
      username: username,
      id: this.state.id,
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_END_USER,
      method: 'POST',
      data: body
    });

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
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.DELETE_END_USER,
      method: 'POST',
      data: {
        "id": this.state.id
      }
    });

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

  getBadge(status) {
    switch (status) {
      case 'Actived': return 'success'
      case 'Inactive': return 'secondary'
      case 'Locked': return 'warning'
      case 'Deactived': return 'danger'
      default: return 'primary'
    }
  }

  render() {
    const { data, arrPagination, key } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify">Danh sách tài khoản người dùng</i>
                  <div style={styles.tags}>

                    <CRow>
                      <CCol sm="12" lg="12">
                        <CRow>
                          <CCol sm="12" lg="6">
                            {/* <div>
                              <Input style={styles.searchInput} onChange={(e) => {
                                this.actionSearch(e, "key");
                              }} name="key" value={key} placeholder="Từ khóa" />
                            </div> */}
                            <div>
                              <Input style={styles.searchInput} onChange={(e) => {
                                this.setState({
                                  emailSearch : e.target.value
                                })
                              }} name="emailSearch" value={this.state.emailSearch} placeholder="Email" />
                                <Input style={styles.searchInput} onChange={(e) => {
                               this.setState({
                                  phoneSearch : e.target.value
                                })
                              }} name="phoneSearch" value={this.state.phoneSearch} placeholder="Số điện thoại" />
                            </div>
                            
                          </CCol>
                          <CCol sm="12" lg="6">
                            <CButton color="primary" style={{ width: '100%', marginTop: 5 }} size="sm" onClick={e => { this.newSearch() }}>Tìm kiếm</CButton>
                          </CCol>
                        </CRow>
                      </CCol>
                      <CCol sm="12" lg="12">

                      </CCol>
                    </CRow>

                  </div>
                </CardHeader>
                <CardBody>
                <div class=" pb-3 flex">
                    
                    <CButton
                      color="success"
                      style={{ marginBottom: "10px", marginRight: '10px' }}
                      size="md"
                      className="flex-center"
                      onClick={()=>this.ExportsFileExcel()}
                    >
                      <FaFileExport style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Xuất File Excel</p>
                    </CButton>
                    <a id="download_excel" download></a>
                    <div>

                    </div>
                    </div>
                <div className="pb-3" style={{display : this.state.statusExcel ? "block" : "none" }}>
                      <div className="button_outer" id="button_outer">
                        <div className="btn_upload">
                          <input
                          id="upload_file"
                            type="file"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              this.readExcel(file);
                            }}
                          />
                          <div className="flex-center">
                          <svg viewBox="64 64 896 896" focusable="false" data-icon="upload" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg>
                         <p>Tải lên File Excel</p> 
                         </div>
                        </div>
                        <div className="processing_bar"></div>
                        <div className="success_box"></div>
                      </div>
                   
                    <div className="name_excel" id="name_excel"></div>
                    </div>   
                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Loại tài khoản</th>

                        <th className="text-center">Tên khách hàng</th>
                       
                        <th className="text-center">Số điện thoại</th>
                        <th className="text-center">Email</th>

                        <th className="text-center">Địa chỉ</th>

                        <th className="text-center">Ngày đăng ký</th>

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
                                <td className="text-center">{item.type === "0" ? "" : item.type === "1" ? "FaceBook" : "Google"}</td>

                                <td className="text-center">{item.name}</td>
                        
                                <td className="text-center">{item.phone}</td>
                                <td className="text-center">{item.email}</td>

                                <td className="text-center">
                                {item.addressHome}
                                </td>

                                <td className="text-center">
                                {(new Date(item.create_date)).toLocaleDateString() + ' ' + (new Date(item.create_date)).toLocaleTimeString()}
                                  
                                </td>

                                <td className="text-center">
                                  <CButton style={styles.mgl5} outline color="primary" size="sm" onClick={async (e) => await this.openUpdate(item)} >
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
                field="username"
                label="Tên đăng nhập"
                value={this.state.username}
                placeholder={"Tên đăng nhập"}
                // error={errors.title}
                onChange={e => this.onChange("username", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="name"
                label="Email"
                value={this.state.email}
                placeholder={"Email"}
                type={"email"}
                // error={errors.title}
                onChange={e => this.onChange("email", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="phone"
                label="Số điện thoại"
                value={this.state.phone}
                placeholder={"Số điện thoại"}
                // error={errors.title}
                onChange={e => this.onChange("phone", e.target.value)}
              // rows="5"
              />

            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addRoles() : this.updateUser() }} disabled={this.state.isLoading}>Lưu</CButton>{' '}
              <CButton color="secondary" onClick={e => this.setState({ modalCom: !this.state.modalCom })}>Đóng</CButton>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalDelete} toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })} className={this.props.className}>
            <ModalHeader toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>{`Xoá`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Xác nhận xóa !!!`}</label>
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => this.delete()} disabled={this.state.isLoading}>Xoá</CButton>{' '}
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
    marginLeft: '5px'
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

export default EndUser;
