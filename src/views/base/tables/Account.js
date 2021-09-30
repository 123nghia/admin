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
  CCol,
  CLabel
} from '@coreui/react'

import CreatableSelect from 'react-select/creatable';
import API_CONNECT from "../../../functions/callAPI";
import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../../contants/contants";
import TextFieldGroup from "../../Common/TextFieldGroup";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      modalCom: false,
      dataApi: [],
      hidden: false,
      action: 'new',
      name: "",
      email: "",
      avatar: "",
      image_show: "",
      phone: "",
      address: "",
      username: "",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      type: localStorage.getItem('type'),
      isLoading: false,
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
    var res = await API_CONNECT(
      Constants.LIST_USER, {}, "", "POST")

    let val = res.data;
    this.pagination(val);
    this.setState({ dataApi: val, isLoading: false })
  }

  searchKey() {
    const { indexPage, key } = this.state;

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.name.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.username.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.email.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.phone.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {

          d.push(val)
        }
      })

      this.setState({ data: d })
    } else {
      this.setState({ data: this.state.arrPagination[indexPage] })
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

  onChangeImage(e) {
    let files = e.target.files;
    console.log(files)
    let reader = new FileReader();
    this.setState({ avatar: files[0] })
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      this.setState({ image_show: e.target.result })
    }
  }

  // async toggleModal(key) {
  //   const { modalCom, token, arrOptionBrand, arrOptionCategory } = this.state;
  //   if (key == 'new') {
  //     this.setState({
  //       modalCom: !modalCom,
  //       action: key,
  //       category_id: "",
  //       brand_id: "",
  //       name: "",
  //       href: "",
  //       image_show: "",
  //       image: "",
  //       price: "",
  //     }, async () => {
  //       if (arrOptionBrand.length == 0 || arrOptionCategory.length == 0) {

  //         const res_brand = await API_CONNECT(
  //           Constants.LIST_BRAND, {}, token, "POST")

  //         const res_category = await API_CONNECT(
  //           Constants.LIST_CATEGORY, {}, token, "POST")

  //         let arrTempOptionBrand = [];
  //         let arrTempOptionCategory = [];

  //         let dataBrand = res_brand.data;
  //         let dataCategory = res_category.data;

  //         for (let i = 0; i < dataBrand.length; i++) {
  //           arrTempOptionBrand.push({
  //             value: dataBrand[i]._id, label: dataBrand[i].name
  //           })
  //         }

  //         for (let i = 0; i < dataCategory.length; i++) {
  //           arrTempOptionCategory.push({
  //             value: dataCategory[i]._id, label: dataCategory[i].name
  //           })
  //         }

  //         this.setState({ arrOptionBrand: arrTempOptionBrand, arrOptionCategory: arrTempOptionCategory })
  //       }
  //     })
  //   }
  // }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  // async addProduct() {

  //   const { category_id, brand_id, name, href, image, price } = this.state
  //   if (name == null || name == '' ||
  //     image == null || image == '' ||
  //     category_id == null || category_id == '' ||
  //     brand_id == null || brand_id == '') {
  //     alert("Hãy nhập đầy đủ dữ liệu !!!");
  //     return
  //   }

  //   const form = new FormData();
  //   form.append("image", image);

  //   await API_CONNECT(Constants.UPLOAD_PRODUCT, form, "", "POST")

  //   const body = {
  //     category_id: category_id,
  //     brand_id: brand_id,
  //     name: name,
  //     href: href,
  //     image: image.name,
  //     price: price
  //   }

  //   this.setState({ isLoading: true });
  //   var res = await API_CONNECT(
  //     Constants.ADD_PRODUCT, body, "", "POST")

  //   if (res.status == 200) {

  //     this.getData()

  //     this.setState({ modalCom: !this.state.modalCom })
  //   } else {
  //     alert("Thêm danh mục thất bại");
  //     this.setState({ isLoading: false });
  //   }
  // }

  async openUpdate(item) {
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      name: item.name,
      email: item.email,
      avatar: item.avatar,
      image_show: "",
      phone: item.phone,
      address: item.address,
      username: item.username,
      id: item['_id']
    })
  }

  async updataUser() {
    const { name, email, avatar, phone, address, username } = this.state

    if (name == null || name == '' ||
      email == null || email == '') {
      alert("Tên và email trống !!!");
      return
    }

    const form = new FormData();
    form.append("image", avatar);

    await API_CONNECT(Constants.UPLOAD_AVATAR, form, "", "POST")

    const body = {
      name: name,
      email: email,
      avatar: avatar.name,
      phone: phone,
      address: address,
      username: username,
      id: this.state.id,
    }

    this.setState({ isLoading: true });
    var res = await API_CONNECT(
      Constants.UPDATE_USER, body, "", "POST")

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
    var res = await API_CONNECT(
      Constants.DELETE_USER, {
      "id": this.state.id
    }, "", "POST")

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
    const { data, arrPagination, key, avatar, image_show } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Danh sách danh mục
                  <div style={styles.tags}>
                    <CRow>
                      <CCol sm="12" lg="12">
                        <CRow>
                          <CCol sm="12" lg="6">
                            <div>
                              <Input style={styles.searchInput} onChange={(e) => {
                                this.actionSearch(e, "key");
                              }} name="key" value={key} placeholder="Từ khóa" />
                            </div>
                          </CCol>
                          <CCol sm="12" lg="6">
                            <CButton color="primary" style={{ width: '100%', marginTop: 5 }} size="sm" onClick={e => { this.resetSearch() }}>Làm mới tìm kiếm</CButton>
                          </CCol>
                        </CRow>
                      </CCol>
                      <CCol sm="12" lg="12">
                        {/* <CButton outline color="primary" style={styles.floatRight} size="sm" onClick={e => this.toggleModal("new")}>Thêm mới</CButton> */}
                      </CCol>
                    </CRow>

                  </div>
                </CardHeader>
                <CardBody>

                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Avatar</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Phone</th>
                        <th className="text-center">Address</th>
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
                                <td className="text-center">{item.name}</td>
                                <td className="text-center">
                                  {
                                    item.avatar == "" || item.avatar == null ?
                                      <img src={"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg"} width={"60px"} height={"60px"} /> :
                                      <img src={`${Constants.BASE_URL}/public/image_avatar/${item.avatar}`} width={"60px"} height={"60px"}/>
                                  }
                                </td>
                                <td className="text-center">{item.email}</td>
                                <td className="text-center">{item.phone}</td>
                                <td className="text-center">{item.address}</td>
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

          <Modal size="lg" isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>{this.state.action == 'new' ? `Tạo mới` : `Cập nhật`}</ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="name"
                label="Tên"
                value={this.state.name}
                placeholder={"Tên sản phẩm"}
                // error={errors.title}
                onChange={e => this.onChange("name", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="avatar"
                label="Ảnh đại diện"
                type={"file"}
                onChange={e => { this.onChangeImage(e) }}
                onClick={(e) => { e.target.value = null; this.setState({ image_show: "" }) }}
              />
              {
                avatar == "" ? "" :
                  <img width="350" height="300" src={
                    image_show == "" ?
                      `${Constants.BASE_URL}/public/image_avatar/${avatar}` : image_show} style={{ marginBottom: 20 }} />
              }

              <TextFieldGroup
                field="email"
                label="Email"
                value={this.state.email}
                placeholder={"Email"}
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

              <TextFieldGroup
                field="address"
                label="Địa chỉ"
                value={this.state.address}
                placeholder={"Địa chỉ"}
                // error={errors.title}
                onChange={e => this.onChange("address", e.target.value)}
              // rows="5"
              />
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addProduct() : this.updataUser() }} disabled={this.state.isLoading}>Save</CButton>{' '}
              <CButton color="secondary" onClick={e => { this.setState({ modalCom: !this.state.modalCom }) }}>Cancel</CButton>
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
    margin: '5px'
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

export default Account;