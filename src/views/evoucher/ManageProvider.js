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
import { CButton, CLabel, CSelect, CTextarea, CRow, CCol, CBadge } from "@coreui/react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { Link } from 'react-router-dom';
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
import { Select } from "antd";

const { Option } = Select;
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
      dataVoucher: [],
      arrPaginationVoucher: [],
      indexPageVoucher: 0,
      totalActive: 0,
      modalCom: false,
      updated: "",
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
      action: 'new',
      SystemIdentifier: "",
      introduction: "",
      data: [],
      Email: "",
      TypeId: "0",
      Logo: "",
      Phone: "",
      Slug: "",
      introduction: "",
    };
  }
  onChangeImage = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
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
      type: e.target.value,
    });
  };
  async componentDidMount() {
    console.log(this.state.from);
    const { type } = this.state;

    this.getData();
    this.getDataCompany();
    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url == window.location.hash) {
        if (arr[i].isHidden == true) {
          window.location.href = "#/";
        }
      }
    }
  }
  async getDataCompany() {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_LIST_COMPANY,
      method: "POST",
    });
    let val = res.data.data;
    this.setState({
      dataCompany: val,
    });
  }
  GetDetailProvider() {

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
  onSearch() {
    this.getData(this.state.key);
  }
  async getData(key) {
    const { company_id } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_ALL_COMPANY;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        params: {
          company_id,
          keyword: key,
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
  async openUpdate(item) {
    this.state.dataCompany.forEach((name => {
      if (name._id === item.company_id) {
        this.setState({
          nameCompanyChoose: name.Name,
          idCompany: item._id
        });
        return;
      };
    }))

    this.setState({
      action: "edit",
      modalEdit: true,
      Brand: item.Brand,
      UserName: item.UserName,
      Name: item.Name,
      Create_Date: item.Create_Date,
      id: item["_id"],
    });
  }
  async update() {
    const {
      Name,
      Brand,
      UserName,
      Password,
      introduction,
      Status,
      TypeId,
      SystemIdentifier
    } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.UPDATE_CAMPAIGN;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        Name,
        Brand,
        UserName,
        Password,
        introduction,
        Status,
        TypeId,
        SystemIdentifier
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
  openCreate() {
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
      Name: ""
    });
  }
  async add() {
    const {
      UserName,
      Email,
      Brand,
      TypeId,
      Logo,
      Phone,
      Slug,
      introduction,
      Password,
      Name
    } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.ADD_PROVIDER;
    let url = baseUrlapi + baseUrlCallApi;

    await axios
      .post(url, {
        UserName,
        Email,
        Brand,
        TypeId,
        Logo,
        Phone,
        Slug,
        introduction,
        Password,
        Name
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Thêm thành công",
          showConfirmButton: false,
          timer: 700,
        });
        // this.setState({
        //   modalVoucher: false,
        // });
        // this.getData();
        if (res.is_success == true) {
          this.getData();
          this.setState({ modalVoucher: !this.state.modalVoucher });
          this.setState({
            errorMessage: ""
          })
        } else {
          // alert(res.message);
          this.setState({ isLoading: false });
        }
        if (res.status === 202) {

          this.setState({
            errorMessage: res.message
          });
          console.log(this.state.errorMessage)
        }
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

  renderModalInfo(item) {
    let itemRender = (
      <div>
        <Modal isOpen={true} size="md">
          <ModalHeader>Chi tiết Voucher</ModalHeader>
          <ModalBody className="info_voucher">
            <p>
              Mã voucher : <span>{item.code}</span>
            </p>
            <p>
              Mã công ty : <span>{item.code}</span>
            </p>
            <p>
              Khởi tạo :
              <span>
                Lúc{" "}
                {new Date(item.create_at).toLocaleTimeString() +
                  " giờ " +
                  " ngày " +
                  new Date(item.create_at).toLocaleDateString()}
              </span>
            </p>
            <p>
              Bắt đầu :
              <span>Ngày {new Date(item.from).toLocaleDateString()}</span>
            </p>
            <p>
              Kết thúc :
              <span>Ngày {new Date(item.to).toLocaleDateString()}</span>
            </p>
            <p>
              Nội dung voucher : <span>{item.content}</span>
            </p>
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

            <p>
              Id voucher : <span>{item._id}</span>
            </p>
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
      modalInfo: itemRender,
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
      dataCompany,
      action
    } = this.state;
    const dateArray = [this.state.from, this.state.to];
    const arrLevelType = [
      {
        item: "0",
      },
      {
        item: "1",
      },

    ];
    const arrLevel = [
      {
        item: "1",
      },
      {
        item: "2",
      },

    ];
    const arrLevelFilter = [
      {
        item: "0",
      },
      {
        item: "1",
      },

    ];
    const levelVoucher = [
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
    ]

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
              <div style={{ width: "100%" }} className="mt-3">
                <label className="control-label">Tên công ty:</label>
                <Select
                  className="select_company"
                  showSearch
                  placeholder="Chọn tên công ty"
                  optionFilterProp="children"
                  onChange={(value) =>
                    this.setState({
                      idCompany: value,
                    })
                  }
                  onSearch={this.onSearchSelect}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                    0
                  }
                >
                  {dataCompany
                    ? dataCompany.map((item, i) => {
                      return <Option value={item._id}>{item.Name}</Option>;
                    })
                    : null}
                </Select>
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
                {arrLevelType != undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevelType(e);
                    }}
                    custom
                    size="sm"
                    name="status"
                    id="SelectLm"
                  >
                    {arrLevelType.map((item, i) => {
                      if (item.item === this.state.type) {
                        return (
                          <option selected key={i} value={item.item}>
                            {item.item === "0"
                              ? "Sản phẩm"

                              : "Dịch vụ"}
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                            {item.item === "0"
                              ? "Sản phẩm"

                              : "Dịch vụ"}
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
                  value={this.state.SystemIdentifier}
                  onChange={(e) => this.setState({ SystemIdentifier: e.target.value })}
                />
              </div>

              <div className="mt-3"></div>
              <TextFieldGroup
                field="image"
                label="Logo:"
                type={"file"}
                className="mt-5"
                onChange={(e) => {
                  this.onChangeImage(e);
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
                  onChange={(e) => this.setState({ introduction: e.target.value })}
                />
              </div>
              <div style={{ width: "100%" }} className="mt-3">
                <TextFieldGroup
                  field="UserName"
                  label="Tên đăng nhập:"
                  value={this.state.UserName}
                  placeholder={"Tên đăng nhập"}
                  // error={errors.title}
                  onChange={e => this.onChange("UserName", e.target.value)}
                // rows="5"
                />
              </div>
              <div style={{ width: "100%" }} className="mt-3">
                <TextFieldGroup
                  field="Password"
                  label="Mật khẩu:"
                  value={this.state.Password}
                  type={"password"}
                  placeholder={"Mật khẩu"}
                  readOnly={action == 'new' ? false : true}
                  onChange={e => this.onChange("Password", e.target.value)}
                // rows="5"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.action === "new"
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

          <Modal
            isOpen={this.state.modalEdit}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.action == "new"
                ? `Tạo mới`
                : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <div style={{ width: "100%" }}>
                <CLabel>Tên công ty</CLabel>
                <Select
                  className="select_company"
                  showSearch
                  defaultValue={this.state.nameCompanyChoose}

                  placeholder="Chọn tên công ty"
                  optionFilterProp="children"
                  onChange={(value) =>

                    this.setState({
                      idCompany: value,
                    })
                  }
                  onSearch={this.onSearchSelect}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                    0
                  }
                >
                  {dataCompany
                    ? dataCompany.map((item, i) => {
                      return <Option value={item._id}>{item.Name}</Option>;
                    })
                    : null}
                </Select>
              </div>
              <div style={{ width: "100%" }} className="mt-3">
                <TextFieldGroup
                  field="Brand"
                  label="Tên thương hiệu"
                  value={this.state.Brand}
                  // error={errors.title}
                  onChange={(e) => this.setState({ Brand: e.target.value })}
                // rows="5"
                />
              </div>

              <TextFieldGroup
                field="UserName"
                label="Người tạo"
                value={this.state.UserName}
                // error={errors.title}
                onChange={(e) => this.setState({ UserName: e.target.value })}
              // rows="5"
              />
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.action === "new"
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

                          {arrLevel !== undefined ? (
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


                        <p className="title_filter">Danh sách thương hiệu</p>
                        <div style={{ width: '200px' }}>
                          <Select
                            className="select_seo"
                            showSearch
                            placeholder="Lọc theo thương hiệu"
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
                    <CCol md={3} className="mt">

                      <div className="">
                        <p className="title_filter">Từ ngày</p>

                        <div style={{ width: '200px' }}>
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
                        <div style={{ width: '200px' }}>
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

                  <div className="flex-end">

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
                </CardHeader>
                <CardBody>

                  <table
                    ble
                    className="mt-3 table table-outline table-hover mb-0 d-none d-sm-table table_dash"
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
                      {data != undefined
                        ? data.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td className="text-center">{i + 1}</td>
                              <td className="text-center">
                                {item.Name}
                              </td>
                              <td className="text-center">
                                {item.Brand}
                              </td>
                              <td className="text-center">{item.TypeId === "0"
                                ? "Sản phẩm"

                                : "Dịch vụ"}</td>
                              <td className="text-center">{item.UserName}</td>
                              <td className="text-center">{new Date(item.Create_Date).toLocaleDateString()}</td>
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
                              <td className="text-center">
                                <div class="flex">
                                  <Link onClick={() => this.GetDetailProvider()} to={"/detail-provider/" + item._id}>
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
