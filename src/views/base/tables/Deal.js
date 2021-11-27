import CIcon from '@coreui/icons-react';
import {
  CBadge, CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CDataTable,
  CFormGroup, CInput, CInputCheckbox, CLabel, CRow, CSelect
} from '@coreui/react';
import { css } from "@emotion/react";
import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DotLoader from "react-spinners/DotLoader";
import {
  Card,
  CardBody,
  CardHeader,
  Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row
} from 'reactstrap';
import Constants from "../../../contants/contants";
import API_CONNECT from "../../../functions/callAPI";
import TextFieldGroup from "../../Common/TextFieldGroup";
import RenderAddForms from "../../components/Deals/deal_add_form";
import RenderUpdateForms from "../../components/Deals/deal_update_form";

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
      arrAllProductOfAllCategory_Temp: [],
      arrAllProductChoosed: [],
      arrChooseCategory: [],
      arrUpdate: [],
      arrRemoveOnUpdate: []
    };

    this.onRemoveCard = this.onRemoveCard.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.addAllProduct = this.addAllProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.decreaseProduct = this.decreaseProduct.bind(this);
    this.totalDeal = this.totalDeal.bind(this);
    this.pushCategory = this.pushCategory.bind(this);
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
            Constants.LIST_BRAND, {}, token, "POST")

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

  setProductForArrCategory = (arrCategory, arrAllProductChoosed) => {
    if (arrCategory.length == 0) {
      alert(`Chưa thiết lập banner !!!`);
      return
    }

    for (let i = 0; i < arrCategory.length; i++) {
      if (arrCategory[i].brand_id == "" || arrAllProductChoosed[i].length == 0) {
        alert(`Trong phần thiết lập banner, banner thứ ${i + 1} chưa chọn bất kì thương hiệu hoặc sản phẩm nào !!!`);
        return
      } else {
        for (let y = 0; y < arrAllProductChoosed[i].length; y++) {
          if (arrAllProductChoosed[i][y].total_deal == undefined || arrAllProductChoosed[i][y].total_deal == 0) {
            arrAllProductChoosed[i][y].total_deal = 100;
            arrCategory[i].product = arrAllProductChoosed[i]
            //alert(`Sản phẩm thứ ${y + 1} trong banner thứ ${i + 1} chưa thiết lập số lượng deal !!!`);
            //return
          } else {
            arrCategory[i].product = arrAllProductChoosed[i]
          }
        }
      }
    }

    return arrCategory
  }

  async addDeal() {
    const { name, image, type, status, voucher, arrCategory, arrAllProductChoosed, time_start, time_finish } = this.state;

    let resCategory = this.setProductForArrCategory(arrCategory, arrAllProductChoosed);

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
      category: resCategory,
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
      alert("Thêm thất bại");
      this.setState({ isLoading: false });
    }
  }

  changeDealType(e) {
    this.setState({ type: e.target.value })
  }

  onShowProductOnUpdate(arrCategoryOnUpdate) {
    console.log(arrCategoryOnUpdate)
  }

  async openUpdate(item) {
    const { token, arrOptionCategory, arrRemoveOnUpdate } = this.state;
    const arrCategoryOnUpdate = []
    const arrProductOnUpdate = []

    for (let i = 0; i < arrRemoveOnUpdate.length; i++) {
      item.category.push(arrRemoveOnUpdate[i])
    }

    const dataCategory = item.category;

    for (let i = 0; i < dataCategory.length; i++) {
      let dataProduct = dataCategory[i].product;
      for (let y = 0; y < dataProduct.length; y++) {
        arrProductOnUpdate.push({
          "product_id": dataProduct[y].product_id._id,
          "total_deal": dataProduct[y].total_deal
        })
      }

      arrCategoryOnUpdate.push({
        "brand_id": dataCategory[i].brand_id._id,
        "product": arrProductOnUpdate
      })
    }

    this.onShowProductOnUpdate(arrCategoryOnUpdate)

    this.setState({
      arrRemoveOnUpdate: [],
      modalCom: !this.state.modalCom,
      action: "update",
      name: item.name,
      category: arrCategoryOnUpdate,
      arrUpdate: item.category,
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
          Constants.LIST_BRAND, {}, token, "POST")

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

  async updateDeal() {
    const { name, image, type, status, voucher, time_start, time_finish, category, arrCategory, arrAllProductChoosed } = this.state

    let resCategory = this.setProductForArrCategory(arrCategory, arrAllProductChoosed);

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
      category: category,
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
      alert("Xoá thất bại");
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
    const { arrCategory, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed, arrOptionCategory, arrChooseCategory } = this.state;
    let res = await API_CONNECT(
      Constants.LIST_PRODUCT_CATEGORY, {
      "brand_id": e.value
    }, "", "POST")

    let data = res.data;
    arrCategory[i].brand_id = e.value;
    arrAllProductOfAllCategory[i] = data
    arrAllProductOfAllCategory_Temp[i] = new Array()
    arrAllProductChoosed[i] = new Array()

    const found = arrOptionCategory.find(element => element.value == e.value);

    arrChooseCategory[i] = new Array();
    arrChooseCategory[i].push(found)
    this.setState({
      arrCategory: arrCategory,
      arrAllProductOfAllCategory: arrAllProductOfAllCategory,
      arrAllProductOfAllCategory_Temp: arrAllProductOfAllCategory_Temp,
      arrAllProductChoosed: arrAllProductChoosed,
      arrChooseCategory: arrChooseCategory
    });
  };

  pushCategory = (arrCategory, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed, arrChooseCategory) => {
    arrCategory.push({
      brand_id: "",
      product: []
    })
    arrAllProductOfAllCategory.push([])
    arrAllProductOfAllCategory_Temp.push([])
    arrAllProductChoosed.push([])
    arrChooseCategory.push([])
    this.setState({
      arrCategory: arrCategory,
      arrAllProductOfAllCategory: arrAllProductOfAllCategory,
      arrAllProductOfAllCategory_Temp: arrAllProductOfAllCategory_Temp,
      arrAllProductChoosed: arrAllProductChoosed
    });
  };

  onRemoveCard = (idCategory) => {
    const { arrCategory, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed, arrChooseCategory } = this.state;

    arrCategory.splice(idCategory, 1);
    arrAllProductOfAllCategory.splice(idCategory, 1);
    arrAllProductOfAllCategory_Temp.splice(idCategory, 1);
    arrAllProductChoosed.splice(idCategory, 1);
    arrChooseCategory.splice(idCategory, 1);

    this.setState({
      arrCategory: arrCategory,
      arrAllProductOfAllCategory: arrAllProductOfAllCategory,
      arrAllProductOfAllCategory_Temp: arrAllProductOfAllCategory_Temp,
      arrAllProductChoosed: arrAllProductChoosed,
      arrChooseCategory: arrChooseCategory
    })
  }

  onCancelModal = () => {
    let { arrCategory, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed, arrChooseCategory, modalCom } = this.state;
    arrCategory = new Array()
    arrAllProductOfAllCategory = new Array()
    arrAllProductOfAllCategory_Temp = new Array()
    arrAllProductChoosed = new Array()
    arrChooseCategory = new Array()
    this.setState({
      modalCom: !modalCom,
      arrCategory: arrCategory,
      arrAllProductOfAllCategory: arrAllProductOfAllCategory,
      arrAllProductOfAllCategory_Temp: arrAllProductOfAllCategory_Temp,
      arrAllProductChoosed: arrAllProductChoosed,
      arrChooseCategory: arrChooseCategory
    });
  }

  addAllProduct(idCategory, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed) {

    let dataProduct = arrAllProductOfAllCategory[idCategory]
    let dataProduct_Temp = arrAllProductOfAllCategory_Temp[idCategory]

    arrAllProductOfAllCategory_Temp[idCategory] = new Array();
    arrAllProductChoosed[idCategory] = new Array();
    this.setState({
      arrAllProductOfAllCategory_Temp: arrAllProductOfAllCategory_Temp
    })
    let currentData = dataProduct.concat(dataProduct_Temp)

    for (let i = 0; i < currentData.length; i++) {
      arrAllProductChoosed[idCategory].push({
        product_id: currentData[i]._id
      })
      arrAllProductOfAllCategory_Temp[idCategory].push(currentData[i])
    }

    arrAllProductOfAllCategory[idCategory] = new Array();
    this.setState({
      arrAllProductChoosed: arrAllProductChoosed,
      arrAllProductOfAllCategory_Temp: arrAllProductOfAllCategory_Temp,
      arrAllProductOfAllCategory: arrAllProductOfAllCategory,
    })
  }

  addProduct(idCategory, i_product, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed) {
    let data = arrAllProductOfAllCategory[idCategory][i_product]
    arrAllProductChoosed[idCategory].push({
      product_id: data._id
    })
    let findIndex_choose_product = (element) => element.name == data.name;
    let index = arrAllProductOfAllCategory[idCategory].findIndex(findIndex_choose_product)
    arrAllProductOfAllCategory_Temp[idCategory].unshift(arrAllProductOfAllCategory[idCategory][index])
    arrAllProductOfAllCategory[idCategory].splice(index, 1)

    this.setState({
      arrAllProductChoosed: arrAllProductChoosed,
      arrAllProductOfAllCategory_Temp: arrAllProductOfAllCategory_Temp,
      arrAllProductOfAllCategory: arrAllProductOfAllCategory,
    })
  }

  decreaseProduct(idCategory, i_product, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed) {
    let data = arrAllProductOfAllCategory_Temp[idCategory][i_product]
    const findI = (element) => element._id == data._id;
    const index = arrAllProductOfAllCategory_Temp[idCategory].findIndex(findI)

    arrAllProductChoosed[idCategory].splice(index, 1)
    arrAllProductOfAllCategory[idCategory].unshift(arrAllProductOfAllCategory_Temp[idCategory][index])
    arrAllProductOfAllCategory_Temp[idCategory].splice(index, 1)
    this.setState({
      arrAllProductChoosed: arrAllProductChoosed,
      arrAllProductOfAllCategory: arrAllProductOfAllCategory,
      arrAllProductOfAllCategory_Temp: arrAllProductOfAllCategory_Temp,
    })
  }

  totalDeal(e, idCategory, item_product, arrAllProductChoosed) {
    const index = arrAllProductChoosed[idCategory].findIndex(val => val.product_id == item_product._id);
    arrAllProductChoosed[idCategory][index].total_deal = Number(e)
    this.setState({ arrAllProductChoosed: arrAllProductChoosed })
  }

  render() {
    const { data, arrPagination, key, image, action, time_start, time_finish,
      image_show, modalDetail, arrDetailBanner, accordion, arrUpdate, arrOptionCategory, arrCategory,
      arrChooseCategory, arrAllProductOfAllCategory, arrAllProductChoosed,
      arrAllProductOfAllCategory_Temp } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Danh sách sản phẩm ưu tiên
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

          <Modal size="xl" isOpen={this.state.modalCom} className={this.props.className} >
            <ModalHeader>{this.state.action == 'new' ? `Tạo mới` : `Cập nhật`}</ModalHeader>
            <ModalBody style={{ height: '500px', overflowY: 'scroll' }}>
              <CRow>
                <CCol md="12" lg="12" sm="12" xm="12" lx="12">
                  <CRow>
                    <CCol md="6" lg="6" sm="12" xm="12" lx="6">
                      <TextFieldGroup
                        field="name"
                        label="Tên banner"
                        value={this.state.name}
                        placeholder={"Tên deal"}
                        onChange={e => this.onChange("name", e.target.value)}
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
                    </CCol>
                    <CCol md="6" lg="6" sm="12" xm="12" lx="6">
                      <div style={{ width: "100%" }}>
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

                      <br />
                      <TextFieldGroup
                        field="voucher"
                        label="Voucher"
                        value={this.state.voucher}
                        placeholder={"Voucher"}
                        onChange={e => this.onChange("voucher", e.target.value)}
                      />

                      <CRow>
                        <CCol md="6" lg="6" sm="12" xm="12" lx="6">
                          <div style={styles.datePicker}>
                            <label style={styles.flexLabel}>Ngày bắt đầu:</label>
                            <DatePicker style={styles.flexOption} selected={new Date(time_start)} onChange={(date) => this.setState({ time_start: date })} />
                          </div>
                        </CCol>
                        <CCol md="6" lg="6" sm="12" xm="12" lx="6">
                          <div style={styles.datePicker}>
                            <label style={styles.flexLabel}>Ngày kết thúc:</label>
                            <DatePicker style={styles.flexOption} selected={new Date(time_finish)} onChange={(date) => this.setState({ time_finish: date })} />
                          </div>
                        </CCol>
                      </CRow>
                    </CCol>
                  </CRow>




                </CCol>
                <CCol md="12" lg="12" sm="12" xm="12" lx="12">
                  {
                    action == "new" ? //Thêm mới banner
                      <RenderAddForms
                        arrCategory={arrCategory}
                        arrChooseCategory={arrChooseCategory}
                        arrOptionCategory={arrOptionCategory}
                        arrAllProductChoosed={arrAllProductChoosed}
                        arrAllProductOfAllCategory={arrAllProductOfAllCategory}
                        arrAllProductOfAllCategory_Temp={arrAllProductOfAllCategory_Temp}
                        onRemoveCard={this.onRemoveCard}
                        handleChangeCategory={this.handleChangeCategory}
                        addAllProduct={this.addAllProduct}
                        addProduct={this.addProduct}
                        decreaseProduct={this.decreaseProduct}
                        totalDeal={this.totalDeal}
                        pushCategory={this.pushCategory} />
                      :
                      //Cập nhật banner
                      // <RenderUpdateForms
                      //   arrCategory={arrCategory}
                      //   arrChooseCategory={arrChooseCategory}
                      //   arrOptionCategory={arrOptionCategory}
                      //   arrAllProductChoosed={arrAllProductChoosed}
                      //   arrAllProductOfAllCategory={arrAllProductOfAllCategory}
                      //   arrAllProductOfAllCategory_Temp={arrAllProductOfAllCategory_Temp}
                      //   onRemoveCard={this.onRemoveCard}
                      //   handleChangeCategory={this.handleChangeCategory}
                      //   addAllProduct={this.addAllProduct}
                      //   addProduct={this.addProduct}
                      //   decreaseProduct={this.decreaseProduct}
                      //   totalDeal={this.totalDeal}
                      //   pushCategory={this.pushCategory} />

                    //Cập nhập banner
                    <div>
                      <CRow>
                        <CCol md="5" lg="5" sm="12" xm="12" lx="5">
                          <h3>
                            <strong>Thiết lập dữ liệu cho banner</strong>
                          </h3>
                        </CCol>
                        <CCol md="7" lg="7" sm="12" xm="12" lx="7">

                        </CCol>
                      </CRow>
                      <div style={{ marginTop: 15 }}>
                        {
                          arrUpdate.map((item, i) => {
                            let idCategory = i;
                            return (
                              <Card style={{ margin: 20 }}>
                                <CardHeader style={{ backgroundColor: '#339966' }}>
                                  {/* <CButton color="danger" style={{ float: 'right' }} onClick={() => {
                                    arrRemoveOnUpdate.push(arrUpdate[idCategory])
                                    arrUpdate.splice(idCategory, 1);
                                    this.setState({ arrUpdate: arrUpdate, arrRemoveOnUpdate: arrRemoveOnUpdate });
                                  }}>X</CButton> */}
                                </CardHeader>
                                <CardBody>
                                  <CRow style={{ margin: 20 }}>
                                    <CCol md="3" lg="3" sm="12" xm="12" lx="3">
                                      <CLabel style={{ fontWeight: 900 }}>Tên thương hiệu: </CLabel>
                                    </CCol>
                                    <CCol md="9" lg="9" sm="12" xm="12" lx="9">
                                      {item.brand_id.name}
                                    </CCol>
                                  </CRow>
                                  {
                                    item.product.length > 0 ?
                                      <Card>
                                        <CardHeader style={{ backgroundColor: '#a9c2af' }}>
                                          Danh sách sản phẩm
                                        </CardHeader>
                                        <CardBody style={{ height: 350, overflowY: 'scroll', backgroundColor: '#dfebe2' }}>
                                          <CRow>
                                            {
                                              item.product.map((item_product, i_product) => {
                                                return (
                                                  <CCol md="6" lg="6" sm="12" xm="12" lx="6">
                                                    <CFormGroup variant="custom-checkbox" inline>
                                                      <CInputCheckbox
                                                        custom
                                                        id={`${item_product._id}`}
                                                        defaultChecked
                                                      />
                                                      <CLabel variant="custom-checkbox" htmlFor={item_product._id} style={{ margin: 10 }}>

                                                        <div><strong>Tên sp: </strong>{item_product.product_id.name}</div>
                                                        <CRow>
                                                          <CCol md="5" lg="5" sm="12" xm="12" lx="5">
                                                            <strong>SL deal:</strong>
                                                          </CCol>
                                                          <CCol md="7" lg="7" sm="12" xm="12" lx="7">
                                                            <CInput placeholder={"Số lượng deal"} value={item_product.total_deal} type="number" style={{ marginBottom: 3, maxWidth: 150 }}
                                                              onChange={(e) => {
                                                                arrUpdate[idCategory].product[i_product].total_deal = Number(e.target.value)
                                                                this.setState({ arrUpdate: arrUpdate })
                                                              }} />
                                                          </CCol>
                                                        </CRow>

                                                        <img src={`${Constants.BASE_URL}/public/image_product/${item_product.product_id.image}`} width={"70px"} height={"90px"} style={{ border: '1px solid black', borderRadius: 5 }} />

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
                  }

                  <br />
                </CCol>
              </CRow>

            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addDeal() : this.updateDeal() }} disabled={this.state.isLoading}>Lưu</CButton>{' '}
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
                              <h5 className="m-0 p-0">Thương hiệu {item.brand_id.name}</h5>
                            </CButton>
                          </CCol>
                          <CCol sm="12" lg="8">
                            <img src={`${Constants.BASE_URL}/public/image_brand/${item.brand_id.image}`} width={"300px"} height={"150px"} />
                          </CCol>
                        </CRow>
                      </CCardHeader>
                      <CCollapse show={accordion == i}>
                        <CCardBody>
                          <CDataTable
                            items={item.product}
                            fields={['Tên sản phẩm', 'Hình ảnh', 'Số lượng deal', 'Giá']}
                            itemsPerPage={3}
                            pagination
                            size="sm"
                            scopedSlots={{
                              'Tên sản phẩm': (item) => (
                                <td>{item.product_id.name}</td>)
                              , 'Hình ảnh': (item) => (
                                <td>
                                  {
                                    <img src={item.product_id.image == "" || item.product_id.image == null ?
                                      "https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg" :
                                      `${Constants.BASE_URL}/public/image_product/${item.product_id.image}`} width={"60px"} height={"40px"} />
                                  }
                                </td>)
                              , 'Số lượng deal': (item) => (
                                <td>{item.total_deal}
                                </td>)
                              , 'Giá': (item) => (
                                <td>{item.product_id.price}</td>)
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
