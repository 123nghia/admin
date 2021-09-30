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
  CSelect,
  CBadge,
  CCard,
  CCardHeader,
  CCollapse,
  CCardBody,
  CDataTable,
  CFormGroup,
  CInputCheckbox,
  CInput
} from '@coreui/react'

import CreatableSelect from 'react-select/creatable';
import API_CONNECT from "../../../functions/callAPI";
import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Constants from "../../../contants/contants";
import TextFieldGroup from "../../Common/TextFieldGroup";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import lodash from "lodash";
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
      modalDetail: false,
      dataApi: [],
      hidden: false,
      action: 'new',
      name: "",
      image: "",
      image_show: "",
      type: "0",
      status: "0",
      voucher: 0,
      time_start: new Date(),
      time_finish: new Date(),
      arrDetailBanner: [],
      modalDelete: false,
      delete: null,
      arrPagination: [],
      arrOptionCategory: [],
      objectValueCategory: {},
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      isLoading: false,
      accordion: 0,
      arrCategory: [],
      arrAllProductOfAllCategory: [],
      arrAllProductChoosed: [],
      arrChooseCategory: [],
      arrUpdate: [],
      arrRemoveOnUpdate: []
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
      Constants.LIST_DEAL, {}, "", "POST")

    let val = res.data.dataAdmin;
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

  async toggleModal(key) {
    const { modalCom, token, arrOptionCategory } = this.state;
    if (key == 'new') {
      this.setState({
        modalCom: !modalCom,
        action: key,
        name: "",
        category: [],
        arrCategory: [],
        image: "",
        image_show: "",
        type: "0",
        status: "0",
        voucher: 0,
        time_finish: new Date(),
        time_start: new Date(),
        objectValueCategory: {},
      }, async () => {
        if (arrOptionCategory.length == 0) {

          const res_category = await API_CONNECT(
            Constants.LIST_CATEGORY, {}, token, "POST")

          let arrTempOptionCategory = [];

          let dataCategory = res_category.data;

          for (let i = 0; i < dataCategory.length; i++) {
            arrTempOptionCategory.push({
              value: dataCategory[i]._id, label: dataCategory[i].name
            })
          }

          this.setState({ arrOptionCategory: arrTempOptionCategory })
        }
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addDeal() {
    const { name, image, type, status, voucher, arrCategory, arrAllProductChoosed, time_start, time_finish } = this.state;

    if (arrCategory.length == 0) {
      alert(`Chưa thiết lập banner !!!`);
      return
    }

    for (let i = 0; i < arrCategory.length; i++) {
      if (arrCategory[i].category_id == "" || arrAllProductChoosed[i].length == 0) {
        alert(`Trong phần thiết lập banner, banner thứ ${i + 1} chưa chọn bất kì danh mục hoặc sản phẩm nào !!!`);
        return
      } else {
        arrCategory[i].product = arrAllProductChoosed[i]
      }
    }

    if (name == null || name == '' ||
      image == null || image == '') {
      alert("Hãy nhập đầy đủ dữ liệu !!!");
      return
    }

    const form = new FormData();
    form.append("image", image);

    await API_CONNECT(Constants.UPLOAD_DEAL, form, "", "POST")

    const body = {
      name: name,
      image: image.name,
      category: arrCategory,
      type: type,
      status: status,
      voucher: voucher,
      time_start: time_start,
      time_finish: time_finish
    }

    this.setState({ isLoading: true });
    var res = await API_CONNECT(
      Constants.ADD_DEAL, body, "", "POST")

    if (res.status == 200) {

      this.getData()

      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert("Thêm danh mục thất bại");
      this.setState({ isLoading: false });
    }
  }

  changeDealType(e) {
    this.setState({ type: e.target.value })
  }

  async openUpdate(item) {
    const { token, arrOptionCategory, arrRemoveOnUpdate } = this.state;
    for (let i = 0; i < arrRemoveOnUpdate.length; i++) {
      item.category.push(arrRemoveOnUpdate[i])
    }

    this.setState({
      arrRemoveOnUpdate: [],
      modalCom: !this.state.modalCom,
      action: "update",
      name: item.name,
      image: item.image,
      image_show: "",
      type: item.type,
      time_start: item.time_start,
      time_finish: item.time_finish,
      status: item.status,
      voucher: item.voucher,
      id: item['_id']
    }, async () => {
      if (arrOptionCategory.length == 0) {
        const res_category = await API_CONNECT(
          Constants.LIST_CATEGORY, {}, token, "POST")

        let arrTempOptionCategory = [];

        let dataCategory = res_category.data;

        for (let i = 0; i < dataCategory.length; i++) {
          arrTempOptionCategory.push({
            value: dataCategory[i]._id, label: dataCategory[i].name
          })
        }

        this.setState({ arrOptionCategory: arrTempOptionCategory })
      }
    })
  }

  async updateProduct() {
    const { name, image, type, status, voucher, time_start, time_finish, arrUpdate } = this.state
    if (name == null || name == '' ||
      image == null || image == '') {
      alert("Hãy nhập đầy đủ dữ liệu !!!");
      return
    }

    const form = new FormData();
    form.append("image", image);

    await API_CONNECT(Constants.UPLOAD_DEAL, form, "", "POST")

    const body = {
      name: name,
      image: image.name,
      type: type,
      status: status,
      voucher: voucher,
      time_start: time_start,
      time_finish: time_finish,
      id: this.state.id,
    }

    this.setState({ isLoading: true });
    var res = await API_CONNECT(
      Constants.UPDATE_DEAL, body, "", "POST")

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
      Constants.DELETE_DEAL, {
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

  getBadge_Type(type) {
    switch (type) {
      case '0': return { title: 'Ưu đãi mới nhất', color: "primary" }
      case '1': return { title: 'Ưu đãi đang diễn ra', color: "success" }
      case '2': return { title: 'Ưu đãi đã kết thúc', color: "danger" }
      default: return 'Lỗi'
    }
  }

  handleChangeCategory = async (e, i) => {
    const { arrCategory, arrAllProductOfAllCategory, arrAllProductChoosed, arrOptionCategory, arrChooseCategory } = this.state;
    let res = await API_CONNECT(
      Constants.LIST_PRODUCT_CATEGORY, {
      "category_id": e.value
    }, "", "POST")

    let data = res.data;
    arrCategory[i].category_id = e.value;
    arrAllProductOfAllCategory[i] = data
    arrAllProductChoosed[i] = new Array()

    const found = arrOptionCategory.find(element => element.value == e.value);
    arrChooseCategory[i] = new Array();
    arrChooseCategory[i].push(found)
    this.setState({
      arrCategory: arrCategory,
      arrAllProductOfAllCategory: arrAllProductOfAllCategory,
      arrAllProductChoosed: arrAllProductChoosed,
      arrChooseCategory: arrChooseCategory
    });
  };

  handleUpdateCategory = async (e, i) => {
    const { arrUpdate, arrOptionCategory } = this.state;
    console.log(arrUpdate[i]);
    // console.log(e.value);
    // console.log(arrOptionCategory.find(val => val.value == e.value));
  }

  pushCategory = () => {
    const { arrCategory, arrAllProductOfAllCategory, arrAllProductChoosed, arrChooseCategory } = this.state;
    arrCategory.push({
      category_id: "",
      product: []
    })
    arrAllProductOfAllCategory.push([])
    arrAllProductChoosed.push([])
    arrChooseCategory.push([])
    this.setState({
      arrCategory: arrCategory,
      arrAllProductOfAllCategory: arrAllProductOfAllCategory,
      arrAllProductChoosed: arrAllProductChoosed
    });
  };

  onRemoveCard = (idCategory) => {
    const { arrCategory, arrAllProductOfAllCategory, arrAllProductChoosed, arrChooseCategory } = this.state;

    arrCategory.splice(idCategory, 1);
    arrAllProductOfAllCategory.splice(idCategory, 1);
    arrAllProductChoosed.splice(idCategory, 1);
    arrChooseCategory.splice(idCategory, 1);

    this.setState({
      arrCategory: arrCategory,
      arrAllProductOfAllCategory: arrAllProductOfAllCategory,
      arrAllProductChoosed: arrAllProductChoosed,
      arrChooseCategory: arrChooseCategory
    })
  }

  onCancelModal = () => {
    let { arrCategory, arrAllProductOfAllCategory, arrAllProductChoosed, arrChooseCategory, modalCom } = this.state;
    arrCategory = new Array()
    arrAllProductOfAllCategory = new Array()
    arrAllProductChoosed = new Array()
    arrChooseCategory = new Array()
    this.setState({
      modalCom: !modalCom,
      arrCategory: arrCategory,
      arrAllProductOfAllCategory: arrAllProductOfAllCategory,
      arrAllProductChoosed: arrAllProductChoosed,
      arrChooseCategory: arrChooseCategory
    });
  }

  renderAddForm() {
    const { arrCategory, arrChooseCategory, arrOptionCategory, arrAllProductOfAllCategory, arrAllProductChoosed } = this.state;
    return (
      <div>
        <CRow>
          <CCol md="5" lg="5" sm="12" xm="12" lx="5">
            <h3>
              <strong>Tạo dữ liệu cho banner</strong>
            </h3>
          </CCol>
          <CCol md="7" lg="7" sm="12" xm="12" lx="7">
            <CButton block active variant="ghost" color="success" aria-pressed="true"
              onClick={() => { this.pushCategory() }}>
              Thêm sản phẩm
            </CButton>
          </CCol>
        </CRow>
        <div style={{ maxHeight: 450, overflowY: 'scroll', border: '1px solid red', marginTop: 15, borderRadius: 5 }}>
          {
            arrCategory.map((item, i) => {
              let idCategory = i;
              return (
                <Card style={{ margin: 20 }}>
                  <CardHeader style={{ backgroundColor: '#339966', height: 50 }}>
                    <CButton size="sm" color="danger" style={{ float: 'right' }} onClick={() => {
                      this.onRemoveCard(idCategory)
                    }}>X</CButton>
                  </CardHeader>
                  <CardBody>
                    <CRow style={{ margin: 20 }}>
                      <CCol md="3" lg="3" sm="12" xm="12" lx="3">
                        <CLabel>Chọn danh mục:</CLabel>
                      </CCol>
                      <CCol md="9" lg="9" sm="12" xm="12" lx="9">
                        <CreatableSelect
                          isClearable
                          value={arrChooseCategory[idCategory][0]}
                          onChange={(e) => { this.handleChangeCategory(e, idCategory) }}
                          options={arrOptionCategory}
                        />
                      </CCol>
                    </CRow>
                    {
                      arrAllProductOfAllCategory[idCategory].length > 0 ?
                        <Card>
                          <CardHeader>
                            Danh sách sản phẩm
                          </CardHeader>
                          <CardBody style={{ height: 250, overflowY: 'scroll' }}>
                            <CRow>
                              {
                                arrAllProductOfAllCategory[idCategory].map((item_product, i_product) => {
                                  return (
                                    <CCol md="6" lg="6" sm="12" xm="12" lx="6">
                                      <CFormGroup variant="custom-checkbox" inline>
                                        <CInputCheckbox custom id={`${item_product._id}`}
                                          onClick={(e) => {
                                            if (e.target.checked) {
                                              let data = arrAllProductOfAllCategory[idCategory][i_product]
                                              arrAllProductChoosed[idCategory].push({
                                                product_id: data._id
                                              })

                                              this.setState({ arrAllProductChoosed: arrAllProductChoosed })
                                            } else {
                                              let data = arrAllProductOfAllCategory[idCategory][i_product]
                                              const findI = (element) => element.name == data.name;
                                              const index = arrAllProductChoosed[idCategory].findIndex(findI)
                                              arrAllProductChoosed[idCategory].splice(index, 1)

                                              this.setState({ arrAllProductChoosed: arrAllProductChoosed })
                                            }
                                          }}
                                        />
                                        <CLabel variant="custom-checkbox" htmlFor={item_product._id} style={{ margin: 10 }}>
                                          <div><strong>Tên sp: </strong>{item_product.name}</div>
                                          <CInput placeholder={"Số lượng deal"} disabled={
                                            arrAllProductChoosed[idCategory].findIndex(val => val.product_id == item_product._id) > -1 ?
                                              false : true
                                          } type="number" style={{ marginBottom: 3 }}
                                            onChange={(e) => {
                                              const index = arrAllProductChoosed[idCategory].findIndex(val => val.product_id == item_product._id);
                                              arrAllProductChoosed[idCategory][index].total_deal = Number(e.target.value)
                                              this.setState({ arrAllProductChoosed: arrAllProductChoosed })
                                            }} />

                                          <img src={`${Constants.BASE_URL}/public/image_product/${item_product.image}`} width={"70px"} height={"90px"} />

                                        </CLabel>
                                      </CFormGroup>
                                    </CCol>
                                  )
                                })
                              }
                            </CRow>
                          </CardBody>
                        </Card> : ""
                    }
                  </CardBody>
                </Card>
              )
            })
          }
        </div>
      </div>
    )
  }

  render() {
    const { data, arrPagination, key, image, action, time_start, time_finish,
      image_show, modalDetail, arrDetailBanner, accordion} = this.state;
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
                        <th className="text-center">Tên banner</th>
                        <th className="text-center">Hình ảnh</th>
                        <th className="text-center">Loại deal</th>
                        {/* <th className="text-center">Trạng thái</th> */}
                        <th className="text-center">Voucher</th>
                        <th className="text-center">Thời gian bắt đầu</th>
                        <th className="text-center">Thời gian kết thúc</th>
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
                                      <img src={`${Constants.BASE_URL}/public/image_deal/${item.image}`} width={"80px"} height={"60px"} />
                                  }
                                </td>
                                <td className="text-center">
                                  <CBadge color={this.getBadge_Type(item.type).color}>
                                    {this.getBadge_Type(item.type).title}
                                  </CBadge>
                                </td>
                                {/* <td className="text-center">{item.status}</td> */}
                                <td className="text-center">{item.voucher} %</td>
                                <td className="text-center">
                                  {
                                    (new Date(item.time_start)).toLocaleDateString()
                                  }
                                </td>
                                <td className="text-center">
                                  {
                                    (new Date(item.time_finish)).toLocaleDateString()
                                  }
                                </td>
                                <td className="text-center">
                                  <CButton style={styles.mgl5} outline color="info" size="sm" onClick={async (e) => {
                                    this.setState({ arrDetailBanner: item.category, modalDetail: !modalDetail })
                                  }} >
                                    <CIcon name="cil-magnifying-glass" />
                                  </CButton>
                                  <CButton style={styles.mgl5} outline color="primary" size="sm" onClick={async (e) => await this.openUpdate(item)} >
                                    <CIcon name="cilPencil" />
                                  </CButton>
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

          <Modal size="xl" isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>{this.state.action == 'new' ? `Tạo mới` : `Cập nhật`}</ModalHeader>
            <ModalBody>
              <CRow>
                <CCol md="3" lg="3" sm="12" xm="12" lx="3">
                  <TextFieldGroup
                    field="name"
                    label="Tên banner"
                    value={this.state.name}
                    placeholder={"Tên deal"}
                    // error={errors.title}
                    onChange={e => this.onChange("name", e.target.value)}
                  // rows="5"
                  />

                  <TextFieldGroup
                    field="image"
                    label="Ảnh banner"
                    type={"file"}
                    onChange={e => { this.onChangeImage(e) }}
                    onClick={(e) => { e.target.value = null; this.setState({ image_show: "" }) }}
                  />
                  {
                    image == "" || image == null ? "" :
                      <img width="150" height="100" src={
                        image_show == "" ?
                          `${Constants.BASE_URL}/public/image_deal/${image}` : image_show} style={{ marginBottom: 20 }} />
                  }

                  <div style={{ width: "100%" }} className="mt-3">
                    <CLabel>Loại deal:</CLabel>
                    {
                      <CSelect onChange={async e => { this.changeDealType(e) }} custom size="sm" name="selectSm" id="SelectLm">
                        {
                          ["0", "1", "2"].map((item, i) => {
                            if (item == this.state.type) {
                              return (
                                <option selected key={i} value={item}>
                                  {
                                    item == "0" ?
                                      "Ưu đãi mới nhất" : item == "1" ?
                                        "Đang diễn ra" : "Đã kết thúc"
                                  }
                                </option>
                              );
                            } else {
                              return (
                                <option key={i} value={item}>
                                  {
                                    item == "0" ?
                                      "Ưu đãi mới nhất" : item == "1" ?
                                        "Đang diễn ra" : "Đã kết thúc"
                                  }
                                </option>
                              );
                            }
                          })
                        }
                      </CSelect>
                    }
                  </div>

                  <TextFieldGroup
                    field="voucher"
                    label="Voucher"
                    value={this.state.voucher}
                    placeholder={"Voucher"}
                    // error={errors.title}
                    onChange={e => this.onChange("voucher", e.target.value)}
                  // rows="5"
                  />


                  <div style={styles.datePicker}>
                    <label style={styles.flexLabel}>Ngày bắt đầu:</label>
                    <DatePicker style={styles.flexOption} selected={new Date(time_start)} onChange={(date) => this.setState({ time_start: date })} />
                  </div>

                  <div style={styles.datePicker}>
                    <label style={styles.flexLabel}>Ngày kết thúc:</label>
                    <DatePicker style={styles.flexOption} selected={new Date(time_finish)} onChange={(date) => this.setState({ time_finish: date })} />
                  </div>

                </CCol>
                <CCol md="9" lg="9" sm="12" xm="12" lx="9">
                  {
                    action == "new" ?
                      //Thêm mới banner
                      this.renderAddForm() : ""
                      //Cập nhập banner
                      // <div>
                      //   <CRow>
                      //     <CCol md="5" lg="5" sm="12" xm="12" lx="5">
                      //       <h3>
                      //         <strong>Thiết lập dữ liệu cho banner</strong>
                      //       </h3>
                      //     </CCol>
                      //     <CCol md="7" lg="7" sm="12" xm="12" lx="7">
                      //       <CButton block active variant="ghost" color="success" aria-pressed="true"
                      //         onClick={() => { }}>
                      //         Tạo thêm một danh mục mới
                      //       </CButton>
                      //     </CCol>
                      //   </CRow>
                      //   <div style={{ maxHeight: 500, overflowY: 'scroll', border: '1px solid red', marginTop: 15, borderRadius: 5 }}>
                      //     {
                      //       arrUpdate.map((item, i) => {
                      //         return (
                      //           <Card style={{ margin: 20 }}>
                      //             <CardHeader style={{ backgroundColor: '#339966' }}>
                      //               <CButton color="danger" style={{ float: 'right' }} onClick={() => {
                      //                 arrRemoveOnUpdate.push(arrUpdate[i])
                      //                 arrUpdate.splice(i, 1);
                      //                 this.setState({ arrUpdate: arrUpdate, arrRemoveOnUpdate: arrRemoveOnUpdate });
                      //               }}>X</CButton>
                      //             </CardHeader>
                      //             <CardBody>
                      //               <CRow style={{ margin: 20 }}>
                      //                 <CCol md="3" lg="3" sm="12" xm="12" lx="3">
                      //                   <CLabel>Chọn danh mục cho banner:</CLabel>
                      //                 </CCol>
                      //                 <CCol md="9" lg="9" sm="12" xm="12" lx="9">
                      //                   <CreatableSelect
                      //                     isClearable
                      //                     value={arrOptionCategory.find(val => val.value == item.category_id)}
                      //                     onChange={(e) => {
                      //                       this.handleUpdateCategory(e, i)
                      //                     }}
                      //                     options={arrOptionCategory}
                      //                   />
                      //                 </CCol>
                      //               </CRow>
                      //               {
                      //                 item.product.length > 0 ?
                      //                   <Card>
                      //                     <CardHeader>
                      //                       Danh sách sản phẩm
                      //                     </CardHeader>
                      //                     <CardBody style={{ height: 250, overflowY: 'scroll' }}>
                      //                       <CRow>
                      //                         {
                      //                           item.product.map((item_product, i_product) => {
                      //                             return (
                      //                               <CCol md="4" lg="4" sm="12" xm="12" lx="4">
                      //                                 <CFormGroup variant="custom-checkbox" inline>
                      //                                   <CInputCheckbox
                      //                                     custom
                      //                                     id={`${item_product._id}`}
                      //                                     defaultChecked
                      //                                     onClick={(e) => {
                      //                                       if (e.target.checked) {

                      //                                       } else {

                      //                                       }
                      //                                     }}
                      //                                   />
                      //                                   <CLabel variant="custom-checkbox" htmlFor={item_product._id} style={{ margin: 10 }}>

                      //                                     <div><strong>Tên sp: </strong>{item_product.name}</div>
                      //                                     <CRow>
                      //                                       <CCol md="5" lg="5" sm="12" xm="12" lx="5">
                      //                                         <strong>SL deal:</strong>
                      //                                       </CCol>
                      //                                       <CCol md="7" lg="7" sm="12" xm="12" lx="7">
                      //                                         <CInput placeholder={"Số lượng deal"} value={item_product.total_deal} disabled={true} type="number" style={{ marginBottom: 3, maxWidth: 150 }}
                      //                                           onChange={(e) => {

                      //                                           }} />
                      //                                       </CCol>
                      //                                     </CRow>

                      //                                     <img src={`${Constants.BASE_URL}/public/image_product/${item_product.image}`} width={"70px"} height={"90px"} />

                      //                                   </CLabel>
                      //                                 </CFormGroup>
                      //                               </CCol>
                      //                             )
                      //                           })
                      //                         }
                      //                       </CRow>
                      //                     </CardBody>
                      //                   </Card> : ""
                      //               }
                      //             </CardBody>
                      //           </Card>
                      //         )
                      //       })
                      //     }
                      //   </div>
                      // </div>
                  }

                  <br />
                </CCol>
              </CRow>

            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addDeal() : this.updateProduct() }} disabled={this.state.isLoading}>Lưu</CButton>{' '}
              <CButton color="secondary" onClick={e => { this.onCancelModal() }}>Đóng</CButton>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalDelete} toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })} className={this.props.className}>
            <ModalHeader toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>{`Delete`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Xác nhận xóa !!!`}</label>
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => this.delete()} disabled={this.state.isLoading}>Xoá</CButton>{' '}
              <CButton color="secondary" onClick={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>Đóng</CButton>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalDetail} size="xl" className={this.props.className}>
            <ModalHeader>Chi tiết banner</ModalHeader>
            <ModalBody style={{ height: 500, overflowY: 'scroll' }}>
              {
                arrDetailBanner.map((item, i) => {
                  return (
                    <CCard className="mb-0" style={{ margin: 5 }} >
                      <CCardHeader id="headingOne">
                        <CRow>
                          <CCol sm="12" lg="4">
                            <CButton block color="link" className="text-left m-0 p-0"
                              onClick={() => { this.setState({ accordion: accordion == i ? null : i }) }}
                            >
                              <h5 className="m-0 p-0">Danh mục {item.category_id.name}</h5>
                            </CButton>
                          </CCol>
                          <CCol sm="12" lg="8">
                            <img src={`${Constants.BASE_URL}/public/image_category/${item.category_id.image}`} width={"300px"} height={"150px"} />
                          </CCol>
                        </CRow>
                      </CCardHeader>
                      <CCollapse show={accordion == i}>
                        <CCardBody>
                          <CDataTable
                            items={item.product}
                            fields={['Tên sản phẩm', 'Hình ảnh', 'Thương hiệu', 'Số lượng Sale', 'Giá']}
                            itemsPerPage={3}
                            pagination
                            size="sm"
                            scopedSlots={{
                              'Tên sản phẩm': (item) => (
                                <td>{item.name}</td>)
                              , 'Hình ảnh': (item) => (
                                <td>
                                  {
                                    <img src={item.image == "" || item.image == null ?
                                      "https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg" :
                                      `${Constants.BASE_URL}/public/image_product/${item.image}`} width={"60px"} height={"40px"} />
                                  }
                                </td>)
                              , 'Thương hiệu': (item) => (
                                <td>{item.brand_id.name}
                                </td>)
                              , 'Số lượng Sale': (item) => (
                                <td>{item.total_deal}
                                </td>)
                              , 'Giá': (item) => (
                                <td>{item.price}</td>)
                            }}
                          />
                        </CCardBody>
                      </CCollapse>
                    </CCard>
                  )
                })
              }
            </ModalBody>
            <ModalFooter>
              <CButton color="secondary" onClick={e => this.setState({ modalDetail: !this.state.modalDetail })}>Đóng</CButton>
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
  datePicker: {
    marginBottom: 20,
    width: '100%'
  },
  pagination: {
    marginRight: '5px'
  },
  flexLabel: {
    width: 100
  },
  flexOption: {
    width: '100%'
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
    margin: '2px'
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
