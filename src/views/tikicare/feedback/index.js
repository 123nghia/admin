import { CButton, CCol, CLabel, CRow, CSelect, CTextarea } from "@coreui/react";
import { css } from "@emotion/react";
import Pagination from "@material-ui/lab/Pagination";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { DatePicker, Select, Tag } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import moment from "moment";
import "moment-timezone";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import API_CONNECT from "../../../../src/functions/callAPI";
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
import Constants from "../../../contants/contants";
import TextFieldGroup from "../../Common/TextFieldGroup";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
const { RangePicker } = DatePicker;
class Categories extends Component {
  state = {
    company_id: JSON.parse(localStorage.getItem("user")).company_id
      ? JSON.parse(localStorage.getItem("user")).company_id
      : null,
    data: [],
    totalActive: 0,
    dataApi: [],
    hidden: false,
    modal : false,
    actionModal: "new",
    delete: null,
    arrPagination: [],
    indexPage: 0,
    type: localStorage.getItem("type"),
    user: localStorage.getItem("user"),
    isLoading: false,
  };
  async componentDidMount() {
    await this.getData();
  }
  getData = async () => {
    var baseUrlapi = Constants.BASE_URL;
    let urlCall = Constants.GET_PARTNER;
    let url = baseUrlapi + urlCall;
    axios
      .post(url, {
      })
      .then((res) => {
        console.log(res);
        let val = res.data.data;
        this.pagination(val);
        this.setState({ dataApi: val });

        let active = 0

        this.setState({ isLoading: false, totalActive: active ,total : res.data.total  });
      });


  }
  pagination(dataApi) {
    var i, j, temparray, chunk = 50;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }

    if (arrTotal.length == 0) {
      this.setState({
        hidden: false
      })
    } else {
      this.setState({
        hidden: true
      })
    }

