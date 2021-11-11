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

import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../../../contants/contants_app";
import TextFieldGroup from "../../../Common/TextFieldGroup";
import axios from 'axios'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import styles from "../../../../assets/styles/styles";

import CreatableSelect from 'react-select/creatable';

class NotificationThemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      totalActive: 0,
      modalCom: false,
      updated: '',
      dataApi: [],
      hidden: false,
      action: 'new',
      code: "",
      content: "",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      user: localStorage.getItem('user'),
      isLoading: false,
      companyid: localStorage.getItem('company_id'),
      dataType: [],
      objTypeNotification: {},
      arrOptionType: []
    };
  }
  async componentDidMount() {

    this.getData()
    this.getDataNotificationType()
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
    const { companyid } = this.state
    this.setState({ isLoading: true });
    const resLocation = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_NOTIFICATION_TEMPLATE,
      data: {
        company_id: companyid
      },
      method: 'POST'
    });

    let val = resLocation.data.data;
    this.pagination(val);
    this.setState({ dataApi: val, isLoading: false });
  }

  getDataNotificationType = async () => {
    const { companyid } = this.state
    const resLocation = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_NOTIFICATION_TYPE,
      data: {
        company_id: companyid
      },
      method: 'POST'
    });

    let val = resLocation.data.data;
    const arrTempOptionCategory = [];
    for (let i = 0; i < val.length; i++) {
      arrTempOptionCategory.push({
        value: val[i].code, label: val[i].name
      })
    }
    this.setState({ dataType: val, arrOptionType: arrTempOptionCategory })
  }

  handleChangeCategory = (newValue, actionMeta) => {
    this.setState({ objTypeNotification: newValue, code: newValue.value })
    console.log(newValue)
  };

  searchKey() {
    const { indexPage, key } = this.state;
    // this.setState({ key: key })

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.content.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {

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
        code: "",
        content: ""
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addNotificationThemplate() {
    const { code, content, companyid } = this.state
    if (code == null || code == '' ||
      content == null || content == '') {
      alert("Vui lòng nhập đầy đủ trường dữ liệu !!!");
      return
    }

    const body = {
      "code": code,
      "content": content,
      "company_id": companyid
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.ADD_NOTIFICATION_TEMPLATE,
      method: 'POST',
      data: body
    });

    if (res.status == 200) {
      this.getData()

      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert("Thêm thất bại");
      this.setState({ isLoading: false });
    }
  }


  async openUpdate(item) {
    const { dataType } = this.state;
    const I = (element) => element.code == item.code;
    const index = dataType.findIndex(I);


    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      content: item.content,
      code: item.code,
      objTypeNotification: dataType[index] && dataType.length > 0 ? { value: dataType[index].code, label: dataType[index].name } : { value: "", label: "" },
      id: item['_id']
    })
  }

  async updateNotificationThemplate() {
    const { content, code } = this.state

    if (content == null || content == '' ||
      code == null || code == '') {
      alert("Vui lòng nhập đầy đủ trường dữ liệu !!!");
      return
    }

    const body = {
      "content": content,
      "code": code,
      "id": this.state.id
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_NOTIFICATION_TEMPLATE,
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
    })
  }

  async delete() {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.DELETE_NOTIFICATION_TEMPLATE,
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

  render() {
    const { data, arrPagination, key, isLoading, objTypeNotification, arrOptionType } = this.state;
    if (!isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Danh sách dịch vụ
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
                        <th className="text-center">Mã loại</th>
                        <th className="text-center">Nội dung</th>
                        <th className="text-center"></th>
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
                                <td className="text-center">{item.code}</td>
                                <td className="text-center">{item.content}</td>
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

          <Modal size='xl' isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>{this.state.action == 'new' ? `Tạo mới` : `Cập nhật`}</ModalHeader>
            <ModalBody>

              <CRow>
                <CCol md="3" lg="3" sm="12" xm="12" lx="3">
                  <CLabel>Danh mục:</CLabel>
                </CCol>
                <CCol md="9" lg="9" sm="12" xm="12" lx="9">
                  <CreatableSelect
                    isClearable
                    onChange={this.handleChangeCategory}
                    value={objTypeNotification}
                    options={arrOptionType}
                  />
                </CCol>
              </CRow>

              <br />
              <label className="control-label">Mô tả thương hiệu</label>
              <CKEditor
                editor={ClassicEditor}
                data={this.state.content}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({ content: data })
                }}
              />
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addNotificationThemplate() : this.updateNotificationThemplate() }} disabled={this.state.isLoading}>Lưu</CButton>{' '}
              <CButton color="secondary" onClick={e => this.toggleModal("new")}>Đóng</CButton>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalDelete} toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })} className={this.props.className}>
            <ModalHeader toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>{`Xoá`}</ModalHeader>
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

export default NotificationThemplate;
