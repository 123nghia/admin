import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  ModalHeader, ModalBody, ModalFooter, Modal,
} from 'reactstrap';

import {
  CButton, CRow, CCol
} from '@coreui/react'

import API_CONNECT from "../../../../functions/callAPI_APP";
import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../../../contants/contants_app";
import { css } from "@emotion/react";
import axios from 'axios';
import DotLoader from "react-spinners/DotLoader";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      modalCom: false,
      dataApi: [],
      hidden: false,
      action: 'new',
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      type: localStorage.getItem('type'),
      isLoading: false,
      dataDetail: [],
      objOrder: {},
      objTransport: {},
      companyid: localStorage.getItem('company_id'),
      name_customer: ""
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
    const { companyid } = this.state;
    this.setState({ isLoading: true });
    var res = await API_CONNECT(
      Constants.LIST_ORDER, { company_id: companyid }, "", "POST")

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

  onDetail = async (id, name) => {
    this.setState({ modalCom: !this.state.modalCom })
    var res = await API_CONNECT(Constants.LIST_ORDER_DETAIL, { id: id }, "", "POST")
    let data = res.data.list_product;
    let transport = res.data.order_id.transport_id;
    var resDetailTransport = {
      fee: 0,
      insurance_fee: 0,
      label: "",
      status_id: 0
    };

    if (transport != undefined) {
      resDetailTransport = await API_CONNECT(Constants.GET_DETAIL_TRANSPORT + "?id=" + transport, {}, "", "GET")
      resDetailTransport = resDetailTransport.data.res_order
    }

    this.setState({ dataDetail: data, objOrder: res.data.order_id, objTransport: resDetailTransport, name_customer: name })
  }

  onDetailOrder = async (label) => {
    var res = await API_CONNECT(Constants.PRINT_ORDER + "?label=" + label, {}, "", "GET")
    if(res.is_success) {
      window.open(`${Constants.BASE_URL}/public/pdf/${label}.pdf`, '_blank');
    }
  }

  setContent(status, type) {
    switch (type) {
      case "1":
        switch (status) {
          case "0":
            return "Thanh toán VNPay"
          case "1":
            return "Thanh toán bằng tiền mặt"
        }
        break
      case "2":
        switch (status) {
          case "0":
            return "Giao hàng tiết kiệm"
        }
        break
      case "3":
        switch (status) {
          case "0":
            return "Chưa thanh toán"
          case "1":
            return "Đã thanh toán"
        }
        break
      case "4":
        switch (status) {
          case "00":
            return "Thành công"
          default: return "Chưa xác nhận"
        }
        break
    }
  }

  setContentGHTK(status) {
    switch (status) {
      case "-1":
        return "Hủy đơn hàng"
      case "1":
        return "Chưa tiếp nhận"
      case "2":
        return "Đã tiếp nhận"
      case "3":
        return "Đã lấy hàng/Đã nhập kho"
      case "4":
        return "Đã điều phối giao hàng/Đang giao hàng"
      case "5":
        return "Đã giao hàng/Chưa đối soát"
      case "6":
        return "Đã đối soát"
      case "7":
        return "Không lấy được hàng"
      case "8":
        return "Hoãn lấy hàng"
      case "9":
        return "Không giao được hàng"
      case "10":
        return "Delay giao hàng"
      case "11":
        return "Đã đối soát công nợ trả hàng"
      case "12":
        return "Đã điều phối lấy hàng/Đang lấy hàng"
      case "13":
        return "Đơn hàng bồi hoàn"
      case "14":
        return "Đang trả hàng (COD cầm hàng đi trả)"
      case "15":
        return "Đã trả hàng (COD đã trả xong hàng)"
      case "16":
        return "Shipper báo đã lấy hàng"
      case "17":
        return "Shipper (nhân viên lấy/giao hàng) báo không lấy được hàng"
      case "18":
        return "Shipper báo delay lấy hàng"
      case "19":
        return "Shipper báo đã giao hàng"
      case "20":
        return "Shipper báo không giao được giao hàng"
      case "21":
        return "Shipper báo delay giao hàng"
      default:
        return "Chưa tiếp nhận"
    }
  }

  render() {
    const { data, arrPagination, dataDetail, isLoading, hidden, modalCom, objOrder, name_customer, objTransport } = this.state;
    if (!isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Danh sách đơn hàng
                </CardHeader>
                <CardBody>
                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên người dùng</th>
                        <th className="text-center">Mã đơn hàng</th>
                        <th className="text-center">Tổng</th>
                        <th className="text-center">Tạo ngày</th>
                        <th className="text-center">#</th>
                      </tr>
                    </thead>
                    <tbody>
                      <td colSpan="10" hidden={hidden} className="text-center">Không tìm thấy dữ liệu</td>
                      {
                        data != undefined ?
                          data.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td className="text-center">{item.user_id.name}</td>
                                <td className="text-center">{item._id}</td>
                                <td className="text-center">{item.total}</td>
                                <td className="text-center">
                                  {(new Date(item.create_at)).toLocaleDateString() + ' ' + (new Date(item.create_at)).toLocaleTimeString()}
                                </td>
                                <td className="text-center">
                                  <CButton style={styles.mgl5} outline color="primary" size="sm" onClick={async (e) => {
                                    await this.onDetail(item.detail_id, item.user_id.name)
                                  }} >
                                    Chi tiết
                                  </CButton>

                                  <CButton style={styles.mgl5} outline color="primary" disabled={item.transport_id == undefined ? true : false} size="sm" onClick={async (e) => {
                                    this.onDetailOrder(item.transport_id.res_order.label)
                                  }} >
                                    In đơn hàng
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

          <Modal size="xl" isOpen={modalCom}>
            <ModalHeader>
              <CRow>
                <CCol lg="12" sm="12">
                  <CRow>
                    <CCol lg="6" sm="12"><strong>Tên khách hàng: </strong><p style={{ color: 'red' }}> {name_customer} </p></CCol>
                    <CCol lg="6" sm="12"><strong>Phương thức thanh toán:</strong><p style={{ color: 'red' }}> {this.setContent(objOrder.payment_method, "1")} </p></CCol>
                    <CCol lg="6" sm="12"><strong>Phương thức vận chuyển:</strong><p style={{ color: 'red' }}> {this.setContent(objOrder.transport_method, "2")} </p></CCol>
                    <CCol lg="6" sm="12"><strong>Trạng thái đơn hàng:</strong><p style={{ color: 'red' }}> {this.setContent(objOrder.status, "3")}</p></CCol>
                    <CCol lg="6" sm="12"><strong>Trạng thái đơn hàng tiết kiệm nhanh:</strong><p style={{ color: 'red' }}> {this.setContent(objOrder.status_tkn, "4")}</p></CCol>
                  </CRow>
                </CCol>
              </CRow>
            </ModalHeader>
            <ModalBody>
              <Tabs>
                <TabList>
                  <Tab>Thông tin đơn hàng</Tab>
                  <Tab disabled={objOrder.transport_id == undefined ? true : false}>
                    Chi tiết vận chuyển {objOrder.transport_id == undefined ? "(Đã ẩn)" : ""}</Tab>
                </TabList>

                <TabPanel>
                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên sản phẩm</th>
                        <th className="text-center">Hình ảnh</th>
                        <th className="text-center">Thương hiệu</th>
                        <th className="text-center">Danh mục</th>
                        <th className="text-center">Số lượng</th>
                        <th className="text-center">Giá</th>
                      </tr>
                    </thead>
                    <tbody>
                      <td colSpan="10" hidden={hidden} className="text-center">Không tìm thấy dữ liệu</td>
                      {
                        dataDetail != undefined ?
                          dataDetail.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td className="text-center">{item.product_id.name}</td>
                                <td className="text-center">
                                  {
                                    item.product_id.image == "" || item.product_id.image == null ?
                                      <img src={"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg"} width={"60px"} height={"60px"} /> :
                                      <img src={`${Constants.BASE_URL}/public/image_product/${item.product_id.image}`} width={"80px"} height={"60px"} />
                                  }
                                </td>
                                <td className="text-center">{item.product_id.brand_id.name}</td>
                                <td className="text-center">{item.product_id.category_id.name}</td>
                                <td className="text-center">{item.quantity}</td>
                                <td className="text-center">{item.price * item.quantity}</td>
                              </tr>
                            );
                          }) : ""
                      }
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel>
                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">Mã đơn hàng TIKITECH</th>
                        <th className="text-center">Mã đơn hàng GHTK</th>
                        <th className="text-center">Trạng thái đơn hàng</th>
                        <th className="text-center">Phí ship</th>
                        <th className="text-center">Phí bảo hiểm</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">{objTransport.partner_id}</td>
                        <td className="text-center">{objTransport.label}</td>
                        <td className="text-center">{this.setContentGHTK(objTransport.status_id)}</td>
                        <td className="text-center">{objTransport.fee}</td>
                        <td className="text-center">{objTransport.insurance_fee}</td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
              </Tabs>


            </ModalBody>
            <ModalFooter>
              <CButton color="secondary" onClick={e => {
                this.setState({ modalCom: !modalCom })
              }}>Đóng</CButton>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
    return (
      <div className="sweet-loading">
        <DotLoader css={override} size={50} color={"#123abc"} loading={isLoading} speedMultiplier={1.5} />
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

export default Order;
