import { CButton, CCol, CRow, CSelect } from "@coreui/react";
import Pagination from "@material-ui/lab/Pagination";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { DatePicker, Select, Tag } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import "moment-timezone";
import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import capitalizeFirstLetter from "src/utils/capitalizeFirstLetter";
import DotLoading from "src/views/components/DotLoading";
import Swal from "sweetalert2";
import Constants from "../../../contants/contants";

const { Option } = Select;
const dateFormat = "DD-MM-YYYY";
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");

class ManageSales extends Component {
  state = {
    company_id: JSON.parse(localStorage.getItem("user")).company_id
      ? JSON.parse(localStorage.getItem("user")).company_id
      : null,
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
    dataCompany: [],
    quantity: "0",
  };

  async componentDidMount() {
    this.getData();
    this.getDataCompany();
    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url === window.location.hash) {
        if (arr[i].isHidden === true) {
          window.location.href = "#/";
        }
      }
    }
  }

  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value,
    });
  };

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

  pagination(dataApi) {
    console.log(dataApi);

    var i,
      j,
      temparray,
      chunk = 8;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }

    if (arrTotal.length === 0) {
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

    if (arrTotal.length === 0) {
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

  async getDataVoucher(id) {
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_DETAIL_CAMPAIGN_EVOUCHER;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          id: id,
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
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.COLLABORATOR_GET;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
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
    const { email, phone, username } = this.state;

    if (
      email === null ||
      email === "" ||
      phone === null ||
      phone === "" ||
      username === null ||
      username === ""
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

    if (res.status === 200) {
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
      from: new Date().toLocaleDateString(),
      saleEndDate: new Date().toLocaleDateString(),
      quantity: "0",
      to: new Date().toLocaleDateString(),
      description: "",
      idCompany: "",
      status: "1",
      nameCompanyChoose: "",
    });
  }

  openEditVoucher(item) {
    this.state.dataCompany.forEach((name) => {
      if (name._id === item.company_id) {
        this.setState({
          nameCompanyChoose: name.Name,
          idCompany: item._id,
        });
        return;
      }
    });
    console.log(this.state.nameCompanyChoose);
    this.setState({
      actionVoucher: "edit",
      modalVoucher: true,
      idCurrentUpdate: item._id,
      quantity: item.quatinity,
      name: item.name,
      saleEndDate: new Date(item.saleEndDate).toLocaleDateString(),
      from: new Date(item.from).toLocaleDateString(),
      to: new Date(item.to).toLocaleDateString(),
      description: item.description,
      status: item.status,
    });
  }

  // async update() {
  //   const {
  //     name,
  //     from,
  //     to,
  //     description,
  //     idCompany,
  //     status,
  //     saleEndDate,
  //     idCurrentUpdate,
  //     quantity,
  //   } = this.state;

  //   var baseUrlapi = Constants.BASE_URL;
  //   let baseUrlCallApi = Constants.UPDATE_CAMPAIGN;

  //   let url = baseUrlapi + baseUrlCallApi;
  //   await axios
  //     .post(url, {
  //       quantity: quantity,
  //       id: idCurrentUpdate,
  //       name,
  //       company_id: idCompany,
  //       saleEndDate,
  //       from,
  //       to,
  //       description,
  //       status,
  //     })
  //     .then((res) => {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Cập nhật hoàn tất",
  //         showConfirmButton: false,
  //         timer: 700,
  //       });
  //       this.setState({
  //         modalVoucher: false,
  //       });
  //       this.getData();
  //     });
  // }

  // async add() {
  //   const {
  //     name,
  //     from,
  //     to,
  //     description,
  //     saleEndDate,
  //     status,
  //     idCompany,
  //     quantity,
  //   } = this.state;
  //   var baseUrlapi = Constants.BASE_URL;
  //   let baseUrlCallApi = Constants.ADD_CAMPAIGN;
  //   let url = baseUrlapi + baseUrlCallApi;

  //   await axios
  //     .post(url, {
  //       quantity: quantity,
  //       company_id: idCompany,
  //       name,
  //       saleEndDate,
  //       from,
  //       to,
  //       description,
  //       status,
  //       create_by: "1",
  //     })
  //     .then((res) => {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Thêm thành công",
  //         showConfirmButton: false,
  //         timer: 700,
  //       });
  //       this.setState({
  //         modalVoucher: false,
  //       });
  //       this.getData();
  //     });
  // }

  // async remove(item) {
  //   let baseUrlCallApi = Constants.DELETE_CAMPAIGN;

  //   var baseUrlapi = Constants.BASE_URL;
  //   let url = baseUrlapi + baseUrlCallApi;
  //   await axios
  //     .post(url, {
  //       id: item._id,
  //     })
  //     .then((res) => {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Xóa thành công",
  //         showConfirmButton: false,
  //         timer: 700,
  //       });
  //       this.getData();
  //     });
  // }

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
      saleEndDate,
      quantity,
      description,
      status,
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
        saleEndDate,
        quantity,
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
      saleEndDate,
      quantity,
      description,
      status,
      company_id_search,
      relCode,
    } = this.state;
    let baseUrlCallApi = Constants.ADD_VOUCHER;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    console.log(saleEndDate);
    await axios
      .post(url, {
        code: codeVoucher,
        relCode: relCode,
        quantity,
        content: description,
        saleEndDate,
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
        this.setState({
          modalVoucherEditing2: false,
        });
        this.getDataVoucher(this.state.company_id_search);
      });
  }

  async openPopupVoucher(item) {
    await this.getDataVoucher(item._id);

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

  checkStatusSalesColor = (status) => {
    const statusColorMap = {
      A: "#2eb85c",
      0: "#87d068",
      1: "#dc0e04",
    };

    return statusColorMap[status] || "#FF0004";
  };

  checkStatusSalesContent = (status) => {
    const statusContentMap = {
      A: "Actived",
      0: "Deactived",
      1: "Locked",
    };

    return statusContentMap[status] || "Chưa xác nhận";
  };

  renderHeaderTable = () => {
    return (
      <>
        <tr className="header__table--span">
          <th className="text-center">#</th>
          <th colspan="4" className="text-center">
            Thông tin Nhóm
          </th>
          <th colspan="5" className="text-center">
            Thông tin Doanh Số
          </th>
        </tr>
        <tr className="header__table--bottom">
          <th className="text-center ">STT.</th>
          <th className="text-center border-left">Tên Sales</th>
          <th className="text-center">SĐT</th>
          <th className="text-center">Thuộc nhóm</th>
          <th className="text-center">Tên Nhóm</th>
          <th className="text-center border-left">Tháng Báo Cáo</th>
          <th className="text-center">Số Evoucher/Tháng</th>
          <th className="text-center">Số Khách Checkin/Tháng</th>
          <th className="text-center">Tỷ lệ Khách Checkin</th>
          <th className="text-center"></th>
          <th className="text-center border-left">Ghi chú</th>
          <th className="text-center">Người tạo</th>
          <th className="text-center">Ngày tạo</th>
        </tr>
      </>
    );
  };

  renderCollaboratorList = (collaboratorList) => {
    if (!collaboratorList.length) {
      return (
        <td colSpan="13" className="text-center">
          <h5>Không tìm thấy thông tin Cộng tác viên!!!</h5>
        </td>
      );
    }

    return collaboratorList.map((collaborator, idx) => (
      <tr key={idx}>
        <td className="text-center">{idx + 1}</td>
        <td className="text-center border-left font-weight-bold">
          {capitalizeFirstLetter(collaborator?.name)}
        </td>
        <td className="text-center">{collaborator?.phone}</td>
        <td className="text-center">{collaborator?.email}</td>
        <td className="text-center">{collaborator?.address}</td>

        <td className="text-center">
          <Tag
            className="ant-tag"
            color={() => this.checkStatusSalesColor(collaborator?.status)}
          >
            {() => this.checkStatusSalesContent(collaborator?.status)}
          </Tag>
        </td>
        <td className="text-center">{collaborator?.group}</td>
        <td className="text-center" style={{ minWidth: "230px" }}>
          <div className="flex">
            <Link to={"/detail-collaborators/" + collaborator?._id}>
              <CButton
                shape="rounded-pill"
                variant="outline"
                color="info"
                style={styles.mgl5}
                size="md"
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
              onClick={(e) => this.openEditVoucher(collaborator)}
            >
              <FiEdit3 style={styles.icon} name="cilPencil" />
            </CButton>{" "}
            <CButton
              shape="rounded-pill"
              variant="ghost"
              color="danger"
              style={styles.mgl5}
              onClick={(e) => {
                this.remove(collaborator);
              }}
            >
              <BsTrash style={styles.icon} className="icon" name="cilTrash" />
            </CButton>
          </div>
        </td>
      </tr>
    ));
  };

  render() {
    const { data, arrPagination } = this.state;
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

    if (this.state.isLoading) return <DotLoading />;

    return (
      <div className="animated fadeIn">
        {" "}
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify title_header">
                  Danh sách cộng tác viên
                </i>

                <CRow>
                  <CCol md={3} className="mt">
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
                        placeholder="Số điện thoại"
                      />
                    </div>
                  </CCol>
                  <CCol md={3} className="mt">
                    <div className="">
                      <p className="title_filter">Trạng thái</p>
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
                      <p className="title_filter">Danh sách Sales</p>
                      <div style={{ width: "200px" }}>
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
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {this.state.dataSales
                            ? this.state.dataSales.map((item, i) => {
                                return (
                                  <Option value={item._id}>{item.Name}</Option>
                                );
                              })
                            : null}
                        </Select>
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

                <div className="flex-end">
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
                    onClick={() => this.openVoucher()}
                  >
                    <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                    <p style={{ margin: "auto 0" }}>Thêm mới</p>
                  </CButton>
                </div>
              </CardHeader>
              <CardBody className="table__overflow">
                <table
                  ble
                  className="mt-3 table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                >
                  <thead className="thead-light">
                    {this.renderHeaderTable()}
                  </thead>

                  <tbody>{this.renderCollaboratorList(data)}</tbody>
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
        {/* ------------------MODAL ADD/ EDIT COLLABORATOR------------------------- */}
        <Modal
          isOpen={this.state.modalVoucher}
          className={this.props.className}
        >
          <ModalHeader>
            {this.state.actionVoucher === "new" ? `Tạo mới` : `Cập nhật`}
          </ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <CButton
              color="primary"
              onClick={(e) => {
                this.state.actionVoucher === "new" ? this.add() : this.update();
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
        {/* ------------------END MODAL ADD/ EDIT COLLABORATOR------------------------- */}
        {/* ------------------MODAL ADD/ EDIT COLLABORATOR------------------------- */}
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
        {/* ------------------END MODAL ADD/ EDIT COLLABORATOR------------------------- */}
      </div>
    );
  }
}

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

export default ManageSales;
