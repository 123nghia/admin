import React, { Component } from 'react';
import CIcon from '@coreui/icons-react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Row,
} from 'reactstrap';
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";

import {
  CButton,
  CLabel, CSelect, CRow, CCol
} from "@coreui/react";
import IframeModal from '../../../components/Iframe';

import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../../../contants/contants";
import axios from 'axios'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { Select } from "antd";
const { Option } = Select;
const dateFormat = "DD/MM/YYYY";

let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class HistorySkin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_id: JSON.parse(localStorage.getItem("user")).company_id ? JSON.parse(localStorage.getItem("user")).company_id : null,

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
      user: localStorage.getItem("user"),

      toggleHistory: false,
      idHistory: "",
      dataSalesDefault : [{
        _id : "",
        Name : "Không có"
      }]
    };
    this.closeModal = this.closeModal.bind(this)
  }
  async ExportsFileExcel() {
    const { company_id } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.EXPORT_CUSTOMER_EVOUCHER;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          company_id,
        },
      })
      .then((res) => {
        console.log(res);
        let a = document.getElementById("download_excel");
        if (a) {
          a.href = `${baseUrlapi}${res.data.data.url}`;
        }
        a.click();
      });
  };
  async componentDidMount() {
    this.getDataSeo();
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
  async onSearch() {
    console.log(this.state.from);
    console.log(this.state.to);
    console.log(this.state.codeVoucher);
    console.log(this.state.userVoucher);
    console.log(this.state.statusVoucher);
    console.log(this.state.idDataSales);
  
    await this.getData_ByCondition(this.state.idDataSales);
  }
  getData = async (key) => {
    
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
    console.log("Data",data);
    this.setState({ dataApi: data.data, data: data.data, isLoading: false, itemsCount: data.total });
    console.log(this.state.data)
  }
  async getDataSeo(){
    
    const { company_id } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.PLUGIN_SUBSALE_USER2;

    let url = baseUrlapi + baseUrlCallApi;
  
    await axios.get(url, {
      params: {
        company_id
      }
    }).then((res) => {
      var val = res.data.data;
      this.setState({
        dataSales : this.state.dataSalesDefault.concat(val)
      })
    })
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

  getData_ByCondition = async (key) => {
    console.log(key)
    const { activePage, itemPerPage } = this.state;
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_HISTORY_SKIN_BY_CONDITION,
      method: 'POST',
      data: {
        saleId : key,
        roleType: this.state.type,
        userId: JSON.parse(this.state.user).sale_id,
        page: activePage,
        limit: itemPerPage
      },
      headers: this.state.token
    });

    let data = res.data.data
    console.log("Data 2",data);
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
                  <i className="fa fa-align-justify title_header">
                    Lịch sử soi da
                  </i>

                  <CRow>
                    <CCol md={4} className="mt-3">
                    <div className="">

                   
<p className="title_filter">Tên khách hàng</p>
                        <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({ nameUser: e.target.value });
                          }}
                          name="nameUser"
                          value={this.state.nameUser}
                          placeholder="Tên"
                        />
                      </div>
                    </CCol>
                   
                    <CCol md={4} className="mt-3">
                    <div className="">

                   
