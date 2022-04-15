import { CButton, CFormGroup, CInputCheckbox, CLabel } from "@coreui/react";
import { css } from "@emotion/react";
import Pagination from "@material-ui/lab/Pagination";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { Select } from "antd";
import axios from "axios";
import "moment-timezone";
import React, { Component } from "react";
import DotLoader from "react-spinners/DotLoader";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import API_CONNECT from "../../../functions/callAPI";
import Constants from "./../../../contants/contants";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import saleGroupApi from "src/apis/managerSaleGroupApi";
import InputAutoCompleteMemberList from "./InputAutoCompleteMemberList";
import InputAutoCompleteManager from "./InputAutoCompleteManager";
import Swal from "sweetalert2";
import { alertEvent } from "src/utils/alertEvent";

class User extends Component {
  state = {
    errorMessage: "",
    salesSelector: [],
    saleGroupList: [],
    data: [],
    key: "",
    keyRole: "",
    keyStatus: "",
    modalCom: false,
    dataApi: JSON.parse(localStorage.getItem("sales")) || [],
    action: "new",
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Company_Id: "",
    UserName: "",
    Password: "",
    Status: "",
    Title: "",
    saleIdsList: [],
    leadId: "",
    description: "",
    groupName: "",
    modalDelete: false,
    modalRole: false,
    arrPagination: [],
    indexPage: 0,
    dataCompany: [],
    isLoading: false,
    token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    userData: localStorage.getItem("user"),
    hidden: true,
    arrRoleSubAdmin: [],
    idChangeRole: "",
  };

  onGetAllSaleGroupList = async () => {
    this.setState({ isLoading: true });

    const res = await saleGroupApi.fetchAllSaleGroup();

    let saleGroupList = res.data.data;

    this.pagination(saleGroupList);
    this.setState({ saleGroupList });

    let active = 0;

    for (const saleGroupItem of saleGroupList) {
      if (saleGroupItem.Status === "Actived") {
        active += 1;
      }
    }

    this.setState({ isLoading: false, totalActive: active });
  };

