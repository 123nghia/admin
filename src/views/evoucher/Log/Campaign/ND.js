import { CButton, CCol, CLabel, CRow, CSelect, CTextarea } from "@coreui/react";
import { css } from "@emotion/react";
import Pagination from "@material-ui/lab/Pagination";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { DatePicker, Select, Tag } from "antd";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";
import axios from "axios";
import "moment-timezone";
import React, { Component } from "react";
import DotLoader from "react-spinners/DotLoader";
import API_CONNECT from "../../../../../src/functions/callAPI";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import Swal from "sweetalert2";
import Constants from "../../../../contants/contants";
import TextFieldGroup from "../../../Common/TextFieldGroup";
import { AiOutlineReload } from "react-icons/ai";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Chip from "@mui/material/Chip";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const { Option } = Select;
const dateFormat = "DD-MM-YYYY";
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");

class SMSlog extends Component {
  state = {
    data: [],
    totalActive: 0,
    dataApi: [],
    hidden: false,
    action: "new",
    delete: null,
    arrPagination: [],
    indexPage: 0,
    isLoading: false,
    idCurrentUpdate: null,
    th: [
      "STT",
      "Tên",
      "Số điện thoại",
      "Slug",
      "Địa chỉ",
      "Mã Voucher",
      "Trạng thái",
      "Thay đổi trạng thái",
      "Quận/Huyện",
      "Body Request",
      "",
    ],
  };
  async componentDidMount() {
    await this.getData();
  }

  pagination(dataApi) {
    var i,
      j,
      temparray,
      chunk = 50;
    var arrTotal = [];
    if (dataApi.length > 0) {
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
  }

  onChange(key, val) {
    this.setState({ [key]: val });
  }

  onSearch() {
    this.onGetCampaignList(this.state.key);
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
  getData = async () => {
    let baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_NDLOG;
    let url = baseUrlapi + baseUrlCallApi;
    await axios.get(url).then(async (res) => {
      let val = res.data.data;
      this.pagination(val);
      this.setState({ dataApi: val });

      let active = 0;
      val.map((val) => {
        if (val.Status == "Actived") {
          active = active + 1;
        }
      });
      this.setState({ isLoading: false, totalActive: active , totalRecord : res.data.totalRecord});
    });
  };

  openAdd = () => {
    this.setState({
      modal: true,
      action: "new",
    });
  };

  openUpdate = (item) => {
    this.setState({
      modal: true,
      action: "edit",
    });
  };

  async update() {
    let baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.UPDATE_PARTNER;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        id: this.state.idEditPartner,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        slug: this.state.slug,
        introduction: this.state.introduction,
        brand: this.state.branch,
        password: this.state.password,
        userName: this.state.userName,
      })
      .then(async (res) => {
        Swal.fire({
          icon: "success",
          title: "Cập nhật hoàn tất",
          showConfirmButton: false,
          timer: 1200,
        });
        this.setState({
          modal: false,
        });
        await this.getData();
      });
  }

