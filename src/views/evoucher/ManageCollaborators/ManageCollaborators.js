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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Switch } from 'antd';
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
import campaignApi from "src/apis/managerCampaignApi";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";

const { Option } = Select;
const dateFormat = "DD-MM-YYYY";
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
const { RangePicker } = DatePicker;
class EndUser extends Component {
  state = {
    company_id: JSON.parse(localStorage.getItem("user")).company_id
      ? JSON.parse(localStorage.getItem("user")).company_id
      : null,
    data: [],
    actionVoucherEditing: "new",
    modalPopupVoucher: false,
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
    dataCompany: [],
    quantity: "0",
    noted: "",
  };

  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value,
    });
  };
  changeLevelValue = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value,
    });
  };
  
  async onGetCampaignList() {
    await campaignApi
      .fecthAllCampaignList()
      .then((res) => {
        let campaignList = res.data.data;
        this.handlePagination(campaignList);

        this.setState({ dataApi: campaignList });

        let active = 0;
        this.setState({ isLoading: false, totalActive: active });
      })
      .catch((err) => console.log(err));
  }

  async onGetCompanyList() {
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

  async componentDidMount() {
    await this.getPartner();
  }
  getPartner = async () => {
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

        this.setState({ isLoading: false, totalActive: active ,totalRecord : res.data.totalRecord  });
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

  paginationVoucher(dataApi) {
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
    this.getPartner(this.state.key);
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

  openDelete = (item) => {
    this.setState({
      modalDelete: !this.state.modalDelete,
      id: item._id,
    });
  };

  openFormAdd() {
    this.setState({
      actionVoucher: "new",
      modalVoucher: true,
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
      actionVoucher: "edit",
      modalVoucher: true,
      idEditPartner : item._id,
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
  openEditVoucher(item) {
    this.state.dataCompany.forEach((name) => {
      if (name._id === item.company_id) {
        this.setState({
          nameCompanyChoose: name.Name,
          idCompany: item?._id,
        });
        return;
      }
    });

    this.setState({
      actionVoucher: "edit",
      modalVoucher: true,
      idCurrentUpdate: item?._id,
      quantity: item?.quatinity,
      name: item?.name,
      saleEndDate: new Date(item?.saleEndDate).toLocaleDateString(),
      from: new Date(item?.from).toLocaleDateString(),
      to: new Date(item?.to).toLocaleDateString(),
      description: item?.description,
      status: item?.status,
      noted: item?.noted,
      nameCompanyChoose: item?.vendor[0]?.Name,
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
        id : this.state.idEditPartner,
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
          modalVoucher: false,
        });
        await this.getPartner();
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
            modalVoucher: false,
          });
          await this.getPartner();
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
        this.getPartner();
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
        this.onGetCampaignList();
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
  onChangeImage(e, value, valueLink, valueShow) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ [valueLink]: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({ [value]: e.target.result, [valueShow]: e.target.result });
    };
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
      from,
      to,
      saleEndDate,
      quantity,
      description,
      status,
      company_id,
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
      from,
      to,
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
              Ngày giờ khởi tạo :
              <span>
                Lúc{" "}
                {new Date(item.create_at).toLocaleTimeString() +
                  " giờ " +
                  " ngày " +
                  new Date(item.create_at).toLocaleDateString()}
              </span>
            </p>
            <p>
              Ngày bắt đầu :
              <span>Ngày {new Date(item.from).toLocaleDateString()}</span>
            </p>
            <p>
              Ngày kết thúc :
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
                  color={
                    item.status === "0"
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
                                : "#FF0004"
                  }
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
                            : "Khóa"}
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
  GetDetailCampaign() { }
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
            isOpen={this.state.modalVoucher}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.actionVoucher === "new" ? `Tạo mới` : `Cập nhật`}
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

              {/* <TextFieldGroup
                field="company"
                label="Tên công ty"
                value={this.state.company}
                // error={errors.title}
                onChange={(e) => this.setState({ company: e.target.value })}
                // rows="5"
              /> */}

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
                onChange={(e) => this.setState({ introduction: e.target.value })}
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
          {this.state.modalInfo}
          <Modal isOpen={this.state.modalVoucherEditing} size="xl">
            <ModalHeader>
              {this.state.actionVoucherEditing === "new"
                ? `Danh sách Voucher`
                : `Danh sách Voucher`}
            </ModalHeader>
            <ModalBody>
              <div class="flex-end">
                <CButton
                  color="info"
                  style={{ marginBottom: "10px" }}
                  size="md"
                  className="btn-main"
                  onClick={() => this.openVoucherAdd()}
                >
                  <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                  <p style={{ margin: "auto 0" }}>Thêm mới</p>
                </CButton>
              </div>
              <table
                ble
                className="table table-hover table-outline mb-0 d-none d-sm-table table_dash"
              >
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">STT.</th>

                    <th className="text-center">Mã voucher</th>

                    <th className="text-center">Ngày tạo</th>
                    <th className="text-center">người sử dụng</th>

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
                  {dataVoucher != undefined
                    ? dataVoucher.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td className="text-center">{i + 1}</td>

                          <td className="text-center">{item.code}</td>
                          <td className="text-center">
                            {new Date(item.create_at).toLocaleDateString() +
                              " " +
                              new Date(item.create_at).toLocaleTimeString()}
                          </td>
                          <td className="text-center">
                            {item.user ? item.user : "Chưa có"}
                          </td>

                          <td className="text-center">
                            <Tag
                              className="ant-tag"
                              color={
                                item.status === "0"
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
                                            : "#FF0004"
                              }
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
                                        : "Khóa"}
                            </Tag>
                          </td>
                          <td className="text-center">
                            <div class="flex">
                              <CButton
                                shape="rounded-pill"
                                variant="outline"
                                color="info"
                                style={styles.mgl5}
                                size="md"
                                className="flex-a-center "
                                onClick={() => this.renderModalInfo(item)}
                              >
                                <BsSearch className="mr-1" />
                                Xem chi tiết
                              </CButton>
                              <CButton
                                shape="rounded-pill"
                                variant="ghost"
                                color="info"
                                style={styles.mgl5}
                                size="md"
                                onClick={(e) => this.openUpdateVoucher(item)}
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
                  count={arrPaginationVoucher.length}
                  color="primary"
                  onChange={(e, v) => {
                    this.setState({
                      dataVoucher: arrPaginationVoucher[v - 1],
                      indexPageVoucher: v - 1,
                    });
                  }}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({
                    modalVoucherEditing: !this.state.modalVoucherEditing,
                  })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
          <Modal
            isOpen={this.state.modalVoucherEditing2}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.actionVoucherEditing2 === "new"
                ? `Tạo mới`
                : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="codeVoucher"
                label="Mã voucher"
                value={this.state.codeVoucher}
                // error={errors.title}
                onChange={(e) => this.setState({ codeVoucher: e.target.value })}
              // rows="5"
              />
              <TextFieldGroup
                field="relCode"
                label="Mã chiến dịch"
                value={this.state.relCode}
                // error={errors.title}
                onChange={(e) => this.setState({ relCode: e.target.value })}
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
              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Trạng thái:</CLabel>
                {arrLevel !== undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevel(e);
                    }}
                    custom
                    size="md"
                    name="status"
                    id="SelectLm"
                  >
                    {levelVoucher.map((item, i) => {
                      if (item.item === this.state.status) {
                        return (
                          <option selected key={i} value={item.item}>
                            {item.item === "0"
                              ? "Sẵn sàng"
                              : item.item === "1"
                                ? "Chờ xác nhận"
                                : item.item === "2"
                                  ? "Đã sử dụng"
                                  : item.item === "3"
                                    ? "Hủy bỏ"
                                    : item.item === "4"
                                      ? "Xóa bỏ"
                                      : "Khóa"}
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                            {item.item === "0"
                              ? "Sẵn sàng"
                              : item.item === "1"
                                ? "Chờ xác nhận"
                                : item.item === "2"
                                  ? "Đã sử dụng"
                                  : item.item === "3"
                                    ? "Hủy bỏ"
                                    : item.item === "4"
                                      ? "Xóa bỏ"
                                      : "Khóa"}
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
                  this.state.actionVoucherEditing2 === "new"
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
                    modalVoucherEditing2: !this.state.modalVoucherEditing2,
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
                    Quản lý đối tác
                  </i>
                  <CRow>
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
                <h5>Tổng số: {this.state.totalRecord ? this.state.totalRecord : ""}</h5>
                  <table
                    ble
                    className="mt-3 table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Tên đăng nhập</th>
                 
                        <th className="text-center">Email</th>
                        <th className="text-center">SĐT</th>
                        <th className="text-center">Slug</th>
                        <th className="text-center">Giới thiệu</th>
                        <th className="text-center">Thương hiệu</th>
                        <th className="text-center">Logo</th>
                      
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
                              <td className="text-center">{item.Name}</td>
                              <td className="text-center">{item.UserName}</td>
                              
                              <td className="text-center">
                                {item.Email}
                              </td>
                              <td className="text-center">
                                {item.Phone}
                              </td>
                              <td className="text-center">
                                {item.Slug}
                              </td>
                              <td className="text-center">
                                {item.introduction}
                              </td>
                              <td className="text-center">
                                {item.Brand}
                              </td>
                              <td className="text-center">
                                <img style={{maxHeight:'60px', maxWidth:'300px'}} src={item.Logo} alt="" />
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

          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>
              {this.state.action === "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="name"
                label="Tên chiến dịch"
                value={this.state.name}
                // error={errors.title}
                onChange={(e) => this.setState({ name: e.target.value })}
              // rows="5"
              />

              <TextFieldGroup
                field="voucher"
                label="Số lượng Voucher"
                value={this.state.voucher}
                // error={errors.title}
                onChange={(e) => this.setState({ voucher: e.target.value })}
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
