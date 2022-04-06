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
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { CButton, CRow, CCol } from "@coreui/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

import API_CONNECT from "../../../../functions/callAPI";
import Pagination from "@material-ui/lab/Pagination";
import "moment-timezone";
import Constants from "../../../../contants/contants";
import TextFieldGroup from "../../../Common/TextFieldGroup";
import axios from "axios";
import md5 from "md5";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");

class EndUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneSearch: "",
      emailSearch: "",
      data: [],
      key: "",
      totalActive: 0,
      modalCom: false,
      updated: "",
      dataApi: [],
      hidden: false,
      action: "new",
      email: "",
      username: "",
      phone: "",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      type: localStorage.getItem("type"),
      user: localStorage.getItem("user"),
      isLoading: false,
    };
  }
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
      chunk = 5;
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

  getData = async () => {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_END_USER,
      method: "POST",
      data: {
        phone: "",
        tokensearch: "",
      },
    }).then((res) => {
      console.log("end user", res.data.data);

      let val = res.data.data;
      this.pagination(val);
      this.setState({ dataApi: val });

      let active = 0;

      this.setState({ isLoading: false, totalActive: active });
    });
  };
  async newSearch() {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_END_USER,
      method: "POST",
      data: {
        phone: this.state.phoneSearch,
        tokensearch: this.state.emailSearch,
      },
    }).then((res) => {
      console.log("end user", res.data.data);

      let val = res.data.data;
      this.pagination(val);
      this.setState({ dataApi: val });

      let active = 0;

      this.setState({ isLoading: false, totalActive: active });
    });
  }
  searchKey() {
    const { indexPage, key } = this.state;
    // this.setState({ key: key })

    if (key != "") {
      let d = [];
      console.log(this.state.dataApi);
      this.state.dataApi.map((val) => {
        if (val.phone) {
          if (val.phone.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {
            d.push(val);
          }
        }
      });
      let active = 0;

      d.map((val) => {
        if (val.Status == "Actived") {
          active = active + 1;
        }
      });

      this.setState({ data: d, totalActive: active });
    } else {
      let active = 0;

      this.state.dataApi.map((val) => {
        if (val.Status == "Actived") {
          active = active + 1;
        }
      });

      this.setState({
        data: this.state.arrPagination[indexPage],
        totalActive: active,
      });
    }
  }

  actionSearch(e, name_action) {
    this.setState(
      {
        [name_action]: e.target.value,
      },
      () => {
        this.searchKey();
      }
    );
  }

  resetSearch() {
    this.setState(
      {
        key: "",
      },
      () => {
        this.searchKey();
      }
    );
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
    const { data, arrPagination, key } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify title_header">
                    Danh sách tài khoản người dùng
                  </i>
                  <CRow>
                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">E-mail</p>
                        <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({
                              emailSearch: e.target.value,
                            });
                          }}
                          name="emailSearch"
                          value={this.state.emailSearch}
                          placeholder="Email"
                        />
                      </div>
                    </CCol>
                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">Số điện thoại</p>

                        <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({
                              phoneSearch: e.target.value,
                            });
                          }}
                          name="phoneSearch"
                          value={this.state.phoneSearch}
                          placeholder="Số điện thoại"
                        />
                      </div>
                    </CCol>
                  </CRow>
                  <div className="flex-end">
                    <CButton
                      color="info"
                      style={{ marginBottom: "10px" }}
                      size="md"
                      className="btn-main"
                      onClick={(e) => {
                        this.newSearch();
                      }}
                    >
                      <BsSearch style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Tìm kiếm</p>
                    </CButton>
                  </div>
                </CardHeader>
                <CardBody className="table__overflow">
                  <table
                    ble
                    className="table table-hover table-outline mb-0 d-none d-sm-table"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Loại tài khoản</th>

                        <th className="text-center">Tên khách hàng</th>

                        <th className="text-center">Số điện thoại</th>
                        <th className="text-center">Email</th>

                        <th className="text-center">Địa chỉ</th>

                        <th className="text-center">Ngày đăng ký</th>

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
                                  {item.type === "0" ? (
                                    ""
                                  ) : item.type === "1" ? (
                                    <BsFacebook
                                      style={{
                                        fontSize: "2.3rem",
                                        color: "#1877f2",
                                      }}
                                    />
                                  ) : (
                                    <FcGoogle style={{ fontSize: "2.3rem" }} />
                                  )}
                                </td>

                                <td className="text-center">{item.name}</td>

                                <td className="text-center">{item.phone}</td>
                                <td className="text-center">{item.email}</td>

                                <td className="text-center">
                                  {item.addressHome}
                                </td>

                                <td className="text-center">
                                  {new Date(
                                    item.create_date
                                  ).toLocaleDateString() +
                                    " " +
                                    new Date(
                                      item.create_date
                                    ).toLocaleTimeString()}
                                </td>
                                <td className="text-center">
                                  <div className="flex-center">
                                    <CButton
                                      shape="rounded-pill"
                                      variant="ghost"
                                      color="info"
                                      style={styles.mgl5}
                                      className="mr-1"
                                      size="md"
                                      onClick={async (e) =>
                                        await this.openUpdate(item)
                                      }
                                    >
                                      <FiEdit3
                                        style={styles.icon}
                                        name="cilPencil"
                                        className="icon"
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
