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
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";

import API_CONNECT from "../../../../functions/callAPI";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../../../contants/contants";
import TextFieldGroup from "../../../Common/TextFieldGroup";
import axios from 'axios'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));
class BrandPlugin extends Component {
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
      hidden: false,
      action: 'new',
      name: "",
      image: "",
      image_show: "",
      image_link: "",
      link: "",
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
  async componentDidMount() {
    const { type } = this.state;
    if (type == '0' || type == '1') {
      this.getData()
    } else {
      this.getData_Company()
    }
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
    const res_brand = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_BRAND_PLUGIN,
      method: 'GET'
    });

    let val = res_brand.data.data;
    this.pagination(val);
    this.setState({ dataApi: val });

    let active = 0

    this.setState({ isLoading: false, totalActive: active });
  }

  getData_Company = async () => {
    this.setState({ isLoading: true });
    const res_brand = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_BRAND_PLUGIN_COMPANY + JSON.parse(this.state.user).company_id,
      method: 'GET'
    });

    let val = res_brand.data.data;
  
    this.pagination(val);
    this.setState({ dataApi: val });

    let active = 0

    this.setState({ isLoading: false, totalActive: active });
  }

  searchKey() {
    const { indexPage, key } = this.state;
    // this.setState({ key: key })

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.name.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {

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
      key: ''
    }, () => {
      this.searchKey();
    });
  }

  async toggleModal(key) {
    if (key == 'new') {
      this.setState({
        modalCom: !this.state.modalCom,
        action: key,
        name: "",
        image: "",
        image_show: "",
        link: ""
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addBrand() {

    const { name, image, link, image_link } = this.state
    if (name == null || name == '' ||
      image == null || image == '') {
      alert("Vui lòng nhập đầy đủ trường !!!");
      return
    }

    const form = new FormData();
    form.append("image", image_link);

    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST")

    const body = {
      name: name,
      image: image,
      image_link: image_link.name,
      company_id: this.state.type == '0' || this.state.type == '1' ? "" : JSON.parse(this.state.user).company_id,
      link: link
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.ADD_BRAND_PLUGIN,
      method: 'POST',
      data: body
    });

    if (res.status == 200) {
      if (this.state.type == '0' || this.state.type == '1') {
        this.getData()
      } else {
        this.getData_Company()
      }
      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert("Thêm thương hiệu thất bại");
      this.setState({ isLoading: false });
    }
  }

  async openUpdate(item) {

    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      name: item.name,
      image: item.image,
      image_show: "",
      image_link: item.image_link,
      id: item['_id'],
      link: item.link
    })
  }
  

  async updateBrand() {
    const { name, image, link, image_link } = this.state

    if (name == null || name == '' ||
      image == null || image == '') {
      alert("Vui lòng nhập đầy đủ trường !!!");
      return
    }

    const form = new FormData();
    form.append("image", image_link);

    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST")

    const body = {
      name: name,
      image: image,
      image_link: image_link == undefined || image_link == null || image_link == "" ? "" : image_link.name,
      id: this.state.id,
      link: link
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_BRAND_PLUGIN,
      method: 'POST',
      data: body
    });

    if (res.status == 200) {
      if (this.state.type == '0' || this.state.type == '1') {
        this.getData()
      } else {
        this.getData_Company()
      }
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
      url: Constants.DELETE_BRAND_PLUGIN,
      method: 'POST',
      data: {
        "id": this.state.id
      }
    });

    if (res.status == 200) {
      if (this.state.type == '0' || this.state.type == '1') {
        this.getData()
      } else {
        this.getData_Company()
      }
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

  onChangeImage(e) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ image_link: files[0] })
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      this.setState({ image: e.target.result, image_show: e.target.result })
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
                <i className="fa fa-align-justify title_header">Danh sách thương hiệu</i>
                
                  <CRow>
                    <CCol md={3} className="">
                      <div className="">


                        <p className="title_filter">Từ khóa</p>
                        <Input style={styles.searchInput} onChange={(e) => {
                                this.actionSearch(e, "key");
                              }} name="key" value={key} placeholder="Từ khóa" />
                      </div>
                    </CCol>
                    </CRow>
                    <div className="flex-end">

                    <CButton
                      color="info"
                      style={{  marginRight: "10px" }}
                      size="md"
                      className="btn-main"
                      onClick={e => { this.resetSearch() }}
                    >
                      <BsSearch style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Làm mới tìm kiếm</p>
                    </CButton>
                    <CButton
                      color="info"
                     
                      size="md"
                      className="btn-main"
                      onClick={e => this.toggleModal("new")}
                    >
                      <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Thêm mới</p>
                    </CButton>

                  </div>
                    

              
                </CardHeader>
                <CardBody>

                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên thương hiệu</th>
                        <th className="text-center">Ảnh thương hiệu</th>
                        <th className="text-center">Link thương hiệu</th>
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
                                    item.image_link == null || item.image_link == "" ? <img src={`${item.image}`} width={"60px"} height={"60px"} /> :
                                      <img src={`${Constants.BASE_URL}public/image_brand/${item.image_link}`} width={"60px"} height={"60px"} />
                                  }
                                </td>
                                <td className="text-center">
                                  <a href={item.link} target="_blank">{item.link}</a>
                                </td>
                                <td className="text-center">
                                <div className="flex-center">
                                 
                                   
                             

                                  <CButton
                                    shape="rounded-pill"
                                    variant="ghost"
                                    color="info"
                                    style={styles.mgl5}
                                    className="mr-1"
                                    size="md"
                                    onClick={async (e) => await this.openUpdate(item)}
                                  >
                                    <FiEdit3
                                      style={styles.icon}
                                      name="cilPencil"
                                      className="icon"

                                    />
                                  </CButton>{" "}
                                  <CButton
                                    shape="rounded-pill"
                                    variant="ghost"
                                    color="danger"
                                    style={styles.mgl5}
                                    onClick={(e) => { this.openDelete(item) }}
                                  >
                                    <BsTrash
                                      style={styles.icon}
                                      className="icon"
                                      name="cilTrash"
                                    />
                                  </CButton>
                                </div>
                                 
                                </td>
                              </tr>
                            );
                          }) : ""
                      }
                    </tbody>
                  </table>
                  <div style={{ float: 'right' }}>
                <Pagination count={arrPagination.length} color="primary" onChange={(e, v) => {
                  this.setState({ data: arrPagination[v - 1], indexPage: v - 1 })
                }} />
              </div>
                </CardBody>
              </Card>
            
              {/* {
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
              } */}
            </Col>
          </Row>

          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>{this.state.action == 'new' ? `Tạo mới` : `Cập nhật`}</ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="name"
                label="Tên thương hiệu"
                value={this.state.name}
                placeholder={"Tên thương hiệu"}
                // error={errors.title}
                onChange={e => this.onChange("name", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="image"
                label="Ảnh thương hiệu"
                type={"file"}
                // error={errors.title}
                onChange={e => { this.onChangeImage(e) }}
                onClick={(e) => { e.target.value = null; this.setState({ image_show: "" }) }}
              // rows="5"
              />
              {
                this.state.image == "" || this.state.image == null || this.state.image == undefined ?
                  "" :
                  <img width="250" height="300" src={
                    this.state.image_show == "" ? `${Constants.BASE_URL}public/image_brand/${this.state.image_link}` : this.state.image} style={{ marginBottom: 20 }} />
              }

              <TextFieldGroup
                field="link"
                label="Link thương hiệu"
                value={this.state.link}
                placeholder={"Link thương hiệu"}
                // error={errors.title}
                onChange={e => this.onChange("link", e.target.value)}
              // rows="5"
              />
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addBrand() : this.updateBrand() }} disabled={this.state.isLoading}>Lưu</CButton>{' '}
              <CButton color="secondary" onClick={e => this.toggleModal("new")}>Đóng</CButton>
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
    margin: '5px'
  },
  tags: {
    float: "right",
    marginRight: "5px"
  },
  searchInput: {
    width: "200px",
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

export default BrandPlugin;