  async componentDidMount() {
    this.onGetAllSaleGroupList();
    let arr = JSON.parse(localStorage.getItem("url"));

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url === window.location.hash) {
        if (arr[i].isHidden === true) {
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

    if (arrTotal.length === 0) {
      this.setState({
        hidden: false,
      });
    } else {
      this.setState({
        hidden: true,
      });
    }

    this.setState({
      arrPagination: arrTotal,
      data: arrTotal[this.state.indexPage],
    });
  }

  toggleModal(key) {
    if (key === "new") {
      this.setState({
        modalCom: !this.state.modalCom,
        action: key,
        groupName: "",
        description: "",
        saleIdsList: [],
        leadId: "",
      });
    }
  }

  handleOnChangValueInput(key, val) {
    this.setState({ [key]: val });
  }

  async onAddNewSaleGroup() {
    const { description, groupName, saleIdsList, leadId } = this.state;

    const saleGroup = {
      description,
      title: groupName,
      saleIds: saleIdsList,
      leadId,
    };

    try {
      const res = await saleGroupApi.addNewSaleGroup(saleGroup);
      if (res.status === 202) alertEvent("error", res.data.message);

      alertEvent("success", res.data.message);

      this.onGetAllSaleGroupList();
      this.setState({ modalCom: !this.state.modalCom });
    } catch (error) {
      alertEvent("error", error.message);
    }
  }

  async handleOpenModalUpdate(idSaleGroup) {
    const res = await saleGroupApi.getGroupById(idSaleGroup);
    const { title, description, leadId, saleIds } = res?.data?.data;
    console.log(res.data.data);

    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      groupName: title,
      leadId,
      saleIdsList: saleIds,
      description,
    });
  }

  // async onEditSaleGroup() {
  //   const { Title, SaleIds, LeadIds, Description, dataApi } = this.state;

  //   const idxItem = dataApi.findIndex((data) => data.Title === Title);

  //   const newDataApi = [...dataApi];
  //   newDataApi.splice(idxItem, 1);
  //   newDataApi.push({ Title, SaleIds, LeadIds, Description });

  //   this.setState({ dataApi: newDataApi });
  //   this.setState({ modalCom: !this.state.modalCom });

  //   localStorage.setItem("sales", JSON.stringify(newDataApi));

  //   const body = {
  //     Description,
  //     LeadIds: SaleIds,
  //     Title,
  //     SaleIds,
  //   };

  //   this.setState({ isLoading: true });
  //   const res = await API_CONNECT(
  //     Constants.UPDATE_SALE_GROUP,
  //     body,
  //     "",
  //     "POST"
  //   );

  //   if (res.is_success === true) {
  //     // this.getData();
  //     this.setState({ modalCom: !this.state.modalCom });
  //   } else {
  //     alert(res.message);
  //     this.setState({ isLoading: false });
  //   }
  // }

  openDelete = (item) => {
    this.setState({
      modalDelete: !this.state.modalDelete,
      delete: item,
    });
  };

  async delete() {
    this.setState({ isLoading: true });
    const res = await API_CONNECT(
      Constants.DELETE_SALE_GROUP,
      {
        id: this.state.delete["_id"],
      },
      "",
      "POST"
    );

    if (res.is_success === true) {
      this.onGetAllSaleGroupList();
      this.setState({ modalDelete: !this.state.modalDelete, delete: null });
    } else {
      alert(res.message);
      this.setState({ isLoading: false });
    }
  }

  toggle(action = "") {
    this.setState({
      modal: !this.state.modal,
      image: "",
      url: "",
      isActive: false,
      isLoading: false,
      errors: {},
      action,
      position: 1,
      data: [],
      updated: "",
    });
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  goSearch() {
    this.getUsers();
  }

  async onChangeRole(item) {
    let body = {
      user_id: item._id,
    };
    const res = await API_CONNECT(
      Constants.GET_ROLE_SUBADMIN,
      body,
      "",
      "POST"
    );
    this.setState({
      modalRole: !this.state.modalRole,
      arrRoleSubAdmin: res.data.sidebar_id,
      idChangeRole: item._id,
    });
  }

  renderTableHeader = () => {
    const headerList = [
      "STT.",
      "Tên nhóm",
      "Quản Lý Nhóm",
      "SĐT",
      "Email",
      "Ghi chú",
      "Số Evoucher/Tháng",
      "Số Khách Checkin/Tháng",
      "Tỷ lệ Khách Checkin",
      "Xem chi tiết",
      "Người tạo",
      "Ngày tạo",
    ];
    return (
      <thead className="thead-light">
        <tr className="header__table--span">
          <th className="text-center">#</th>
          <th colspan="6" className="text-center">
            Thông tin Nhóm
          </th>
          <th colspan="5" className="text-center">
            Thông tin Doanh Số
          </th>
          
        </tr>
        <tr className="header__table--bottom">
          {headerList.map((header, idx) => (
            <th
              className={`text-center ${
                (header === "Tên nhóm" ||
                  header === "Số Khách Checkin/Tháng") &&
                "border-left"
              }`}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  renderTableBody = () => {
    return (
      <tbody>
        {this.state.saleGroupList.length ? (
          this.state.saleGroupList.map((item, i) => {
            return (
              <tr key={i}>
                <td className="text-center">{i + 1}</td>
                <td className="text-center  border-left">
                  {item?.title || item?.description || (
                    <span className="text-secondary">Chưa có thông tin!!</span>
                  )}
                </td>
                
                <td className="text-center">
                  {item?.leadId || (
                    <span className="text-secondary">Chưa có thông tin!!</span>
                  )}
                </td>
                <td className="text-center">
                  {item?.phone || (
                    <span className="text-secondary">Chưa có thông tin!!</span>
                  )}
                </td>
                <td className="text-center">
                  {item?.email || (
                    <span className="text-secondary">Chưa có thông tin!!</span>
                  )}
                </td>
                <td className="text-center">
                  {item?.noted || (
                    <span className="text-secondary">Chưa có thông tin!!</span>
                  )}
                </td>
                
                <td className="text-center ">1000</td>
                <td className="text-center border-left">12</td>
                <td className="text-center ">12%</td>
                <td className="text-center">
                  {/* <CButton
                    outline
                    color="primary"
                    size="sm"
                    // onClick={(e) => {
                    //   this.openUpdate();
                    // }}
                  >
                    Chi tiết
                  </CButton> */}
                  <td className="text-center">
                    <CButton
                      outline
                      color="primary"
                      size="sm"
                      onClick={(e) => this.handleOpenModalUpdate(item?._id)}
                    >
                      Sửa
                    </CButton>{" "}
                    {/* <CButton
                      outline
                      color="danger"
                      size="sm"
                      // onClick={() => {
                      //   this.openDelete();
                      // }}
                    >
                      Xoá
                    </CButton>{" "} */}
                  </td>
                </td>
                <td className="text-center  border-left">Admin</td>
                <td className="text-center">
                  {new Date().toLocaleDateString("vi-VI")}
                </td>
              </tr>
            );
          })
        ) : (
          <td colSpan="9" hidden={this.state.hidden} className="text-center">
            Không tìm thấy dữ liệu
          </td>
        )}
      </tbody>
    );
  };

  render() {
    const { arrPagination, description, groupName, saleIdsList } = this.state;

    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <p style={styles.success}>{this.state.updated}</p>
              <p style={styles.danger}>{this.state.deleted}</p>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify title_header">
                    Thông tin Nhóm Sales
                  </i>
                </CardHeader>
                <CardBody className="table__overflow">
                  <div class="flex-center">
                    <CButton
                      color="info"
                      style={{
                        marginBottom: "10px",
                        marginRight: "10px",
                      }}
                      size="md"
                      className="flex-center"
                      onClick={(e) => this.toggleModal("new")}
                    >
                      <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Tạo nhóm</p>
                    </CButton>
                  </div>
                  <table
                    ble
                    className="table table-hover table-outline mb-0 d-none d-sm-table"
                  >
                    {this.renderTableHeader()}

                    {this.renderTableBody()}
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

          {/* modal add/ update sale group */}
          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>
              {this.state.action === "new"
                ? `Tạo nhóm sale`
                : `Cập nhật nhóm sales`}
            </ModalHeader>
            <ModalBody>
              <div className="text-center error_msg">
                {this.state.errorMessage !== ""
                  ? `${this.state.errorMessage} !!!`
                  : null}
              </div>
              <Typography
                variant="subtitle1"
                component="h2"
                style={{ margin: "0.6rem 0 0.6rem 0" }}
              >
                Tên Nhóm <span style={{ color: "red" }}>(*)</span>:
              </Typography>
              <TextField
                value={groupName}
                id="outlined-basic"
                label="Nhập tên nhóm"
                variant="outlined"
                fullWidth
                size="small"
                onChange={(e) =>
                  this.handleOnChangValueInput("groupName", e.target.value)
                }
              />

              {this.state.action !== "new" && (
                <>
                  <Typography
                    variant="subtitle1"
                    component="h2"
                    style={{ margin: "1.2rem 0 0.6rem 0" }}
                  >
                    Người quản lý nhóm <span style={{ color: "red" }}>(*)</span>
                    :
                  </Typography>
                  <InputAutoCompleteManager
                    onGetManager={(leadId) =>
                      this.handleOnChangValueInput("leadId", leadId)
                    }
                  />
                </>
              )}

              <Typography
                variant="subtitle1"
                component="h2"
                style={{ margin: "1.2rem 0 0.6rem 0" }}
              >
                Thành viên trong nhóm <span style={{ color: "red" }}>(*)</span>:
              </Typography>

              <InputAutoCompleteMemberList
                memberList={saleIdsList}
                onGetSaleIdList={(saleIdsList) =>
                  this.handleOnChangValueInput("saleIdsList", saleIdsList)
                }
              />

              <Typography
                variant="subtitle1"
                component="h2"
                style={{ margin: "0.6rem 0 0.6rem 0" }}
              >
                Mô tả:
              </Typography>
              <TextField
                value={description}
                id="outlined-basic"
                label="Nhập tên nhóm sales"
                variant="outlined"
                fullWidth
                size="small"
                onChange={(e) =>
                  this.handleOnChangValueInput("description", e.target.value)
                }
              />
            </ModalBody>

            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.action === "new"
                    ? this.onAddNewSaleGroup()
                    : this.updateUsers();
                }}
                disabled={this.state.isLoading}
              >
                {this.state.action === "new" ? `Tạo nhóm` : `Cập nhật nhóm`}
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) => this.toggleModal("new")}
              >
                Huỷ bỏ
              </CButton>
            </ModalFooter>
          </Modal>
          {/* end -- modal add/ update sale group */}

          {/* modal delete sale group */}
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
              <label htmlFor="tag">{`Bạn có chắc chắn xóa?`}</label>
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
          {/* end -- modal delete sale group */}
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

export default User;