    this.setState({ arrPagination: arrTotal, data: arrTotal[0] });
  }

  onChange(key, val) {
    this.setState({ [key]: val });
  }

  handlePagination(dataApi) {

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

    this.setState({ arrPagination: arrTotal, data: arrTotal[0] });
  }

  onSearch() {
    this.getPartner(this.state.key);
  }
  async updateUser() {
    const { email, phone, password, username } = this.state;

    if (!email || !phone || !username) {
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
      this.onGetCampaignList();

      this.setState({ modalCom: !this.state.modalCom });
    } else {
      alert("Cập nhật thất bại");
      this.setState({ isLoading: false });
    }
  }
  openFormAdd() {
    this.setState({
      actionModal: "new",
      modal: true,
      name : "",
        email : "",
        phone :  "",
        slug:  "",
        introduction:  "",
        branch : "",
         imageLogo: "",
         imageLogo_show: "",
         imageLogo_link: "",
         password:  "",
         userName : "",    
    });
  }
  openFormEdit(item) {
  
    this.setState({
      actionModal: "edit",
      modal: true,
      idEdit : item._id,
      name : item.Name,
      email : item.Email,
      phone :  item.Phone,
      slug:  item.Slug,
      introduction:  item.introduction,
      branch : item.Brand,
      imageLogo: item.Logo,
       password:  item.password,
       userName : item.UserName
    });
  }
  async update() {

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.UPDATE_PARTNER;

    let url = baseUrlapi + baseUrlCallApi;
    let img = this.state.imageLogo;
    let imgLink = await this.postImage(this.state.imageLogo_link);
    if (imgLink) {
      img = `${Constants.BASE_URL}image_brand/${imgLink}`;
    }

    await axios
      .post(url, {
        id : this.state.idEdit,
        "name" : this.state.name,
        "email" : this.state.email,
        "phone" :  this.state.phone,
        "slug":  this.state.slug,
        "introduction":  this.state.introduction,
        "brand" : this.state.branch,
         "logo": img,
         "status" : 'Actived',
         "password":  this.state.password,
         "userName" : this.state.userName
      })
      .then( async(res) => {
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
    let img;
    let imgLink = await this.postImage(this.state.imageLogo_link);
    if (imgLink) {
      img = `${Constants.BASE_URL}image_brand/${imgLink}`;
    }
    await axios
      .post(url, {
        "name" : this.state.name,
        "email" : this.state.email,
        "phone" :  this.state.phone,
        "slug":  this.state.slug,
        "introduction":  this.state.introduction,
        "brand" : this.state.branch,
         "logo": img,
         "password":  this.state.password,
         "userName" : this.state.userName,       
      })
      .then(async (res) => {
        if(res.data.is_success){
          Swal.fire({
            icon: "success",
            title: "Thêm thành công",
            showConfirmButton: false,
            timer: 1700,
          });
          this.setState({
            modal: false,
          });
          await this.getData();
        }else{
          alert(res.data.message);
        } 
      });
  }
  async delete(item) {
    let baseUrlCallApi = Constants.DELETE_PARTNER;
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
          timer: 1200,
        });
        this.getData();
      });
  }
  async postImage(link) {
    var newImage = "";
    if (link && link !== "") {
      const form = new FormData();

      form.append("image", link);

      await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST").then(
        (res) => {

        }
      );

      newImage = link.name;
      return newImage;
    } else {
      return newImage;
    }
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
  onChangeImage(e, value, valueLink, valueShow) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ [valueLink]: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({ [value]: e.target.result, [valueShow]: e.target.result });
    };
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
      noted,
    } = this.state;
    const dateArray = [this.state.from, this.state.to];
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
    ];
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Modal
            isOpen={this.state.modal}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.actionModal === "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
            <TextFieldGroup
                field="title"
                label="Tiêu đề"
                value={this.state.title}
                // error={errors.title}
                onChange={(e) => this.setState({ title: e.target.value })}
              // rows="5"
              />
              <TextFieldGroup
                field="href"
                label="Đường dẫn"
                value={this.state.href}
                // error={errors.title}
                onChange={(e) => this.setState({ href: e.target.value })}
              // rows="5"
              />
                <div className="mt-3"></div>
              <TextFieldGroup
                field="imageLogo"
                label="Logo"
                type={"file"}
                className="mt-5"
                onChange={(e) => {
                  this.onChangeImage(e,'imageLogo','imageLogo_link','imageLogo_show');
                }}
                onClick={(e) => {
                  e.target.value = null;
                  this.setState({ imageLogo : "" });
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
                  this.state.actionModal === "new"
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
                  this.setState({ modal: !this.state.modal })
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
                    Danh sách phản hồi người dùng
                  </i>
                  <CRow>
                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">Tiêu đề</p>
                        <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({ phoneFilter: e.target.value });
                          }}
                          type="text"
                          name="phoneFilter"
                          value={this.state.phoneFilter}
                          placeholder=""
                        />
                      </div>
                    </CCol>
                  </CRow>

                  <div className="flex-center-space mt-2">
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
                      onClick={() => this.openFormAdd()}
                    >
                      <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Thêm mới</p>
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
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tiêu đề</th>
                        <th className="text-center">Hình ảnh</th>             
                        <th className="text-center">Link</th>
                        
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
                      {data !== undefined
                        ? data.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td className="text-center">{i + 1}</td>
                              <td className="text-center">{item.title}</td>
                              <td className="text-center">
                                <img style={{maxHeight:'60px', maxWidth:'300px'}} src={item.image} alt="" />
                              </td>                        
                              <td className="text-center">
                                {item.link}
                              </td>                                                       
                              <td className="text-center" style={{minWidth : '100px'}}>
                                <div className="flex">
                                <CButton
                                    shape="rounded-pill"
                                    variant="ghost"
                                    color="info"
                                    style={styles.mgl5}
                                    size="md"
                                    onClick={(e) => this.openFormEdit(item)}
                                  >
                                    <FiEdit3
                                      style={styles.icon}
                                      name="cilPencil"
                                    />
                                  </CButton>
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

export default Categories;
