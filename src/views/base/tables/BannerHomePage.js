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

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      modalCom: false,
      dataApi: [],
      hidden: false,
      action: 'new',
      image: "",
      image_show: "",
      link: "",
      modalDelete: false,
      delete: null,
      arrPagination: [],
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
      Constants.LIST_BANNER, {}, "", "POST")

    let val = res.data;
    this.pagination(val);
    this.setState({ dataApi: val, isLoading: false })
  }

  searchKey() {
    const { indexPage, key } = this.state;

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.link.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {

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
        image: "",
        image_show: "",
        link: ""
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addBanner() {
    const { image, link } = this.state
    if (image == null || image == '') {
      alert("Hãy nhập đầy đủ dữ liệu !!!");
      return
    }

    const form = new FormData();
    form.append("image", image);

    await API_CONNECT(Constants.UPLOAD_BANNER, form, "", "POST")

    const body = {
      image: image.name,
      link: link
    }

    this.setState({ isLoading: true });
    var res = await API_CONNECT(
      Constants.ADD_BANNER, body, "", "POST")

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
      image: item.image,
      image_show: "",
      link: item.link,
      id: item['_id']
    })
  }

  async updateBanner() {
    const { image, link } = this.state

    if (image == null || image == '') {
      alert("Hãy nhập đầy đủ trường !!!");
      return
    }

    const form = new FormData();
    form.append("image", image);

    await API_CONNECT(Constants.UPLOAD_BANNER, form, "", "POST")

    const body = {
      image: image.name,
      link: link,
      id: this.state.id,
    }

    this.setState({ isLoading: true });
    var res = await API_CONNECT(
      Constants.UPADTE_BANNER, body, "", "POST")

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
      Constants.DELETE_BANNER, {
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

  render() {
    const { data, arrPagination, key, image, image_show } = this.state;
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
                        <th className="text-center">Hình ảnh</th>
                        <th className="text-center">Đường dẫn</th>
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
                                <td className="text-center">
                                  {
                                    item.image == "" || item.image == null ?
                                      <img src={"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg"} width={"60px"} height={"60px"} /> :
                                      <img src={`${Constants.BASE_URL}/public/image_banner/${item.image}`} width={"80px"} height={"60px"} />
                                  }
                                </td>
                                <td className="text-center">
                                  <a href={item.link} target="_blank">{item.link}</a>
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
                field="link"
                label="Đường dẫn"
                value={this.state.link}
                placeholder={"Đường dẫn"}
                // error={errors.title}
                onChange={e => this.onChange("link", e.target.value)}
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
                image == "" ? "" :
                  <img width="250" height="300" src={
                    image_show == "" ?
                      `${Constants.BASE_URL}/public/image_banner/${image}` : image_show} style={{ marginBottom: 20 }} />
              }
            </ModalBody>
            <ModalFooter>
              <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addBanner() : this.updateBanner() }} disabled={this.state.isLoading}>Lưu</CButton>{' '}
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

export default Banner;
