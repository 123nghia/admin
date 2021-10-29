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
  CLabel,
  CTextarea
} from '@coreui/react'

import API_CONNECT from "../../../functions/callAPI";
import CreatableSelect from 'react-select/creatable';
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

class SEOInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      modalCom: false,
      dataApi: [],
      hidden: false,
      action: 'new',
      product_id: "",
      image: "",
      image_show: "",
      title: "",
      keyword: "",
      description: "",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      type: localStorage.getItem('type'),
      isLoading: false,
      arrOptionProduct: [],
      objectValueProduct: {},
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
      Constants.LIST_SEO_INFO, {}, "", "POST")

    var res_product = await API_CONNECT(
      Constants.LIST_PRODUCT, {}, "", "POST")

    let val = res.data;
    let val_product = res_product.data;

    let arrTempOptionProduct = [];

    for (let i = 0; i < val_product.length; i++) {
      arrTempOptionProduct.push({
        value: val_product[i]._id, label: val_product[i].name
      })
    }

    this.pagination(val);
    this.setState({ dataApi: val, isLoading: false, arrOptionProduct: arrTempOptionProduct })
  }

  searchKey() {
    const { indexPage, key } = this.state;

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.title.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {

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
    let reader = new FileReader();
    this.setState({ image: files[0] })
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      this.setState({ image_show: e.target.result })
    }
  }

  async toggleModal(key) {
    if (key == 'new') {
      this.setState({
        modalCom: !this.state.modalCom,
        action: key,
        product_id: "",
        image: "",
        image_show: "",
        title: "",
        keyword: "",
        description: "",
        objectValueCategory: {},
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addSEOInfo() {
    const { product_id, title, image, keyword, description } = this.state
    if (title == null || title == '' ||
      image == null || image == '') {
      alert("Hãy nhập đầy đủ dữ liệu !!!");
      return
    }

    const form = new FormData();
    form.append("image", image);

    await API_CONNECT(Constants.UPLOAD_SEO_INFO, form, "", "POST")

    const body = {
      product_id: product_id,
      image: image.name,
      title: title,
      keyword: keyword,
      description: description
    }

    this.setState({ isLoading: true });
    var res = await API_CONNECT(
      Constants.ADD_SEO_INFO, body, "", "POST")

    if (res.status == 200) {

      this.getData()

      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert("Thêm thất bại");
      this.setState({ isLoading: false });
    }
  }

  async openUpdate(item) {
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      product_id: item.product_id,
      image: item.product_id,
      image_show: "",
      title: item.product_id,
      keyword: item.product_id,
      description: item.product_id,
      objectValueProduct: { value: item.product_id._id, label: item.product_id.name },
      id: item['_id']
    })
  }

  async updateBrand() {
    const { product_id, title, image, keyword, description } = this.state

    if (title == null || title == '' ||
      image == null || image == '') {
      alert("Hãy nhập đầy đủ dữ liệu !!!");
      return
    }

    const form = new FormData();
    form.append("image", image);

    await API_CONNECT(Constants.UPLOAD_SEO_INFO, form, "", "POST")

    const body = {
      product_id: product_id,
      image: image.name,
      title: title,
      keyword: keyword,
      description: description,
      id: this.state.id
    }

    this.setState({ isLoading: true });
    var res = await API_CONNECT(
      Constants.UPDATE_SEO_INFO, body, "", "POST")

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
      Constants.DELETE_SEO_INFOR, {
      "id": this.state.id
    }, "", "POST")

    if (res.status == 200) {
      this.getData()
      this.setState({ modalDelete: !this.state.modalDelete, delete: null })
    } else {
      alert("Xoá thất bại");
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

  handleChangeProduct = (newValue, actionMeta) => {
    this.setState({ objectValueProduct: newValue, product_id: newValue.value })
  };

  render() {
    const { data, arrPagination, key, image, image_show, objectValueProduct, arrOptionProduct } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Danh sách
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
                        <th className="text-center">Sản phẩm</th>
                        <th className="text-center">Tiêu đề</th>
                        <th className="text-center">Hình ảnh</th>
                        <th className="text-center">Từ khoá</th>
                        <th className="text-center">Mô tả</th>
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
                                <td className="text-center">{item.product_id}</td>
                                <td className="text-center">{item.title}</td>
                                <td className="text-center">
                                  {
                                    item.image == "" || item.image == null ?
                                      <img src={"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg"} width={"60px"} height={"60px"} /> :
                                      <img src={`${Constants.BASE_URL}/public/image_seo/${item.image}`} width={"80px"} height={"60px"} />
                                  }
                                </td>
                                <td className="text-center">
                                  {item.keyword}
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

              <CRow>
                <CCol md="2" lg="2" sm="12" xm="12" lx="2">
                  <CLabel>Sản phẩm:</CLabel>
                </CCol>
                <CCol md="10" lg="10" sm="12" xm="12" lx="10">
                  <CreatableSelect
                    isClearable
                    onChange={this.handleChangeProduct}
                    value={objectValueProduct}
                    options={arrOptionProduct}
                  />
                </CCol>
              </CRow>

              <br />
              <TextFieldGroup
                field="title"
                label="Tiêu đề"
                value={this.state.title}
                placeholder={"Tiêu đề"}
                // error={errors.title}
                onChange={e => this.onChange("title", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="image"
                label="Hình ảnh"
                type={"file"}
                onChange={e => { this.onChangeImage(e) }}
                onClick={(e) => { e.target.value = null; this.setState({ image_show: "" }) }}
              />
              {
                image == "" ? "" :
                  <img width="250" height="300" src={
                    image_show == "" ?
                      `${Constants.BASE_URL}/public/image_seo/${image}` : image_show} style={{ marginBottom: 20 }} />
              }

              <TextFieldGroup
                field="keyword"
                label="Từ khoá"
                value={this.state.keyword}
                placeholder={"Từ khoá"}
                // error={errors.title}
                onChange={e => this.onChange("keyword", e.target.value)}
              // rows="5"
              />



              <CLabel>Mô tả</CLabel>
              <CTextarea rows={9} value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} />

            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addSEOInfo() : this.updateBrand() }} disabled={this.state.isLoading}>Save</CButton>{' '}
              <CButton color="secondary" onClick={e => this.toggleModal("new")}>Đóng</CButton>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalDelete} toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })} className={this.props.className}>
            <ModalHeader toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>{`Delete`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Xác nhận xóa !!!`}</label>
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => this.delete()} disabled={this.state.isLoading}>Delete</CButton>{' '}
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

export default SEOInfo;
