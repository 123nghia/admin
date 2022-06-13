import Pagination from "@material-ui/lab/Pagination";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";

import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import "antd/dist/antd.css";
import axios from "axios";
import "moment-timezone";
import { CButton, CCol, CRow } from "@coreui/react";
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import {
  Card,
  Row,
  Input,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import collaboratorsApi from "src/apis/manageCollaboratorsApi";
import capitalizeFirstLetter from "src/utils/capitalizeFirstLetter";
import DotLoading from "src/views/components/DotLoading";
import IOSSwitch from "src/views/components/SwitchOption";
import Swal from "sweetalert2";
import Constants from "../../../contants/contants";
import { BiExport } from "react-icons/bi";

let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");

class ManageSales extends Component {
  state = {
    modalSelect: false,
    data: [],
    actionVoucherEditing: "new",
    modalVoucherEditing: false,
    key: "",
    totalActive: 0,
    modalCom: false,
    updated: "",
    dataApi: [],
    hidden: false,
    action: "new",
    modalVoucher: false,
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

    username: "",
    isManager: false,
    email: "",
    relCode: null,
    phone: "",
    name: "",
    address: "",
    password: "",
    introduction: "",
    showPassword: false,
    saleGroupList: [],
    dataCampaign : [],
  };
  async remove(item){
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.COLLABORATOR_DELETE;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .delete(url, {
        data : {
          id : item._id
        }
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
        this.setState({ isLoading: false, totalActive: active, total : res.data.total  });
      });
  }

  async componentDidMount() {
    this.getData();
    this.getCampaign();
    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url === window.location.hash) {
        if (arr[i].isHidden === true) {
          window.location.href = "#/";
        }
      }
    }
  }

  handleOnChangeValue(e, key) {
    this.setState({ [key]: e.target.value });
  }

  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value,
    });
  };

  onSearch() {
    this.getData(this.state.key);
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

    if (arrTotal.length === 0) {
      this.setState({
        hidden: false,
      });
    } else {
      this.setState({
        hidden: true,
      });
    }

    this.setState({ arrPagination: arrTotal, data: arrTotal[this.state.indexPage] });
  }

  handleShowAddNewSales() {
    this.setState({
      actionVoucher: "new",
      modalVoucher: true,
      username: "",
      isManager: false,
      email: "",
      relCode: null,
      phone: "",
      name: "",
      address: "",
      password: "",
      introduction: "",
      showPassword: false,
      saleGroup: "",
    });
  }

  onAddNewSales() {
    const {
      username,
      isManager,
      email,
      relCode,
      phone,
      name,
      address,
      password,
      introduction,
    } = this.state;
    let company_id_output = null;
    if(this.state.company_id){
      company_id_output = this.state.company_id;
    };
    const collaboratorInfo = {
      username,
      isManager,
      email,
      relCode,
      phone,
      name,
      address,
      password,
      introduction,
      saleGroup: null,
      tikitechCreate: true,
      company_id : company_id_output 
    };
    
    if(!this.isVietnamesePhoneNumber(phone)){
      if(phone.length > 6){
        alert('Vui lòng nhập số điện thoại hợp lệ');
        return;
      }
    }
    collaboratorsApi
      .addNewCollaborator(collaboratorInfo)
      .then((res) => {
        if (res.status !== 200) {
          Swal.fire({
            icon: "error",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1000,
          });
          return;
        }
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1000,
        });
        this.setState({
          modalVoucher: false,
        });
        this.getData();
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: err.data.message,
          showConfirmButton: false,
          timer: 1000,
        })
      );
  }

  handleShowEditCollaborator({
    username,
    email,
    relCode,
    phone,
    name,
    address,
    password,
    introduction,
    isManager,
  }) {
    this.setState({
      actionVoucher: "edit",
      modalVoucher: true,
      username,
      isManager,
      email,
      relCode,
      phone,
      name,
      address,
      password,
      introduction,
    });
  }

  // async onUpdateCollaborator() {
  //   const {
  //     username,
  //     isManager,
  //     email,
  //     relCode,
  //     phone,
  //     name,
  //     address,
  //     password,
  //     introduction,
  //   } = this.state;

  //   const data = {
  //     email: email,
  //     phone: phone,
  //     username: username,
  //     id: this.state.id,
  //   };

  //   this.setState({ isLoading: true });
  //   const res = await axios({
  //     baseURL: Constants.BASE_URL,
  //     url: Constants.UPDATE_END_USER,
  //     method: "POST",
  //     data,
  //   });

  //   if (res.status === 200) {
  //     this.getData();

  //     this.setState({ modalCom: !this.state.modalCom });
  //   } else {
  //     alert("Cập nhật thất bại");
  //     this.setState({ isLoading: false });
  //   }
  // }

  renderHeaderTable = () => {
    return (
      <>
        <tr className="header__table--span">
          <th className="text-center"></th>
          <th colspan="2" className="text-center">
            Thông tin Nhóm
          </th>
          <th colspan="3" className="text-center">
            Thông tin Doanh Số
          </th>
          <th className="text-center" colspan="3"></th>
        </tr>
        <tr className="header__table--bottom">
          <th className="text-center ">STT.</th>
          <th className="text-center border-left">Tên Sales</th>
          <th className="text-center">SĐT</th>
          <th className="text-center border-left">Số Evoucher/Tháng</th>
          <th className="text-center">Số Khách Checkin/Tháng</th>
          <th className="text-center">Tỷ lệ Khách Checkin</th>
          <th className="text-center border-left"></th>
       
          <th className="text-center">Người tạo</th>
          <th className="text-center">Ngày tạo</th>
        </tr>
      </>
    );
  };

  renderCollaboratorList = (collaboratorList) => {
    if (!collaboratorList) {
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
          {capitalizeFirstLetter(collaborator?.name || collaborator?.username)}
        </td>
        <td className="text-center">{collaborator?.phone}</td>
        
        <td className="text-center border-left">Chưa có thông tin</td>
        <td className="text-center">Chưa có thông tin</td>
        <td className="text-center">Chưa có thông tin</td>

        <td className="text-center border-left">
          <div className="flex" style={{minWidth: '220px'}}>
            <CButton
              shape="rounded-pill"
              variant="outline"
              color="info"
              style={styles.mgl5}
              size="md"
              onClick={(e) => this.openSelectExport(collaborator)}
            >
              <BiExport style={styles.icon} name="cilPencil" className="mr-1" />
              Export
            </CButton>
            {/* <Link to={`/detail-collaborators/${collaborator?._id}`}>
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
            </Link> */}
            <CButton
              shape="rounded-pill"
              variant="ghost"
              color="info"
              style={styles.mgl5}
              size="md"
              onClick={(e) => this.handleShowEditCollaborator(collaborator)}
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
    
        <td className="text-center">{collaborator?.introduction}</td>
        <td className="text-center">
          {collaborator?.create_date || new Date().toLocaleDateString("vi-VI")}
        </td>
      </tr>
    ));
  };

  handleGetSaleGroup = (saleGroup) => {
    saleGroup && this.setState({ saleGroup: saleGroup });
  };
  openSelectExport = (collaborator) => {
    alert("Tính năng chưa hỗ trợ"); return;
    this.setState({
      modalSelect: true,
    });
  };
  async getCampaign(key) {
    const { company_id } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_ALL_CAMPAIGN_VER2;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          company_id: this.state.company_id,
        },
      })
      .then((res) => {
        let val = res.data.data;
        this.setState({ dataCampaign: val },()=>{console.log(this.state.dataCampaign)});
      
      });
  }
  async ExportsFileExcel() {
    alert("Tính năng chưa hỗ trợ"); return;

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
  isVietnamesePhoneNumber(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
  }
  render() {
    const {
      data,
      arrPagination,
      isLoading,
      modalVoucher,
      actionVoucher,
      username,
      isManager,
      email,
      phone,
      address,
      password,
      introduction,
      showPassword,
      name,
      saleGroupList,
    } = this.state;

    if (isLoading) return <DotLoading />;

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
                      <p className="title_filter">Tên sales</p>
                      <Input
                        style={styles.searchInput}
                        name="number"
                        placeholder=""
                      />
                    </div>
                  </CCol>
                  <CCol md={3} className="mt">
                    <div className="">
                      <p className="title_filter">Số điện thoại</p>
                      <Input
                        style={styles.searchInput}
                        name="number"
                        placeholder=""
                      />
                    </div>
                  </CCol>
                  <CCol md={3} className="mt">
                    <div className="">
                      <p className="title_filter">Tên nhóm</p>
                      <Input
                        style={styles.searchInput}
                        name="number"
                        placeholder=""
                      />
                    </div>
                  </CCol>
                </CRow>
                <div className="flex-center-space" style={{margin: "10px 0 0 0"}}>
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
                    size="md"
                    className="btn-main"
                    onClick={() => this.handleShowAddNewSales()}
                    style={{ marginRight: "10px" }}
                  >
                    <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                    <p style={{ margin: "auto 0" }}>Thêm mới</p>
                  </CButton>
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
                </div>
                </div>
                
              </CardHeader>
              <CardBody className="table__overflow">
              <h5>Tổng số: {this.state.total ? this.state.total : ""}</h5>

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
        <Modal isOpen={modalVoucher} className={this.props.className}>
          <ModalHeader>
            {actionVoucher === "new"
              ? `Tạo mới Cộng tác viên`
              : `Cập nhật thông tin Cộng tác viên`}
          </ModalHeader>
          <ModalBody>
            <Typography
              variant="subtitle1"
              component="h2"
              style={{ margin: "1rem 0 0 0" }}
            >
              Họ tên
            </Typography>
            <TextField
              id="outlined-basic"
              label="Nhập thông tin họ tên sale"
              variant="outlined"
              fullWidth
              size="small"
              name="name"
              onChange={(e) => {
                this.handleOnChangeValue(e, "name");
              }}
              value={name}
            />
            <Typography
              variant="subtitle1"
              component="h2"
              style={{ margin: "1rem 0 0 0" }}
            >
              Email
            </Typography>
            <TextField
              id="outlined-basic"
              label="Nhập thông tin email sale"
              variant="outlined"
              fullWidth
              size="small"
              name="email"
              onChange={(e) => {
                this.handleOnChangeValue(e, "email");
              }}
              value={email}
            />
            <Typography
              variant="subtitle1"
              component="h2"
              style={{ margin: "1rem 0 0 0" }}
            >
              SĐT (*)
            </Typography>
            <TextField
              id="outlined-basic"
              label="Nhập số điện thoại sale"
              variant="outlined"
              fullWidth
              
              size="small"
              name="phone"
              onChange={(e) => {
                this.handleOnChangeValue(e, "phone");
              }}
              value={phone}
            />

            <Typography
              variant="subtitle1"
              component="h2"
              style={{ margin: "1rem 0 0 0" }}
            >
              Địa chỉ
            </Typography>
            <TextField
              id="outlined-basic"
              label="Nhập thông tin địa chỉ sale"
              variant="outlined"
              fullWidth
              size="small"
              onChange={(e) => {
                this.handleOnChangeValue(e, "address");
              }}
              value={address}
            />
            <Typography
              variant="subtitle1"
              component="h2"
              style={{ margin: "1.2rem 0 0 0" }}
            >
              Mã giới thiệu
            </Typography>
            <TextField
              id="outlined-basic"
              label="Nhập thông tin mã giới thiệu"
              variant="outlined"
              fullWidth
              size="small"
              onChange={(e) => {
                this.handleOnChangeValue(e, "introduction");
              }}
              value={introduction}
            />
            <Typography
              variant="subtitle1"
              component="h2"
              style={{ margin: "1rem 0 0 0" }}
            >
              Tên tài khoản (*)
            </Typography>
            <TextField
              id="outlined-basic"
              label="Nhập thông tin tài khoản để đăng nhập"
              variant="outlined"
              fullWidth
              size="small"
              onChange={(e) => {
                this.handleOnChangeValue(e, "username");
              }}
              value={username}
            />
            <Typography
              variant="subtitle1"
              component="h2"
              style={{ margin: "1rem 0 0 0" }}
            >
              Mật khẩu (*)
            </Typography>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => {
                  this.handleOnChangeValue(e, "password");
                }}
                value={password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        this.setState({ showPassword: !showPassword })
                      }
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <Box style={{ display: "flex", gap: "15px" }}>
              <Typography
                variant="subtitle1"
                component="h2"
                style={{ margin: "1rem 0 0 0" }}
              >
                Quyền trưởng nhóm:
              </Typography>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    defaultChecked
                    onChange={(e) => {
                      this.setState({ isManager: e.target.checked });
                    }}
                    checked={isManager}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label=""
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <CButton
              color="primary"
              onClick={(e) => {
                actionVoucher === "new" ? this.onAddNewSales() : this.update();
              }}
              disabled={actionVoucher === "edit"}
            >
              {actionVoucher === "new" ? "Tạo mới" : "Cập nhật"}
            </CButton>{" "}
            <CButton
              color="secondary"
              onClick={(e) => this.setState({ modalVoucher: !modalVoucher })}
            >
              Đóng
            </CButton>
          </ModalFooter>
        </Modal>
        {/* ------------------END MODAL ADD/ EDIT COLLABORATOR------------------------- */}
        {/* ------------------MODAL DELETE COLLABORATOR------------------------- */}
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
        {/* ------------------END MODAL DELETE COLLABORATOR------------------------- */}
        <Modal isOpen={this.state.modalSelect} className={this.props.className}>
          <ModalHeader>Xuất File</ModalHeader>
          <ModalBody>      
          <RadioGroup name="use-radio-group" defaultValue="first">
            {
              this.state.dataCampaign && this.state.dataCampaign.length > 0 ? this.state.dataCampaign.map((item, index) => {
                return (
                  <FormControlLabel value={item._id} onChange={(e)=>console.log(e,item._id)} control={<Radio />} label={item.name} />
                )
              }) : null
            }
          </RadioGroup>     

          </ModalBody>
          <ModalFooter>
            <CButton
              color="primary"
              onClick={(e) => {
                this.state.actionModalSelect === "new"
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
                  modalSelect: !this.state.modalSelect,
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
