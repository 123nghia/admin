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
  CLabel,
  CSelect,
  CButton,
  CRow,
  CCol
} from '@coreui/react'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../../../contants/contants";
import TextFieldGroup from "../../../Common/TextFieldGroup";
import axios from 'axios'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');

class Product extends Component {
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
      type_id: '',
      brand_id: '',
      name: '',
      href: '',
      image: '',
      brands: [],
      types: [],
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      type: localStorage.getItem('type'),
      user: localStorage.getItem('user'),
      isLoading: false,
      BASE_URL: Constants.BASE_URL_CURRENT
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
    const res_product = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_PRODUCT,
      method: 'GET'
    });

    const res_brand = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_BRAND,
      method: 'GET'
    });

    const res_type = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_TYPE,
      method: 'GET'
    });

    let val = res_product.data.data;
    let brands = res_brand.data.data;
    let types = res_type.data.data;
    this.pagination(val);
    this.setState({ dataApi: val, brands: brands, types: types });

    let active = 0

    this.setState({ isLoading: false, totalActive: active });
  }

  getData_Company = async () => {
    this.setState({ isLoading: true });
    const res_product = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_PRODUCT_COMPANY + JSON.parse(this.state.user).company_id,
      method: 'GET'
    });

    const res_brand = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_BRAND_COMPANY + JSON.parse(this.state.user).company_id,
      method: 'GET'
    });

    const res_type = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_TYPE_COMPANY + JSON.parse(this.state.user).company_id,
      method: 'GET'
    });

    let val = res_product.data.data;
    let brands = res_brand.data.data;
    let types = res_type.data.data;

    this.pagination(val);
    this.setState({ dataApi: val, brands: brands, types: types });

    let active = 0

    this.setState({ isLoading: false, totalActive: active });
  }

  searchKey(key) {
    this.setState({ key: key })

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.name.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {
          d.push(val)
        }
      })
      let active = 0

      this.setState({ data: d, totalActive: active })
    } else {
      let active = 0

      this.state.dataApi.map(val => {
        if (val.Status == "Actived") {
          active = active + 1
        }
      })

      this.setState({ data: this.state.dataApi, totalActive: active })
    }
  }

  async toggleModal(key) {

    if (key == 'new') {
      this.setState({
        modalCom: !this.state.modalCom,
        action: key,
        name: "",
        image: "",
        href: "",
        type_id: this.state.types.length == 0 ? '' : this.state.types[0]._id,
        brand_id: this.state.brands.length == 0 ? '' : this.state.brands[0]._id,
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  onChangeImage(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      this.setState({ image: e.target.result })
    }
  }

  async addRoles() {
    const { name, image, href, type_id, brand_id } = this.state
    if (name == null || name == '' ||
      image == null || image == '' ||
      href == null || href == '' ||
      type_id == null || type_id == '' ||
      brand_id == null || brand_id == '') {
      alert("Please fill in all the requirements");
      return
    }

    const body = {
      type_id: type_id,
      brand_id: brand_id,
      name: name,
      href: href,
      image: image,
      //company_id: this.state.type == '0' || this.state.type == '1' ? "" : JSON.parse(this.state.user).company_id
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.ADD_PRODUCT,
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
      alert("Thêm sản phẩm thất bại");
      this.setState({ isLoading: false });
    }
  }

  async openUpdate(item) {
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      name: item.name,
      image: item.image,
      href: item.href,
      type_id: item.type_id,
      brand_id: item.brand_id,
      id: item['_id']
    })
  }

  async updateUser() {
    const { name, image, href, type_id, brand_id } = this.state
    if (name == null || name == '' ||
      image == null || image == '' ||
      href == null || href == '' ||
      type_id == null || type_id == '' ||
      brand_id == null || brand_id == '') {
      alert("Please fill in all the requirements");
      return
    }

    const body = {
      type_id: type_id,
      brand_id: brand_id,
      name: name,
      href: href,
      image: image,
      id: this.state.id
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_PRODUCT,
      method: 'POST',
      data: body
    });

    if (res.status == 200) {
      if (this.state.type == '0' || this.state.type == '1') {
        this.getData()
      } else {
        this.getData_Company()
      };
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
      url: Constants.DELETE_PRODUCT,
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
      };
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

  searchKey() {
    const { indexPage, key } = this.state;
    // this.setState({ key: key })

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.name.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.brand.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.type.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {

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

  render() {
    const { data, arrPagination, brands, types, type, key } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Danh sách sản phẩm (Page: {this.state.indexPage + 1}))
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
                        {
                          type == "0" || type == "1" ? <CButton outline color="primary" style={styles.floatRight} size="sm" onClick={async e => await this.toggleModal("new")}>Thêm</CButton>
                            : ""
                        }
                      </CCol>
                    </CRow>
                  </div>
                </CardHeader>
                <CardBody>

                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Loại</th>
                        <th className="text-center">Thương hiệu</th>
                        <th className="text-center">Tên sản phẩm</th>
                        <th className="text-center">Đường dẫn</th>
                        <th className="text-center">Ảnh</th>
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
                                <td className="text-center">{item.type}</td>
                                <td className="text-center">{item.brand}</td>
                                <td className="text-center">{item.name}</td>
                                <td className="text-center">
                                  <a
                                    href={item.href}
                                    target="_blank"
                                  >{`Open web`}</a>
                                </td>
                                <td className="text-center" style={{ width: '10%' }}>
                                  <img src={item.image || this.state.BASE_URL + "/images/calendar.png"} width={"60px"} height={"60px"} />
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
            <ModalHeader>{this.state.action == 'new' ? `Create` : `Update`}</ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="name"
                label="Tên sản phẩm"
                value={this.state.name}
                placeholder={"Tên sản phẩm"}
                // error={errors.title}
                onChange={e => this.onChange("name", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="href"
                label="Đường dẫn"
                value={this.state.href}
                placeholder={"Đường dẫn"}
                // error={errors.title}
                onChange={e => this.onChange("href", e.target.value)}
              // rows="5"
              />

              {/* <TextFieldGroup
                field="image"
                label="Ảnh"
                value={this.state.image}
                placeholder={"Ảnh"}
                // error={errors.title}
                onChange={e => this.onChange("image", e.target.value)}
              // rows="5"
              /> */}

              <TextFieldGroup
                field="image"
                label="Ảnh"
                type={"file"}
                // error={errors.title}
                onChange={e => { this.onChangeImage(e) }}
                onClick={(e) => { e.target.value = null }}
              // rows="5"
              />

              <CLabel>Thương hiệu:</CLabel>
              <div style={{ width: "100%" }}>
                <CSelect onChange={async e => { this.setState({ brand_id: e.target.value }) }} custom size="sm" name="selectSm" id="SelectLm">
                  {
                    brands.map((item, i) => {
                      if (item._id == this.state.brand_id) {
                        return (
                          <option selected key={i} value={item._id}>{item.name}</option>
                        );
                      } else {
                        return (
                          <option key={i} value={item._id}>{item.name}</option>
                        );
                      }
                    })
                  }
                </CSelect>
              </div>

              <CLabel>Loại:</CLabel>
              <div style={{ width: "100%" }}>
                <CSelect onChange={async e => { this.setState({ type_id: e.target.value }); console.log(e.target.value) }} custom size="sm" name="selectSm" id="SelectLm">
                  {
                    types.map((item, i) => {
                      if (item._id == this.state.type_id) {
                        return (
                          <option selected key={i} value={item._id}>{item.name}</option>
                        );
                      } else {
                        return (
                          <option key={i} value={item._id}>{item.name}</option>
                        );
                      }
                    })
                  }
                </CSelect>
              </div>
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addRoles() : this.updateUser() }} disabled={this.state.isLoading}>Save</CButton>{' '}
              <CButton color="secondary" onClick={e => this.toggleModal("new")}>Cancel</CButton>
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

export default Product;