import React, { Component } from "react";
import CIcon from "@coreui/icons-react";
import { Tabs } from "antd";
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
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";

import {
  CButton,
  CLabel,
  CSelect,
  CTextarea,
  CRow,
  CCol,
  CBadge,
} from "@coreui/react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { Link } from "react-router-dom";
import API_CONNECT from "../../../../src/functions/callAPI";

// import API_CONNECT from "../../functions/callAPI";
import Pagination from "@material-ui/lab/Pagination";
import "moment-timezone";
import Constants from "../../../contants/contants";
import TextFieldGroup from "../../Common/TextFieldGroup";
import axios from "axios";
import md5 from "md5";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { Tag, Divider } from "antd";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import { Select } from "antd";

const { Option } = Select;
const { TabPane } = Tabs;
const dateFormat = "DD-MM-YYYY";
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
const { RangePicker } = DatePicker;
class EndUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_id: JSON.parse(localStorage.getItem("user")).company_id
        ? JSON.parse(localStorage.getItem("user")).company_id
        : null,
      data: [],
      modalPopupVoucher: false,
      actionPopupVoucher: "new",
      modalVoucherEditing: false,
      key: "",
      totalActive: 0,
      dataApi: [],
      hidden: false,
      action: "new",
      modalVoucher: false,
      UserName: "",
      Email: "",
      Phone: "",
      Name: "",
      Brand: "",
      Create_Date: "",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      type: localStorage.getItem("type"),
      user: localStorage.getItem("user"),
      isLoading: false,
      idCurrentUpdate: null,
      levelNormal: "0",
      dataCompany: [],
      action: "new",
      SystemIdentifier: "",
      introduction: "",
      TypeId: "0",
      Logo: "",
      Phone: "",
      Slug: "",
      introduction: "",
      changeTab: "1",
    };
  }
  onChangeImage(e, value, valueLink, valueShow) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ [valueLink]: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({ [value]: e.target.result, [valueShow]: e.target.result });
    };
  }
  async postImage(link) {
    var newImage = "";
    if (link && link !== "") {
      const form = new FormData();

      form.append("image", link);

      await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST").then(
        (res) => {}
      );

      newImage = link.name;
      return newImage;
    } else {
      return newImage;
    }
  }
  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value,
    });
  };

  changeLevelType = (e) => {
    e.preventDefault();
    this.setState({
      TypeId: e.target.value,
    });
  };
  async componentDidMount() {
    await this.getData();
    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url == window.location.hash) {
        if (arr[i].isHidden == true) {
          window.location.href = "#/";
        }
      }
    }
  }

  GetDetailProvider() {}

  pagination(dataApi) {
    var i,
      j,
      temparray,
      chunk = 50;
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

  onSearch() {
    this.getData(this.state.key);
  }
  async getData() {
    const { company_id } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_ALL_COMPANY;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        // params: {
        //   company_id,
        //   keyword: key,
        // },
      })
      .then((res) => {
        let val = res.data.data;
        this.pagination(val);
        this.setState({ dataApi: val });
        let active = 0;
        val.map((val) => {
          if (val.Status == "Actived") {
            active = active + 1;
          }
        });
        this.setState({ isLoading: false, totalActive: active , totalRecord : res.data.totalRecord });
      });
  }

  onChange(key, val) {
    this.setState({ [key]: val });
  }

  async openUpdate(item) {
    this.setState({
      action: "edit",
      idActionCurrent : item._id,
      modalEdit: true,
      Name: item.Name,
      Email: item.Email,
      introduction: item.introduction,
      Status: item.Status,
      Brand: item.Brand,
      TypeId: item.TypeId,
      Logo: item.Logo,
      id: item["_id"],
    });
  }
  async update() {
    const { Name, Brand, introduction, Status, TypeId, Email, Logo , idActionCurrent} =
      this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.UPDATE_PROVIDER;

    let url = baseUrlapi + baseUrlCallApi;
    this.setState({ isLoading: true });
    let imgOutput = "";
    let imgLink = await this.postImage(this.state.Logo_link);
    if (imgLink) {
      imgOutput = imgLink;
    }
    await axios
      .post(url, {
        Name: Name,
        Email: Email,
        introduction: introduction,
        Status: Status,
        Brand: Brand,
        TypeId: TypeId,
        Logo: imgOutput,
        id : idActionCurrent
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Cập nhật hoàn tất",
          showConfirmButton: false,
          timer: 700,
        });

        if (res.data.is_success == true) {
          this.getData();
          this.setState({ modalEdit: !this.state.modalEdit });
        } else {
          alert("Cập nhật thất bại");
          this.setState({ isLoading: false });
        }
      });
  }
  openCreate() {
    this.setState({
      changeTab: "1",
    });
    this.setState({
      action: "new",
      modalVoucher: true,
      UserName: "",
      Email: "",
      Brand: "",
      TypeId: "0",
      Logo: "",
      Phone: "",
      Slug: "",
      introduction: "",
      Password: "",
      Name: "",
    });
  }
  async add() {
    this.setState({
      changeTab: "1",
    });
    const {
      UserName,
      Email,
      Brand,
      TypeId,
      Logo,
      Phone,
      Slug,
      type,
      introduction,
      Password,
      Name,
    } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.ADD_PROVIDER;
    let url = baseUrlapi + baseUrlCallApi;
    this.setState({ isLoading: true });
    let imgOutput = "";
    let imgLink = await this.postImage(this.state.Logo_link);
    if (imgLink) {
      imgOutput = `${Constants.BASE_URL}image_brand/${imgLink}`;
    }
    await axios
      .post(url, {
        userName: UserName,
        email: Email,
        brand: Brand,
        typeId: TypeId,
        logo: imgOutput,
        phone: Phone,
        slug: Slug,
        introduction: introduction,
        password: Password,
        name: Name,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Thêm thành công",
          showConfirmButton: false,
          timer: 700,
        });
        if (res.data.is_success == true) {
          this.setState({ isLoading: false });
          this.setState({ modalVoucher: !this.state.modalVoucher });
          this.setState({
            errorMessage: "",
          });
          this.getData();
        } else {
          alert("Thêm không thành công");
          this.setState({ isLoading: false });
        };
      });
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
  }
  openDelete = (item) => {
    this.setState({
      modalDelete: !this.state.modalDelete,
      id: item._id,
    });
  };
  async delete() {
    let baseUrlCallApi = Constants.DELETE_PROVIDER;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    console.log(this.state.id);
    this.setState({ isLoading: true });
    await axios
      .delete(url, {
        data: {
          id: this.state.id,
        },
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Xóa thành công",
          showConfirmButton: false,
          timer: 700,
        });
        if (res.data.is_success == true) {
          this.getData();
          this.setState({ modalDelete: !this.state.modalDelete, delete: null });
        } else {
          // alert(res.message);
          this.setState({ isLoading: false });
        }
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

  callback(key) {
    if (key === "1") {
      this.setState({
        changeTab: "1",
      });
    } else {
      this.setState({
        changeTab: "2",
      });
    }
  }

  nextButton() {

    this.setState({
      changeTab: "2",
    });
  }

  arrLevelType = [
    {
      item: "0",
    },
    {
      item: "1",
    },
  ];
  arrLevel = [
    {
      item: "1",
    },
    {
      item: "2",
    },
  ];
  arrLevelFilter = [
    {
      item: "0",
    },
    {
      item: "1",
    },
  ];

  render() {
    const { data, arrPagination, action } = this.state;

    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Modal
            isOpen={this.state.modalVoucher}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.action == "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <Tabs
                activeKey={this.state.changeTab}
                onChange={(key) => this.callback(key)}
              >
                <TabPane className="tab1" tab="Thông tin" key="1" changeTab="1">
                  <div style={{ width: "100%" }} className="mt-3">
                    <TextFieldGroup
                      field="Name"
                      label="Tên công ty:"
                      value={this.state.Name}
                      onChange={(e) => this.setState({ Name: e.target.value })}
                    />
                  </div>

                  <div style={{ width: "100%" }} className="mt-3">
                    <TextFieldGroup
                      field="Brand"
                      label="Tên thương hiệu:"
                      value={this.state.Brand}
                      onChange={(e) => this.setState({ Brand: e.target.value })}
                    />
                  </div>

                  <div style={{ width: "100%" }} className="mt-3">
                    <CLabel>Loại hình:</CLabel>
                    {this.arrLevelType != undefined ? (
                      <CSelect
                        onChange={async (e) => {
                          this.changeLevelType(e);
                        }}
                        custom
                        size="sm"
                        name="status"
                        id="SelectLm"
                      >
                        {this.arrLevelType.map((item, i) => {
                          if (item.item === this.state.type) {
                            return (
                              <option selected key={i} value={item.item}>
                                {item.item === "0" ? "Sản phẩm" : "Dịch vụ"}
                              </option>
                            );
                          } else {
                            return (
                              <option key={i} value={item.item}>
                                {item.item === "0" ? "Sản phẩm" : "Dịch vụ"}
                              </option>
                            );
                          }
                        })}
                      </CSelect>
                    ) : null}
                  </div>

                  <div style={{ width: "100%" }} className="mt-3">
                    <TextFieldGroup
                      field=""
                      label="Định danh hệ thống:"
                      value={this.state.Slug}
                      onChange={(e) => this.setState({ Slug: e.target.value })}
                    />
                  </div>

                  <div style={{ width: "100%" }} className="mt-3">
                    <TextFieldGroup
                      field="image"
                      label="Logo:"
                      type={"file"}
                      className="mt-5"
                      onChange={(e) => {
                        this.onChangeImage(e, "Logo", "Logo_link", "Logo_show");
                      }}
                    />
                    <div className="text-center">
                      <img
                        alt=""
                        style={{ width: "200px", marginBottom: 20 }}
                        src={this.state.Logo}
                      />
                    </div>
                  </div>

                  <div style={{ width: "100%" }} className="mt-3">
                    <CLabel>Trạng thái:</CLabel>
                    {this.arrLevel != undefined ? (
                      <CSelect
                        onChange={async (e) => {
                          this.changeLevel(e);
                        }}
                        custom
                        size="sm"
                        name="status"
                        id="SelectLm"
                      >
                        {this.arrLevel.map((item, i) => {
                          if (item.item === this.state.status) {
                            return (
                              <option selected key={i} value={item.item}>
                                {item.item === "1"
                                  ? "Hoạt động"
                                  : "Không hoạt động"}
                              </option>
                            );
                          } else {
                            return (
                              <option key={i} value={item.item}>
                                {item.item === "1"
                                  ? "Hoạt động"
                                  : "Không hoạt động"}
                              </option>
                            );
                          }
                        })}
                      </CSelect>
                    ) : null}
                  </div>
                  <div style={{ width: "100%" }} className="mt-3">
                    <TextFieldGroup
                      field=""
                      label="Giới thiệu:"
                      value={this.state.introduction}
                      onChange={(e) =>
                        this.setState({ introduction: e.target.value })
                      }
                    />
                  </div>
                </TabPane>
                <TabPane className="tab2" tab="Tài khoản" key="2" changeTab="2">
                  <div style={{ width: "100%" }} className="mt-3">
                    <TextFieldGroup
                      field="UserName"
                      label="Tên đăng nhập:"
                      value={this.state.UserName}
                      placeholder={"Tên đăng nhập"}
                      onChange={(e) =>
                        this.onChange("UserName", e.target.value)
                      }
                    />
                  </div>

                  <div style={{ width: "100%" }} className="mt-3">
                    <TextFieldGroup
                      field="Password"
                      label="Mật khẩu:"
                      value={this.state.Password}
                      type={"password"}
                      placeholder={"Mật khẩu"}
                      readOnly={action == "new" ? false : true}
                      onChange={(e) =>
                        this.onChange("Password", e.target.value)
                      }
                    />
                  </div>
                  <div style={{ width: "100%" }} className="mt-3">
                    <TextFieldGroup
                      field="Phone"
                      label="Số điện thoại: "
                      value={this.state.Phone}
                      placeholder={"Số điện thoại"}
                      onChange={(e) => this.onChange("Phone", e.target.value)}
                    />
                  </div>

                  <div style={{ width: "100%" }} className="mt-3">
                    <TextFieldGroup
                      field="Email"
                      type="email"
                      label="Email: "
                      value={this.state.Email}
                      placeholder={"Email"}
                      onChange={(e) => this.onChange("Email", e.target.value)}
                    />
                  </div>
                </TabPane>
              </Tabs>
            </ModalBody>
            <ModalFooter>
              {this.state.changeTab === "1" ? (
                <div>
                  <CButton
                    color="primary"
                    onClick={() => {
                      this.nextButton();
                    }}
                    disabled={this.state.isLoading}
                  >
                    Tiếp
                  </CButton>{" "}
                  <CButton
                    color="secondary"
                    onClick={(e) =>
                      this.setState({ modalVoucher: !this.state.modalVoucher })
                    }
                  >
                    Đóng
                  </CButton>
                </div>
              ) : (
                <div>
                  <CButton
                    color="primary"
                    onClick={(e) => {
                      this.state.action === "new" ? this.add() : this.update();
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
                </div>
              )}
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalEdit} className={this.props.className}>
            <ModalHeader>
              {this.state.action == "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <div style={{ width: "100%" }}>
                <TextFieldGroup
                  field="Name"
                  label="Tên công ty"
                  value={this.state.Name}
                  // error={errors.title}
                  onChange={(e) => this.setState({ Name: e.target.value })}
                  // rows="5"
                />
              </div>
              <div style={{ width: "100%" }} className="mt-3">
                <TextFieldGroup
                  field="Brand"
                  label="Tên thương hiệu"
                  value={this.state.Brand}
                  onChange={(e) => this.setState({ Brand: e.target.value })}
                />
              </div>
              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Loại hình:</CLabel>
                {this.arrLevelType != undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevelType(e);
                    }}
                    custom
                    size="sm"
                    name="status"
                    id="SelectLm"
                  >
                    {this.arrLevelType.map((item, i) => {
                      if (item.item === this.state.TypeId) {
                        return (
                          <option selected key={i} value={item.item}>
                            {item.item === "0" ? "Sản phẩm" : "Dịch vụ"}
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                            {item.item === "0" ? "Sản phẩm" : "Dịch vụ"}
                          </option>
                        );
                      }
                    })}
                  </CSelect>
                ) : null}
              </div>

              <div style={{ width: "100%" }} className="mt-3">
                <TextFieldGroup
                  field="image"
                  label="Logo:"
                  type={"file"}
                  className="mt-5"
                  onChange={(e) => {
                    this.onChangeImage(e, "Logo", "Logo_link", "Logo_show");
                  }}
                />
                <div className="text-center">
                  <img
                    alt=""
                    style={{ width: "200px", marginBottom: 20 }}
                    src={this.state.Logo}
                  />
                </div>
              </div>

              {/* <TextFieldGroup
                field="UserName"
                label="Người tạo"
                value={this.state.UserName}
                onChange={(e) => this.setState({ UserName: e.target.value })}
              /> */}
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.action === "new" ? this.add() : this.update();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({
                    modalEdit: !this.state.modalEdit,
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
                    Quản lý nhà cung cấp 
                  </i>

                  <CRow>
                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">Trạng thái chiến dịch</p>
                        <div style={{ width: "200px" }} className="">
                          {this.arrLevel !== undefined ? (
                            <CSelect
                              onChange={async (e) => {
                                this.changeLevelValue(e, "levelFilter");
                              }}
                              custom
                              size="md"
                              name="levelFilter"
                              id="SelectLm"
                            >
                              {this.arrLevelFilter.map((item, i) => {
                                if (item.item === this.state.levelFilter) {
                                  return (
                                    <option selected key={i} value={item.item}>
                                      {item.item === "0"
                                        ? "Hoạt động"
                                        : "Không hoạt động"}
                                    </option>
                                  );
                                } else {
                                  return (
                                    <option key={i} value={item.item}>
                                      {item.item === "0"
                                        ? "Hoạt động"
                                        : "Không hoạt động"}
                                    </option>
                                  );
                                }
                              })}
                            </CSelect>
                          ) : null}
                        </div>
                      </div>
                    </CCol>
                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">Từ ngày</p>

                        <div style={{ width: "200px" }}>
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
                    </CCol>
                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">Đến ngày</p>
                        <div style={{ width: "200px" }}>
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

                  <div className="flex-center-space">
                    <div>
                    <CButton
                        color="success"
                        style={{ marginRight: "10px" }}
                        size="md"
                        className="flex-center"
                        onClick={() => this.ExportsFileExcel()}
                      >
                        <FaFileExport style={{ margin: "auto 6px auto 0" }} />
                        <p style={{ margin: "auto 0" }}>Xuất File</p>
                      </CButton>
                      <a id="download_excel" download></a>
                    </div>
                    <div className="flex">

                    <CButton
                      color="info"
                      style={{ marginBottom: "10px", marginRight: "10px" }}
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
                      onClick={() => this.openCreate()}
                    >
                      <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Thêm mới</p>
                    </CButton>
                  </div>
                  </div>

                </CardHeader>
                <CardBody className="table__overflow">
                <h5>Tổng số: {this.state.totalRecord ? this.state.totalRecord : ""}</h5>


                  <table
                    ble
                    className="mt-3 table table-hover mb-0 d-none d-sm-table"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên công ty</th>
                        <th className="text-center">Thương hiệu</th>
                        <th className="text-center">Loại hình</th>
                        <th className="text-center">Người tạo</th>
                        <th className="text-center">Ngày tạo</th>
                        <th className="text-center">Trạng thái</th>
                        <th className="text-center">#</th>
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
                      {data != "undefined" && data !== "null" && data.length > 0
                        ? data.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td className="text-center table-row-first">
                                  {i + 1}
                                </td>
                                <td className="text-center">{item.Name}</td>
                                <td className="text-center">{item.Brand}</td>
                                <td className="text-center">
                                  {item.TypeId === "0" ? "Sản phẩm" : "Dịch vụ"}
                                </td>
                                <td className="text-center">Đang cập nhật</td>
                                <td className="text-center">
                                  {new Date(
                                    item.Create_Date
                                  ).toLocaleDateString()}
                                </td>
                                <td className="text-center">
                                  <Tag
                                    className="ant-tag"
                                    color={
                                      item.Status === "Actived"
                                        ? "#87d068"
                                        : "#f50"
                                    }
                                  >
                                    {item.Status === "Actived"
                                      ? "Hoạt động"
                                      : "Không hoạt động"}
                                  </Tag>
                                </td>
                                <td className="text-center table-row-last">
                                  <div class="flex">
                                    <Link
                                      onClick={() => this.GetDetailProvider()}
                                      to={"/detail-provider/" + item._id}
                                    >
                                      <CButton
                                        shape="rounded-pill"
                                        variant="outline"
                                        color="info"
                                        style={styles.mgl5}
                                        size="sm"
                                        className="flex-a-center "
                                      >
                                        <BsSearch className="mr-1" />
                                        Chi tiết
                                      </CButton>
                                    </Link>
                                    <CButton
                                      shape="rounded-pill"
                                      variant="ghost"
                                      color="info"
                                      style={styles.mgl5}
                                      size="md"
                                      onClick={(e) => this.openUpdate(item)}
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
                                        this.openDelete(item);
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

          <Modal
            isOpen={this.state.modalDelete}
            className={this.props.className}
          >
            <ModalHeader
              onClick={(e) =>
                this.setState({
                  modalDelete: !this.state.modalDelete,
                  delete: null,
                })
              }
            >{`Xoá`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Bạn có chắc chắn xóa ?`}</label>
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
