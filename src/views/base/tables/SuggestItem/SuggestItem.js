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
  CTextarea,
  CRow, CCol,
  CCard,
  CCardBody,
  CCardHeader
} from '@coreui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import CreatableSelect from 'react-select/creatable';
import API_CONNECT from "../../../../functions/callAPI";
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

class SuggestItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      limit: 5,
      modalCom: false,
      dataApi: [],
      hidden: false,
      action: 'new',
      name: "",
      image: "",
      image_show: "",
      image_link: "",
      title: "",
      description: "",
      linkdetail: "",
      level: "K1",
      sdktype: "1",
      brand_id: "",
      price: 0,
      type_sdk_id: "",
      type_product_id: "",
      sdkItem: [],
      currentSdkSelect: [],
      currentItemSelect: null,
      modalDelete: false,
      delete: null,
      arrPagination: [],
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      userData: localStorage.getItem('user'),
      isLoading: false,
      indexPage: 1,
      arrOptionSdkType: [],
      arrOptionProductType: [],
      arrLevel: [],
      arrBrand: [],
      objectBrand: {},
      arrProduct: [],
      arrProductChoosed: [],
      objectProduct: {},
      arrOptionBrand: [],
      objectValueBrand: {},
      idSDK: window.location.hash.split('/')[window.location.hash.split('/').length - 1],
      totalCount: '',
      isLoadingTable: false,
      isSearch: false
    };
  }
  async componentDidMount() {
    this.getData()
    this.getListTypeProduct()
  }

  onSearch = async () => {
    const { type, idSDK, key, userData } = this.state;
    if (type == '0' || type == '1') {
      this.setState({ isLoadingTable: true });

      const res_suggest = await API_CONNECT(
        Constants.SEARCH_SUGGEST_ITEM_ADMIN + idSDK + "?&key=" + key, {}, "", "GET")

      const res_sdk = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_SDK,
        method: 'GET'
      });

      const res_brand = await API_CONNECT(
        Constants.LIST_BRAND_PLUGIN_COMPANY, {}, "", "GET")

      let val = res_suggest.dataRes;

      for (let i = 0; i < val.length; i++) {
        val[i].id = i
      }

      let brand = res_brand.data;

      if (val.length == 0) {
        this.setState({
          hidden: false
        })
      } else {
        this.setState({
          hidden: true
        })
      }

      let arrTempOptionBrand = [];
      for (let i = 0; i < brand.length; i++) {
        arrTempOptionBrand.push({
          value: brand[i]._id, label: brand[i].name
        })
      }

      this.setState({
        dataApi: val,
        sdkItem: res_sdk.data,
        currentSdkSelect: res_sdk.data[0],
        arrOptionBrand: arrTempOptionBrand,
        isLoadingTable: false,
        data: val,
        isSearch: true
      });

    } else {

      this.setState({ isLoadingTable: true });

      const res_suggest = await API_CONNECT(
        //http://localhost:3002/itemSdk/search/611f1461ef623903dbb4f75d/1?&key=c
        Constants.SEARCH_SUGGEST_ITEM_COMPANY + JSON.parse(userData).company_id + `/${idSDK}?&key=` + key, {}, "", "GET")

      const res_sdk = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_SDK,
        method: 'GET'
      });

      const res_brand = await API_CONNECT(
        Constants.LIST_BRAND_PLUGIN_COMPANY, {}, "", "GET")

      let val = res_suggest.dataRes;

      for (let i = 0; i < val.length; i++) {
        val[i].id = i
      }

      let brand = res_brand.data;

      if (val.length == 0) {
        this.setState({
          hidden: false
        })
      } else {
        this.setState({
          hidden: true
        })
      }

      let arrTempOptionBrand = [];
      for (let i = 0; i < brand.length; i++) {
        arrTempOptionBrand.push({
          value: brand[i]._id, label: brand[i].name
        })
      }

      this.setState({
        dataApi: val,
        sdkItem: res_sdk.data,
        currentSdkSelect: res_sdk.data[0],
        arrOptionBrand: arrTempOptionBrand,
        isLoadingTable: false,
        data: val,
        isSearch: true
      });
    }

  }

  getDataPagination = async (skip, v) => {

    const { idSDK, totalCount, userData, type, arrPagination } = this.state;

    this.setState({ isLoadingTable: true });
    if (type == '0' || type == '1') {
      var res = await API_CONNECT(
        Constants.LIST_SUGGEST_ITEM_ADMIN + `${idSDK}?skip=${Number(totalCount) - Number(skip)}`, {}, "", "GET")
    } else {
      var res = await API_CONNECT(
        Constants.LIST_SUGGEST_ITEM_COMPANY + JSON.parse(userData).company_id + `/${idSDK}?skip=${Number(totalCount) - Number(skip)}`, {}, "", "GET")
    }

    let val = res.dataRes;

    if (arrPagination[v - 1].length != 0) {
      for (let i = 0; i < arrPagination[v - 1].length; i++) {
        if (i + 1 <= val.length) {
          val[i].id = arrPagination[v - 1][i]
        }
      }
    }

    this.setState({
      dataApi: val,
      isLoadingTable: false,
      isLoading: false,
      data: val,
      isSearch: false
    });
  }

  pagination(dataApi, dataResult) {
    var i, j, temparray, chunk = this.state.limit;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }

    if (dataResult.length == 0) {
      this.setState({
        hidden: false
      })
    } else {
      this.setState({
        hidden: true
      })
    }

    if (arrTotal.length != 0) {
      for (let i = 0; i < arrTotal[0].length; i++) {
        dataResult[i].id = arrTotal[0][i]
      }
    }

    this.setState({ arrPagination: arrTotal, data: dataResult, totalCount: dataApi.length });
  }

  getData = async () => {
    const { idSDK } = this.state;
    this.setState({ isLoading: true });
    const res_suggest = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_SUGGEST_ITEM_ADMIN + idSDK,
      method: 'GET'
    });

    const res_sdk = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_SDK,
      method: 'GET'
    });


    let val = res_suggest.data.dataRes;
    let totalItem = res_suggest.data.arrTotal;
    let arrB = res_suggest.data.brand;

    let arrTempOptionBrand = [];
    for (let i = 0; i < arrB.length; i++) {
      arrTempOptionBrand.push({
        value: arrB[i]._id, label: arrB[i].name
      })
    }

    this.pagination(totalItem, val);
    this.setState({ dataApi: val, sdkItem: res_sdk.data, currentSdkSelect: res_sdk.data[0], arrOptionBrand: arrTempOptionBrand, isLoading: false });
  }

  getDataForCompany = async () => {
    const { idSDK, userData } = this.state;

    this.setState({ isLoading: true });
    const res_suggest = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_SUGGEST_ITEM_COMPANY + JSON.parse(userData).company_id + `/${idSDK}`,
      method: 'GET'
    });

    const res_sdk = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_SDK,
      method: 'GET'
    });


    let val = res_suggest.data.dataRes;
    let totalItem = res_suggest.data.arrTotal;

    this.pagination(totalItem, val);

    let arrB = res_suggest.data.brand;

    let arrTempOptionBrand = [];
    for (let i = 0; i < arrB.length; i++) {
      arrTempOptionBrand.push({
        value: arrB[i]._id, label: arrB[i].name
      })
    }

    this.setState({ dataApi: val, sdkItem: res_sdk.data, currentSdkSelect: res_sdk.data[0], isLoading: false, arrOptionBrand: arrTempOptionBrand });

  }

  getListTypeProduct = async () => {
    const res_pro = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_TYPE_PRODUCT,
      method: 'POST'
    });

    const res_sdk = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_TYPE_SDK,
      method: 'POST'
    });

    this.setState({ arrOptionProductType: res_pro.data.data, arrOptionSdkType: res_sdk.data.data })
  }

  changeSdkType = (e) => {
    e.preventDefault();
    const { sdkItem } = this.state;
    let data = sdkItem.find((item) => item.name === e.target.value);
    if (data) {
      this.setState({
        currentSdkSelect: data,
        level: data.name,
        sdktype: "1",
      });
    }
  };

  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      sdktype: e.target.value,
    });
  };

  searchKey() {
    const { key, indexPage } = this.state;
    // this.setState({ key: key })

    if (key != '') {
      let d = []

      this.state.dataApi.map(val => {
        if (val.name.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.title.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.type_product_id.Name.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.type_product_id.Name.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {

          d.push(val)
        }
      })

      this.setState({ data: d })
    } else {
      this.getDataPagination(this.state.limit * Number(indexPage))
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
    const { indexPage } = this.state
    this.setState({ isSearch: false })
    this.getDataPagination(this.state.limit * Number(indexPage), Number(indexPage))
  }

  async toggleModal(key) {
    const { arrOptionBrand, arrOptionSdkType, arrOptionProductType, modalCom } = this.state;

    if (key == 'new') {
      this.setState({
        modalCom: !modalCom,
        action: key,
        image_show: "",
        name: "",
        image: "",
        title: "",
        price: 0,
        description: "",
        linkdetail: "",
        brand_id: arrOptionBrand.length == 0 ? "" : arrOptionBrand[0].value,
        objectValueBrand: arrOptionBrand[0],
        level: "K1",
        sdktype: "1",
        type_sdk_id: arrOptionSdkType.length == 0 ? '' : arrOptionSdkType[1]._id,
        type_product_id: arrOptionProductType.length == 0 ? '' : arrOptionProductType[1]._id,
        arrLevel: arrOptionSdkType.length == 0 ? '' : arrOptionSdkType[1].Level
      }, async () => {
        const result_brand = await API_CONNECT(Constants.LIST_BRAND, {}, "", "POST")
        const data = result_brand.data;
        let arrBrandFilter = [];
        for (let i = 0; i < data.length; i++) {
          arrBrandFilter.push({
            value: data[i]._id, label: data[i].name
          })
        }
        this.setState({
          arrBrand: arrBrandFilter,
          objectBrand: data.length > 0 ? { value: data[0]._id, label: data[0].name } : { value: "", label: "" }
        })
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addSuggestItem() {
    const { name, image, title, description, linkdetail, price,
      level, sdktype, type_sdk_id, brand_id, image_link, arrOptionSdkType, idSDK } = this.state
    if (name == null || name == '') {
      alert("Thiếu tên sản phẩm");
      return
    } else if (brand_id == null || brand_id == '') {
      alert("Thiếu tên nhãn hiệu cho sản phẩm");
      return
    } else if (title == null || title == '') {
      alert("Thiếu tên tiêu đề cho sản phẩm");
      return
    } else if (image == null || image == '') {
      alert("Thiếu hình ảnh cho sản phẩm");
      return
    }

    const form = new FormData();
    form.append("image", image_link);

    await API_CONNECT(Constants.UPLOAD_IMAGE, form, "", "POST")

    const body = {
      name: name,
      image: image,
      title: title,
      description: description,
      linkdetail: linkdetail,
      image_link: image_link.name,
      level: level,
      price: price,
      sdktype: sdktype,
      type_sdk_id: arrOptionSdkType[idSDK]._id,
      type_product_id: idSDK,
      brand_id: brand_id

    }

    this.setState({ isLoading: true, isSearch: false });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.ADD_SUGGEST_ITEM,
      method: 'POST',
      data: body
    });

    if (res.status == 200) {
      this.getData()

      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert("Thêm sản phẩm gợi ý thất bại");
      this.setState({ isLoading: false });
    }
  }

  async openUpdate(item) {
    console.log(item.brand_id)
    let objValue = { value: item.brand_id == null ? "" : item.brand_id._id, label: item.brand_id == null ? "" : item.brand_id.name }
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      name: item.name,
      image: item.image,
      image_show: "",
      image_link: item.image_link,
      title: item.title,
      description: item.description,
      linkdetail: item.linkdetail,
      level: item.level,
      price: item.price,
      sdktype: item.sdktype,
      type_product_id: item.type_product_id._id,
      type_sdk_id: item.type_sdk_id._id,
      objectValueBrand: objValue,
      id: item['_id'],
      Status: item.Status,
      arrLevel: item.type_sdk_id.Level,
      brand_id: item.brand_id == null ? "" : item.brand_id._id
    })
  }

  async updateSuggestItem() {
    this.setState({ modalCom: !this.state.modalCom })
    const { name, image, title, description, linkdetail, price,
      level, sdktype, type_sdk_id, type_product_id, brand_id, image_link, indexPage } = this.state

    if (name == null || name == '') {
      alert("Thiếu tên sản phẩm");
      return
    } else if (brand_id == null || brand_id == '') {
      alert("Thiếu tên nhãn hiệu cho sản phẩm");
      return
    } else if (title == null || title == '') {
      alert("Thiếu tên tiêu đề cho sản phẩm");
      return
    }

    const form = new FormData();
    form.append("image", image_link);

    await API_CONNECT(Constants.UPLOAD_IMAGE, form, "", "POST")

    const body = {
      name: name,
      image: image,
      image_link: image_link == undefined || image_link == null || image_link == "" ? "" : image_link.name,
      title: title,
      description: description,
      linkdetail: linkdetail,
      price: price,
      level: level,
      sdktype: sdktype,
      type_sdk_id: type_sdk_id,
      type_product_id: type_product_id,
      brand_id: brand_id
    }

    this.setState({ isLoadingTable: true, isSearch: false });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_SUGGEST_ITEM + this.state.id,
      method: 'PUT',
      data: body
    });

    if (res.status == 200) {
      this.getDataPagination(this.state.limit * Number(indexPage), Number(indexPage))

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
    this.setState({ isLoading: true, isSearch: false });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.DELETE_SUGGEST_ITEM,
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

  onChangeImage(e) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ image_link: files[0] })
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      this.setState({ image: e.target.result, image_show: e.target.result })
    }
  }

  getBadge(name, defaults) {
    switch (name) {
      case 'K1': return 'Chăm sóc da hằng ngày'
      case 'K5': return 'Hỗ trợ giảm lão hoá'
      case 'K6': return 'Hỗ trợ điều trị mụn'
      case 'K7': return 'Hỗ trợ giảm quầng thâm mắt'
      case 'K8': return 'Hỗ trợ giảm lỗ chân lông'
      case 'K9': return 'Hỗ trợ giảm thâm nám da'
      default: return defaults
    }
  }

  handleChange = (newValue, actionMeta) => {
    this.setState({ objectValueBrand: newValue, brand_id: newValue.value })
    console.log(newValue.value);
  };

  handleChangeBrand = async (newValue, actionMeta) => {
    this.setState({ objectBrand: newValue })

    const result = await API_CONNECT(Constants.LIST_PRODUCT_BY_BRAND, { brand_id: newValue.value }, "", "POST")
    const data = result.data;
    let arrProductFilter = [];
    for (let i = 0; i < data.length; i++) {
      arrProductFilter.push({
        value: data[i]._id, label: data[i].name
      })
    }
    this.setState({
      arrProduct: arrProductFilter,
      arrProductChoosed: data,
      objectProduct: data.length > 0 ? { value: data[0]._id, label: data[0].name } : { value: "", label: "" }
    })
  };

  handleChangeProduct = (newValue, actionMeta) => {
    const { arrProductChoosed, name, image, title, description, linkdetail, price,
      level, sdktype, type_sdk_id, brand_id, image_link, arrOptionSdkType, idSDK } = this.state;
    const found = arrProductChoosed.find(element => element._id == newValue.value);
    console.log(found)
    this.setState({
      objectProduct: newValue,
      name: found.name,
      title: found.name,
      description: found.description,
      linkdetail: found.href,
      price: found.price,
      type_sdk_id: arrOptionSdkType[idSDK]._id,
      type_product_id: idSDK
    })
  };

  render() {
    const { data, arrPagination, arrLevel, action, arrBrand, objectBrand, arrProduct, objectProduct,
      arrOptionSdkType, key, isSearch, indexPage, arrOptionBrand, objectValueBrand } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Danh sách sản phẩm da mặt
                  <div style={styles.tags}>
                    <CRow>
                      <CCol sm="12" lg="12">
                        <CRow>
                          <CCol sm="12" lg="4">
                            <div>
                              <Input style={styles.searchInput} onChange={(e) => {
                                this.setState({ key: e.target.value })

                                if (e.target.value == "") {
                                  this.getDataPagination(this.state.limit * Number(indexPage), Number(indexPage))
                                }
                              }} name="key" value={key} placeholder="Từ khóa" />
                            </div>
                          </CCol>
                          <CCol sm="12" lg="4">
                            <CButton color="primary" style={{ width: '100%', marginTop: 5 }} size="sm" onClick={e => { this.onSearch() }}>Tìm kiếm theo từ khoá</CButton>
                          </CCol>
                          <CCol sm="12" lg="4">
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
                  {
                    this.state.isLoadingTable == false ?
                      <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                        <thead className="thead-light">
                          <tr>
                            <th className="text-center">STT.</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Ảnh</th>
                            <th className="text-center">Tiêu đề</th>
                            <th className="text-center">Chi tiết</th>
                            <th className="text-center">Thương hiệu</th>
                            <th className="text-center">Ảnh thương hiệu</th>
                            <th className="text-center">Loại</th>
                            <th className="text-center">Loại SDK</th>
                            <th className="text-center">Mức độ</th>
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
                                    <td className="text-center">{item.id + 1}</td>
                                    <td className="text-center">{item.name}</td>
                                    <td className="text-center">
                                      {
                                        item.image_link == null || item.image_link == "" ? <img src={`${item.image}`} width={"60px"} height={"60px"} /> :
                                          <img src={`${Constants.BASE_URL}/public/image_plugin/${item.image_link}`} width={"60px"} height={"60px"} />
                                      }
                                    </td>
                                    <td className="text-center">
                                      {item.title.substr(0, 100) +
                                        (item.title.length > 100 ? "..." : "")}
                                    </td>
                                    <td className="text-center">
                                      <a target="_blank" href={item.linkdetail}>Xem chi tiết sản phẩm</a>
                                    </td>
                                    <td className="text-center">
                                      {item.brand_id == null ? "" : item.brand_id.name}
                                    </td>
                                    <td className="text-center">
                                      {<img src={`${Constants.BASE_URL}/public/image_brand/${item.brand_id.image_link}`} width={"60px"} height={"60px"} />}
                                    </td>
                                    <td className="text-center">
                                      {item.type_product_id.Name}
                                    </td>
                                    <td className="text-center">
                                      {item.type_sdk_id.Name}
                                    </td>
                                    <td className="text-center">
                                      {item.name_level}
                                    </td>
                                    <td className="text-center">
                                      {Number(item.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} đ
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
                      </table> :
                      <div className="sweet-loading" style={{ height: 370 }}>
                        <DotLoader css={override} size={50} color={"#123abc"} loading={this.state.isLoadingTable} speedMultiplier={1.5} />
                      </div>
                  }
                </CardBody>
              </Card>
              <div style={{ float: 'right' }}>
                {isSearch ? "" :
                  <Pagination count={arrPagination.length} color="primary" onChange={async (e, v) => {
                    this.setState({ indexPage: v })
                    await this.getDataPagination(this.state.limit * (v), v)
                  }} />
                }
              </div>

            </Col>
          </Row>

          <Modal size="xl" isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>{this.state.action == 'new' ? `Tạo mới` : `Cập nhật`}</ModalHeader>
            <ModalBody>
              <CCard>
                <CCardHeader>
                  Form tự động điền
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol sm="12" lg="6">
                      <div style={{ width: "100%" }}>
                        <CLabel>Thương hiệu:</CLabel>
                        <CreatableSelect
                          isClearable
                          onChange={this.handleChangeBrand}
                          value={objectBrand}
                          options={arrBrand}
                        />

                      </div>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <div style={{ width: "100%" }}>
                        <CLabel>Sản phẩm:</CLabel>
                        <CreatableSelect
                          isClearable
                          onChange={this.handleChangeProduct}
                          value={objectProduct}
                          options={arrProduct}
                        />

                      </div>
                    </CCol>
                  </CRow>

                </CCardBody>
              </CCard>

              <TextFieldGroup
                field="name"
                label="Tên sản phẩm"
                value={this.state.name}
                placeholder={"Tên sản phẩm"}
                onChange={e => this.onChange("name", e.target.value)}
              />

              <TextFieldGroup
                field="image"
                label="Ảnh sản phẩm"
                type={"file"}
                onChange={e => { this.onChangeImage(e) }}
                onClick={(e) => { e.target.value = null; this.setState({ image_show: "" }) }}
              />
              {
                this.state.image == "" ? "" :
                  <img width="250" height="300" src={
                    this.state.image_show == "" ? `${Constants.BASE_URL}/public/image_plugin/${this.state.image_link}` : this.state.image} style={{ marginBottom: 20 }} />
              }

              <TextFieldGroup
                field="title"
                label="Tiêu đề"
                value={this.state.title}
                placeholder={"Tiêu đề"}
                onChange={e => this.onChange("title", e.target.value)}
              />

              <label className="control-label">Mô tả</label>
              <CKEditor
                editor={ClassicEditor}
                data={this.state.description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({ description: data })
                }}
              />

              <TextFieldGroup
                field="linkdetail"
                label="Chi tiết"
                value={this.state.linkdetail}
                placeholder={"Chi tiết"}
                onChange={e => this.onChange("linkdetail", e.target.value)}
              />
              <CLabel>Nhãn hiệu:</CLabel>
              <CreatableSelect
                isClearable
                onChange={this.handleChange}
                value={objectValueBrand}

                options={arrOptionBrand}
              />

              {
                action == "new" ? "" :
                  <div style={{ width: "100%" }} className="mt-3">
                    <CLabel>Loại SDK:</CLabel>
                    <CSelect onChange={async e => {
                      this.setState({ type_sdk_id: e.target.value.split("/")[0], arrLevel: JSON.parse(e.target.value.split("/")[1]) })
                    }} custom size="sm" name="selectSm" id="SelectLm">
                      {
                        arrOptionSdkType.map((item, i) => {
                          if (item._id == this.state.type_sdk_id) {
                            return (
                              <option selected key={i} value={item._id + "/" + JSON.stringify(item.Level)}>{this.getBadge(item.Name, item.Name)}</option>
                            );
                          } else {
                            return (
                              <option key={i} value={item._id + "/" + JSON.stringify(item.Level)}>{this.getBadge(item.Name, item.Name)}</option>
                            );
                          }
                        })
                      }
                    </CSelect>
                  </div>
              }
              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Mức độ:</CLabel>
                {
                  arrLevel != undefined ? (
                    <CSelect onChange={async e => { this.changeLevel(e) }} custom size="sm" name="selectSm" id="SelectLm">
                      {
                        arrLevel.map((item, i) => {
                          if (item == this.state.sdktype) {
                            return (
                              <option selected key={i} value={item}>
                                {item == "1" ? "Nhẹ" : item == "2" ? "Trung" : "Nặng"}
                              </option>
                            );
                          } else {
                            return (
                              <option key={i} value={item}>
                                {item == "1" ? "Nhẹ" : item == "2" ? "Trung" : "Nặng"}
                              </option>
                            );
                          }
                        })
                      }
                    </CSelect>
                  ) : null
                }
              </div>

              <TextFieldGroup
                field="price"
                label="Giá"
                value={this.state.price}
                placeholder={"Giá"}
                type='number'
                onChange={e => this.onChange("price", e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addSuggestItem() : this.updateSuggestItem() }} disabled={this.state.isLoading}>Lưu</CButton>{' '}
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

export default SuggestItem;
