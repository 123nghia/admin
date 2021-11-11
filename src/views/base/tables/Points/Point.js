import React, { Component } from 'react';
import CIcon from '@coreui/icons-react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import {
  CButton,
  CRow,
  CCol
} from '@coreui/react'

import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../../../contants/contants_app";
import styles from "../../../../assets/styles/styles";
import axios from 'axios'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

class Point extends Component {
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
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      user: localStorage.getItem('user'),
      companyid: localStorage.getItem('company_id'),
      isLoading: false,
      modalDetail: false,
      dataDetail: []
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
      url: Constants.LIST_POINT,
      data: {
        company_id: companyid
      },
      method: 'POST'
    });

    let val = resLocation.data.data;

    this.pagination(val);
    this.setState({ dataApi: val, isLoading: false });
  }

  getPointByIUD = async (user_id) => {
    const { companyid, modalDetail } = this.state

    const resLocation = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_POINT_BY_UID,
      data: {
        company_id: companyid,
        user_id: user_id
      },
      method: 'POST'
    });

    let val = resLocation.data.data;
    this.setState({ modalDetail: !modalDetail, dataDetail: val })
  }

  searchKey() {
    const { indexPage, key } = this.state;
    // this.setState({ key: key })

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.label.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {

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

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { data, arrPagination, key, dataDetail } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Danh sách tích điểm
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

                      </CCol>
                    </CRow>

                  </div>
                </CardHeader>
                <CardBody>

                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên người dùng</th>
                        <th className="text-center">Điểm đã dùng</th>
                        <th className="text-center">Điểm chưa dùng</th>
                        <th className="text-center">Tổng điểm</th>
                        <th className="text-center">Ngày tạo</th>
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
                                  {item.name}
                                </td>
                                <td className="text-center">
                                  <CButton onClick={() => { this.getPointByIUD(item.UID) }} variant="outline" color='info' style={{ width: 100, color: '#000000' }}>{item.point_used}</CButton>
                                </td>
                                <td className="text-center">
                                  {item.point_instock}
                                </td>
                                <td className="text-center">
                                  {item.total_point}
                                </td>
                                <td className="text-center">
                                  {new Date(item.create_date).toLocaleDateString() + " " + new Date(item.create_date).toLocaleTimeString()}
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

          <Modal size='xl' isOpen={this.state.modalDetail} className={this.props.className}>
            <ModalHeader>Chi tiết sử dụng điểm</ModalHeader>
            <ModalBody>
              <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">STT.</th>
                    <th className="text-center">Tên sản phẩm</th>
                    <th className="text-center">Tổng điểm	</th>
                    <th className="text-center">Ngày đổi</th>
                  </tr>
                </thead>
                <tbody>
                  <td colSpan="10" hidden={dataDetail.length == 0 ? false : true} className="text-center">Không tìm thấy dữ liệu</td>
                  {
                    dataDetail != undefined ?
                      dataDetail.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td className="text-center">{i + 1}</td>
                            <td className="text-center">
                              {item.product_name}
                            </td>
                            <td className="text-center">
                              {item.total_point}
                            </td>
                            <td className="text-center">
                              {new Date(item.create_date).toLocaleDateString() + " " + new Date(item.create_date).toLocaleTimeString()}
                            </td>
                          </tr>
                        );
                      }) : ""
                  }
                </tbody>
              </table>
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

export default Point;
