import React, { Component } from "react";
import CIcon from "@coreui/icons-react";
import moment from "moment";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
} from "reactstrap";
import Swal from "sweetalert2";
import { CButton, CLabel, CSelect, CTextarea, CRow, CCol } from "@coreui/react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

import API_CONNECT from "../../functions/callAPI";
import Pagination from "@material-ui/lab/Pagination";
import "moment-timezone";
import Constants from "../../contants/contants";
import TextFieldGroup from "../Common/TextFieldGroup";
import axios from "axios";
import md5 from "md5";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { Tag, Divider } from "antd";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
const dateFormat = "YYYY-MM-DD";
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
const { RangePicker } = DatePicker;
class EndUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_id: "621c2ec17abc0b6b4349d4e5",
      data: [],
      actionVoucherEditing: "new",
      modalPopupVoucher: false,
      actionPopupVoucher: "new",
      modalVoucherEditing: false,
      key: "",
      dataVoucher: [],
      arrPaginationVoucher: [],
      indexPageVoucher: 0,
      totalActive: 0,
      modalCom: false,
      updated: "",
      dataApi: [],
      hidden: false,
      action: "new",
      email: "",
      modalVoucher: false,
      username: "",
      phone: "",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      actionVoucher: "new",
      token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      type: localStorage.getItem("type"),
      user: localStorage.getItem("user"),
      isLoading: false,
      idCurrentUpdate: null,
      levelNormal: "0",
    };
  }
  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value,
    });
  };
  async componentDidMount() {
    const { type } = this.state;

    this.getData();

    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url == window.location.hash) {
        if (arr[i].isHidden == true) {
          window.location.href = "#/";
        }
      }
    }
  }

  pagination(dataApi) {
    var i,
      j,
      temparray,
      chunk = 8;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }

    if (arrTotal.length == 0) {
      this.setState({
        hidden: false,
      });
    } else {
      this.setState({
        hidden: true,
      });
    }

    this.setState({ arrPagination: arrTotal, data: arrTotal[0] });
  }
  paginationVoucher(dataApi) {
    var i,
      j,
      temparray,
      chunk = 8;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }

    if (arrTotal.length == 0) {
      this.setState({
        hiddenVoucher: false,
      });
    } else {
      this.setState({
        hiddenVoucher: true,
      });
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
  onSearch(){
    this.getData(this.state.key);
  }
  async getData(key) {
    const { company_id } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_CAMPAIGN;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          company_id,status : null
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

  onChange(key, val) {
    this.setState({ [key]: val });
  }

  async openUpdate(item) {
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      email: item.email,
      phone: item.phone,
      username: item.username,
      id: item["_id"],
    });
  }

  async updateUser() {
    const { email, phone, password, username } = this.state;

    if (
      email == null ||
      email == "" ||
      phone == null ||
      phone == "" ||
      username == null ||
      username == ""
    ) {
      alert("Hãy nhập đầy đủ trường !!!");
      return;
    }

    const body = {
      email: email,
      phone: phone,
      username: username,
      id: this.state.id,
    };

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_END_USER,
      method: "POST",
      data: body,
    });

    if (res.status == 200) {
      this.getData();

      this.setState({ modalCom: !this.state.modalCom });
    } else {
      alert("Cập nhật thất bại");
      this.setState({ isLoading: false });
    }
  }

  openDelete = (item) => {
    this.setState({
      modalDelete: !this.state.modalDelete,
      id: item._id,
    });
  };
  openVoucher() {
    this.setState({
      actionVoucher: "new",
      modalVoucher: true,
      name: "",
      from: "",
      quantity: "",
      to: "",
      description: "",
      status: "1",
    });
  }
  openEditVoucher(item) {
    const { name, from, to, description, status } = this.state;

    this.setState({
      actionVoucher: "edit",
      modalVoucher: true,
      idCurrentUpdate: item._id,
      quantity: item.quatinity,
      name: item.name,
      from: item.from,
      to: item.to,
      description: item.description,
      status: item.status,
    });
  }
  async update() {
    const { name, from, to, description, status, idCurrentUpdate, quantity } =
      this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.UPDATE_CAMPAIGN;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        quatinity: quantity,
        id: idCurrentUpdate,
        name,
        from,
        to,
        description,
        status,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Cập nhật hoàn tất",
          showConfirmButton: false,
          timer: 700,
        });
        this.setState({
          modalVoucher: false,
        });
        this.getData();
      });
  }
  async add() {
    const { name, from, to, description, status, company_id, quantity } =
      this.state;
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.ADD_CAMPAIGN;
    let url = baseUrlapi + baseUrlCallApi;

    await axios
      .post(url, {
        quatinity: quantity,
        company_id,
        name,
        from,
        to,
        description,
        status,
        create_by: "1",
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Thêm thành công",
          showConfirmButton: false,
          timer: 700,
        });
        this.getData();
      });
  }
  async remove(item) {
    let baseUrlCallApi = Constants.DELETE_CAMPAIGN;

    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        id: item._id,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Xóa thành công",
          showConfirmButton: false,
          timer: 700,
        });
        this.getData();
      });
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleDatePickerChange = (date, dateString, id) => {
    this.setState({
      from: dateString[0],
      to: dateString[1],
    });
  };
  openVoucherAdd() {
    this.setState({
      actionVoucherEditing2: "new",
      modalVoucherEditing2: true,
      idCurrentUpdate: "",
      codeVoucher: "",
      relCode: "",
      description: "",
      status: "",
    });
  }
  openUpdateVoucher(item) {
    this.setState({
      actionVoucherEditing2: "edit",
      modalVoucherEditing2: true,
      idCurrentUpdate: item._id,
      codeVoucher: item.code,
      relCode: item.relCode,
      description: item.content,
      status: item.status,
    });
  }
  async removeVoucher(item) {
    let baseUrlCallApi = Constants.DELETE_VOUCHER;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        id: item._id,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Xóa thành công",
          showConfirmButton: false,
          timer: 700,
        });
        this.getDataVoucher(this.state.company_id_search);
      });
  }
  async updateVoucher() {
    const {
      codeVoucher,
      company_id_search,
      from,
      to,
      description,
      status,
      company_id,
      relCode,
      idCurrentUpdate,
    } = this.state;
    let baseUrlCallApi = Constants.UPDATE_VOUCHER;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        code: codeVoucher,
        relCode: relCode,

        content: description,

        status: status,
        company_id: company_id_search,
        id: idCurrentUpdate,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Cập nhật hoàn tất",
          showConfirmButton: false,
          timer: 700,
        });
        this.setState({
          modalVoucherEditing2: false,
        });
        this.getDataVoucher(this.state.company_id_search);
      });
  }
  async addVoucher() {
    const {
      codeVoucher,
      from,
      to,
      description,
      status,
      company_id_search,
      relCode,
    } = this.state;
    let baseUrlCallApi = Constants.ADD_VOUCHER;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        code: codeVoucher,
        relCode: relCode,

        content: description,

        status: status,
        company_id: company_id_search,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Thêm thành công",
          showConfirmButton: false,
          timer: 700,
        });
        this.getDataVoucher(this.state.company_id_search);
      });
  }
  openPopupVoucher(item) {
    if (item.company_id) {
      this.setState(
        {
          company_id_search: item.company_id,
        },
        () => {
          this.getDataVoucher(this.state.company_id_search);
        }
      );
    } else {
      this.getDataVoucher(this.state.company_id_search);
    }
    this.setState({
      actionVoucherEditing: "edit",
      modalVoucherEditing: true,
      idCurrentUpdate: item._id,
      codeVoucher: item.code,
      relCode: item.relCode,
      description: item.content,
      status: item.status,
    });
  }
  getBadge(status) {
    switch (status) {
      case "Actived":
        return "success";
      case "Inactive":
        return "secondary";
      case "Locked":
        return "warning";
      case "Deactived":
        return "danger";
      default:
        return "primary";
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
                  ? "#2db7f5"
                  : item.status === "2"
                  ? "#f50"
                  : "#87d068"
              }
            >
              {item.status == "1"
                ? "Bắt đầu"
                : item.status == "2"
                ? "Trong quá trình"
                : "Hoàn thành"}
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
      modalInfo : itemRender
    });
    
  }
  render() {
    const {
      data,
      arrPagination,
      key,
      phoneVoucher,
      nameVoucher,
      dataVoucher,
      arrPaginationVoucher,
      modalVoucher,
    } = this.state;
    const dateArray = [this.state.from, this.state.to];
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
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Modal
            isOpen={this.state.modalVoucher}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.actionVoucher == "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="name"
                label="Tên chiến dịch"
                value={this.state.name}
                // error={errors.title}
                onChange={(e) => this.setState({ name: e.target.value })}
                // rows="5"
              />

              {/* <TextFieldGroup
                field="company"
                label="Tên công ty"
                value={this.state.company}
                // error={errors.title}
                onChange={(e) => this.setState({ company: e.target.value })}
                // rows="5"
              /> */}

              <TextFieldGroup
                field="quantity"
                label="Số lượng Voucher"
                value={this.state.quantity}
                // error={errors.title}
                onChange={(e) => this.setState({ quantity: e.target.value })}
                // rows="5"
              />
              {/* <label>Ngày bắt đầu - kết thúc</label>
              <Space direction="vertical" size={12}>
                <RangePicker 
                value={dateArray}   
              onChange={this.handleDatePickerChange}
                />
              </Space> */}
              <TextFieldGroup
                field="from"
                label="Bắt đầu"
                value={this.state.from}
                type={"date"}
                // error={errors.title}
                onChange={(e) => this.setState({ from: e.target.value })}
                // rows="5"
              />
              <TextFieldGroup
                field="to"
                label="Kết thúc"
                value={this.state.to}
                type={"date"}
                // error={errors.title}
                onChange={(e) => this.setState({ to: e.target.value })}
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
                  this.state.actionVoucher === "new"
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
                  this.setState({ modalVoucher: !this.state.modalVoucher })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
          {this.state.modalInfo}
          <Modal isOpen={this.state.modalVoucherEditing} size="xl">
            <ModalHeader >
              {this.state.actionVoucherEditing == "new"
                ? `Danh sách Voucher`
                : `Danh sách Voucher`}
            </ModalHeader>
            <ModalBody>
              <div class="text-center">
                <CButton
                  color="primary"
                  style={{ marginBottom: "10px" }}
                  size="md"
                  onClick={() => this.openVoucherAdd()}
                >
                  Thêm mới
                </CButton>
              </div>
              <table
                ble
                className="table table-hover table-outline mb-0 d-none d-sm-table table_dash"
              >
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
                  <td
                    colSpan="10"
                    hidden={this.state.hidden}
                    className="text-center"
                  >
                    Không tìm thấy dữ liệu
                  </td>
                  {dataVoucher != undefined
                    ? dataVoucher.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td className="text-center">{i + 1}</td>

                            <td className="text-center">{item.code}</td>
                            <td className="text-center">
                              {new Date(item.create_at).toLocaleDateString() +
                                " " +
                                new Date(item.create_at).toLocaleTimeString()}
                            </td>
                            <td className="text-center">
                              {item.user ? item.user : "Chưa có"}
                            </td>

                            <td className="text-center">
                              <Tag
                                className="ant-tag"
                                color={
                                  item.status === "1"
                                    ? "#2db7f5"
                                    : item.status === "2"
                                    ? "#f50"
                                    : "#87d068"
                                }
                              >
                                {item.status == "1"
                                  ? "Bắt đầu"
                                  : item.status == "2"
                                  ? "Trong quá trình"
                                  : "Hoàn thành"}
                              </Tag>
                            </td>
                            <td className="text-center">
                              <div class="flex">
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
                                <CButton
                                  shape="rounded-pill"
                                  variant="ghost"
                                  color="info"
                                  style={styles.mgl5}
                                  size="md"
                                  onClick={(e) => this.openUpdateVoucher(item)}
                                >
                                  <FiEdit3
                                    style={styles.icon}
                                    name="cilPencil"
                                  />
                                </CButton>{" "}
                                <CButton
                                  shape="rounded-pill"
                                  variant="ghost"
                                  color="danger"
                                  style={styles.mgl5}
                                  onClick={(e) => {
                                    this.removeVoucher(item);
                                  }}
                                >
                                  <BsTrash
                                    style={styles.icon}
                                    className="icon"
                                    name="cilTrash"
                                  />
                                </CButton>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : ""}
                </tbody>
              </table>
              <div style={{ float: "right" }}>
                <Pagination
                  count={arrPaginationVoucher.length}
                  color="primary"
                  onChange={(e, v) => {
                    this.setState({
                      dataVoucher: arrPaginationVoucher[v - 1],
                      indexPageVoucher: v - 1,
                    });
                  }}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({
                    modalVoucherEditing: !this.state.modalVoucherEditing,
                  })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
          <Modal
            isOpen={this.state.modalVoucherEditing2}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.actionVoucherEditing2 == "new"
                ? `Tạo mới`
                : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="codeVoucher"
                label="Mã voucher"
                value={this.state.codeVoucher}
                // error={errors.title}
                onChange={(e) => this.setState({ codeVoucher: e.target.value })}
                // rows="5"
              />
              <TextFieldGroup
                field="relCode"
                label="Mã chiến dịch"
                value={this.state.relCode}
                // error={errors.title}
                onChange={(e) => this.setState({ relCode: e.target.value })}
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
                  this.state.actionVoucherEditing2 === "new"
                    ? this.addVoucher()
                    : this.updateVoucher();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({
                    modalVoucherEditing2: !this.state.modalVoucherEditing2,
                  })
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
                  <i className="fa fa-align-justify title_header">
                    Quản lý chiến dịch
                  </i>

                  <div class="flex mt-3"> 
                            
                            <Input style={styles.searchInput} onChange={(e) => {
                              this.setState({ key : e.target.value });
                            }} name="key" value={key} placeholder="Từ khóa" />
                         
                    
                          <CButton color="primary" size="sm" onClick={e => { this.onSearch() }}>Tìm kiếm</CButton>
                          </div>
                </CardHeader>
                <CardBody>
                  <div class="text-center">
                    <CButton
                      color="primary"
                      style={{ marginBottom: "10px" }}
                      size="md"
                      onClick={() => this.openVoucher()}
                    >
                      Thêm mới
                    </CButton>
                  </div>
                  <table
                    ble
                    className="table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                  >
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
                        <th className="text-center"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <td
                        colSpan="10"
                        hidden={this.state.hidden}
                        className="text-center"
                      >
                        Không tìm thấy dữ liệu
                      </td>
                      {data != undefined
                        ? data.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td className="text-center">{item.name}</td>
                                <td className="text-center">
                                  {new Date(item.from).toLocaleDateString() 
                                    }
                                </td>
                                <td className="text-center">
                                  {new Date(item.to).toLocaleDateString() }
                                </td>
                                <td className="text-center">
                                {(new Date(item.create_at)).toLocaleDateString() }                          
                                </td>
                                <td className="text-center">
                                  {item.description}
                                </td>
                                <td className="text-center">
                                  <div className="flex-center">
                                    <p
                                      className="mr-2"
                                      style={{ margin: "auto" }}
                                    >
                                      {item.quatinity ? item.quatinity : "0"}
                                    </p>
                                    <CButton
                                      shape="rounded-pill"
                                      variant="outline"
                                      color="info"
                                      style={styles.mgl5}
                                      size="md"
                                      className="flex-a-center "
                                      onClick={(e) =>
                                        this.openPopupVoucher(item)
                                      }
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
                                        ? "#2db7f5"
                                        : item.status === "2"
                                        ? "#f50"
                                        : "#87d068"
                                    }
                                  >
                                    {item.status == "1"
                                      ? "Bắt đầu"
                                      : item.status == "2"
                                      ? "Trong quá trình"
                                      : "Hoàn thành"}
                                  </Tag>
                                </td>

                                <td className="text-center">
                                  <CButton
                                    shape="rounded-pill"
                                    variant="ghost"
                                    color="info"
                                    style={styles.mgl5}
                                    size="md"
                                    onClick={(e) => this.openEditVoucher(item)}
                                  >
                                    <FiEdit3
                                      style={styles.icon}
                                      name="cilPencil"
                                    />
                                  </CButton>{" "}
                                  <CButton
                                    shape="rounded-pill"
                                    variant="ghost"
                                    color="danger"
                                    style={styles.mgl5}
                                    onClick={(e) => {
                                      this.remove(item);
                                    }}
                                  >
                                    <BsTrash
                                      style={styles.icon}
                                      className="icon"
                                      name="cilTrash"
                                    />
                                  </CButton>
                                </td>
                              </tr>
                            );
                          })
                        : ""}
                    </tbody>
                  </table>
                </CardBody>
              </Card>
              <div style={{ float: "right" }}>
                <Pagination
                  count={arrPagination.length}
                  color="primary"
                  onChange={(e, v) => {
                    this.setState({
                      data: arrPagination[v - 1],
                      indexPage: v - 1,
                    });
                  }}
                />
              </div>
            </Col>
          </Row>

          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>
              {this.state.action == "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="name"
                label="Tên chiến dịch"
                value={this.state.name}
                // error={errors.title}
                onChange={(e) => this.setState({ name: e.target.value })}
                // rows="5"
              />

              <TextFieldGroup
                field="voucher"
                label="Số lượng Voucher"
                value={this.state.voucher}
                // error={errors.title}
                onChange={(e) => this.setState({ voucher: e.target.value })}
                // rows="5"
              />
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.action === "new"
                    ? this.addRoles()
                    : this.updateUser();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({ modalCom: !this.state.modalCom })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>

          <Modal
            isOpen={this.state.modalDelete}
            toggle={(e) =>
              this.setState({
                modalDelete: !this.state.modalDelete,
                delete: null,
              })
            }
            className={this.props.className}
          >
            <ModalHeader
              toggle={(e) =>
                this.setState({
                  modalDelete: !this.state.modalDelete,
                  delete: null,
                })
              }
            >{`Xoá`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Xác nhận xóa !!!`}</label>
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => this.delete()}
                disabled={this.state.isLoading}
              >
                Xoá
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({
                    modalDelete: !this.state.modalDelete,
                    delete: null,
                  })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
    return (
      <div className="sweet-loading">
        <DotLoader
          css={override}
          size={50}
          color={"#123abc"}
          loading={this.state.isLoading}
          speedMultiplier={1.5}
        />
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
    width: "20px",
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
    width: "250px",
    display: "inline-block",
    marginRight: "5px",
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

export default EndUser;
