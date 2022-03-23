import React, { Component } from "react";

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
import { BsDownload } from "@react-icons/all-files/bs/BsDownload";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";

import { BsTrash } from "@react-icons/all-files/bs/BsTrash";

import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

import * as XLSX from "xlsx";

import Swal from "sweetalert2";

import { CButton, CLabel, CTextarea, CSelect, CRow, CCol } from "@coreui/react";


import Pagination from "@material-ui/lab/Pagination";
import "moment-timezone";
import Constants from "../../contants/contants";
import TextFieldGroup from "../Common/TextFieldGroup";
import axios from "axios";

import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { Tag, Divider } from "antd";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import { Select } from "antd";
import { FaFileImport } from "@react-icons/all-files/fa/FaFileImport";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";



const { Option } = Select;
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");

class EndUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_id: JSON.parse(localStorage.getItem("user")).company_id ? JSON.parse(localStorage.getItem("user")).company_id : "-1",
      modalInfo: null,
      data: [],
      key: "",
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
      statusExcel: false,
    };
  }


  OpenFileExcel = () => {
    this.setState({
      statusExcel: !this.state.statusExcel
    })
  }
  readExcel = (file) => {

    var btnOuter = document.getElementById("button_outer"),

      name_excel = document.getElementById("name_excel");

    btnOuter.classList.add("file_uploading");

    setTimeout(function () {
      btnOuter.classList.add("file_uploaded");
      btnOuter.style.borderRadius = "50%";



    }, 3000);


    name_excel.innerHTML = `${file.name}`;

    console.log(file);
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((data) => {
      console.log(data);
    });
  };
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
  changeLevelValue = (e, value) => {
    e.preventDefault();
    this.setState({
      [value]: e.target.value,
    });
  };
  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value,
    });
  };
  async getDataCampaign() {
    const { company_id } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_CAMPAIGN;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          company_id,
        },
      })
      .then((res) => {
        let val = res.data.data;

        this.setState({ dataCampaign: val });
      });
  }
  async componentDidMount() {
    const { type } = this.state;

    this.getData();
    this.getDataCampaign();
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
  async onSearch() {
    const { from, to, idDataSales, phoneFilter, levelFilter, codeVoucher } = this.state;
    await this.getData(idDataSales, phoneFilter, levelFilter, codeVoucher, from, to);
  }
  async getData(key) {
    const { company_id } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_VOUCHER;

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
      idCurrentUpdate: "",
      codeVoucher: "",
      relCode: "",
      description: "",
      status: "0",
    });
  }
  openEditVoucher(item) {
    this.setState({
      actionVoucher: "edit",
      modalVoucher: true,
      idCurrentUpdate: item._id,
      codeVoucher: item.code,
      relCode: item.relCode,
      description: item.content,
      status: item.status,
    });
  }
  async update() {
    const {
      codeVoucher,
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
        company_id: company_id,
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
          modalVoucher: false,
        });
        this.getData();
      });
  }
  async add() {
    const { codeVoucher, from, to, description, status, company_id, relCode } =
      this.state;
    let baseUrlCallApi = Constants.ADD_VOUCHER;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        code: codeVoucher,
        relCode: relCode,

        content: description,

        status: status,
        company_id: company_id,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Thêm thành công",
          showConfirmButton: false,
          timer: 700,
        });
        this.setState({
          modalVoucher: false,
        });
        this.getData();
      });
  }
  async remove(item) {
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
        this.getData();
      });
  }
  async delete() {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.DELETE_END_USER,
      method: "POST",
      data: {
        id: this.state.id,
      },
    });

    if (res.status == 200) {
      this.getData();

      this.setState({ modalDelete: !this.state.modalDelete, delete: null });
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
                  color={item.status === "0"
                    ? "#2eb85c"
                    : item.status === "1"
                      ? "#2db7f5"
                      : item.status === "2"
                        ? "#87d068"
                        : item.status === "3"
                          ? "#f50"
                          : item.status === "4"
                            ? "#dc0e04"
                            : item.status === "4"
                              ? "#00D084"
                              : "#FF0004"}
                >
                  {item.status === "0"
                    ? "Sẵn sàng"
                    : item.status === "1"
                      ? "Chờ xác nhận"
                      : item.status === "2"
                        ? "Đã sử dụng"
                        : item.status === "3"
                          ? "Hủy bỏ"
                          : item.status === "4"
                            ? "Xóa bỏ"
                            : "Khóa"
                  }
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
    console.log(itemRender)

    console.log(this.state.modalInfo)
  }
  render() {
    const {
      data,
      arrPagination,
      key,
      phoneVoucher,
      nameVoucher,
      dataCampaign,
      modalVoucher,
    } = this.state;
    const arrLevel = [
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
      {
        item: "5",
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
      {
        item: "5"
      }
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
                field="codeVoucher"
                label="Mã voucher"
                value={this.state.codeVoucher}
                // error={errors.title}
                onChange={(e) => this.setState({ codeVoucher: e.target.value })}
              // rows="5"
              />
              <div class="mt-3"></div>
              <label className="mr-3">Tên chiến dịch</label>
              <Select
                defaultValue={dataCampaign ? dataCampaign[0]?.name : ""}
                className="select_company"
                showSearch
                placeholder="Chọn tên công ty"
                optionFilterProp="children"
                onChange={(value) =>
                  this.setState({
                    relCode: value,
                  })
                }
                onSearch={this.onSearchSelect}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {dataCampaign
                  ? dataCampaign.map((item, i) => {
                    if (i === 0) {
                      return <Option key={i} value={item.name}>{item.name}</Option>;

                    }
                  })
                  : null}
              </Select>
              {/* <TextFieldGroup
                field="relCode"
                label="Mã chiến dịch"
                value={this.state.relCode}
                // error={errors.title}
                onChange={(e) => this.setState({ relCode: e.target.value })}
                // rows="5"
              /> */}
              <div className="mt-3"></div>
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
                            {item.item === "0"
                              ? "Sẵn sàng"
                              : item.item === "1"
                                ? "Chờ xác nhận"
                                : item.item === "2"
                                  ? "Đã sử dụng"
                                  : item.item === "3"
                                    ? "Hủy bỏ"
                                    : item.item === "4"
                                      ? "Xóa bỏ"
                                      : "Khóa"
                            }
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                            {item.item === "0"
                              ? "Sẵn sàng"
                              : item.item === "1"
                                ? "Chờ xác nhận"
                                : item.item === "2"
                                  ? "Đã sử dụng"
                                  : item.item === "3"
                                    ? "Hủy bỏ"
                                    : item.item === "4"
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
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify title_header">
                    Quản lý Voucher
                  </i>

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
                                        ? "Sẵn sàng"
                                        : item.item === "1"
                                          ? "Chờ xác nhận"
                                          : item.item === "2"
                                            ? "Đã sử dụng"
                                            : item.item === "3"
                                              ? "Hủy bỏ"
                                              : item.item === "4"
                                                ? "Xóa bỏ"
                                                : "Khóa"
                                      }
                                    </option>
                                  );
                                } else {
                                  return (
                                    <option key={i} value={item.item}>
                                      {item.item === "0"
                                        ? "Sẵn sàng"
                                        : item.item === "1"
                                          ? "Chờ xác nhận"
                                          : item.item === "2"
                                            ? "Đã sử dụng"
                                            : item.item === "3"
                                              ? "Hủy bỏ"
                                              : item.item === "4"
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
                  <div className="flex-center-space mt-4">

                    <div class=" flex">
                      <CButton
                        color="success"
                        style={{ marginBottom: "10px", marginRight: '10px' }}
                        size="md"
                        className="flex-center"
                        onClick={this.OpenFileExcel}
                      >
                        <FaFileImport style={{ margin: "auto 6px auto 0" }} />
                        <p style={{ margin: "auto 0" }}>Import</p>
                      </CButton>
                      <a href="/excel/template-import-voucher.xlsx" download>
                        <CButton
                          color="success"
                          style={{ marginBottom: "10px", marginRight: '10px' }}
                          size="md"
                          className="flex-center"

                        >
                          <BsDownload style={{ margin: "auto 6px auto 0" }} />
                          <p style={{ margin: "auto 0" }}>Tải file mẫu</p>
                        </CButton>
                      </a>
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
                      <div>

                      </div>
                    </div>
                    <div className="flex">
                      <CButton
                        color="info"
                        style={{ marginBottom: "10px", marginRight: '10px' }}
                        size="md"
                        className="btn-main"
                        onClick={(e) => {
                          this.onSearch();
                        }}
                      >
                        <BsSearch style={{ margin: "auto 6px auto 0" }} />
                        <p style={{ margin: "auto 0" }}>Tìm kiếm</p>
                      </CButton>
                      <CButton
                        color="info"
                        style={{ marginBottom: "10px" }}
                        size="md"
                        className="btn-main"
                        onClick={() => this.openVoucher()}
                      >
                        <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                        <p style={{ margin: "auto 0" }}>Thêm mới</p>
                      </CButton>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>


                  <div className="pb-3" style={{ display: this.state.statusExcel ? "block" : "none" }}>
                    <div className="button_outer" id="button_outer">
                      <div className="btn_upload">
                        <input
                          id="upload_file"
                          type="file"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            this.readExcel(file);
                          }}
                        />
                        <div className="flex-center">
                          <svg viewBox="64 64 896 896" focusable="false" data-icon="upload" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg>
                          <p>Tải lên File Excel</p>
                        </div>
                      </div>
                      <div className="processing_bar"></div>
                      <div className="success_box"></div>
                    </div>

                    <div className="name_excel" id="name_excel"></div>
                  </div>
                  <table
                    ble
                    className="table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên voucher</th>

                        <th className="text-center">Mã voucher</th>
                        <th className="text-center">Mã chiến dịch</th>
                        <th className="text-center">Nội dung</th>
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
                      {data != undefined
                        ? data.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td className="text-center">{i + 1}</td>
                              <td className="text-center">{item.name}</td>
                              <td className="text-center">{item.code}</td>
                              <td className="text-center">{item.relCode}</td>
                              <td className="text-center">{item.content}</td>
                              <td className="text-center">
                                <Tag
                                  className="ant-tag"
                                  color={item.status === "0"
                                    ? "#2eb85c"
                                    : item.status === "1"
                                      ? "#2db7f5"
                                      : item.status === "2"
                                        ? "#87d068"
                                        : item.status === "3"
                                          ? "#f50"
                                          : item.status === "4"
                                            ? "#dc0e04"
                                            : item.status === "4"
                                              ? "#00D084"
                                              : "#FF0004"}
                                >
                                  {item.status === "0"
                                    ? "Sẵn sàng"
                                    : item.status === "1"
                                      ? "Chờ xác nhận"
                                      : item.status === "2"
                                        ? "Đã sử dụng"
                                        : item.status === "3"
                                          ? "Hủy bỏ"
                                          : item.status === "4"
                                            ? "Xóa bỏ"
                                            : "Khóa"
                                  }
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
                                    onClick={() =>
                                      this.renderModalInfo(item)
                                    }
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
                                    onClick={(e) =>
                                      this.openEditVoucher(item)
                                    }
                                  >
                                    <FiEdit3
                                      style={styles.icon}
                                      className="icon"

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
                                </div>
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
                field="username"
                label="Tên đăng nhập"
                value={this.state.username}
                placeholder={"Tên đăng nhập"}
                // error={errors.title}
                onChange={(e) => this.onChange("username", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="name"
                label="Email"
                value={this.state.email}
                placeholder={"Email"}
                type={"email"}
                // error={errors.title}
                onChange={(e) => this.onChange("email", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="phone"
                label="Số điện thoại"
                value={this.state.phone}
                placeholder={"Số điện thoại"}
                // error={errors.title}
                onChange={(e) => this.onChange("phone", e.target.value)}
              // rows="5"
              />
              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Cấp độ:</CLabel>
                {arrLevel !== undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevel(e);
                    }}
                    custom
                    size="sm"
                    name="levelNormal"
                    id="SelectLm"
                  >
                    {arrLevel.map((item, i) => {
                      if (item.item === this.state.levelNormal) {
                        return (
                          <option selected key={i} value={item.item}>
                            {item.item === "0"
                              ? "Lên lịch"
                              : item.item === "1"
                                ? "Chưa hẹn"
                                : item.item === "2"
                                  ? "Đã gặp"
                                  : "Hoàn tất"}
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                            {item.item === "0"
                              ? "Lên lịch"
                              : item.item === "1"
                                ? "Chưa hẹn"
                                : item.item === "2"
                                  ? "Đã gặp"
                                  : "Hoàn tất"}
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
