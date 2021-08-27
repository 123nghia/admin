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
  CRow, CCol
} from '@coreui/react'

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
      activePage: 1,
      page: 1,
      itemsCount: 0,
      limit: 20,
      totalActive: 0,
      modalCom: false,
      viewingUser: { },
      communities: [],
      updated: '',
      dataApi: [],
      hidden: false,
      action: 'new',
      name: "",
      image: "",
      image_link: "",
      title: "",
      description: "",
      linkdetail: "",
      level: "K1",
      sdktype: "1",
      brand_id: "",
      companyid: "",
      type_sdk_id: "",
      type_product_id: "",
      sdkItem: [],
      currentSdkSelect: [],
      currentItemSelect: null,
      modalDelete: false,
      delete: null,
      arrPagination: [],
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      type: localStorage.getItem('type'),
      userData: localStorage.getItem('user'),
      isLoading: false,
      indexPage: 1,
      arrOptionSdkType: [],
      arrOptionProductType: [],
      arrLevel: [],
      arrBrand: [],
      idSDK: window.location.hash.split('/')[window.location.hash.split('/').length - 1],
      totalCount: '',
      isLoadingTable: false,
      isSearch: false
    };
  }
  async componentDidMount() {
    const { type } = this.state;
    if (type == '0' || type == '1') {
      this.getData()
    } else {
      this.getDataForCompany()
    }
    this.getListTypeProduct()
    let arr = JSON.parse(localStorage.getItem('url'));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url == window.location.hash) {
        if (arr[i].isHidden == true) {
          window.location.href = '#/'
        }
      }
    }
  }

  onSearch = async () => {
    const { type, idSDK, key, userData } = this.state;
    if (type == '0' || type == '1') {
      this.setState({ isLoadingTable: true });

      const res_suggest = await API_CONNECT(
        Constants.SEARCH_SUGGEST_ITEM_ADMIN + idSDK + "?&key=" + key, { }, "", "GET")

      const res_sdk = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_SDK,
        method: 'GET'
      });

      const res_brand = await API_CONNECT(
        Constants.LIST_BRAND_PLUGIN_COMPANY, { }, "", "GET")

      let val = res_suggest.dataRes;

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

      this.setState({
        dataApi: val,
        sdkItem: res_sdk.data,
        currentSdkSelect: res_sdk.data[0],
        arrBrand: brand,
        isLoadingTable: false,
        data: val,
        isSearch: true
      });

    } else {

      this.setState({ isLoadingTable: true });

      const res_suggest = await API_CONNECT(
        //http://localhost:3002/itemSdk/search/611f1461ef623903dbb4f75d/1?&key=c
        Constants.SEARCH_SUGGEST_ITEM_COMPANY + JSON.parse(userData).company_id + `/${idSDK}?&key=` + key, { }, "", "GET")

      const res_sdk = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.LIST_SDK,
        method: 'GET'
      });

      const res_brand = await API_CONNECT(
        Constants.LIST_BRAND_PLUGIN_COMPANY, { }, "", "GET")

      let val = res_suggest.dataRes;

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

      this.setState({
        dataApi: val,
        sdkItem: res_sdk.data,
        currentSdkSelect: res_sdk.data[0],
        arrBrand: brand,
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
        Constants.LIST_SUGGEST_ITEM_ADMIN + `${idSDK}?skip=${Number(totalCount) - Number(skip)}`, { }, "", "GET")
    } else {
      var res = await API_CONNECT(
        Constants.LIST_SUGGEST_ITEM_COMPANY + JSON.parse(userData).company_id + `/${idSDK}?skip=${Number(totalCount) - Number(skip)}`, { }, "", "GET")
    }

    let val = res.dataRes;

    //console.log(arrPagination[v - 1])
    // console.log(val)
    // console.log(v)

    if (arrPagination[v - 1].length != 0) {
      for (let i = 0; i < arrPagination[v - 1].length; i++) {
        val[i].id = arrPagination[v - 1][i]
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
    var i, j, temparray, chunk = 20;
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

    const res_brand = await API_CONNECT(
      Constants.LIST_BRAND_PLUGIN_COMPANY, { }, "", "GET")

    let val = res_suggest.data.dataRes;
    let totalItem = res_suggest.data.arrTotal;

    let brand = res_brand.data;

    this.pagination(totalItem, val);
    this.setState({ dataApi: val, sdkItem: res_sdk.data, currentSdkSelect: res_sdk.data[0], arrBrand: brand, isLoading: false });
  }

  getDataForCompany = async () => {
    const { idSDK } = this.state;
    this.setState({ isLoading: true });
    const res_suggest = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_SUGGEST_ITEM_COMPANY + JSON.parse(this.state.userData).company_id + `/${idSDK}`,
      method: 'GET'
    });

    const res_sdk = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_SDK,
      method: 'GET'
    });

    const res_brand = await API_CONNECT(
      Constants.LIST_BRAND_PLUGIN_COMPANY + JSON.parse(this.state.userData).company_id, { }, "", "GET")


    let val = res_suggest.data.dataRes;
    let totalItem = res_suggest.data.arrTotal;
    let brand = res_brand.data;

    this.pagination(totalItem, val);

    this.setState({ dataApi: val, sdkItem: res_sdk.data, currentSdkSelect: res_sdk.data[0], isLoading: false, arrBrand: brand });

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
      let active = 0

      d.map(val => {
        if (val.Status == "Actived") {
          active = active + 1
        }
      })

      this.setState({ data: d, totalActive: active })
    } else {
      this.getDataPagination(20 * Number(indexPage))
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
    this.getDataPagination(20 * Number(indexPage))
  }

  async toggleModal(key) {
    const { data, arrBrand } = this.state;

    if (key == 'new') {
      this.setState({
        modalCom: !this.state.modalCom,
        action: key,
        name: "",
        image: "",
        title: "",
        description: "",
        linkdetail: "",
        brand_id: arrBrand[0]._id,
        level: "K1",
        sdktype: "1",
        type_sdk_id: this.state.arrOptionSdkType.length == 0 ? '' : this.state.arrOptionSdkType[0]._id,
        type_product_id: this.state.arrOptionProductType.length == 0 ? '' : this.state.arrOptionProductType[0]._id,
        companyid: this.state.type == '0' || this.state.type == '1' ? "" : JSON.parse(this.state.userData).company_id,
        arrLevel: this.state.arrOptionSdkType.length == 0 ? '' : this.state.arrOptionSdkType[0].Level
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addRoles() {
    const { name, image, title, description, linkdetail, level, sdktype, type_sdk_id, brand_id, image_link } = this.state
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
      sdktype: sdktype,
      companyid: this.state.type == '0' || this.state.type == '1' ? "" : JSON.parse(this.state.userData).company_id,
      type_sdk_id: type_sdk_id,
      type_product_id: window.location.hash.split('/')[window.location.hash.split('/').length - 1],
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
      if (this.state.type == '0' || this.state.type == '1') {
        this.getData()
      } else {
        this.getDataForCompany()
      };
      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert("Thêm sản phẩm gợi ý thất bại");
      this.setState({ isLoading: false });
    }
  }

  async openUpdate(item) {
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      name: item.name,
      image: item.image,
      image_link: item.image_link,
      title: item.title,
      description: item.description,
      linkdetail: item.linkdetail,
      level: item.level,
      sdktype: item.sdktype,
      type_product_id: item.type_product_id._id,
      type_sdk_id: item.type_sdk_id._id,
      companyid: item.companyid,
      id: item['_id'],
      Status: item.Status,
      arrLevel: item.type_sdk_id.Level,
      brand_id: item.brand_id == null ? "" : item.brand_id._id
    })
  }

  async updateUser() {
    this.setState({ modalCom: !this.state.modalCom })
    const { name, image, title, description, linkdetail, level, sdktype, type_sdk_id, type_product_id, brand_id, image_link, indexPage } = this.state

    if (name == null || name == '' ||
      image == null || image == '' ||
      title == null || title == '' ||
      linkdetail == null || linkdetail == '') {
      alert("Please fill in all the requirements");
      return
    }

    const form = new FormData();
    form.append("image", image_link);

    await API_CONNECT(Constants.UPLOAD_IMAGE, form, "", "POST")

    const body = {
      name: name,
      image: image,
      image_link: image_link.name,
      title: title,
      description: description,
      linkdetail: linkdetail,
      level: level,
      sdktype: sdktype,
      type_sdk_id: type_sdk_id,
      type_product_id: type_product_id,
      companyid: this.state.type == '0' || this.state.type == '1' ? "" : JSON.parse(this.state.userData).company_id,
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
      this.getDataPagination(20 * Number(indexPage), Number(indexPage))
      // if (this.state.type == '0' || this.state.type == '1') {
      //   // this.getData()
      //   this.getDataPagination(20 * Number(indexPage))
      // } else {
      //   this.getDataForCompany()
      // };
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
      if (this.state.type == '0' || this.state.type == '1') {
        this.getData()
      } else {
        this.getDataForCompany()
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

  onChangeImage(e) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ image_link: files[0] })
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      this.setState({ image: e.target.result })
    }
  }

  render() {
    const { data, arrPagination, arrLevel, arrOptionSdkType, key, arrBrand, isSearch, indexPage } = this.state;
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
                                  this.getDataPagination(20 * Number(indexPage))
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
                            <th className="text-center">Tiều đề</th>
                            <th className="text-center">Mô tả</th>
                            {/* <th className="text-center">Chi tiết</th> */}
                            <th className="text-center">Thương hiệu</th>
                            <th className="text-center">Ảnh thương hiệu</th>
                            <th className="text-center">Loại</th>
                            <th className="text-center">Loại SDK</th>
                            <th className="text-center">Mức độ</th>
                            {/* <th className="text-center">Loại Sdk</th>
                        <th className="text-center">Level</th> */}
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
                                      <img src={item.image} width={"60px"} height={"60px"} />
                                    </td>
                                    <td className="text-center">
                                      {item.title.substr(0, 100) +
                                        (item.title.length > 100 ? "..." : "")}
                                    </td>
                                    <td className="text-center">
                                      {item.description}
                                    </td>
                                    {/* <td className="text-center">
                                  <a href={item.linkdetail} target="_blank">{item.linkdetail}</a>
                                </td> */}
                                    <td className="text-center">
                                      {item.brand_id == null ? "" : item.brand_id.name}
                                    </td>
                                    <td className="text-center">
                                      <img src={item.brand_id == null ? "" : item.brand_id.image} width={"60px"} height={"60px"} />
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
                    await this.getDataPagination(20 * (v), v)
                  }} />
                }
              </div>

            </Col>
          </Row>

          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>{this.state.action == 'new' ? `Tạo mới` : `Cập nhật`}</ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="name"
                label="Tên sản phẩm"
                value={this.state.name}
                placeholder={"Tên sản phẩm"}
                onChange={e => this.onChange("name", e.target.value)}
              />

              <TextFieldGroup
                field="image"
                label="Ảnh thương hiệu"
                type={"file"}
                onChange={e => { this.onChangeImage(e) }}
                onClick={(e) => { e.target.value = null }}
              />
              {
                this.state.image == "" ? "" :
                  <img width="250" height="300" src={this.state.image} style={{ marginBottom: 20 }} />
              }

              <TextFieldGroup
                field="title"
                label="Tiêu đề"
                value={this.state.title}
                placeholder={"Tiêu đề"}
                onChange={e => this.onChange("title", e.target.value)}
              />

              <label className="control-label">Mô tả</label>
              <CTextarea
                name="description"
                rows="7"
                value={this.state.description}
                onChange={(e) => { this.setState({ description: e.target.value }) }}
                placeholder="Mô tả"
              />

              <TextFieldGroup
                field="linkdetail"
                label="Chi tiết"
                value={this.state.linkdetail}
                placeholder={"Chi tiết"}
                onChange={e => this.onChange("linkdetail", e.target.value)}
              />

              <CLabel>Nhãn hiệu:</CLabel>
              <div style={{ width: "100%" }}>
                <CSelect onChange={async e => {
                  this.setState({ brand_id: e.target.value })
                }} custom size="sm" name="selectSm" id="SelectLm">
                  {
                    arrBrand.map((item, i) => {
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


              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Loại SDK:</CLabel>
                <CSelect onChange={async e => {
                  this.setState({ type_sdk_id: e.target.value.split("/")[0], arrLevel: JSON.parse(e.target.value.split("/")[1]) })
                }} custom size="sm" name="selectSm" id="SelectLm">
                  {
                    arrOptionSdkType.map((item, i) => {
                      if (item._id == this.state.type_sdk_id) {
                        return (
                          <option selected key={i} value={item._id + "/" + JSON.stringify(item.Level)}>{item.Name}</option>
                        );
                      } else {
                        return (
                          <option key={i} value={item._id + "/" + JSON.stringify(item.Level)}>{item.Name}</option>
                        );
                      }
                    })
                  }
                </CSelect>
              </div>

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
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addRoles() : this.updateUser() }} disabled={this.state.isLoading}>Lưu</CButton>{' '}
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
