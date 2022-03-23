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
import ModalAnt from './ModalAnt';
import Swal from "sweetalert2";

import {
  CButton,
  CTextarea,
  CLabel,
  CSelect,
  CRow,
  CCol
} from '@coreui/react'
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import API_CONNECT from "../../functions/callAPI";
import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "../../contants/contants";
import TextFieldGroup from "../Common/TextFieldGroup";
import axios from 'axios'
import md5 from 'md5'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { Tag, Divider } from "antd";
import { DatePicker, Space } from "antd";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";


import "antd/dist/antd.css";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');

class EndUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_id: JSON.parse(localStorage.getItem("user")).company_id ? JSON.parse(localStorage.getItem("user")).company_id : null,
      company_id_search: "",
      data: [],
      dataVoucher: [],
      arrPaginationVoucher: [],
      indexPageVoucher: 0,


      hiddenVoucher: false,

      actionVoucherEditing: "update",
      key: '',
      totalActive: 0,
      modalCom: false,
      updated: '',
      dataApi: [],
      hidden: false,

      action: 'new',
      email: "",
      modalVoucher: false,
      username: "",
      phone: "",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      actionVoucher: "new",
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      type: localStorage.getItem('type'),
      user: localStorage.getItem('user'),
      isLoading: false,
      idCurrentUpdate: null,
      levelNormal: "0",
      modalVoucherEditing: false
    };
  }
  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value,
    });
  };
  async componentDidMount() {
    this.getData();
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
    var i, j, temparray, chunk = 8;
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

  async onSearch() {
    const { from, to ,idDataSales, phoneFilter, levelFilter, codeVoucher } = this.state;
    await this.getData(idDataSales,phoneFilter,levelFilter,codeVoucher,from,to);
  }
  async getData(key) {
    const { company_id } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_CAMPAIGN;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          company_id,
          keyword: key
        },
      })
      .then((res) => {
        let val = res.data.data;
        this.pagination(val);
        this.setState({ dataApi: val });

        let active = 0;

        this.setState({ isLoading: false, totalActive: active });
      });
  }
  paginationVoucher(dataApi) {
    var i, j, temparray, chunk = 8;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }

    if (arrTotal.length == 0) {
      this.setState({
        hiddenVoucher: false
      })
    } else {
      this.setState({
        hiddenVoucher: true
      })
    }

    this.setState({ arrPaginationVoucher: arrTotal, dataVoucher: arrTotal[0] });
  }
  async getDataVoucher(company_id_search) {

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_VOUCHER;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          company_id: company_id_search,
        },
      })
      .then((res) => {
        let val = res.data.data;

        this.paginationVoucher(val);
        this.setState({ dataApiVoucher: val });

        let active = 0;

        this.setState({ isLoading: false, totalActiveVoucher: active });
      });
  }



  onChange(key, val) {
    this.setState({ [key]: val })
  }




  openVoucher() {
    this.setState({
      actionVoucherEditing: "new",
      modalVoucherEditing: true,
      idCurrentUpdate: "",
      codeVoucher: "",
      relCode: "",
      description: "",
      status: "",
    });
  };
  openEdit(item) {
    if (item.company_id) {
      this.setState({
        company_id_search: item.company_id
      }, () => {
        this.getDataVoucher(this.state.company_id_search)
      })
    } else {
      this.getDataVoucher(this.state.company_id_search)
    }
    this.setState({
      actionVoucher: "edit",
      modalVoucher: true,
      idCurrentUpdate: item._id,
      codeVoucher: item.code,
      relCode: item.relCode,
      description: item.content,
      status: item.status,
    })
  };
  openEditVoucher(item) {

    this.setState({
      actionVoucherEditing: "edit",
      modalVoucherEditing: true,
      idCurrentUpdate: item._id,
      codeVoucher: item.code,
      relCode: item.relCode,
      description: item.content,
      status: item.status,
    })
  };
  async update() {
    const { codeVoucher, company_id_search, from, to, description, status, company_id, relCode, idCurrentUpdate } =
      this.state;
    let baseUrlCallApi = Constants.UPDATE_VOUCHER;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios.post(url, {
      code: codeVoucher,
      relCode: relCode,

      content: description,

      status: status,
      company_id: company_id_search,
      id: idCurrentUpdate,

    }).then((res) => {
      Swal.fire({
        icon: "success",
        title: "Cập nhật hoàn tất",
        showConfirmButton: false,
        timer: 700,
      });
      this.setState({
        modalVoucherEditing: false,
      });
      this.getDataVoucher(this.state.company_id_search)
    });
  }
  async add() {
    const { codeVoucher, from, to, description, status, company_id_search, relCode } =
      this.state;
    let baseUrlCallApi = Constants.ADD_VOUCHER;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios.post(url, {
      code: codeVoucher,
      relCode: relCode,

      content: description,

      status: status,
      company_id: company_id_search
    }).then((res) => {
      Swal.fire({
        icon: "success",
        title: "Thêm thành công",
        showConfirmButton: false,
        timer: 700,
      });
      this.getDataVoucher(this.state.company_id_search)
    });
  }
  async remove(item) {
    let baseUrlCallApi = Constants.DELETE_VOUCHER;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios.post(url, {
      id: item._id
    }).then((res) => {
      Swal.fire({
        icon: "success",
        title: "Xóa thành công",
        showConfirmButton: false,
        timer: 700,
      });
      this.getDataVoucher(this.state.company_id_search)
    });
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
  renderModalInfo(item) {

    let itemRender = (
      <div>
        <Modal isOpen={true} size="md">
          <ModalHeader>Chi tiết Voucher</ModalHeader>
          <ModalBody className="info_voucher">
            <p>Mã voucher : <span>{item.code}</span></p>
            <p>Mã công ty : <span>{item.code}</span></p>
            <p>
              Khởi tạo :
              <span>
                Lúc {" "}
                {new Date(item.create_at).toLocaleTimeString() +
                  " giờ " + " ngày " +
                  new Date(item.create_at).toLocaleDateString()}
              </span>
            </p>
            <p>
              Bắt đầu :
              <span>
                Ngày {" "}
                {new Date(item.from).toLocaleDateString()}
              </span>
            </p>
            <p>
              Kết thúc :

              <span>
                Ngày {" "}
                {new Date(item.to).toLocaleDateString()}
              </span>
            </p>
            <p>Nội dung voucher : <span>{item.content}</span></p>
            <p>
              Trạng thái :
              <span>
                <Tag
                  className="ant-tag"
                  color={
                    item.status === "1"
                      ? "#87d068"

                      : "#f50"
                  }
                >
                  {item.status == "1"
                    ? "Hoạt động"

                    : "Không hoạt động"}
                </Tag>
              </span>
            </p>

            <p>Id voucher : <span>{item._id}</span></p>
          </ModalBody>
          <ModalFooter>
            <CButton
              color="secondary"
              onClick={(e) =>
                this.setState({
                  modalInfo: null,
                })
              }
            >
              Đóng
            </CButton>
          </ModalFooter>
        </Modal>
      </div>
    );
    this.setState({
      modalInfo: itemRender
    });

  }

  render() {
    const { data, indexPageVoucher, arrPagination, dataVoucher, arrPaginationVoucher, key, phoneVoucher, nameVoucher, modalVoucher } = this.state;
    const arrLevel = [

      {
        item: "1",
      },
      {
        item: "2",
      },
      {
        item: "3",
      },
    ];
    const arrLevelFilter = [
      {
        item: "0",
      },
      {
        item: "1",
      },
      {
        item: "2",
      },
      {
        item: "3",
      },
      {
        item: "4",
      },
    ];
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Modal isOpen={this.state.modalVoucher} size="lg">
            <ModalHeader >
              {this.state.actionVoucher == "new" ? `Danh sách Voucher` : `Danh sách Voucher`}

            </ModalHeader>
            <ModalBody>

              <table ble className="table table-hover table-outline mb-0 d-none d-sm-table table_dash" >
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">STT.</th>


                    <th className="text-center">Mã voucher</th>

                    <th className="text-center">Ngày tạo</th>
                    <th className="text-center">người sử dụng</th>

                    <th className="text-center">trạng thái</th>
                    <th className="text-center"></th>


                  </tr>
                </thead>
                <tbody>
                  <td colSpan="10" hidden={this.state.hidden} className="text-center">Không tìm thấy dữ liệu</td>
                  {
                    dataVoucher != undefined ?
                      dataVoucher.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td className="text-center">{i + 1}</td>

                            <td className="text-center">{item.code}</td>
                            <td className="text-center">
                              {(new Date(item.create_at)).toLocaleDateString() + ' ' + (new Date(item.create_at)).toLocaleTimeString()}
                            </td>
                            <td className="text-center">{item.user ? item.user : "Chưa có"}</td>

                            <td className="text-center">
                              <Tag
                                className="ant-tag"
                                color={
                                  item.status === "1"
                                    ? "#87d068"

                                    : "#f50"
                                }
                              >
                                {item.status == "1"
                                  ? "Hoạt động"

                                  : "Không hoạt động"}
                              </Tag>
                            </td>
                            <td className="text-center">
                              <CButton
                                shape="rounded-pill"
                                variant="outline"
                                color="info"
                                style={styles.mgl5}
                                size="md"
                                className="flex-a-center "
                                onClick={() => this.renderModalInfo(item)}
                              >
                                <BsSearch className="mr-1" />
                                Xem chi tiết
                              </CButton>
                            </td>
                          </tr>
                        );
                      }) : ""
                  }
                </tbody>
              </table>
              <div style={{ float: 'right' }}>
                <Pagination count={arrPaginationVoucher.length} color="primary" onChange={(e, v) => {
                  this.setState({ dataVoucher: arrPaginationVoucher[v - 1], indexPageVoucher: v - 1 })
                }} />
              </div>
            </ModalBody>
            <ModalFooter>

              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({ modalVoucher: !this.state.modalVoucher })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
          {this.state.modalInfo}
          <Modal isOpen={this.state.modalVoucherEditing} className={this.props.className}>
            <ModalHeader>
              {this.state.actionVoucherEditing == "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="codeVoucher"
                label="Mã voucher"
                value={this.state.codeVoucher}

                // error={errors.title}
                onChange={e => this.setState({ codeVoucher: e.target.value })}
              // rows="5"
              />
              <TextFieldGroup
                field="relCode"
                label="Mã chiến dịch"
                value={this.state.relCode}

                // error={errors.title}
                onChange={e => this.setState({ relCode: e.target.value })}
              // rows="5"
              />
              <label className="control-label">Mô tả:</label>
              <CTextarea
                name="description"
                rows="4"
                value={this.state.description}
                onChange={(e) => {
                  this.setState({ description: e.target.value });
                }}
              />
              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Trạng thái:</CLabel>
                {arrLevel != undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevel(e);
                    }}
                    custom
                    size="sm"
                    name="status"
                    id="SelectLm"
                  >
                    {arrLevel.map((item, i) => {
                      if (item.item === this.state.status) {
                        return (
                          <option selected key={i} value={item.item}>
                            {item.item === "1"
                              ? "Bắt đầu"
                              : item.item === "2"
                                ? "Trong quá trình"
                                : "Hoàn thành"}
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                            {item.item == "1"
                              ? "Bắt đầu"
                              : item.item == "2"
                                ? "Trong quá trình"
                                : "Hoàn thành"}
                          </option>
                        );
                      }
                    })}
                  </CSelect>
                ) : null}
              </div>
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.actionVoucherEditing === "new"
                    ? this.add()
                    : this.update();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({ modalVoucherEditing: !this.state.modalVoucherEditing })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
          <Row>
            <Col>
              <Card>
                <CardHeader>

                  <i className="fa fa-align-justify title_header">Danh sách Chiến dịch</i>




                  <CRow>
                    <CCol md={4} className="mt-3">
                      <div className="">


                        <p className="title_filter">Mã Voucher</p>
                        <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({ codeVoucher: e.target.value });
                          }}
                          name="codeVoucher"
                          value={this.state.codeVoucher}
                          placeholder="Mã voucher"
                        />
                      </div>
                    </CCol>


                    <CCol md={4} className="mt-3">
                      <div className="">


                        <p className="title_filter">Trạng thái</p>
                        <div style={{ width: "200px" }} className="">

                          {arrLevelFilter !== undefined ? (
                            <CSelect
                              onChange={async (e) => {
                                this.changeLevelValue(e, "levelFilter");
                              }}
                              custom
                              size="md"
                              name="levelFilter"
                              id="SelectLm"
                            >
                              {arrLevelFilter.map((item, i) => {
                                if (item.item === this.state.levelFilter) {
                                  return (
                                    <option selected key={i} value={item.item}>
                                      {item.item === "0"
                                        ? "Chờ xác nhận"
                                        : item.item === "1"
                                          ? "Đã sử dụng"
                                          : item.item === "2"
                                            ? "Hủy bỏ"
                                            : item.item === "3"
                                              ? "Xóa bỏ"

                                              : "Khóa"
                                      }
                                    </option>
                                  );
                                } else {
                                  return (
                                    <option key={i} value={item.item}>
                                      {item.item === "0"
                                        ? "Chờ xác nhận"
                                        : item.item === "1"
                                          ? "Đã sử dụng"
                                          : item.item === "2"
                                            ? "Hủy bỏ"
                                            : item.item === "3"
                                              ? "Xóa bỏ"

                                              : "Khóa"
                                      }
                                    </option>
                                  );
                                }
                              })}
                            </CSelect>
                          ) : null}
                        </div>

                      </div>
                    </CCol>


                  </CRow>
                  <div className="flex-end mt-4">
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

                  <table ble className="mt-3 table table-hover table-outline mb-0 d-none d-sm-table table_dash">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Bắt đầu</th>
                        <th className="text-center">Kết thúc</th>
                        <th className="text-center">Ngày tạo</th>

                        <th className="text-center">Mô tả</th>


                        <th className="text-center">Số lượng voucher</th>
                        <th className="text-center">Trạng thái</th>




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
                                <td className="text-center">
                                  {new Date(item.from).toLocaleDateString()
                                  }
                                </td>
                                <td className="text-center">
                                  {new Date(item.to).toLocaleDateString()}
                                </td>
                                <td className="text-center">
                                  {(new Date(item.create_at)).toLocaleDateString()}
                                </td>
                                <td className="text-center">{item.description}</td>

                                <td className="text-center">
                                  <div className="flex-center">

                                    <p className="mr-2" style={{ margin: "auto" }}>
                                      {item.quatinity ? item.quatinity : "0"}
                                    </p>
                                    <CButton
                                      shape="rounded-pill"
                                      variant="outline"
                                      color="info"
                                      style={styles.mgl5}
                                      size="md"
                                      className="flex-a-center "
                                      onClick={(e) => this.openEdit(item)}
                                    >
                                      <BsSearch className="mr-1" />
                                      Xem
                                    </CButton>
                                  </div>

                                </td>

                                <td className="text-center">
                                  <Tag
                                    className="ant-tag"
                                    color={
                                      item.status === "1"
                                        ? "#87d068"

                                        : "#f50"
                                    }
                                  >
                                    {item.status == "1"
                                      ? "Hoạt động"

                                      : "Không hoạt động"}
                                  </Tag>
                                </td>

                              </tr>
                            );
                          }) : ""
                      }
                    </tbody>
                  </table>
                  <div style={{ float: 'right' }}>
                <Pagination count={arrPagination.length} color="primary" onChange={(e, v) => {
                  this.setState({ data: arrPagination[v - 1], indexPage: v - 1 })
                }} />
              </div>
                </CardBody>
              </Card>
             
            </Col>
          </Row>



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
  icon: {
    fontSize: "16px",
    height: "20px",
    width: "20px"
  },
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
    marginRight: "5px"
  },
  searchInput: {
    width: "200px",
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

export default EndUser;
