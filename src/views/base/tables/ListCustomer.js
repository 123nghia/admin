import React, { Component } from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Button, Input,
  ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';

import {
  CSelect,
  CRow,
  CCol
} from '@coreui/react'

import { connect } from 'react-redux';
import {
  onSaveID,
  onSaveSeed
} from '../../../redux/data/actions'
import 'moment-timezone';
import Pagination from '@material-ui/lab/Pagination';
import Constants from "./../../../contants/contants";
import API_CONNECT from "../../../../src/helpers/callAPI";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      keyStatus: '',
      modalCom: false,
      dataApi: [],
      arrDetail: [],
      indexPage: 0,
      arrPagination_All: [],
      indexPage_All: 0,
      role: localStorage.getItem('role'),
      company_id: localStorage.getItem('user'),
      isLoading: true,
      hidden: false,
      dataAll: [],
      hidden_all: false,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
  }
  async componentDidMount() {
    this.getAllData();
    let arr = JSON.parse(localStorage.getItem('url'));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to == window.location.hash) {
        if (arr[i].hidden == true) {
          window.location.href = '#/'
        }
      }
    }
  }

  pagination_all(dataApi) {
    var i, j, temparray, chunk = 5;
    let arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }
    if (arrTotal.length == 0) {
      this.setState({
        hidden_all: false
      })
    } else {
      this.setState({
        hidden_all: true
      })
    }
    this.setState({ arrPagination_All: arrTotal, dataAll: arrTotal[this.state.indexPage_All] });
  }

  countType(arr, phone) {
    const count = arr.filter(data => data.Phone == phone);
    return count.length;
  }

  getAllData = async () => {
    this.setState({ isLoading: true });

    var resAll = await API_CONNECT(Constants.LIST_CUSTOMER, {}, this.state.token, "POST")

    let dataRes = resAll.data;

    if (dataRes.length == 0) {
      this.setState({
        hidden_all: false
      })
    } else {
      this.setState({
        hidden_all: true
      })
    }

    this.setState({ dataApi: dataRes });

    this.pagination_all(dataRes);
    this.setState({ isLoading: false });
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  searchKey() {
    const { indexPage_All, key, keyStatus } = this.state;

    if (key != '' || keyStatus != '') {
      let d = []
      this.state.dataApi.map(val => {
        if ((val.Name.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.Email.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.Phone.toLocaleUpperCase().includes(key.toLocaleUpperCase())) &&
          val.Status.toLocaleUpperCase().includes(keyStatus.toLocaleUpperCase())) {
          d.push(val)
        }
      })
      let active = 0

      d.map(val => {
        if (val.Status == "Actived") {
          active = active + 1
        }
      })

      this.setState({ dataAll: d, totalActive: active })
    } else {
      let active = 0

      this.state.dataApi.map(val => {
        if (val.Status == "Actived") {
          active = active + 1
        }
      })

      this.setState({ dataAll: this.state.arrPagination_All[indexPage_All], totalActive: active })
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
      keyName: '',
      keyEmail: '',
      keyPhone: '',
      keyGender: '',
      keyStatus: ''
    }, () => {
      this.searchKey();
    });
  }

  openDetailHistory = async (phone) => {
    this.setState({ modalCom: !this.state.modalCom })
    const result = await API_CONNECT(Constants.LIST_DETAIL_CUSTOMER, {
      phone: phone
    }, this.state.token, "POST")

    this.setState({ arrDetail: result.data })
  }

  render() {
    const { key, dataAll, arrPagination_All,
      hidden_all, arrDetail } = this.state;

    if (!this.state.isLoading) {
      return (
        <div>
          <Card>
            <CardHeader>

              Danh sách khách hàng

              <div style={styles.tags}>
                <CRow>
                  <CCol sm="6" lg="12">
                    <CRow>
                      <CCol sm="6" lg="4">
                        <div>
                          <Input style={styles.searchInput} onChange={(e) => {
                            this.actionSearch(e, "key");
                          }} name="key" value={key} placeholder="Từ khóa" />
                        </div>
                      </CCol>
                      <CCol sm="6" lg="4">
                        <CSelect style={styles.flexOption} onChange={e => {

                          this.actionSearch(e, "keyStatus");

                        }} custom>
                          {
                            ['Actived', 'Deactived', 'Locked'].map((item, i) => {
                              return (
                                <option value={item}>{item}</option>
                              );
                            })
                          }
                        </CSelect>
                      </CCol>
                      <CCol sm="6" lg="4">
                        <Button color="primary" style={{ width: '100%', marginTop: 5 }} size="sm" onClick={e => { this.resetSearch() }}>Làm mới tìm kiếm</Button>
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol sm="6" lg="12">
                    {/* <Button outline color="primary" style={styles.floatRight} size="sm" onClick={e => this.toggleModal("new")}>Thêm mới</Button> */}
                  </CCol>
                </CRow>
              </div>
            </CardHeader>
            <CardBody>
              {
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">STT.</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Email</th>
                      <th className="text-center">Số điện thoại</th>
                      <th className="text-center">Số lần ghé thăm</th>
                      <th className="text-center">Lần cuối đến</th>
                      <th className="text-center">#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td colSpan="8" hidden={hidden_all} className="text-center">Không tìm thấy dữ liệu</td>
                    {
                      dataAll != undefined ?
                        dataAll.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td className="text-center">{i + 1}</td>
                              <td className="text-center">{item.Name}</td>
                              <td className="text-center">{item.Email}</td>
                              <td className="text-center">{item.Phone}</td>
                              <td className="text-center">{item.count}</td>
                              <td className="text-center">
                                {(new Date(item.Create_Date)).toLocaleDateString() + ' ' + (new Date(item.Create_Date)).toLocaleTimeString()}
                              </td>
                              <td className="text-center">
                                <Button outline color="info" size="sm" onClick={() => { this.openDetailHistory(item.Phone) }} >Chi tiết lịch sử đến</Button>
                              </td>
                            </tr>
                          );
                        }) : ""
                    }
                  </tbody>
                </table>
              }
            </CardBody>
          </Card>
          <div style={{ float: 'right' }}>
            <Pagination count={arrPagination_All.length} color="primary" onChange={(e, v) => {
              this.setState({ dataAll: arrPagination_All[v - 1], indexPage_All: v - 1 })
            }} />
          </div>

          <Modal size='xl' isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>Chi tiết lịch sử đến</ModalHeader>
            <ModalBody>
              {
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">STT.</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Email</th>
                      <th className="text-center">Số điện thoại</th>
                      <th className="text-center">Ngày đến</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td colSpan="8" hidden={arrDetail.length > 0 ? true : false} className="text-center">Không tìm thấy dữ liệu</td>
                    {
                      arrDetail != undefined ?
                      arrDetail.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td className="text-center">{i + 1}</td>
                              <td className="text-center">{item.Name}</td>
                              <td className="text-center">{item.Email}</td>
                              <td className="text-center">{item.Phone}</td>
                              <td className="text-center">
                                {(new Date(item.Create_Date)).toLocaleDateString() + ' ' + (new Date(item.Create_Date)).toLocaleTimeString()}
                              </td>
                            </tr>
                          );
                        }) : ""
                    }
                  </tbody>
                </table>
              }
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={e => { this.setState({ modalCom: !this.state.modalCom }) }}>Đóng</Button>
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
  wa10: {
    width: "5%",
    float: "left",
    height: "60px"
  },
  sale_times: {
    width: "8%",
    float: "left",
    height: "60px",
    textAlign: 'center'
  },
  pagination: {
    marginRight: '5px'
  },
  flexLabel: {
    width: 100
  },
  flexOption: {
    width: 160,
    margin: '1px'
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
  wh12: {
    width: "11%",
    float: "left",
    height: "60px",
    textAlign: 'center'
  },
  ws12: {
    width: "13%",
    float: "left",
    height: "60px",
    textAlign: 'center'
  },
  wh15: {
    width: "15%",
    float: "left",
    height: "60px",
    textAlign: 'center'
  },
  w5: {
    width: "22%",
    float: "left",
    height: "60px"
  },
  w5_10: {
    width: "5%",
    float: "left",
    height: "60px"
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
    marginRight: "5px"
  },
  searchInput: {
    width: "160px",
    display: 'inline-block',
    margin: '1px'
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

const mapStateToProps = state => {
  return {
    data: state.getData_AllAPI
  }
}


export default connect(mapStateToProps, { onSaveID, onSaveSeed })(Users);

