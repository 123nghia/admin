import React, { Component } from 'react';
import CIcon from '@coreui/icons-react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table, Button, Input,
  ModalHeader, ModalBody, ModalFooter, Modal,
  Alert
} from 'reactstrap';

import {
  CLabel,
  CSelect,
  CContainer,
  CRow,
  CCol,
  CCardGroup,
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CBadge,
  CButton,
  CTextarea
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

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));
class Color extends Component {
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
      products: [],
      product_id: '',
      hex: "",
      makeup_id: "",
      alpha: "",
      version: "v4",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      isLoading: false
    };
  }
  async componentDidMount() {
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
    this.setState({ isLoading: true });
    const res_color = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_COLOR,
      method: 'GET'
    });

    const res_product = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_PRODUCT,
      method: 'GET'
    });


    let val = res_color.data.data;
    let product = res_product.data.data;

    this.pagination(val);
    this.setState({ dataApi: val, products: product });

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
        product_id: this.state.products.length == 0 ? '' : this.state.products[0]._id,
        hex: "",
        makeup_id: "",
        alpha: "",
        version: "v4",
      })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  async addRoles() {
    const { hex, makeup_id, alpha, product_id, version } = this.state;

    if (hex == null || hex == '' ||
        makeup_id == null || makeup_id == '' ||
        alpha == null || alpha == '' ||
        product_id == null || product_id == '') {
      alert("Please fill in all the requirements");
      return
    }

    const body = {
      product_id: product_id,
      hex: hex,
      makeup_id: makeup_id,
      alpha: alpha,
      ver: version
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.ADD_COLOR,
      method: 'POST',
      data: body
    });
    console.log(res)
    if (res.status == 200) {
      this.getData();
      this.setState({ modalCom: !this.state.modalCom })
    } else {
      alert("Thêm màu thất bại");
      this.setState({ isLoading: false });
    }
  }

  async openUpdate(item) {
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      product_id: item.product_id,
      hex: item.hex,
      makeup_id: item.makeup_id,
      alpha: item.alpha,
      id: item['_id'],
      ver: item.version
    })
  }

  async updateUser() {
    const { hex, makeup_id, alpha, product_id, version } = this.state;

    if (hex == null || hex == '' ||
        makeup_id == null || makeup_id == '' ||
        alpha == null || alpha == '' ||
        product_id == null || product_id == '') {
      alert("Please fill in all the requirements");
      return
    }

    const body = {
      product_id: product_id,
      hex: hex,
      makeup_id: makeup_id,
      alpha: alpha,
      ver: version,
      id: this.state.id
    }

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_COLOR,
      method: 'POST',
      data: body
    });
    console.log(res)
    if (res.status == 200) {
      this.getData();
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
      url: Constants.DELETE_COLOR,
      method: 'POST',
      data: {
        "id": this.state.id
      }
    });

    if (res.status == 200) {
      this.getData();
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

  render() {
    const { data, key, sdkItem, action, arrPagination, indexPage, currentSdkSelect, products } = this.state;
    const { classes } = this.props;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Danh sách mã màu (Page: {this.state.indexPage + 1}))
                  <div style={styles.tags}>
                    {/* <div>
                    <Input style={styles.searchInput} onChange={(e) => this.searchKey(e.target.value)} name="key" value={key} placeholder="Tìm kiếm" /> */}
                    <CButton outline color="primary" style={styles.floatRight} size="sm" onClick={async e => await this.toggleModal("new")}>Thêm</CButton>
                    {/* </div> */}
                  </div>
                </CardHeader>
                <CardBody>

                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">SKU</th>
                        <th className="text-center">Hex</th>
                        <th className="text-center">MakeUp ID</th>
                        <th className="text-center">Alpha</th>
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
                                <td className="text-center">{item.product}</td>
                                <td className="text-center">
                                  {item.hex}
                                  <div style={{ backgroundColor: item.hex, width: '100%', height: '30px' }}> </div>
                                </td>
                                <td className="text-center">{item.makeup_id}</td>
                                <td className="text-center">{item.alpha}</td>
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
              <CLabel>Chọn sản phẩm:</CLabel>
              <div style={{ width: "100%" }}>
                <CSelect onChange={async e => { this.setState({ product_id: e.target.value }) }} custom size="sm" name="selectSm" id="SelectLm">
                  {
                    products.map((item, i) => {
                      if (item._id == this.state.product_id) {
                        return (
                          <option selected key={i} value={item.name}>{item.name}</option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.name}>{item.name}</option>
                        );
                      }
                    })
                  }
                </CSelect>
              </div>

              <TextFieldGroup
                field="hex"
                label="Hex"
                value={this.state.hex}
                placeholder={"Hex"}
                // error={errors.title}
                onChange={e => this.onChange("hex", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="makeup_id"
                label="Mã Makeup"
                value={this.state.makeup_id}
                placeholder={"Mã Makeup"}
                // error={errors.title}
                onChange={e => this.onChange("makeup_id", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="alpha"
                label="Alpha"
                value={this.state.alpha}
                placeholder={"Alpha"}
                // error={errors.title}
                onChange={e => this.onChange("alpha", e.target.value)}
              // rows="5"
              />

              <CLabel>Chọn sản phẩm:</CLabel>
              <div style={{ width: "100%" }}>
                <CSelect onChange={async e => { this.setState({ version: e.target.value }) }} custom size="sm" name="selectSm" id="SelectLm">
                  {
                    ['v3', 'v4'].map((item, i) => {
                      if (item == this.state.version) {
                        return (
                          <option selected key={i} value={item}>{item}</option>
                        );
                      } else {
                        return (
                          <option key={i} value={item}>{item}</option>
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
    marginRight: "5px",
    width: "250px"
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
  mgl5: {
    marginBottom: '0px'
  }
}

export default Color;
