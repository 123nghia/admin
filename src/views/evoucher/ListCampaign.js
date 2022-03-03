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
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import API_CONNECT from "../../functions/callAPI";
import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../contants/contants";
import TextFieldGroup from "../Common/TextFieldGroup";
import axios from 'axios'
import md5 from 'md5'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { Tag, Divider } from "antd";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');

class EndUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_id: "621c2ec17abc0b6b4349d4e5",

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
  async getData() {
    const { company_id } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_CAMPAIGN;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          company_id,
        },
      })
      .then((res) => {
        let val = res.data.data;
        this.pagination(val);
        this.setState({ dataApi: val });

        let active = 0;

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
  let url = baseUrlapi + "api/evoucher/update";
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
  let url = baseUrlapi + "api/evoucher/add";
    await axios.post(url,{
      fullName :nameVoucher,
      phoneNumber : phoneVoucher,
      status : levelNormal
    }).then((res) => {
      this.getData();
    });
}
async remove(item){
  var baseUrlapi = Constants.BASE_URL;
  let url = baseUrlapi + "api/evoucher/delete";
    await axios.post(url,{
      id : item._id
    }).then((res) => {
      this.getData();
    });
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
                field="nameVoucher"
                label="Tên đăng nhập"
                value={this.state.nameVoucher}
                placeholder={"Tên đăng nhập"}
                // error={errors.title}
                onChange={(e) => this.onChange("nameVoucher", e.target.value)}
                // rows="5"
              />

        

              <TextFieldGroup
                field="phoneVoucher"
                label="Số điện thoại"
                value={this.state.phoneVoucher}
                placeholder={"Số điện thoại"}
                // error={errors.title}
                onChange={(e) => this.onChange("phoneVoucher", e.target.value)}
                // rows="5"
              />
              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Trạng thái:</CLabel>
                {arrLevel !== undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevel(e);
                    }}
                    custom
                    size="sm"
                    name="levelNormal"
                    id="SelectLm"
                  >
                    {arrLevel.map((item, i) => {
                      if (item.item === this.state.levelNormal) {
                        return (
                          <option selected key={i} value={item.item}>
                          {item.item === "0" ? "Lên lịch" : (item.item === "1") ? "Đã hẹn" : (item.item === "2") ? "Đã gặp" : "Hoàn tất"}
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                          {item.item === "0" ? "Lên lịch" : (item.item === "1") ? "Đã hẹn" : (item.item === "2") ? "Đã gặp" : "Hoàn tất"}
                          </option>
                        );
                      }
                    })}
                  </CSelect>
                ) : null}
              </div>   
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
                
                  <i className="fa fa-align-justify title_header">Danh sách Chiến dịch</i>
               
                 
               
                   
                  <div class="flex mt-3"> 
                            
                            <Input style={styles.searchInput} onChange={(e) => {
                              this.actionSearch(e, "key");
                            }} name="key" value={key} placeholder="Từ khóa" />
                         
                    
                          <CButton color="primary" size="sm" onClick={e => { this.resetSearch() }}>Tìm kiếm</CButton>
                          </div>
                </CardHeader>
                <CardBody>

                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table table_dash">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Ngày tạo</th>
                       
                        <th className="text-center">Số lượng voucher</th>
                        <th className="text-center">Mô tả</th>
                        <th className="text-center">Trạng thái</th>

                   

                        
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
                                <td className="text-center">
                                {(new Date(item.create_at)).toLocaleDateString() + ' ' + (new Date(item.create_at)).toLocaleTimeString()}                          
                                </td>
                                <td className="text-center">{item.amountJoin}</td>

                                <td className="text-center">{item.description}</td>
                                <td className="text-center">
                                  <Tag
                                    className="ant-tag"
                                    color={
                                      item.status === "1"
                                        ? "#2db7f5"
                                        : item.status === "2"
                                        ? "#f50"
                                        : "#87d068"
                                    }
                                  >
                                    {item.status == "1"
                                      ? "Bắt đầu"
                                      : item.status == "2"
                                      ? "Trong quá trình"
                                      : "Hoàn thành"}
                                  </Tag>
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
<div style={{ width: "100%" }} className="mt-3">
                <CLabel>Cấp độ:</CLabel>
                {arrLevel !== undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevel(e);
                    }}
                    custom
                    size="sm"
                    name="levelNormal"
                    id="SelectLm"
                  >
                    {arrLevel.map((item, i) => {
                      if (item.item === this.state.levelNormal) {
                        return (
                          <option selected key={i} value={item.item}>
                          {item.item === "0" ? "Lên lịch" : (item.item === "1") ? "Chưa hẹn" : (item.item === "2") ? "Đã gặp" : "Hoàn tất"}
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                          {item.item === "0" ? "Lên lịch" : (item.item === "1") ? "Chưa hẹn" : (item.item === "2") ? "Đã gặp" : "Hoàn tất"}
                          </option>
                        );
                      }
                    })}
                  </CSelect>
                ) : null}
              </div>           
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
