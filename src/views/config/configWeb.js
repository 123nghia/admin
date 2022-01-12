import React, { Component } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
} from "reactstrap";
import update from 'react-addons-update';
import PropTypes from "prop-types";
import TextFieldGroup from "../../views/Common/TextFieldGroup";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import {
  CLabel,
  CRow,
  CCol,
  CSelect,
  CButton,
  CTooltip,
  CTextarea,
} from "@coreui/react";
import Checkbox from '@mui/material/Checkbox';
import CIcon from "@coreui/icons-react";
import "moment-timezone";
import "react-datepicker/dist/react-datepicker.css";
import Constants from "./../../contants/contants";
import axios from "axios";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import logoMainnet from "../../assets/img/logo_head.png";
import CircularProgress from '@mui/material/CircularProgress';
let headers = new Headers();
const auth = localStorage.getItem("auth");

headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action : "new",
      idUpdate : "",
      checkFb : false,
      checkGg : true,
      data: [],
      updated: "",
      dataApi: [],
      delete: null,
      hidden: true,
      token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      role: localStorage.getItem("role"),
      type: localStorage.getItem("type"),
      company_id: localStorage.getItem("user"),
      current_slug: "",
      companyID: "",
      arrTotalPackage: [],
      isChange: true,
      isChangeSlug: true,
      currentPassword: "",
      isLoading: false,
      isDisable: true,
      Email: "",
      sub2_mainColor: "",
      button_color: "",
      sucess_color: "",
      error_color: "",
      text_mainColor: "",
      updateLevel : "1",
      Name: "",
      Phone: "",
      Address: "",
      UserName: "",
      Message_Code: "",
      sub_mainColor: "",
      image: "",
      link: "",
      image_show: "",
      image_link: "",
      statusModalUpdate: false,
      updateLink: "",
      dataConfigWeb : null,
      idUpdateCurrent : null,
      loadingSaveLogo : false
      
    };
  }
  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      updateLevel: e.target.value,
    });
  };
  changeConfigWeb(id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      if (i === id) {
        tabcontent[i].classList.add("defaultOpen");
        tabcontent[i].style.animation = "hideOpa 1s ease-in-out";
      } else {
        tabcontent[i].classList.remove("defaultOpen");
        tabcontent[i].style.animation = "none";
      }
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      if (i === id) {
        tablinks[i].classList.add("active");
      } else {
        tablinks[i].classList.remove("defaultOpen");
        tablinks[i].classList.remove("active");
      }
    }
  }
 

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
    this.getData();
   await this.getDataConfigWeb();
    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to == window.location.hash) {
        if (arr[i].hidden == true) {
          window.location.href = "#/";
        }
      }
    }
  }
  renderData(data) {
    if (data) {
      let x = data.map((item, i) => {
        return (
          <tbody>
            <td colSpan="10" hidden={this.state.hidden} className="text-center">
              Không tìm thấy dữ liệu
            </td>

            <tr key={i}>
              <td className="text-center">{i + 1}</td>
              <td className="text-center">{item.title}</td>
              {/* <td className="text-center">{item.name}</td> */}

              <td className="text-center">{item.href}</td>
              <td className="text-center">{item.Level}</td>
              {/* <td className="text-center">
                                {Number(item.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} đ
                              </td> */}
              <td className="">
                <CButton
                  outline
                  color="success"
                  size="sm"
                  onClick={() => this.openFormEdit(item,i)}
                >
                  {/* <CIcon name="cilTrash" /> */}
                  Chỉnh sửa
                </CButton>{" "}
                <CButton
                  style={styles.mgl5}
                  outline
                  color="danger"
                  size="sm"
                  onClick={() => this.openDelete(i)}
                >
                  {/* <CIcon name="cilPencil" /> */}
                  Xóa
                </CButton>
              </td>
            </tr>
          </tbody>
        );
      });
      let render = (
        <table
          ble
          className="table table-hover mt-3 table-outline mb-0 d-none d-sm-table"
        >
          <thead className="thead-light">
            <tr>
              <th className="text-center">STT.</th>
              {/* <th className="text-center">Tên</th> */}
              <th className="text-center">Tiêu đề</th>
              <th className="text-center">Link tham chiếu</th>

              <th className="text-center">Độ ưu tiên</th>

              <th className="text-center">#</th>
            </tr>
          </thead>
          {x}
        </table>
      );
      return render;
    }
  }
  async getDataConfigWeb(){


    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/getAll?key=webinfo"
    await axios.get(
      url,{
        key : "webinfo"
      }
    ).then((res)=>{
      console.log(res)
      if(res.data.data.length > 0){
             
        let dataConfig = res.data.data[0]
     
        let valueConfig = JSON.parse(dataConfig.Value);
        this.setState({
          image : valueConfig.value.logo,
          image_show : valueConfig.value.logo,
          dataConfigWeb: valueConfig,
          idUpdate: dataConfig._id
        });

        
      }else{
       

        let templateDataConfigWeb = {
          key: "webinfo",
          value: {
            logo: "",
            tawk: "",
            facebook: {
              appid: "",
            },
            google: {
              appid: "",
              password: "",
            },
            footerData: [
              {
                title: "Khám phá ngay",
                href: "",
                Level: "1",
               
              },
              {
                title: "Chính sách bảo mật",
                href: "",
                Level: "2",
            

              },
            ],
          },
        }
        this.setState({
          dataConfigWeb : templateDataConfigWeb
        },() => {

          this.addDataConfig();
          
      });
      }
    })

    
  }
  async addDataConfig (){
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi+"api/config/add";
    await axios.post(
      url,{
        dataType: "1",
        key : "webinfo",
        value : JSON.stringify(this.state.dataConfigWeb),
        type : "system",
      }
    )
  };
  saveAdd=()=>{
    const { dataConfigWeb, updateLink,
      updateTitle,
      updateLevel } = this.state;

    let coppyData = {
      ...dataConfigWeb
    }
    let footerAdd = {
      title : updateTitle,
      href : updateLink,
      Level : updateLevel
    }
    coppyData.value.footerData.push(footerAdd)
    this.setState({
      dataConfigWeb : coppyData,
      statusModalUpdate: false,

    },() => {

      this.onUpdate();     
    })  
  }
  async onUpdate(){
    
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi+"api/config/update"
    await axios.post(
      url,{
        value : JSON.stringify(this.state.dataConfigWeb),
        dataType: "1",
        type : "system",
        id : this.state.idUpdate,
      }
    )
  }
  openDelete = (i) => {   
      const {dataConfigWeb} = this.state;
    let coppyData = {
      ...dataConfigWeb
    }
    coppyData.value.footerData.splice(i,1)
    this.setState({
      dataConfigWeb : coppyData,
    },() => {
      this.onUpdate();     
    })  
  };
  async saveEdit(){
    const { dataConfigWeb, updateLink,
      updateTitle,idUpdateCurrent,
      updateLevel } = this.state;

    let coppyData = {
      ...dataConfigWeb
    }
    let footerAdd = {
      title : updateTitle,
      href : updateLink,
      Level : updateLevel
    } 
   
    for(let i = 0; i < coppyData.value.footerData.length; i++){
      if(i === idUpdateCurrent){
      coppyData.value.footerData[i] = footerAdd
      
      }
    }

     this.setState({
      dataConfigWeb : coppyData,
      statusModalUpdate: false,
    },() => {
      this.onUpdate();     
     
      
    })  
    // this.addDataConfig();
  }
  getData = async () => {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.CONFIG_THEME_GET + "/" + "61ce79c4d19f5244aa161b36",
      method: "GET",
      headers: this.state.token,
    });
    let val = res.data.data;
    this.setState({
      dataApi: val,
      data: val,
      currentPassword: val.Password,
      isLoading: false,
      current_slug:
        val.Company_Id == null || val.Company_Id == undefined
          ? null
          : val.Company_Id.Slug,
      companyID:
        val.Company_Id == null || val.Company_Id == undefined
          ? null
          : val.Company_Id._id,

      mainColor: val.mainColor,
      sub_mainColor: val.sub_mainColor,
      Phone: val.Phone,
      Address: val.Address,
      UserName: val.UserName,
      Message_Code: val.Message_Code,
      sub2_mainColor: val.sub2_mainColor,
      button_color: val.button_color,
      sucess_color: val.sucess_color,
      error_color: val.error_color,
      text_mainColor: val.text_mainColor,
      isDisable: true,
    });
  };

  onChange(key, val) {
    this.setState({ [key]: val });
  }

  openUpdate(name_link) {
    this.setState({
      [name_link]: !this.state[name_link],
    });
  }

  getPackageName = async (package_id) => {
    const resPackage = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_DATA_PACKAGE,
      method: "POST",
      data: {
        package_id: package_id,
      },
    });
    return resPackage.data.data;
  };

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  openForm = () => {
    this.setState({
      action : "new",
      updateLevel: "1",
      statusModalUpdate: true,
      updateLink: "",
      updateTitle: "",
    });
  };
  async openFormEdit(item,i) {
    this.setState({
      action : "edit",
      updateLevel: item.Level,
      idUpdateCurrent : i,
      updateTitle: item.title,

      statusModalUpdate: true,
      updateLink: item.link,
    });
  }

  closeFormEdit = () => {
    this.setState({ statusModalUpdate: false });
  };

  async updatePassword(id, password) {
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_UPDATE_PASSWORD,
      method: "POST",
      data: {
        id: id,
        new_password: password,
      },
    });

    if (res.data.is_success == true) {
      this.getData();
      this.setState({ isChange: true });
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }
  }

  async updateSlug() {
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_SLUG,
      method: "POST",
      data: {
        id: this.state.companyID,
        Slug: this.state.current_slug,
      },
    });

    if (res.data.is_success == true) {
      this.getData();
      this.setState({ isChangeSlug: true });
    } else {
      alert(res.data.message);
      this.setState({ isChangeSlug: false });
    }
  }
  saveLogo=()=>{
    
    this.setState({ loadingSaveLogo: true });
    setTimeout(()=>{
    this.setState({ loadingSaveLogo: false });

      const {dataConfigWeb } = this.state;
    let coppyData = {
      ...dataConfigWeb
    } 
    this.setState({
      dataConfigWeb : coppyData,
      statusModalUpdate: false,
    },() => {
      this.onUpdate();     
    })  
    },1000)
    

  }
  canelLogo=()=>{
    this.setState({ 
      image : "",
      image_link : "" 
    });

  }

  async updateCompany() {
    const {
      mainColor,
      sub_mainColor,
      button_color,
      sucess_color,
      error_color,
      text_mainColor,
      Phone,
      sub2_mainColor,
      Address,
      UserName,
      data,
      Message_Code,
    } = this.state;

    if (mainColor == null || mainColor == "") {
      alert("Vui lòng nhập đầy đủ trường !!!");
      return;
    }

    const body = {
      isHash: false,
      sub_mainColor: sub_mainColor,
      mainColor: mainColor,
      sub2_mainColor: sub2_mainColor,
      company_id: "61ce79c4d19f5244aa161b36",
      button_color: button_color,
      sucess_color: sucess_color,
      error_color: error_color,
      text_mainColor: text_mainColor,
    };
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.CONFIG_THEME_UPDATE,
      method: "POST",
      data: body,
    });

    if (res.data.is_success == true) {
      this.getData();
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }
  }
  render() {
    const arrLevel = [
      {
        item: "1",
      },
      {
        item: "2",
      },
      {
        item: "3",
      },
    ];

    const {
      
      dataConfigWeb,
      data,
      current_slug,
      isChange,
      error_color,
      sucess_color,
      button_color,
      sub2_mainColor,
      currentPassword,
      isChangeSlug,
      type,
      isDisable,
      sub_mainColor,
      mainColor,
      Phone,
      Address,
      UserName,
      Message_Code,
      text_mainColor,
    } = this.state;

    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <div class="tab">
            <button
              class="tablinks active"
              onClick={() => this.changeConfigWeb(0)}
            >
              Thông tin chung
            </button>
            <button class="tablinks" onClick={() => this.changeConfigWeb(1)}>
              Cấu hình Facebook{" "}
            </button>
            <button class="tablinks" onClick={() => this.changeConfigWeb(2)}>
              Cấu hình Google
            </button>
            <button class="tablinks" onClick={() => this.changeConfigWeb(3)}>
              Thông tin mã màu
            </button>
            <button class="tablinks" onClick={() => this.changeConfigWeb(4)}>
              Thông tin footer
            </button>
          </div>

          <div id="tabcontent1" class="tabcontent defaultOpen">
            <div class="flex-a-center">
              <div class="col-sm-12 col-md-5">
                <p class="mr-2">Logo web :</p>
              </div>
              <div class="col-sm-12 col-md-7" >
      
              {this.state.image == "" ||
                  this.state.image == null ||
                  this.state.image == undefined ? (
                    <img
                      alt=""
                      style={{ width:"140px" ,marginBottom: 20}}
                      
                      height="auto"
                      src={
                        logoMainnet
                      }
                     
                    />
                  ) : (
                    <img
                      alt=""
                      style={{ width:"140px" ,marginBottom: 20}}
                      
                      height="auto"
                      src={
                        this.state.image_show === ""
                          ? logoMainnet
                          : this.state.image
                      }
                    
                    />
                  )}      
               <br></br>
                <CButton onClick={this.saveLogo} style={styles.mgl5} outline color="success" size="md">
                  {/* <CIcon name="cilPencil" /> */}
                  Lưu
                </CButton>
                <CButton onClick={this.canelLogo} style={styles.mgl5} outline color="danger" size="md">
                  {/* <CIcon name="cilPencil" /> */}
                  Hủy
                </CButton>
                {
                  this.state.loadingSaveLogo ? <div class="position_loading">
                <CircularProgress />
                </div> : null
                }
                <div class="mt-3">
                  <TextFieldGroup
                    field="image"
                    label="Ảnh minh họa"
                    type={"file"}
                    className="mt-5"
                    // value={this.state.image}
                    onChange={(e) => {
                      this.onChangeImage(e);
                    }}
                    onClick={(e) => {
                      e.target.value = null;
                      this.setState({ image_show: "" });
                    }}
                  />
                  
                </div>
              </div>
            </div>
            <div class="flex-as-center">
              <div class="col-sm-12 col-md-5">
                <p class="mr-2">Mã chat tawk(nếu có) :</p>
              </div>
              <div class="col-sm-12 col-md-7">
                <textarea class="mt-3" cols="60" rows="8">
               
                </textarea>
              </div>
            </div>
          </div>

          <div id="tabcontent2" class="tabcontent">
          <div class="col-md-12">
          <div>
          <TextFieldGroup
                field=""
                label="Mã ứng dụng"
                value=""
                placeholder={"Mã app"}
                // onChange={(e) => {
                //   this.setState({ updateTitle: e.target.value });
                // }}
              />

              <TextFieldGroup
                field=""
                label="Mật khẩu"
                value=""
                placeholder={"Mật khẩu"}
                // onChange={(e) => {
                //   this.setState({ updateLink: e.target.value });
                // }}
              />
          </div>
          
            {/* <Checkbox
      checked={this.state.checkFb}
      onChange={(e)=>{
        this.setState({checkFb: e.target.checked})
      }}
      inputProps={{ 'aria-label': 'controlled' }}
    /> */}
            </div>
          </div>

          <div id="tabcontent3" class="tabcontent">
          <div class="col-md-12">
          <div>
          <TextFieldGroup
                field=""
                label="Mã ứng dụng"
                value=""
                placeholder={"Mã app"}
                // onChange={(e) => {
                //   this.setState({ updateTitle: e.target.value });
                // }}
              />

              <TextFieldGroup
                field=""
                label="Mật khẩu"
                value=""
                placeholder={"Mật khẩu"}
                // onChange={(e) => {
                //   this.setState({ updateLink: e.target.value });
                // }}
              />
          </div>
          
            {/* <Checkbox
      checked={this.state.checkFb}
      onChange={(e)=>{
        this.setState({checkFb: e.target.checked})
      }}
      inputProps={{ 'aria-label': 'controlled' }}
    /> */}
            </div>
          </div>
          <div id="tabcontent4" class="tabcontent">
            <Row>
              <Col>
                <p style={styles.success}>{this.state.updated}</p>
                <p style={styles.danger}>{this.state.deleted}</p>
                <Card>
                  <CardHeader>THÔNG TIN MÀU</CardHeader>
                  <CardBody>
                    <CRow>
                      <CCol sm="12" lg="12">
                        <CRow>
                          <CCol sm="6" lg="8">
                            <CLabel>
                              <strong>Thay đổi màu</strong>
                            </CLabel>
                          </CCol>
                          {type == "0" || type == "1" ? (
                            ""
                          ) : (
                            <CCol sm="6" lg="4">
                              <CTooltip content="Xem chi tiết đơn hàng">
                                {isDisable ? (
                                  <CButton
                                    outline
                                    color="info"
                                    size="xm"
                                    onClick={async (e) => {
                                      this.setState({ isDisable: !isDisable });
                                    }}
                                  >
                                    <CIcon name="cil-pencil" /> Cập nhật
                                  </CButton>
                                ) : (
                                  <CButton
                                    outline
                                    color="info"
                                    size="sm"
                                    onClick={async (e) => {
                                      this.updateCompany();
                                    }}
                                  >
                                    <CIcon name="cil-pencil" /> Xác nhận cập
                                    nhật
                                  </CButton>
                                )}
                              </CTooltip>
                            </CCol>
                          )}
                        </CRow>
                        <CRow>
                          <CCol sm="12" lg="12">
                            <div>
                              <CLabel>Màu chủ đạo</CLabel>
                              <Input
                                style={styles.searchInput}
                                onChange={(e) => {
                                  this.setState({ mainColor: e.target.value });
                                }}
                                value={mainColor}
                                readOnly={isDisable}
                              />
                            </div>
                          </CCol>

                          <CCol sm="12" lg="12">
                            <CLabel>Màu chủ đạo 1</CLabel>
                            <Input
                              style={styles.searchInput}
                              value={sub_mainColor}
                              onChange={(e) => {
                                this.setState({
                                  sub_mainColor: e.target.value,
                                });
                              }}
                              readOnly={isDisable}
                            />
                          </CCol>
                          <CCol sm="12" lg="12">
                            <CLabel>Màu chủ đạo 2</CLabel>
                            <Input
                              style={styles.searchInput}
                              value={sub2_mainColor}
                              onChange={(e) => {
                                this.setState({
                                  sub2_mainColor: e.target.value,
                                });
                              }}
                              readOnly={isDisable}
                            />
                          </CCol>
                          <CCol sm="12" lg="12">
                            <div>
                              <CLabel>Màu chữ</CLabel>
                              <Input
                                style={styles.searchInput}
                                value={text_mainColor}
                                onChange={(e) => {
                                  this.setState({
                                    text_mainColor: e.target.value,
                                  });
                                }}
                                readOnly={isDisable}
                              />
                            </div>
                          </CCol>

                          <CCol sm="12" lg="12">
                            <CLabel>Màu button </CLabel>
                            <Input
                              style={styles.searchInput}
                              value={button_color}
                              onChange={(e) => {
                                this.setState({ button_color: e.target.value });
                              }}
                              readOnly={isDisable}
                            />
                          </CCol>

                          <CCol sm="12" lg="12">
                            <div>
                              <CLabel>Màu báo thành công</CLabel>
                              <Input
                                style={styles.searchInput}
                                value={sucess_color}
                                onChange={(e) => {
                                  this.setState({
                                    sucess_color: e.target.value,
                                  });
                                }}
                                readOnly={isDisable}
                              />
                            </div>
                          </CCol>

                          <CCol sm="12" lg="12">
                            <div>
                              <CLabel>Màu báo lỗi</CLabel>
                              <Input
                                style={styles.searchInput}
                                value={error_color}
                                onChange={(e) => {
                                  this.setState({
                                    error_color: e.target.value,
                                  });
                                }}
                                readOnly={isDisable}
                              />
                            </div>
                          </CCol>
                        </CRow>
                      </CCol>
                    </CRow>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <div id="tabcontent5" class="tabcontent">
            <Row>
              <Col>
                <p style={styles.success}>{this.state.updated}</p>
                <p style={styles.danger}>{this.state.deleted}</p>
                <Card>
                  <CardBody>
                    <CRow>
                      <CCol sm="12" lg="12">
                        <CRow>
                          <CCol sm="12" lg="8"></CCol>
                          {type == "0" || type == "1" ? (
                            ""
                          ) : (
                            <CCol sm="12" lg="4">
                              <CTooltip content="Xem chi tiết đơn hàng">
                                <CButton
                                  onClick={this.openForm}
                                  style={{ float: "right" }}
                                  outline
                                  color="info"
                                  size="xm"
                                >
                                  <CIcon name="cil-pencil" /> Thêm mới
                                </CButton>
                              </CTooltip>
                            </CCol>
                          )}
                        </CRow>
                      </CCol>
                    </CRow>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            {
              dataConfigWeb ? this.renderData(dataConfigWeb.value.footerData) : null
            }
          </div>
          <Modal
            size="xl"
            isOpen={this.state.statusModalUpdate}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.action === "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="updateTitle"
                label="Tiêu đề"
                value={this.state.updateTitle}
                placeholder={"Tiêu đề"}
                onChange={(e) => {
                  this.setState({ updateTitle: e.target.value });
                }}
              />

              <TextFieldGroup
                field="updateLink"
                label="Link tham chiếu"
                value={this.state.updateLink}
                placeholder={"Link"}
                onChange={(e) => {
                  this.setState({ updateLink: e.target.value });
                }}
              />

              {/* <TextFieldGroup
            field="linkProductsSuggest"
            label="Đường dẫn chi tiết sản phẩm"
            value={this.state.linkProductsSuggest}
            placeholder={"Đường dẫn chi tiết sản phẩm"}
            onChange={(e) => this.onChange("linkProductsSuggest", e.target.value)}
          /> */}

              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Độ ưu tiên:</CLabel>
                {arrLevel != undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevel(e);
                    }}
                    custom
                    size="sm"
                    name="updateLevel"
                    id="SelectLm"
                  >
                    {arrLevel.map((item, i) => {
                      if (item.item === this.state.updateLevel) {
                        return (
                          <option selected key={i} value={item.item}>
                            {item.item === "1"
                              ? "1"
                              : item.item === "2"
                              ? "2"
                              : "3"}
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                            {item.item == "1"
                              ? "1"
                              : item.item == "2"
                              ? "2"
                              : "3"}
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
                onClick={() => {
                  this.state.action === "new"
                    ? this.saveAdd()
                    : this.saveEdit();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={() => {
                  this.closeFormEdit();
                }}
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
  datePicker: {
    marginBottom: 20,
  },
  wa10: {
    width: "5%",
    float: "left",
    height: "80px",
  },
  pagination: {
    marginRight: "5px",
  },
  flexLabel: {
    width: 100,
  },
  flexOption: {
    width: 200,
    margin: "1px",
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
  wh12: {
    width: "10%",
    float: "left",
    height: "80px",
  },
  wh15: {
    width: "15%",
    float: "left",
    height: "80px",
  },
  w5: {
    width: "12%",
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
    width: "100%",
    display: "inline-block",
    margin: "1px",
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

export default Users;
