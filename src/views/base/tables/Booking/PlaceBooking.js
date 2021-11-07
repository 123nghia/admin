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

import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../../../contants/contants_app";
import TextFieldGroup from "../../../Common/TextFieldGroup";
import axios from 'axios'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import styles from "../../../../assets/styles/styles";

class Location extends Component {
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
      name: "",
      address: "",
      street: "",
      city: "",
      distrist: "",
      ward: "",
      image: "",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      user: localStorage.getItem('user'),
      companyid: localStorage.getItem('company_id'),
      isLoading: false
    };
  }
  async componentDidMount() {
    const { type } = this.state;

    this.getData()

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
      url: Constants.LIST_LOCATION,
      data: {
        company_id: companyid
      },
      method: 'POST'
    });

    let val = resLocation.data.data;
    this.pagination(val);
    this.setState({ dataApi: val, isLoading: false });
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
        address: "",
        street: "",
        city: "",
        distrist: "",
        ward: "",
        image: "",
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addLocation() {
    const { companyid, name, address, street, city, distrist, ward, image } = this.state
    if (name == null || name == '' ||
      address == null || address == '' ||
      street == null || street == '' ||
      city == null || city == '' ||
      distrist == null || distrist == '' ||
      ward == null || ward == '') {
      alert("Vui lòng nhập đầy đủ trường dữ liệu !!!");
      return
    }

    const body = {
      "company_id": companyid,
      "name": name,
      "address": address,
      "street": street,
      "city": city,
      "distrist": distrist,
      "ward": ward,
      "image": image,
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.ADD_LOCATION,
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
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      name: item.name,
      address: item.address,
      street: item.street,
      city: item.city,
      distrist: item.distrist,
      ward: item.ward,
      image: item.image,
      id: item['_id']
    })
  }

  async updateLocation() {
    const { name, address, street, city, distrist, ward, image } = this.state

    if (name == null || name == '' ||
      address == null || address == '' ||
      street == null || street == '' ||
      city == null || city == '' ||
      distrist == null || distrist == '' ||
      ward == null || ward == '') {
      alert("Vui lòng nhập đầy đủ trường dữ liệu !!!");
      return
    }

    const body = {
      "name": name,
      "address": address,
      "street": street,
      "city": city,
      "distrist": distrist,
      "ward": ward,
      "image": image,
      "id": this.state.id
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_LOCATION,
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
      url: Constants.DELETE_LOCATION,
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

  onChangeImage(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      this.setState({ image: e.target.result })
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
                        <th className="text-center">Tên vị trí</th>
                        <th className="text-center">Hình ảnh</th>
                        <th className="text-center">Địa chỉ</th>
                        <th className="text-center">Tên đường</th>
                        <th className="text-center">Phường</th>
                        <th className="text-center">Quận</th>
                        <th className="text-center">Thành phố</th>
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
                                <td className="text-center">{item.name}</td>
                                <td className="text-center"><img src={item.image} width={"90px"} height={"70px"} /></td>
                                <td className="text-center">
                                  {item.address}
                                </td>
                                <td className="text-center">
                                  {item.street}
                                </td>
                                <td className="text-center">
                                  {item.ward}
                                </td>
                                <td className="text-center">
                                  {item.distrist}
                                </td>
                                <td className="text-center">
                                  {item.ward}
                                </td>
                                <td className="text-center">
                                  {item.city}
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
              <TextFieldGroup
                field="name"
                label="Tên vị trí"
                value={this.state.name}
                placeholder={"Địa chỉ"}
                onChange={e => this.onChange("name", e.target.value)}
              />

              <TextFieldGroup
                field="image"
                label="Hỉnh đại diện"
                type={"file"}
                onChange={e => { this.onChangeImage(e) }}
                onClick={(e) => { e.target.value = null }}
              />
              {
                this.state.image == "" ? "" :
                  <img width="250" height="300" src={this.state.image} style={{ marginBottom: 20 }} />
              }

              <TextFieldGroup
                field="address"
                label="Số địa chỉ"
                value={this.state.address}
                placeholder={"Số địa chỉ"}
                type='number'
                onChange={e => this.onChange("address", e.target.value)}
              />

              <TextFieldGroup
                field="street"
                label="Tên đường"
                value={this.state.street}
                placeholder={"Tên đường"}
                onChange={e => this.onChange("street", e.target.value)}
              />

              <TextFieldGroup
                field="ward"
                label="Phường"
                value={this.state.ward}
                placeholder={"Phường"}
                onChange={e => this.onChange("ward", e.target.value)}
              />

              <TextFieldGroup
                field="distrist"
                label="Quận"
                value={this.state.distrist}
                placeholder={"Quận"}
                onChange={e => this.onChange("distrist", e.target.value)}
              />

              <TextFieldGroup
                field="city"
                label="Thành Phố"
                value={this.state.city}
                placeholder={"Thành Phố"}
                onChange={e => this.onChange("city", e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addLocation() : this.updateLocation() }} disabled={this.state.isLoading}>Lưu</CButton>{' '}
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

export default Location;
