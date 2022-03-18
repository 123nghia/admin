import React, { Component } from 'react';
import CIcon from '@coreui/icons-react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap';

import {
  CButton
} from '@coreui/react'

import IframeModal from '../../../components/Iframe';
import styles from '../../../../../src/assets/styles/styles';
import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../../../contants/contants";
import axios from 'axios'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class HistorySkin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: '',
      page: 1,
      limit: 20,
      totalActive: 0,
      activePage: 1,
      numPage: 1,
      itemsCount: 0,
      itemPerPage: 7,
      hidden: false,
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      isLoading: false,
      type: localStorage.getItem('type'),
      toggleHistory: false,
      idHistory: ""
    };
    this.closeModal = this.closeModal.bind(this)
  }
  async componentDidMount() {
    if (this.state.type == '0') {
      this.getData()
    } else {
      this.getData_ByCondition()
    }

    let arr = JSON.parse(localStorage.getItem('url'));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url == window.location.hash) {
        if (arr[i].isHidden == true) {
          window.location.href = '#/'
        }
      }
    }
  }

  getData = async () => {
    const { activePage, itemPerPage } = this.state;
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_HISTORY_SKIN,
      data: {
        page: activePage,
        limit: itemPerPage
      },
      method: 'POST'
    });

    let data = res.data.data;

    this.setState({ dataApi: data.data, data: data.data, isLoading: false, itemsCount: data.total });
    console.log(this.state.data)
  }

  handlePageChange = async (pageNumber) => {
    const { type } = this.state;
    console.log(type)
    this.setState({ activePage: pageNumber }, () => {
      if (type == '0' || type == '1') {
        this.getData()
      } else {
        this.getData_ByCondition()
      }
    });
  };

  getData_ByCondition = async () => {
    const { activePage, itemPerPage } = this.state;
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_HISTORY_SKIN_BY_CONDITION,
      method: 'POST',
      data: {
        page: activePage,
        limit: itemPerPage
      },
      headers: this.state.token
    });

    let data = res.data.data

    this.setState({ isLoading: false, itemsCount: data.total, dataApi: data.data, data: data.data });
  }

  searchKey(key) {
    this.setState({ key: key })

    if (key != '') {
      let d = []
      this.state.dataApi.map(val => {
        if (val.UserName.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {
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

      this.setState({ data: this.state.dataApi, totalActive: active })
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  closeModal() {
    const { toggleHistory } = this.state;
    this.setState({ toggleHistory: !toggleHistory });
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
    const { data, activePage, itemPerPage, itemsCount, toggleHistory, idHistory } = this.state;


    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify">Lịch sử soi da</i>
              </CardHeader>
              <CardBody>
                <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">STT.</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Số điện thoại</th>

                      <th className="text-center">Hình ảnh</th>
                      <th className="text-center">Kết quả</th>
                      {/* <th className="text-center">Công ty</th>
                      <th className="text-center">Sale</th> */}
                      <th className="text-center">Ngày tạo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td colSpan="10" hidden={data.length > 0 ? true : false} className="text-center">Không tìm thấy dữ liệu</td>
                    {
                      data != undefined ?
                        data.map((item, i) => {
                          
                          return (
                            <tr key={i}>
                              <td className="text-center">{i + 1}</td>
                              <td className="text-center">{item.UserName}</td>
                              <td className="text-center">{item.Phone}</td>

                              <td className="text-center">
                                <img src={item.Image}  style={{ width: '50%', height: 50 }} />
                              </td>
                              <td className="text-center">
                                <CButton outline color="primary" onClick={e => {
                                  this.setState({
                                    idHistory: item._id,
                                    toggleHistory: !toggleHistory
                                  })
                                }}><CIcon name="cil-magnifying-glass" /> Xem chi tiết</CButton>
                              </td>
                              {/* <td className="text-center">{item.Company_Id == "" || item.Company_Id == undefined ? "" : item.Company_Id.Name}</td>
                              <td className="text-center">{item.Sale_Id == null ? "ADMIN" : item.Sale_Id.Name}</td> */}
                              <td className="text-center">
                                {(new Date(item.Create_Date)).toLocaleDateString() + ' ' + (new Date(item.Create_Date)).toLocaleTimeString()}
                              </td>
                            </tr>
                          );
                        }) : ""
                    }
                  </tbody>
                </table>
                {/* :
                    <div className="sweet-loading">
                      <DotLoader css={override} size={50} color={"#123abc"} loading={this.state.isLoading} speedMultiplier={1.5} />
                    </div> */}


              </CardBody>
            </Card>


            <div style={{ float: 'right' }}>
              <Pagination count={Math.ceil(itemsCount / itemPerPage)} color="primary" onChange={(e, v) => {
                this.handlePageChange(v)
              }} />
            </div>
          </Col>
        </Row>

        <IframeModal toggleView={toggleHistory} link={Constants.BASE_URL_HISTORY_SKIN + idHistory} closeModal={this.closeModal} />
      </div>
    );
  }
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default HistorySkin;