  async add() {
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.ADD_PARTNER;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        slug: this.state.slug,
        introduction: this.state.introduction,
        brand: this.state.branch,
        password: this.state.password,
        userName: this.state.userName,
      })
      .then(async (res) => {
        Swal.fire({
          icon: "success",
          title: "Thêm thành công",
          showConfirmButton: false,
          timer: 1200,
        });
        this.setState({
          modal: false,
        });
        await this.getData();
      });
  }
  async delete(item) {
    let baseUrlCallApi = Constants.DELETE_NDLOG;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .delete(url, {
        id: item._id,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Xóa thành công",
          showConfirmButton: false,
          timer: 1200,
        });
        this.getData();
      });
  }
  async viewDetail(item) {
    let dataDetail = "";
    let baseUrlCallApi = Constants.GET_DETAIL_NDLOG;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          id: item._id,
        },
      })
      .then((res) => {
        dataDetail = res.data.data.bodyRequest;
      });

    let innerModalDetail = (
      <Modal isOpen={true} className={this.props.className}>
        <ModalHeader>Thông tin Body Request</ModalHeader>
        <ModalBody className="info_voucher">
          <p>
            Tên người dùng: <span>{dataDetail.FullName}</span>
          </p>
          <p>
            Số điện thoại: <span>{dataDetail.FullName}</span>
          </p>
          <p>
            Địa chỉ: <span>{dataDetail.Address}</span>
          </p>
          <p>
            Dịch vụ - text: <span>{dataDetail.service_text}</span>
          </p>
          <p>
            GuideID: <span>{item.guildId}</span>
          </p>
        </ModalBody>
        <ModalFooter>
          <CButton
            color="secondary"
            onClick={(e) => this.setState({ modalDetail: null })}
          >
            Đóng
          </CButton>
        </ModalFooter>
      </Modal>
    );
    this.setState({
      modalDetail: innerModalDetail,
    });
  }
  async changeStatus(id) {
    let baseUrlCallApi = Constants.CHANGE_STATUS;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          id: id,
        },
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Cập nhật trạng thái thành công",
          showConfirmButton: false,
          timer: 1200,
        });
        this.getData();
      });
  }
  render() {
    const { data, arrPagination } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          {this.state.modalDetail}
          <Modal isOpen={this.state.modal} className={this.props.className}>
            <ModalHeader>
              {this.state.action === "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="userName"
                label="Tên Đăng nhập"
                value={this.state.userName}
                // error={errors.title}
                onChange={(e) => this.setState({ userName: e.target.value })}
                // rows="5"
              />
              <TextFieldGroup
                field="password"
                label="Password"
                value={this.state.password}
                // error={errors.title}
                onChange={(e) => this.setState({ password: e.target.value })}
                // rows="5"
              />
              <TextFieldGroup
                field="name"
                label="Tên đối tác"
                value={this.state.name}
                // error={errors.title}
                onChange={(e) => this.setState({ name: e.target.value })}
                // rows="5"
              />
              <TextFieldGroup
                field="email"
                label="Email"
                value={this.state.email}
                // error={errors.title}
                onChange={(e) => this.setState({ email: e.target.value })}
                // rows="5"
              />

              <TextFieldGroup
                field="phone"
                label="Số điện thoại"
                value={this.state.phone}
                // error={errors.title}
                onChange={(e) => this.setState({ phone: e.target.value })}
                // rows="5"
              />
              <TextFieldGroup
                field="slug"
                label="Slug"
                value={this.state.slug}
                // error={errors.title}
                onChange={(e) => this.setState({ slug: e.target.value })}
                // rows="5"
              />
              <TextFieldGroup
                field="introduction"
                label="Giới thiệu"
                value={this.state.introduction}
                // error={errors.title}
                onChange={(e) =>
                  this.setState({ introduction: e.target.value })
                }
                // rows="5"
              />
              <TextFieldGroup
                field="branch"
                label="Thương hiệu"
                value={this.state.branch}
                // error={errors.title}
                onChange={(e) => this.setState({ branch: e.target.value })}
                // rows="5"
              />
              <div className="mt-3"></div>
              <TextFieldGroup
                field="imageLogo"
                label="Logo"
                type={"file"}
                className="mt-5"
                onChange={(e) => {
                  this.onChangeImage(
                    e,
                    "imageLogo",
                    "imageLogo_link",
                    "imageLogo_show"
                  );
                }}
                onClick={(e) => {
                  e.target.value = null;
                  this.setState({ imageLogo: "" });
                }}
              />
              <div class="text-center">
                <img
                  alt=""
                  style={{ maxWidth: "150px", marginBottom: 10 }}
                  height="auto"
                  src={this.state.imageLogo}
                />
              </div>
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
                onClick={(e) => this.setState({ modal: !this.state.modal })}
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
                    NGỌC DUNG Log
                  </i>
                  <CRow>
                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">Tên người dùng</p>
                        <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({ number: e.target.value });
                          }}
                          name="number"
                          value={this.state.number}
                          placeholder=""
                        />
                      </div>
                    </CCol>
                    <CCol md={3} className="mt">
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
                          placeholder=""
                        />
                      </div>
                    </CCol>
                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">Mã Voucher</p>
                        <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({ number: e.target.value });
                          }}
                          name="number"
                          value={this.state.number}
                          placeholder=""
                        />
                      </div>
                    </CCol>

                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">Tỉnh/Thành</p>
                        <div style={{ width: "200px" }}>
                          <Select
                            className="select_seo"
                            showSearch
                            placeholder=""
                            optionFilterProp="children"
                            onChange={(value) =>
                              this.setState({
                                idDataSales: value,
                              })
                            }
                            onSearch={this.onSearchSelect}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {this.state.dataSales
                              ? this.state.dataSales.map((item, i) => {
                                  return (
                                    <Option value={item._id}>
                                      {item.Name}
                                    </Option>
                                  );
                                })
                              : null}
                          </Select>
                        </div>
                      </div>
                    </CCol>
                  </CRow>

                  <div className="flex-center-space" style={{margin : '10px 0 0 0'}}>
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
                      style={{ marginRight: "10px" }}
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
                      size="md"
                      className="btn-main"
                      onClick={() => this.openAdd()}
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
                    className="mt-3 table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                  >
                    <thead className="thead-light">
                      <tr>
                        {this.state.th.map((item, i) => {
                          return (
                            <th key={i} className="text-center">
                              {item}
                            </th>
                          );
                        })}
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
                      {data !== undefined
                        ? data.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td className="text-center">
                                  {item.bodyRequest.FullName}
                                </td>
                                <td className="text-center">
                                  {item.phoneNumber}
                                </td>
                                <td className="text-center">{item.slug}</td>
                                <td className="text-center">
                                  {item.bodyRequest.Address}
                                </td>
                                <td className="text-center">
                                  <Chip
                                    label={item.voucherCode}
                                    variant="outlined"
                                    sx={{
                                      backgroundColor: "#9fcfde",
                                      border: "none",
                                    }}
                                  />
                                </td>
                                <td className="text-center">
                                  <Chip
                                    label={
                                      item.status === "Send"
                                        ? "Đã gửi"
                                        : "Chưa gửi"
                                    }
                                    icon={
                                      item?.status === "Send" ? (
                                        <CheckCircleOutlineIcon
                                          style={{
                                            width: "20px",
                                            height: "20px",
                                            color: "success",
                                          }}
                                        />
                                      ) : (
                                        <HighlightOffIcon
                                          style={{
                                            width: "20px",
                                            height: "20px",
                                            color: "red",
                                          }}
                                        />
                                      )
                                    }
                                    color={
                                      item?.status === "Send"
                                        ? "success"
                                        : "red"
                                    }
                                  />
                                </td>
                                <td className="text-center">
                                  <CButton
                                    shape="rounded-pill"
                                    style={{
                                      marginRight: "10px",
                                      display: "inline-block",
                                      backgroundColor: "#0385f4ab",
                                      color: "#fff",
                                      fontWeight: "600",
                                    }}
                                    size="md"
                                    className="flex-a-center"
                                    onClick={() => this.changeStatus(item._id)}
                                  >
                                    <AiOutlineReload />
                                  </CButton>
                                </td>
                                <td className="text-center">
                                    {/* Tp.Hồ Chí Minh */}
                                </td>
                                <td className="text-center">
                                  <div className="flex-center">
                                    <CButton
                                      shape="rounded-pill"
                                      variant="outline"
                                      color="info"
                                      style={{
                                        marginRight: "10px",
                                        minWidth: "90px",
                                      }}
                                      size="md"
                                      className="flex-a-center "
                                      onClick={() => this.viewDetail(item)}
                                    >
                                      <BsSearch
                                        style={{ margin: "auto 6px auto 0" }}
                                      />
                                      <p style={{ margin: "auto 0 auto 0" }}>
                                        Chi tiết
                                      </p>
                                    </CButton>
                                  </div>
                                </td>
                               
                                <td className="text-center">
                                  <CButton
                                    shape="rounded-pill"
                                    variant="ghost"
                                    color="danger"
                                    style={styles.mgl5}
                                    onClick={(e) => {
                                      this.delete(item);
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
  icon: {
    fontSize: "16px",
    height: "20px",
    width: "20px",
  },
  searchInput: {
    width: "200px",
    display: "inline-block",
  },
};

export default SMSlog;
