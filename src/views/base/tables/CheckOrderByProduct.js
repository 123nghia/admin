import React, { Component } from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';

import {
  CCol,
  CRow
} from '@coreui/react'

import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import 'moment-timezone';
import Constants from "./../../../contants/contants";
import axios from 'axios'
import Pagination from '@material-ui/lab/Pagination';
import { ExportCSV } from '../../XLSX/ExportCSV';

class CheckOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      dataApi: [],
      arrPagination: [],
      indexPage: 0,
      dataCompany: [],
      currentCompany: '',
      hidden: false,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      dataExcel: []
    };
  }
  async componentDidMount() {
    this.getData();
    let arr = JSON.parse(localStorage.getItem('url'));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to == window.location.hash) {
        if (arr[i].hidden == true) {
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

    this.setState({ arrPagination: arrTotal, data: arrTotal[this.state.indexPage] });
  }

  getData = async () => {
    const { dataExcel } = this.state;
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_CHECKED_PRODUCT,
      method: 'POST',
      headers: this.state.token
    });
    let data = res.data.data

    for(let i = 0; i < data.length; i++) {
      dataExcel.push({
        "Số điện thoại": data[i].customer_phone == "" || data[i].customer_phone == null ? "NULL" : data[i].customer_phone,
        "Tên khách hàng": data[i].name_customer == "" || data[i].name_customer == null ? "NULL" : data[i].name_customer,
        "Số lượng": data[i].quantity,
        "Tên sale": data[i].sale_id.Name,
        "Mã scan": data[i].scan_code,
        "Thời gian": data[i].time,
        "Tổng giá": data[i].total,
        "Cân nặng": data[i].weight
      })
    }

    this.pagination(data);
    this.setState({ dataApi: data, isLoading: false, dataExcel: dataExcel });
  }

  render() {
    const { data, arrPagination, hidden, dataExcel } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CRow>
                    <CCol xl="8" lg="8" md="12" sm="12">
                      <i className="fa fa-align-justify"></i> Danh sách đơn hàng
                    </CCol>
                    <CCol xl="4" lg="4" md="12" sm="12">
                      <ExportCSV csvData={dataExcel} fileName={"thống_kê_sản_phẩm"}/>
                    </CCol>
                  </CRow>
                </CardHeader>
                <CardBody>
                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên khách hàng</th>
                        <th className="text-center">Số điện thoại khách hàng</th>
                        <th className="text-center">Tên sale</th>
                        <th className="text-center">Tên shop</th>
                        <th className="text-center">Mã sản phẩm</th>
                        <th className="text-center">Số lượng</th>
                        <th className="text-center">Tổng giá trị</th>
                        <th className="text-center">Thời gian</th>
                      </tr>
                    </thead>
                    <tbody>
                      <td colSpan="9" hidden={hidden} className="text-center">Không có dữ liệu</td>
                      {
                        data != undefined ?
                          data.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td className="text-center">{item.name_customer}</td>
                                <td className="text-center">{item.customer_phone}</td>
                                <td className="text-center">{item.sale_id.Name}</td>
                                <td className="text-center">{item.shop_id.Name}</td>
                                <td className="text-center">{item.scan_code}</td>
                                <td className="text-center">{item.quantity}</td>
                                <td className="text-center">{item.total}</td>
                                <td className="text-center">{new Date(item.time).toLocaleDateString()}</td>
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
        </div >
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

export default CheckOrder;
