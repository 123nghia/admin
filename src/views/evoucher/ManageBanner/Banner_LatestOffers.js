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
import { Select } from "antd";

import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { CButton, CTextarea, CLabel, CSelect, CRow, CCol } from "@coreui/react";

import API_CONNECT from "../../../functions/callAPI";
import Pagination from "@material-ui/lab/Pagination";
import "moment-timezone";
import Constants from "../../../contants/contants";
import TextFieldGroup from "../../Common/TextFieldGroup";
import axios from "axios";
import md5 from "md5";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { Tag, Divider } from "antd";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";

import Swal from "sweetalert2";
const { Option } = Select;

const dateFormat = "YYYY-MM-DD";
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");

class EndUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_id: JSON.parse(localStorage.getItem("user")).company_id
        ? JSON.parse(localStorage.getItem("user")).company_id
        : null,
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
      typeBanner: "1",
    };
  }
  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value,
    });
  };
  onChangeImage(e) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ image_link: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({ image: e.target.result, image_show: e.target.result });
    };
  }
  async componentDidMount() {
    if (this.state.type !== "0") {
      window.location.href = "/";
    }

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
  async getData() {
    const { company_id } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_BANNER_SALES;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          company_id,
          status: null,
          type: this.state.typeBanner,
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
      name: "",
      title: "",
      description: "",
      status: "1",
      embedded: "",
      image: "",
      relCode: "",
      link: "",
      type: "1",
    });
  }
  openEditVoucher(item) {
    this.setState({
      actionVoucher: "edit",
      modalVoucher: true,
      idCurrentUpdate: item._id,
      name: item.name,
      title: item.title,
      description: item.description,
      status: item.status,
      embedded: item.embedded,
      link: item.link,
      image: item.image,
      image_link: item.image,
      image_show: item.image,
      type: "1",

      relCode: item.relcode,
    });
  }
  async update() {
    const {
      name,
      title,
      idCurrentUpdate,
      description,
      status,
      embedded,
      image,
      link,
      relCode,
      company_id,
      image_link,
      type,
    } = this.state;

    const form3 = new FormData();
    form3.append("image", image_link);

    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form3, "", "POST").then(
      (res) => {
        console.log(res);
      }
    );
    var img = "";
    if (image_link) {
      if (image_link.name) {
        img = `${Constants.BASE_URL}image_brand/${image_link.name}`;
      } else {
        img = image;
      }
    }
    console.log(img);
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.UPDATE_BANNER_SALES;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        id: idCurrentUpdate,
        name: name,
        title: title,
        link: link,
        description: description,
        status: status,
        embedded: embedded,
        company_id,
        image: img,
        type,
        relcode: relCode,
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
    const {
      name,
      title,
      idCurrentUpdate,
      description,
      status,
      embedded,
      image,
      relCode,
      company_id,
      link,
      image_link,
      type,
    } = this.state;
    const form3 = new FormData();
    form3.append("image", image_link);

    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form3, "", "POST").then(
      (res) => {
        console.log(res);
      }
    );
    var img = "";
    if (image_link) {
      if (image_link.name) {
        img = `${Constants.BASE_URL}image_brand/${image_link.name}`;
      }
    }
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.ADD_BANNER_SALES;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        name: name,
        title: title,
        link: link,
        description: description,
        status: status,
        embedded: embedded,
        company_id,
        image: img,
        relcode: relCode,
        type: type,
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
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.DELETE_BANNER_SALES;

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

  render() {
    const {
      data,
      arrPagination,
      key,
      dataCampaign,
      phoneVoucher,
      nameVoucher,
      modalVoucher,
    } = this.state;
    const arrLevel = [
      {
        item: "1",
      },
      {
        item: "2",
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
                label="Tên Banner"
                value={this.state.name}
                // error={errors.title}
                onChange={(e) => this.setState({ name: e.target.value })}
                // rows="5"
              />
              <TextFieldGroup
                field="title"
                label="Tiêu đề"
                value={this.state.title}
                // error={errors.title}
                onChange={(e) => this.setState({ title: e.target.value })}
                // rows="5"
              />
              <TextFieldGroup
                field="type"
                label="Loại Banner"
                value={this.state.type}
                // error={errors.title}
                // onChange={(e) => this.setState({ type: e.target.value })}
                // rows="5"
              />
              <div className="mt-3"></div>
              <label>Tên chiến dịch (*)</label>
              <Select
                defaultValue={dataCampaign ? dataCampaign[0].name : ""}
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
                        return <Option value={item.name}>{item.name}</Option>;
                      }
                    })
                  : null}
              </Select>
              <div className="mt-3"></div>
              <TextFieldGroup
                field="image"
                label="Hình ảnh (280 x 86)px"
                type={"file"}
                className="mt-5"
                onChange={(e) => {
                  this.onChangeImage(e);
                }}
                onClick={(e) => {
                  e.target.value = null;
                  this.setState({ image_show: "" });
                }}
              />
              <div class="text-center">
                <img
                  alt=""
                  style={{ maxWidth: "170px", marginBottom: 20 }}
                  height="auto"
                  src={this.state.image}
                />
              </div>
              <TextFieldGroup
                field="link"
                label="Link tham chiếu"
                value={this.state.link}
                // error={errors.title}
                onChange={(e) => this.setState({ link: e.target.value })}
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
              <TextFieldGroup
                field="embedded"
                label="Mã nhúng"
                value={this.state.embedded}
                // error={errors.title}
                onChange={(e) => this.setState({ embedded: e.target.value })}
                // rows="5"
              />

              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Trạng thái:</CLabel>
                {arrLevel != undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevel(e);
                    }}
                    custom
                    size="md"
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
                            {item.item == "1" ? "Hoạt động" : "Không hoạt động"}
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
                    Banner Ưu đãi Mới nhất
                  </i>
                  <div className="flex-end ">
                    <CButton
                      color="info"
                      size="md"
                      className="btn-main"
                      onClick={() => this.openVoucher()}
                    >
                      <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Thêm mới</p>
                    </CButton>
                  </div>
                </CardHeader>
                <CardBody className="table__overflow">
              <h5>Tổng số: {data?.length}</h5>

                  <table
                    ble
                    className="table mt-3 table-hover table-outline mb-0 d-none d-sm-table table_dash"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên</th>

                        <th className="text-center">Tiêu đề</th>

                        <th className="text-center">Hình ảnh</th>
                        <th className="text-center">Mô tả</th>

                        <th className="text-center">Link tham chiếu</th>

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

                                <td className="text-center">{item.title}</td>
                                <td
                                  className="text-center"
                                  style={{ maxWidth: "230px" }}
                                >
                                  <img
                                    style={{ maxWidth: "230px" }}
                                    alt=""
                                    src={item.image}
                                  />
                                </td>

                                <td className="text-center">
                                  {item.description}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ maxWidth: "140px" }}
                                >
                                  <a target="_blank" href={item.link}>
                                    {item.link}
                                  </a>
                                </td>

                                <td className="text-center">
                                  <Tag
                                    className="ant-tag"
                                    color={
                                      item.status === "1" ? "#87d068" : "#f50"
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
