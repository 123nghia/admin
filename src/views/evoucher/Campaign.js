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
  CLabel,
  CSelect,
  CRow,
  CCol
} from '@coreui/react'

import API_CONNECT from "../../functions/callAPI";
import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../contants/contants";
import TextFieldGroup from "../Common/TextFieldGroup";
import axios from 'axios'
import md5 from 'md5'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');

class EndUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      totalActive: 0,
      modalCom: false,
      updated: '',
      dataApi: [],
      hidden: false,
      action: 'new',
      email: "",
      modalVoucher: false,
      username: "",
      phone: "",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      actionVoucher : "new",
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      type: localStorage.getItem('type'),
      user: localStorage.getItem('user'),
      isLoading: false,
      idCurrentUpdate : null,
      levelNormal : "0"
    };
  }
  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
        levelNormal: e.target.value,
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

    let val = [
      {
          name : "Phong",
          amountVoucher : "120",
          amountJoin : "20",
          create_date:"2021-03-18T21:11:57.239Z"
      }
  ]
    this.pagination(val);
    this.setState({ dataApi: val });

    let active = 0

    this.setState({ isLoading: false, totalActive: active });


    return 

    this.setState({ isLoading: true });
    let getUrl = "api/evoucher/getAll"
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: getUrl,
      method: 'GET'
    }).then((res)=>{
      console.log("voucher",res.data.data)
    

    let val = res.data.data;
    this.pagination(val);
    this.setState({ dataApi: val });

    let active = 0

    this.setState({ isLoading: false, totalActive: active });
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
    });
  };
openVoucher(){
  this.setState({
    actionVoucher : "new",
    modalVoucher : true,
    idCurrentUpdate : "",
    nameVoucher : "",
    phoneVoucher : "",
    levelNormal : "",
  });
};
openEditVoucher(item){
  const {nameVoucher , phoneVoucher,idCurrentUpdate} = this.state
  this.setState({
    actionVoucher : "edit",
    modalVoucher : true,
    idCurrentUpdate : item._id,
    nameVoucher : item.fullName,
    phoneVoucher : item.phoneNumber,
    levelNormal : item.status
  })
};
async update(){
  const {
    nameVoucher,
    phoneVoucher,
    idCurrentUpdate,
    levelNormal,
  } = this.state;
  var baseUrlapi = Constants.BASE_URL;
  let baseUrlCallApi = Constants.UPDATE_CAMPAIGN;

  let url = baseUrlapi + baseUrlCallApi;
    await axios.post(url,{
      fullName :nameVoucher,
      phoneNumber : phoneVoucher,
      id : idCurrentUpdate,
      status : levelNormal,
    }).then((res) => {
      this.getData();
    });
}
async add(){
  const {
    nameVoucher,
    phoneVoucher,
    levelNormal
  } = this.state;
  var baseUrlapi = Constants.BASE_URL;
  let baseUrlCallApi = Constants.ADD_CAMPAIGN;
  let url = baseUrlapi + baseUrlCallApi;
    await axios.post(url,{
      fullName :nameVoucher,
      phoneNumber : phoneVoucher,
      status : levelNormal
    }).then((res) => {
      this.getData();
    });
}
async remove(item){
  let baseUrlCallApi = Constants.DELETE_CAMPAIGN;

  var baseUrlapi = Constants.BASE_URL;
  let url = baseUrlapi + baseUrlCallApi;
    await axios.post(url,{
      id : item._id
    }).then((res) => {
      this.getData();
    });
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
    const { data, arrPagination, key,phoneVoucher,nameVoucher ,modalVoucher} = this.state;
    const arrLevel = [
      {
        item: "0",
      },
      {
        item: "1",
      },
      {
        item: "2",
      },
      {
        item: "3",
      },
    ];
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
         <Modal isOpen={this.state.modalVoucher} className={this.props.className}>
            <ModalHeader>
              {this.state.actionVoucher == "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
            <TextFieldGroup
                field="name"
                label="Tên chiến dịch"
                value={this.state.name}
                
                // error={errors.title}
                onChange={e => this.setState({name : e.target.value})}
              // rows="5"
              />

              <TextFieldGroup
                field="voucher"
                label="Số lượng Voucher"
                value={this.state.voucher}
              
                type={"email"}
                // error={errors.title}
                onChange={e => this.setState({voucher : e.target.value})}
              // rows="5"
              />

            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.actionVoucher === "new"
                    ? this.add()
                    : this.update();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({ modalVoucher: !this.state.modalVoucher })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                
                  <i className="fa fa-align-justify title_header">Quản lý chiến dịch</i>
                
               

               
                   
                            <div class="flex mt-3"> 
                            
                              <Input style={styles.searchInput} onChange={(e) => {
                                this.actionSearch(e, "key");
                              }} name="key" value={key} placeholder="Từ khóa" />
                           
                      
                            <CButton color="primary" size="sm" onClick={e => { this.resetSearch() }}>Tìm kiếm</CButton>
                            </div>
                  

             
                </CardHeader>
                <CardBody>
                <div class="text-center">
                  <CButton color="primary" style={{ marginBottom: "10px" }} size="md" onClick={()=>this.openVoucher()}>Thêm mới</CButton>
                  </div>
                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table table_dash">
                    <thead className="thead-light">
                      <tr>
                      <th className="text-center">STT.</th>
                        <th className="text-center">Tên</th>
                       
                        <th className="text-center">Số lượng voucher</th>
                        <th className="text-center">Số lượng người tham gia</th>
                        <th className="text-center">Ngày tạo</th>
                   

                        <th className="text-center"></th>
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
                                <td className="text-center">{item.name}</td>
                                <td className="text-center">{item.amountVoucher}</td>
                                <td className="text-center">{item.amountJoin}</td>
                                <td className="text-center">
                                {(new Date(item.create_date)).toLocaleDateString() + ' ' + (new Date(item.create_date)).toLocaleTimeString()}                          
                                </td>
             
                                <td className="text-center">
                                  <CButton shape="rounded-pill" variant="ghost" color="info" style={styles.mgl5}  size="md" onClick={(e) => this.openEditVoucher(item)} >
                                    <FiEdit3 style={styles.icon} name="cilPencil" />
                                  </CButton>{' '}
                                  <CButton shape="rounded-pill" variant="ghost" color="danger" style={styles.mgl5} onClick={(e) => { this.remove(item) }}>
                                    <BsTrash style={styles.icon} className="icon" name="cilTrash" />
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
                field="name"
                label="Tên chiến dịch"
                value={this.state.name}
                
                // error={errors.title}
                onChange={e => this.setState({name : e.target.value})}
              // rows="5"
              />

              <TextFieldGroup
                field="voucher"
                label="Số lượng Voucher"
                value={this.state.voucher}
              
                type={"email"}
                // error={errors.title}
                onChange={e => this.setState({voucher : e.target.value})}
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
  icon :{
    fontSize: "16px",
    height: "20px",
    width: "20px"
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
    width: "250px",
    display: 'inline-block',
    marginRight: '5px'
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