<p className="title_filter">Số điện thoại</p>
                        <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({ numberUser: e.target.value });
                          }}
                          type="number"
                          name="numberUser"
                          value={this.state.numberUser}
                          placeholder="Số điện thoại"
                        />
                      </div>
                    </CCol>
                    <CCol md={4} className="mt-3">
                      <div className="">

                   
                        <p className="title_filter">Danh sách Sales</p>
                        <div style={{width:'200px'}}>
                        <Select
                          className="select_seo"
                          showSearch
                          placeholder="Lọc theo Sales"
                          optionFilterProp="children"
                          onChange={(value) =>
                            this.setState({
                              idDataSales: value,
                            })
                          }
                          onSearch={this.onSearchSelect}
                          filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                          }
                        >
                          {this.state.dataSales
                            ? this.state.dataSales.map((item, i) => {
                              return <Option value={item._id}>{item.Name}</Option>;
                            })
                            : null}
                        </Select>
                        </div>
                     
                      </div>
                    </CCol>
                    <CCol md={4} className="mt-3">
                      <div className="">
                      
                          <div className="">
                           <p className="title_filter">Từ ngày</p>
                            <div>
                              <DatePicker
                                style={styles.dateForm}
                                onChange={(e, dateString) => {
                                  let copy = dateString.split("-");
                                  let newData = ``;
                                  copy.forEach((item, index) => {
                                    if (index === 0) {
                                      newData += item;
                                    } else {
                                      newData += `/${item}`;
                                    }
                                  });
                                  this.setState({ from: newData });
                                }}
                                format={dateFormat}
                              />
                            </div>
                          </div>
                        
                      
                      </div>
                    </CCol>
                    <CCol md={4} className="mt-3">
                      <div className="">
                      
                        
                          <p className="title_filter">Đến ngày</p>
                            <div>
                              <DatePicker
                              style={styles.dateForm}
                                onChange={(e, dateString) => {
                                  let copy = dateString.split("-");
                                  let newData = ``;
                                  copy.forEach((item, index) => {
                                    if (index === 0) {
                                      newData += item;
                                    } else {
                                      newData += `/${item}`;
                                    }
                                  });
                                  this.setState({ to: newData });
                                }}
                                format={dateFormat}
                              />
                            </div>
                        
                      
                      </div>
                    </CCol>
                    
                  </CRow>

                  <div className="flex-center-space mt-3">
                    <div>
                  <CButton
                        color="success"
                        style={{ marginBottom: "10px", marginRight: '10px' }}
                        size="md"
                        className="flex-center"
                        onClick={() => this.ExportsFileExcel()}
                      >
                        <FaFileExport style={{ margin: "auto 6px auto 0" }} />
                        <p style={{ margin: "auto 0" }}>Xuất File</p>
                      </CButton>
                      <a id="download_excel" download></a>
                      </div>
                  <CButton
                      color="info"
                      style={{ marginBottom: "10px" }}
                      size="md"
                      className="btn-main"
                      onClick={(e) => {
                        this.onSearch();
                      }}
                    >
                      <BsSearch style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Tìm kiếm</p>
                    </CButton>
                   
                  </div>
                </CardHeader>
              <CardBody>
                <table ble className="mt-3 table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">STT.</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Số điện thoại</th>

                      <th className="text-center">Hình ảnh</th>
                      <th className="text-center">Mã voucher</th>
                      <th className="text-center">Tên chiến dịch</th>

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
                              <td className="text-center">{item.Name}</td>
                              <td className="text-center">{item.Phone}</td>

                              <td className="text-center">
                                <img src={item.Image}  style={{ width: '100px', height: '83px' }} />
                              </td>
                              <td className="text-center"></td>
                              <td className="text-center"></td>
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
                                {(new Date(item.Create_Date)).toLocaleDateString()}
                              </td>
                            </tr>
                          );
                        }) : ""
                    }
                  </tbody>
                </table>
                <div style={{ float: 'right' }}>
              <Pagination count={Math.ceil(itemsCount / itemPerPage)} color="primary" onChange={(e, v) => {
                this.handlePageChange(v)
              }} />
            </div>


              </CardBody>
            </Card>


            
          </Col>
        </Row>

        <IframeModal toggleView={toggleHistory} link={Constants.BASE_URL_HISTORY_EVOUCHER + idHistory} closeModal={this.closeModal} />
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
const styles = {
  dateForm : {
    width: "200px"
  },
  pagination: {
    marginRight: "5px",
  },
  flexLabel: {
    width: 100,
  },
  flexOption: {
    width: 300,
  },
  a: {
    textDecoration: "none",
  },
  floatRight: {
    float: "right",
    marginTop: "3px",
  },
  spinner: {
    width: "30px",
  },
  center: {
    textAlign: "center",
  },
  tbody: {
    height: "380px",
    overflowY: "auto",
  },
  wh25: {
    width: "25%",
    float: "left",
    height: "80px",
  },
  w5: {
    width: "15%",
    float: "left",
    height: "80px",
  },
  icon: {
    fontSize: "16px",
    height: "20px",
    width: "20px",
  },
  wa10: {
    width: "5%",
    float: "left",
    height: "80px",
  },
  row: {
    float: "left",
    width: "100%",
  },
  success: {
    color: "green",
  },
  danger: {
    color: "red",
  },
  mgl5: {
    marginLeft: "5px",
  },
  tags: {
    float: "right",
    marginRight: "5px",
  },
  searchInput: {
    width: "200px",
    display: "inline-block",
    
  },
  userActive: {
    color: "green",
  },
  userPending: {
    color: "red",
  },
  nagemonNameCol: {
    width: "328px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "99999px",
  },
};