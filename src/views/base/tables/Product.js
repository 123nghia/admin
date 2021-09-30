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

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      modalCom: false,
      dataApi: [],
      hidden: false,
      action: 'new',
      category_id: "",
      brand_id: "",
      name: "",
      href: "",
      image_show: "",
      image: "",
      description: "",
      image_multiple: [],
      price: "",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      arrOptionBrand: [],
      objectValueBrand: {},
      arrOptionCategory: [],
      objectValueCategory: {},
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
      Constants.LIST_PRODUCT, {}, "", "POST")

    let val = res.data;
    this.pagination(val);
    this.setState({ dataApi: val, isLoading: false })
  }

  searchKey() {
    const { indexPage, key } = this.state;

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.name.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {

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

  onChangeImage_Multiple(e) {
    let files = e.target.files;
    console.log(files)
    //let reader = new FileReader();
    // this.setState({ image: files[0] })
    // reader.readAsDataURL(files[0])
    // reader.onload = (e) => {
    //   this.setState({ image_show: e.target.result })
    // }
  }

  async toggleModal(key) {
    const { modalCom, token, arrOptionBrand, arrOptionCategory } = this.state;
    if (key == 'new') {
      this.setState({
        modalCom: !modalCom,
        action: key,
        category_id: "",
        brand_id: "",
        name: "",
        href: "",
        description: "",
        image_show: "",
        image: "",
        image_multiple: [],
        objectValueBrand: {},
        objectValueCategory: {},
        price: "",
      }, async () => {
        if (arrOptionBrand.length == 0 || arrOptionCategory.length == 0) {

          const res_brand = await API_CONNECT(
            Constants.LIST_BRAND, {}, token, "POST")

          const res_category = await API_CONNECT(
            Constants.LIST_CATEGORY, {}, token, "POST")

          let arrTempOptionBrand = [];
          let arrTempOptionCategory = [];

          let dataBrand = res_brand.data;
          let dataCategory = res_category.data;

          for (let i = 0; i < dataBrand.length; i++) {
            arrTempOptionBrand.push({
              value: dataBrand[i]._id, label: dataBrand[i].name
            })
          }

          for (let i = 0; i < dataCategory.length; i++) {
            arrTempOptionCategory.push({
              value: dataCategory[i]._id, label: dataCategory[i].name
            })
          }

          this.setState({ arrOptionBrand: arrTempOptionBrand, arrOptionCategory: arrTempOptionCategory })
        }
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addProduct() {

    const { category_id, brand_id, name, href, image, price, image_multiple, description } = this.state
    if (name == null || name == '' ||
      image == null || image == '' ||
      category_id == null || category_id == '' ||
      brand_id == null || brand_id == '') {
      alert("Hãy nhập đầy đủ dữ liệu !!!");
      return
    }

    const form = new FormData();
    form.append("image", image);

    await API_CONNECT(Constants.UPLOAD_PRODUCT, form, "", "POST")

    // const formMultiple = new FormData();
    // form.append("image", image_multiple);

    // const resMultiple = await API_CONNECT(Constants.UPLOAD_PRODUCT_MULTIPLE, formMultiple, "", "POST")

    const body = {
      category_id: category_id,
      brand_id: brand_id,
      name: name,
      href: href,
      image: image.name,
      description: description,
      price: price
    }

    this.setState({ isLoading: true });
    var res = await API_CONNECT(
      Constants.ADD_PRODUCT, body, "", "POST")

    if (res.status == 200) {

      this.getData()

      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert("Thêm danh mục thất bại");
      this.setState({ isLoading: false });
    }
  }

  async openUpdate(item) {
    const { token, arrOptionBrand, arrOptionCategory } = this.state;
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      category_id: item.category_id,
      brand_id: item.brand_id,
      name: item.name,
      href: item.href,
      description: item.description,
      image_show: "",
      image: item.image,
      price: item.price,
      objectValueBrand: { value: item.brand_id._id, label: item.brand_id.name },
      objectValueCategory: { value: item.category_id._id, label: item.category_id.name },
      id: item['_id']
    }, async () => {
      if (arrOptionBrand.length == 0 || arrOptionCategory.length == 0) {
        const res_brand = await API_CONNECT(
          Constants.LIST_BRAND, {}, token, "POST")

        const res_category = await API_CONNECT(
          Constants.LIST_CATEGORY, {}, token, "POST")

        let arrTempOptionBrand = [];
        let arrTempOptionCategory = [];

        let dataBrand = res_brand.data;
        let dataCategory = res_category.data;

        for (let i = 0; i < dataBrand.length; i++) {
          arrTempOptionBrand.push({
            value: dataBrand[i]._id, label: dataBrand[i].name
          })
        }

        for (let i = 0; i < dataCategory.length; i++) {
          arrTempOptionCategory.push({
            value: dataCategory[i]._id, label: dataCategory[i].name
          })
        }

        this.setState({ arrOptionBrand: arrTempOptionBrand, arrOptionCategory: arrTempOptionCategory })
      }
    })
  }

  async updateProduct() {
    const { category_id, brand_id, name, href, image, price, description } = this.state

    if (name == null || name == '' ||
      image == null || image == '' ||
      category_id == null || category_id == '' ||
      brand_id == null || brand_id == '') {
      alert("Hãy nhập đầy đủ dữ liệu !!!");
      return
    }

    const form = new FormData();
    form.append("image", image);

    await API_CONNECT(Constants.UPLOAD_PRODUCT, form, "", "POST")

    const body = {
      category_id: category_id,
      brand_id: brand_id,
      name: name,
      href: href,
      image: image.name,
      description: description,
      price: price,
      id: this.state.id,
    }

    this.setState({ isLoading: true });
    var res = await API_CONNECT(
      Constants.UPDATE_PRODUCT, body, "", "POST")

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
      Constants.DELETE_PRODUCT, {
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

  handleChangeBrand = (newValue, actionMeta) => {
    this.setState({ objectValueBrand: newValue, brand_id: newValue.value })
    console.log(newValue.value);
  };

  handleChangeCategory = (newValue, actionMeta) => {
    this.setState({ objectValueCategory: newValue, category_id: newValue.value })
    console.log(newValue.value);
  };

  render() {
    const { data, arrPagination, key, image, image_show, objectValueBrand, arrOptionBrand, objectValueCategory, arrOptionCategory } = this.state;
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
                        <th className="text-center">Tên sản phẩm</th>
                        <th className="text-center">Hình ảnh</th>
                        <th className="text-center">Mô tả</th>
                        <th className="text-center">Đường dẫn</th>
                        <th className="text-center">Thương hiệu</th>
                        <th className="text-center">Danh mục</th>
                        <th className="text-center">Giá</th>
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
                                    item.image == "" || item.image == null ?
                                      <img src={"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg"} width={"60px"} height={"60px"} /> :
                                      <img src={`${Constants.BASE_URL}/public/image_product/${item.image}`} width={"80px"} height={"60px"} />
                                  }
                                </td>
                                <td className="text-center">
                                  <div style={{ width: 250 }}>
                                    {item.description}
                                  </div>
                                </td>
                                <td className="text-center">
                                  <a href={item.href} target="_blank">Đường dẫn chi tiết</a>
                                </td>
                                <td className="text-center">{item.brand_id.name}</td>
                                <td className="text-center">{item.category_id.name}</td>
                                <td className="text-center">{item.price}</td>
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

              <label className="control-label">Mô tả</label>
              <CTextarea
                name="description"
                rows="5"
                value={this.state.description}
                onChange={(e) => { this.setState({ description: e.target.value }) }}
                placeholder="Mô tả"
              />

              <br/>

              <CRow>
                <CCol md="2" lg="2" sm="12" xm="12" lx="2">
                  <CLabel>Thương hiệu:</CLabel>
                </CCol>
                <CCol md="10" lg="10" sm="12" xm="12" lx="10">
                  <CreatableSelect
                    isClearable
                    onChange={this.handleChangeBrand}
                    value={objectValueBrand}
                    options={arrOptionBrand}
                  />
                </CCol>
              </CRow>

              <br />

              <CRow>
                <CCol md="2" lg="2" sm="12" xm="12" lx="2">
                  <CLabel>Danh mục:</CLabel>
                </CCol>
                <CCol md="10" lg="10" sm="12" xm="12" lx="10">
                  <CreatableSelect
                    isClearable
                    onChange={this.handleChangeCategory}
                    value={objectValueCategory}
                    options={arrOptionCategory}
                  />
                </CCol>
              </CRow>

              <br />

              <TextFieldGroup
                field="image"
                label="Ảnh sản phẩm"
                type={"file"}
                onChange={e => { this.onChangeImage(e) }}
                onClick={(e) => { e.target.value = null; this.setState({ image_show: "" }) }}
              />
              {
                image == "" ? "" :
                  <img width="350" height="300" src={
                    image_show == "" ?
                      `${Constants.BASE_URL}/public/image_product/${image}` : image_show} style={{ marginBottom: 20 }} />
              }

              {/* <TextFieldGroup
                field="image_multiple"
                label="Ảnh nổi bật"
                type={"file"}
                onChange={e => { this.onChangeImage_Multiple(e) }}
                onClick={(e) => { e.target.value = null;}}
              /> */}

              <TextFieldGroup
                field="price"
                label="Giá"
                value={this.state.price}
                placeholder={"Giá"}
                // error={errors.title}
                onChange={e => this.onChange("price", e.target.value)}
              // rows="5"
              />
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addProduct() : this.updateProduct() }} disabled={this.state.isLoading}>Save</CButton>{' '}
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

export default Product;