import React, { Component } from "react";
import CIcon from "@coreui/icons-react";
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
import { FaFileImport } from "@react-icons/all-files/fa/FaFileImport";

import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { CButton, CLabel, CSelect, CRow, CCol } from "@coreui/react";
import { Tag, Divider } from "antd";
import { Select } from "antd";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsDownload} from "@react-icons/all-files/bs/BsDownload";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";
import API_CONNECT from "../../functions/callAPI";
import Pagination from "@material-ui/lab/Pagination";
import "moment-timezone";
import Constants from "../../contants/contants";
import TextFieldGroup from "../Common/TextFieldGroup";
import axios from "axios";
import md5 from "md5";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import * as XLSX from "xlsx";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
const { Option } = Select;

let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
const dateFormat = "DD/MM/YYYY";
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
class EndUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_id: JSON.parse(localStorage.getItem("user")).company_id ? JSON.parse(localStorage.getItem("user")).company_id : null,
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
      // from : new Date().toLocaleDateString(),
      // to : new Date().toLocaleDateString()
      from: "",
      to: "",
      dataSalesDefault : [{
        _id : "",
        Name : "Không có"
      }],
      levelFilter : "A"
      
    };
  }
  OpenFileExcel=()=>{
    this.setState({
      statusExcel : !this.state.statusExcel
    })
  }
  readExcel = (file) => {

		var btnOuter = document.getElementById("button_outer"),

    name_excel = document.getElementById("name_excel");

    btnOuter.classList.add("file_uploading");
    
    setTimeout(function(){
      btnOuter.classList.add("file_uploaded");
      btnOuter.style.borderRadius = "50%";

     

    },3000);

 
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
  async ExportsFileExcel(){
    const { company_id } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.EXPORT_CUSTOMER;

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
        if(a){
          a.href = `${baseUrlapi}${res.data.data.url}`;
        }
        a.click();
      });
  };
  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value,
    });
  };
  changeLevelValue= (e,value) => {
    e.preventDefault();
    this.setState({
      [value]: e.target.value,
    });
  };
  async componentDidMount() {
    const { type } = this.state;
    this.getDataSeo();
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
  async onSearch() {
    const { from, to ,idDataSales, phoneFilter, levelFilter, codeVoucher } = this.state;
    await this.getData(idDataSales,phoneFilter,levelFilter,codeVoucher,from,to);
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
  async getData(saleId,phoneNumber,status,voucherCode,from,to) {
    const { company_id } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_USER_EVOUCHER;

    let url = baseUrlapi + baseUrlCallApi;
  
    await axios.get(url, {
      params: {
        saleId : saleId,
        phoneNumber,
        from,
        to,
        status,
        voucherCode,
        roleType: this.state.type,
        userId: JSON.parse(this.state.user).sale_id,
        company_id
      }
    }).then((res) => {
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
      nameVoucher: "",
      phoneVoucher: "",
      levelNormal: "",
    });
  }
  openEditVoucher(item) {
    const { nameVoucher, phoneVoucher, idCurrentUpdate } = this.state;
    this.setState({
      actionVoucher: "edit",
      modalVoucher: true,
      idCurrentUpdate: item._id,
      nameVoucher: item.fullName,
      phoneVoucher: item.phoneNumber,
      levelNormal: item.status,
    });
  }
  async update() {
    const { ojUpdate, idCurrentUpdate } = this.state;
    let baseUrlCallApi = Constants.UPDATE_USER_EVOUCHER;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        id: idCurrentUpdate,
      })
      .then((res) => {
        this.getData();
      });
  }
  async add() {
    const { nameVoucher, phoneVoucher, levelNormal } = this.state;
    let baseUrlCallApi = Constants.ADD_USER_EVOUCHER;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        fullName: nameVoucher,
        phoneNumber: phoneVoucher,
        status: levelNormal,
      })
      .then((res) => {
        this.getData();
      });
  }
  async remove(item) {
    let baseUrlCallApi = Constants.DELETE_USER_EVOUCHER;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        id: item._id,
      })
      .then((res) => {
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
  
  render() {
    const {
      data,
      arrPagination,
      key,
      phoneVoucher,
      nameVoucher,
      modalVoucher,
    } = this.state;
    const arrLevel = [
      {
        item: "A",
      },
      {
        item: "1",
      },

    ];
    const arrLevelFilter = [
      {
        item: "A",
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
          {/* <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              this.readExcel(file);
            }}
          /> */}

          <Modal
            isOpen={this.state.modalVoucher}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.actionVoucher == "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="nameVoucher"
                label="Tên đăng nhập"
                value={this.state.nameVoucher}
                placeholder={"Tên đăng nhập"}
                // error={errors.title}
                onChange={(e) => this.onChange("nameVoucher", e.target.value)}
              // rows="5"
              />

              <TextFieldGroup
                field="phoneVoucher"
                label="Số điện thoại"
                value={this.state.phoneVoucher}
                placeholder={"Số điện thoại"}
                // error={errors.title}
                onChange={(e) => this.onChange("phoneVoucher", e.target.value)}
              // rows="5"
              />
              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Trạng thái:</CLabel>
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
                                ? "Đã hẹn"
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
                                ? "Đã hẹn"
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
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify title_header">
                    Danh sách người nhận Voucher
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

                   
<p className="title_filter">Số điện thoại</p>

                        <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({ phoneFilter: e.target.value });
                          }}
                          type="number"
                          name="phoneFilter"
                          value={this.state.phoneFilter}
                          placeholder="Số điện thoại"
                        />
                      </div>
                    </CCol>
                    <CCol md={4} className="mt-3">
                    <div className="">

                   
<p className="title_filter">Trạng thái</p>
<div style={{ width: "200px" }} className="">
             
                {arrLevel !== undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevelValue(e,"levelFilter");
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
                            {item.item === "A"
                              ? "Đã giao KH"
                              : item.item === "1"
                                ? "Đã xác nhận KH"
                                : item.item === "2"
                                  ? "Hoàn thành"
                                  : item.item === "3"
                                  ? "Hủy bỏ"
                                  : "Chưa xác nhận"}
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                           {item.item === "A"
                              ? "Đã giao KH"
                              : item.item === "1"
                                ? "Đã xác nhận KH"
                                : item.item === "2"
                                  ? "Hoàn thành"
                                  : item.item === "3"
                                  ? "Hủy bỏ"
                                  : "Chưa xác nhận"}
                          </option>
                        );
                      }
                    })}
                  </CSelect>
                ) : null}
              </div>
                        {/* <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({ statusVoucher: e.target.value });
                          }}
                          name="statusVoucher"
                          value={this.state.statusVoucher}
                          placeholder="Trạng thái voucher"
                        /> */}
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
                          <div className=" mt-3">
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
                      
                      </div>
                    </CCol>
                    <CCol md={4} className="mt-3">
                      <div className="">

                   
                        <p className="title_filter">Danh sách Sales</p>
                        <div style={{ width:'200px'}}>
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
                      onClick={()=>this.ExportsFileExcel()}
                    >
                      <FaFileExport style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Xuất File</p>
                    </CButton>
                    <a id="download_excel" download></a>
                    <div>

                    </div>
                    </div>
                    <div>
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
                  
                 
                  </div>
                </CardHeader>
                <CardBody>
               
                <div className="pb-3" style={{display : this.state.statusExcel ? "block" : "none" }}>
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
                    className="table mt-3 table-hover table-outline mb-0 d-none d-sm-table table_dash"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên</th>

                        <th className="text-center">Số điện thoại</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Mã Voucher</th>
                        <th className="text-center">Ngày nhận</th>

                        <th className="text-center">Trạng thái</th>
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
                              <td className="text-center">{item.fullName}</td>
                              <td className="text-center">{item.phoneNumber}</td>
                              <td className="text-center">{item.email}</td>
                              <td className="text-center">
                                {item.voucherCode}
                              </td>
                              <td className="text-center">
                                {new Date(item.create_at).toLocaleDateString()}
                              </td>

                              <td className="text-center">
                                <Tag
                                  className="ant-tag"
                                  color={item.status === "A"
                                  ? "#2eb85c"
                                  : item.status === "1"
                                    ? "#2db7f5"
                                    : item.status === "2"
                                      ? "#87d068"
                                      
                                        : item.status === "3"
                                          ? "#dc0e04"
                                       
                                          : "#FF0004"}
                                >
                               
                                   {item.status === "A"
                              ? "Đã giao KH"
                              : item.status === "1"
                                ? "Đã xác nhận KH"
                                : item.status === "2"
                                  ? "Hoàn thành"
                                  : item.status === "3"
                                  ? "Hủy bỏ"
                                  : "Chưa xác nhận"}
                                </Tag>

                                {
                                  this.state.type == "0" ?
                                    <div>
                                      <CButton
                                        shape="rounded-pill"
                                        variant="ghost"
                                        color="info"
                                        style={styles.mgl5}
                                        size="md"
                                        onClick={(e) => this.openEditVoucher(item)}
                                      >
                                        {/* <FiEdit3 style={styles.icon} name="cilPencil" /> */}
                                        Thay đổi
                                      </CButton></div> : null
                                }
                              </td>
                            </tr>
                          );
                        })
                        : ""}
                    </tbody>
                  </table>
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
                </CardBody>
              </Card>
              
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

export default EndUser;
