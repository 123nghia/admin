import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
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
import Swal from "sweetalert2";

import TextFieldGroup from "../../views/Common/TextFieldGroup";
import API_CONNECT from "../../../src/functions/callAPI";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";

import InfoIcon from "@mui/icons-material/Info";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import {
  CLabel,
  CRow,
  CCol,
  CSelect,
  CButton,

  CTextarea,
} from "@coreui/react";
import Checkbox from "@mui/material/Checkbox";
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
import FacebookIcon from "@mui/icons-material/Facebook";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { IoLogoBuffer } from "@react-icons/all-files/io/IoLogoBuffer";
import { AiFillWechat } from "@react-icons/all-files/ai/AiFillWechat";
import { IoIosColorPalette } from "@react-icons/all-files/io/IoIosColorPalette";
// import { BsFillMenuButtonWideFill } from "@react-icons/all-files/bs/BsFillMenuButtonWideFill";
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { MdOutlineModeComment } from 'react-icons/md';
import {  AiOutlineFundView } from "react-icons/ai";
import { BiWorld } from 'react-icons/bi';
import Chats from './configWeb/Chats';

let headers = new Headers();
const auth = localStorage.getItem("auth");

headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerFooterLeft : true,
      centerFooterRight : true,
      configData : [],
      tabNameConfig: [
        {
          _id: "1",
          name: "Thông tin trang chủ",
          icon: <AiOutlineHome style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "2",
          name: "Slider",
          icon: <svg style={{ width: "24px ", height: "24px " }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-slides-fill" viewBox="0 0 16 16">
            <path d="M7 7.78V5.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 7.778z" />
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 .496.438l.5 4A.5.5 0 0 1 11.5 9h-3v2.016c.863.055 1.5.251 1.5.484 0 .276-.895.5-2 .5s-2-.224-2-.5c0-.233.637-.429 1.5-.484V9h-3a.5.5 0 0 1-.496-.562l.5-4A.5.5 0 0 1 5 4z" />
          </svg>
        },
        {
          _id: "3",
          name: "Cấu hình SEO",
          icon: <PermDataSettingIcon style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "9",
          name: "Banner",
          icon: <svg style={{ width: "24px ", height: "24px " }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-slides-fill" viewBox="0 0 16 16">
          <path d="M7 7.78V5.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 7.778z" />
          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 .496.438l.5 4A.5.5 0 0 1 11.5 9h-3v2.016c.863.055 1.5.251 1.5.484 0 .276-.895.5-2 .5s-2-.224-2-.5c0-.233.637-.429 1.5-.484V9h-3a.5.5 0 0 1-.496-.562l.5-4A.5.5 0 0 1 5 4z" />
        </svg>
        },
        {
          _id: "10",
          name: "Nút",
          icon: <BsFillMenuButtonWideFill style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "12",
          name: "Popup",
          icon: <MdOutlineModeComment style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "11",
          name: "Voucher",
          icon: <AiOutlineFundView style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "13",
          name: "Aia",
          icon: <BiWorld style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "4",
          name: "Logos",
          icon: <IoLogoBuffer style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "5",
          name: "Mã Chat",
          icon: <AiFillWechat style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "6",
          name: "Cấu hình mạng xã hội",
          icon: <FacebookIcon style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "7",
          name: "Thông tin footer",
          icon: <InfoIcon style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "8",
          name: "Quản lý màu sắc",
          icon: <IoIosColorPalette style={{ width: "24px ", height: "24px " }} />
        }
      ],
      company_id: JSON.parse(localStorage.getItem("user")).company_id
        ? JSON.parse(localStorage.getItem("user")).company_id
        : null,

      action: "new",
      codeChat : "",
      idUpdate: "",
      checkFb: false,
      checkGg: true,
      data: [],
      updated: "",
      dataApi: [],
      delete: null,
      hidden: true,
      token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      role: localStorage.getItem("role"),
      type: localStorage.getItem("type"),
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
      updateLevel: "1",
      Message_Code: "",
      sub_mainColor: "",
      statusModalUpdate: false,
      dataConfigWeb: null,
      idUpdateCurrent: null,
      loadingSaveLogo: false,
      htmlFuncWeb: null,
      openHomeItem: false,
      modalSlide: false,
      actionSlide: "new",
    };
  }

  setStateName(name,value){
    this.setState({
      [name]: value
    })
  };
  ToggleViewConfigWeb(id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");
    const { tabNameConfig } = this.state;
    for (i = 0; i < tabNameConfig.length; i++) {
      if (tabNameConfig[i]._id === id) {
          tablinks[i].classList.add("tabcontent-left-active");
      } else {
          tablinks[i].classList.remove("tabcontent-left-active");  
      };
    };
    for (i = 0; i < tabcontent.length; i++) {
      if (tabcontent[i].id.replace("tabcontent","") === id) {
          tabcontent[i].classList.add("defaultOpen");
          tabcontent[i].style.animation = "hideOpa 1s ease-in-out";
      } else {
          tabcontent[i].classList.remove("defaultOpen");
          tabcontent[i].style.animation = "none";    
      };
    };
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
  async componentDidMount() {
    await this.getFooter();
    await this.getDataConfigWeb();
    await this.getData();
    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to == window.location.hash) {
        if (arr[i].hidden == true) {
          window.location.href = "#/";
        }
      }
    }
  }

  async getDataConfigWeb() {
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/getAll";
    const newComany_id = this.state.company_id
    let Output_newComany_id;
    if (newComany_id) {
      Output_newComany_id = newComany_id;
    } else {
      Output_newComany_id = "-1";
    }
    await axios
      .get(url, {
        params: {
          key: "webinfo",
          company_id: Output_newComany_id,
        },
      })
      .then((res) => {

        if (res.data.data.length > 0) {
          let dataConfig = res.data.data[0];

          let valueConfig = JSON.parse(dataConfig.Value);
          console.log("webinfo", valueConfig)

          this.setState(
            {
              dataConfigWeb: valueConfig,
              idUpdate: dataConfig._id,
              chats: valueConfig.value.chats,
              logos: valueConfig.value.logos,
              seoInfo: valueConfig.value.seoInfo,
              homepage: valueConfig.value.homepage,
              slideShow: valueConfig.value.slideShow,
              mxh: valueConfig.value.mxh,
              statusConfig: valueConfig.value.statusConfig,
              configData: valueConfig.value.statusConfig,
              footer : valueConfig.value.footer,
              banner : valueConfig.value.banner,
              button : valueConfig.value.button,
              voucher : valueConfig.value.voucher,
              form : valueConfig.value.form,
              aia : valueConfig.value.aia,

                          },
            () => {
              const { homepage, seoInfo, logos, chats, configData, mxh , footer, banner, button, voucher, form, aia} = this.state;
              if(aia){
                this.setState({
                  titleGetVoucherAia: this.state.aia.titleGetVoucherAia,
                  titleListCam: this.state.aia.titleListCam,
                  titleSuggestFormLoginGetVoucher : this.state.aia.titleSuggestFormLoginGetVoucher,
                  titleFormGetVoucherAfterLoginFormSuggest : this.state.aia.titleFormGetVoucherAfterLoginFormSuggest,
                })       
              }
              if(form){
                this.setState({
                  titleLogin: this.state.form.titleLogin,
                  btn_login: this.state.form.btn_login,
                  titleUpdate : this.state.form.titleUpdate,
                  btn_update : this.state.form.btn_update,
                })       
              }
              if(button){
                this.setState({
                  btn_soida: this.state.button.btn_soida,
                  btn_get_voucher: this.state.button.btn_get_voucher,
                  btn_get_voucher2 : this.state.button.btn_get_voucher2,
                  btn_register_get_voucher: this.state.button.btn_register_get_voucher,

                })       
              }
              if(voucher){
                
                this.setState({
                  sendSMS: this.state.voucher.sendSMS,
                  registerGetVoucher: this.state.voucher.registerGetVoucher,
                  loginWatchVoucher : this.state.voucher.loginWatchVoucher,
                  receiveVoucher: this.state.voucher.receiveVoucher,
                  textSales: this.state.voucher.textSales,
                  receiveVoucherSuccess : this.state.voucher.receiveVoucherSuccess,
                })  
              }
              if (banner) {
                this.setState({
                  hrefImageBannerMobile: this.state.banner.hrefImageBannerMobile,
                  hrefImageBannerDesktop: this.state.banner.hrefImageBannerDesktop,

                  imageBannerDesktop: this.state.banner.imageBannerDesktop,
                  imageBannerDesktop_link: this.state.banner.imageBannerDesktop,
                  imageBannerDesktop_show : this.state.banner.imageBannerDesktop,

                  imageBannerMobile: this.state.banner.imageBannerMobile,
                  imageBannerMobile_link: this.state.banner.imageBannerMobile,
                  imageBannerMobile_show : this.state.banner.imageBannerMobile,
                })
              }   
              if (footer) {
                this.setState({
                  footerLeft: this.state.footer.footerLeft,
                  footerRight: this.state.footer.footerRight,
                  centerFooterRight: this.state.footer.centerFooterRight,
                  centerFooterLeft: this.state.footer.centerFooterLeft,
                })
              }     
        
              if (homepage) {
                this.setState({
                  loginViewResult1 : this.state.homepage.loginViewResult1,
                  loginViewResult2 : this.state.homepage.loginViewResult2,
                  loginViewResult3 : this.state.homepage.loginViewResult3,
                  loginViewResult4 : this.state.homepage.loginViewResult4,
                  textResultDepthSkin : this.state.homepage.textResultDepthSkin,
                  titleResultDepthSkin : this.state.homepage.titleResultDepthSkin,
                  textResultSkin : this.state.homepage.textResult,
                  titleResultSkin : this.state.homepage.titleResult,
                  textAi: this.state.homepage.textAi,
                  titlePen1: this.state.homepage.title1,
                  titlePen2: this.state.homepage.title2,
                  sologan: this.state.homepage.sologan,
                  introduce: this.state.homepage.introduction,
                  titlePhoto: this.state.homepage.titlePhoto,
                  titleButtonPhoto: this.state.homepage.titleButtonPhoto,
                  titleButtonChoose: this.state.homepage.titleButtonChoose,
                  buttonSuggestLogin1: this.state.homepage.buttonSuggestLogin1,
                  buttonSuggestLogin2: this.state.homepage.buttonSuggestLogin2,
                  titleStep2: this.state.homepage.titleStep2,
                  titleStep1: this.state.homepage.titleStep1,
                  titleStep3: this.state.homepage.titleStep3,
                  image1: this.state.homepage.image1,
                  image1_show: this.state.homepage.image1,
                  image1_link: this.state.homepage.image1,
                  image3_link: this.state.homepage.image3,
                  image3: this.state.homepage.image3,
                  image3_show: this.state.homepage.image3,
                  image2_link: this.state.homepage.image2,
                  image2: this.state.homepage.image2,
                  image2_show: this.state.homepage.image2,
                  imagePhoto: this.state.homepage.imagePhoto,
                  imagePhoto_link: this.state.homepage.imagePhoto,
                  imagePhoto_show: this.state.homepage.imagePhoto,

                });
              }
              if (seoInfo) {
                this.setState({
                  titleSeo: this.state.seoInfo.title,
                  titleSeo2: this.state.seoInfo.titleSEO,
                  descSeo: this.state.seoInfo.description,
                  imgLayout: this.state.seoInfo.imageShare,
                  imgLayout_show: this.state.seoInfo.imageShare,
                  imgLayout_link: this.state.seoInfo.imageShare,

                  imageShareSeo : this.state.seoInfo.imageShareSeo,
                  imageShareSeo_link : this.state.seoInfo.imageShareSeo,
                  imageShareSeo_show : this.state.seoInfo.imageShareSeo,

                  keywordSeo: this.state.seoInfo.key,
                  authorSeo: this.state.seoInfo.author,
                });
              }
              if (logos) {
                this.setState({
                  hrefLogoHeader: valueConfig.value.logos.header.href,
                  hrefLogoFooter: valueConfig.value.logos.footer.href,
                  image: valueConfig.value.logos.header.logo,
                  imgLogoFooter: valueConfig.value.logos.footer.logo,
                });
              }
              if (chats) {
                this.setState({
                  codeChat: this.state.chats.tawk,
                  codeMess: this.state.chats.mess
                })
              }
              if (mxh) {
                this.setState({
                  keyAppFb: this.state.mxh.facebook.appid,
                  PassFb: this.state.mxh.facebook.password,
                  hrefFb: this.state.mxh.facebook.href,

                  keyAppZalo: this.state.mxh.zalo.appid,
                  PassZalo: this.state.mxh.zalo.password,
                  hrefZalo: this.state.mxh.zalo.href,

                  keyAppGg: this.state.mxh.google.appid,
                  PassGg: this.state.mxh.google.password,
                  hrefGg: this.state.mxh.google.href,
                })

              }
            }
          );
        } else {
          let templateDataConfigWeb = {
            key: "webinfo",
            value: {
              logos: {
                footer: {
                  logo: "",
                  href: "",
                },
                header: {
                  logo: "",
                  href: "",
                },
              },
              chats: {
                tawk: "",
              },

              slideShow: [],
              statusConfig: [],

              homepage: {},
              seoInfo: {},

              mxh: {
                facebook: {
                  appid: "",
                  password: "",
                  href: "",
                },
                google: {
                  appid: "",
                  password: "",
                  href: "",
                },
                zalo: {
                  appid: "",
                  password: "",
                  href: "",
                },
              },

            },
          };

          this.setState(
            {
              dataConfigWeb: templateDataConfigWeb,
            },
            () => {
              this.addDataConfig();
            }
          );
        }
      });
  }
  async addDataConfig() {
    const newComany_id = this.state.company_id;
    let Output_newComany_id;
    if (newComany_id) {
      Output_newComany_id = newComany_id;
    } else {
      Output_newComany_id = "-1";
    }
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/add";
    axios
      .post(url, {
        dataType: "1",
        company_id: Output_newComany_id,
        key: "webinfo",
        value: JSON.stringify(this.state.dataConfigWeb),
        type: "system",
      })
      .then((res) => {

      });
  }
  async getFooter() {
    var baseUrlapi = Constants.BASE_URL;
    let urlCall = Constants.GET_FOOTER;
    let url = baseUrlapi + urlCall;
    const newComany_id = this.state.company_id;
    let Output_newComany_id;
    if (newComany_id) {
      Output_newComany_id = newComany_id;
    } else {
      Output_newComany_id = "-1";
    }
    axios
      .get(url, {
        params: {
          company_id: Output_newComany_id,
        },
      })
      .then((res) => {
        this.setState({
          dataFooter: res.data.data,
        });

      });
  }

  async updateFooter() {
    const { slugFooter, updateLink, contentFooter, updateTitle } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let urlCall = Constants.UPDATE_FOOTER;
    let url = baseUrlapi + urlCall;
    const newComany_id = this.state.company_id
    let Output_newComany_id;
    if (newComany_id) {
      Output_newComany_id = newComany_id;
    } else {
      Output_newComany_id = "-1";
    }
    await axios
      .post(url, {
        id: this.state.idFooterEditor,
        title: updateTitle,
        content: contentFooter,
        slug: slugFooter,
        link: updateLink,
        company_id: Output_newComany_id,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Cập nhật thành công",
          showConfirmButton: false,
          timer: 700,
        });
        this.setState({
          statusModalUpdate: false
        })
        this.getFooter();
      });
  }
  async addFooter() {
    const { slugFooter, updateLink, contentFooter, updateTitle } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let urlCall = Constants.ADD_FOOTER;
    let url = baseUrlapi + urlCall;
    const newComany_id = this.state.company_id
    let Output_newComany_id;
    if (newComany_id) {
      Output_newComany_id = newComany_id;
    } else {
      Output_newComany_id = "-1";
    }
    await axios
      .post(url, {
        title: updateTitle,
        content: contentFooter,
        slug: slugFooter,
        link: updateLink,
        company_id: Output_newComany_id,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Thêm mới thành công",
          showConfirmButton: false,
          timer: 700,
        });
        this.setState({
          statusModalUpdate: false
        })
        this.getFooter();
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
  async SaveAllConfigWeb(change) {
    const {
      dataConfigWeb,
      introduce,
      sologan,
      titleSeo,
      titleSeo2,
      descSeo,
      authorSeo,
      keywordSeo,
      imgLayout_link,
      image1_link,
      image2_link,
      image3_link,
    } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/update";
    const newComany_id = this.state.company_id;
    let itOutput = "-1";
    if (newComany_id) {
      itOutput = newComany_id;
    }
    let coppyData = {
      ...dataConfigWeb,
    };

    if (change === "mxh") {
      if(!coppyData.value.mxh){
        coppyData.value.mxh = {}
      }
      // coppyData.value.statusConfig = this.state.configData;
      coppyData.value.mxh.facebook.appid = this.state.keyAppFb;
      coppyData.value.mxh.facebook.password = this.state.PassFb;
      coppyData.value.mxh.facebook.href = this.state.hrefFb;

      coppyData.value.mxh.google.appid = this.state.keyAppGg;
      coppyData.value.mxh.google.password = this.state.PassGg;
      coppyData.value.mxh.google.href = this.state.hrefGg;

      coppyData.value.mxh.zalo.appid = this.state.keyAppZalo;
      coppyData.value.mxh.zalo.password = this.state.PassZalo;
      coppyData.value.mxh.zalo.href = this.state.hrefZalo;
    }
    if (change === "chats") {

      coppyData.value.chatMess = this.state.codeMess;
      coppyData.value.tawk = this.state.codeChat;
    }
    if (change === "voucher") {
      if(!coppyData.value.voucher){
        coppyData.value.voucher = {}
      }
      coppyData.value.voucher.sendSMS = this.state.sendSMS;
      coppyData.value.voucher.registerGetVoucher = this.state.registerGetVoucher;
      coppyData.value.voucher.loginWatchVoucher = this.state.loginWatchVoucher;
      coppyData.value.voucher.receiveVoucher = this.state.receiveVoucher;
      coppyData.value.voucher.textSales = this.state.textSales;
      coppyData.value.voucher.receiveVoucherSuccess = this.state.receiveVoucherSuccess;
    }
    if (change === "button") {
      if(!coppyData.value.button){
        coppyData.value.button = {}
        
      }
      coppyData.value.button.btn_register_get_voucher = this.state.btn_register_get_voucher;
      coppyData.value.button.btn_soida = this.state.btn_soida;
      coppyData.value.button.btn_get_voucher = this.state.btn_get_voucher;
      coppyData.value.button.btn_get_voucher2 = this.state.btn_get_voucher2;

    }
    if (change === "aia") {
      if(!coppyData.value.aia){
        coppyData.value.aia = {}
        
      }
      coppyData.value.aia.titleListCam = this.state.titleListCam;
      coppyData.value.aia.titleGetVoucherAia = this.state.titleGetVoucherAia;
      coppyData.value.aia.titleSuggestFormLoginGetVoucher = this.state.titleSuggestFormLoginGetVoucher;
      coppyData.value.aia.titleFormGetVoucherAfterLoginFormSuggest = this.state.titleFormGetVoucherAfterLoginFormSuggest;
    }
    
    if (change === "form") {
      if(!coppyData.value.form){
        coppyData.value.form = {}
      }
      coppyData.value.form.btn_update = this.state.btn_update;
      coppyData.value.form.titleUpdate = this.state.titleUpdate;

      coppyData.value.form.btn_login = this.state.btn_login;
      coppyData.value.form.titleLogin = this.state.titleLogin;
    }
    if (change === "homepage") {
      if(!coppyData.value.homepage){
        coppyData.value.homepage = {}
      }
      coppyData.value.homepage.loginViewResult1 = this.state.loginViewResult1;
      coppyData.value.homepage.loginViewResult2 = this.state.loginViewResult2;
      coppyData.value.homepage.loginViewResult3 = this.state.loginViewResult3;
      coppyData.value.homepage.loginViewResult4 = this.state.loginViewResult4;
      coppyData.value.homepage.titleResultDepthSkin = this.state.titleResultDepthSkin;
      coppyData.value.homepage.textResultDepthSkin = this.state.textResultDepthSkin;
      coppyData.value.homepage.titleResult = this.state.titleResultSkin;
      coppyData.value.homepage.textResult = this.state.textResultSkin;
      coppyData.value.homepage.titleButtonPhoto = this.state.titleButtonPhoto;
      coppyData.value.homepage.titleButtonChoose = this.state.titleButtonChoose;
      coppyData.value.homepage.buttonSuggestLogin1 = this.state.buttonSuggestLogin1;
      coppyData.value.homepage.buttonSuggestLogin2 = this.state.buttonSuggestLogin2;
      coppyData.value.homepage.titleStep1 = this.state.titleStep1;
      coppyData.value.homepage.titleStep2 = this.state.titleStep2;
      coppyData.value.homepage.titleStep3 = this.state.titleStep3;
      coppyData.value.homepage.titlePhoto = this.state.titlePhoto;
      coppyData.value.homepage.title1 = this.state.titlePen1;
      coppyData.value.homepage.title2 = this.state.titlePen2;
      coppyData.value.homepage.textAi = this.state.textAi;
      coppyData.value.homepage.sologan = sologan;
      coppyData.value.homepage.introduction = introduce;
      let imgLink = await this.postImage(this.state.imagePhoto_link);
      let newImage2 = await this.postImage(image2_link);
      let newImage3 = await this.postImage(image3_link);
      if (imgLink) {
        coppyData.value.homepage.imagePhoto = `${Constants.BASE_URL}image_brand/${imgLink}`;
      }
      if (newImage2) {
        coppyData.value.homepage.image2 = `${Constants.BASE_URL}image_brand/${newImage2}`;
      }
      if (newImage3) {
        coppyData.value.homepage.image3 = `${Constants.BASE_URL}image_brand/${newImage3}`;
      }
    }
    if (change === "seoInfo") {
      if(!coppyData.value.seoInfo){
        coppyData.value.seoInfo = {}
      }
      coppyData.value.seoInfo.title = titleSeo;
      coppyData.value.seoInfo.titleSEO = titleSeo2;
      coppyData.value.seoInfo.description = descSeo;
      coppyData.value.seoInfo.author = authorSeo;
      coppyData.value.seoInfo.key = keywordSeo;
      let newImage4 = await this.postImage(imgLayout_link);
      if (newImage4) {
        coppyData.value.seoInfo.favicon = `${Constants.BASE_URL}image_brand/${newImage4}`;
      }
      let imageShare = await this.postImage(this.state.imageShareSeo_link);
      if (imageShare) {
        coppyData.value.seoInfo.imageShareSeo = `${Constants.BASE_URL}image_brand/${imageShare}`;
      }
      this.setState({
        dataConfigWeb: coppyData,
      });
    }
    if (change === "footer") {
      if(!coppyData.value.footer){
        coppyData.value.footer = {};
      }
      coppyData.value.footer.footerLeft = this.state.footerLeft;
      coppyData.value.footer.footerRight = this.state.footerRight;
      coppyData.value.footer.centerFooterRight = this.state.centerFooterRight;
      coppyData.value.footer.centerFooterLeft = this.state.centerFooterLeft;
      this.setState({
        dataConfigWeb: coppyData,
      });
    }
    if (change === "logos") {
      if(!coppyData.value.logos){
        coppyData.value.logos = {};
      }
      let newImage = await this.postImage(this.state.image_link);
      if (newImage) {
        coppyData.value.logos.header.logo = `${Constants.BASE_URL}image_brand/${newImage}`;
      }
      let newImage2 = await this.postImage(this.state.imgLogoFooter_link);
      if (newImage2) {
        coppyData.value.logos.footer.logo = `${Constants.BASE_URL}image_brand/${newImage2}`;
      }
      coppyData.value.logos.footer.href = this.state.hrefLogoFooter;
      coppyData.value.logos.header.href = this.state.hrefLogoHeader;
      this.setState({
        dataConfigWeb: coppyData,
      });
    }
    if (change === "banner") {
      if(!coppyData.value.banner){
        coppyData.value.banner = {};
      }
      let newImage = await this.postImage(this.state.imageBannerDesktop_link);
      if (newImage) {
        coppyData.value.banner.imageBannerDesktop = `${Constants.BASE_URL}image_brand/${newImage}`;
      }
      let newImage2 = await this.postImage(this.state.imageBannerMobile_link);
      if (newImage2) {
        coppyData.value.banner.imageBannerMobile = `${Constants.BASE_URL}image_brand/${newImage2}`;
      }

      coppyData.value.banner.hrefImageBannerDesktop = this.state.hrefImageBannerDesktop;
      coppyData.value.banner.hrefImageBannerMobile = this.state.hrefImageBannerMobile;

      this.setState({
        dataConfigWeb: coppyData,
      });
    }  
    await axios
      .post(url, {
        value: JSON.stringify(coppyData),
        dataType: "1",
        type: "system",
        company_id: itOutput,
        id: this.state.idUpdate,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Lưu thành công",
          showConfirmButton: false,
          timer: 700,
        });
        this.getDataConfigWeb();
      });
  }
  async onUpdate() {
    const { dataConfigWeb } = this.state;

    const newComany_id = this.state.company_id
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/update";
    await axios.post(url, {
      value: JSON.stringify(dataConfigWeb),
      dataType: "1",
      type: "system",
      company_id: newComany_id,
      id: this.state.idUpdate,
    });
  }
  getData = async () => {
    const newComany_id = this.state.company_id;

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.CONFIG_THEME_GET + "/" + newComany_id,
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
  closeFormEdit = () => {
    this.setState({ statusModalUpdate: false });
  };
  openFormAddSlide() {
    this.setState({
      actionSlide: "new",
      modalSlide: true,
      imageSlide: "",
      imageSlide_link: "",
      imageSlide_show: "",
      contentSlide: "",
    });
  }
  async saveAddSlide() {
    const { contentSlide, dataConfigWeb, imageSlide_link } = this.state;
    let newImage = await this.postImage(imageSlide_link);
    let imageOutput;
    if (newImage) {
      imageOutput = `${Constants.BASE_URL}image_brand/${newImage}`;
    } else {
      imageOutput = "";
    }
    let ob = {
      image: imageOutput,
      content: contentSlide,
    };
    let coppy = { ...dataConfigWeb };
    coppy.value.slideShow.push(ob);
    this.setState(
      {
        dataConfigWeb: coppy,
      },
      async () => {
        await this.onUpdate().then(() => {
          Swal.fire({
            icon: "success",
            title: "Thêm mới thành công",
            showConfirmButton: false,
            timer: 700,
          });
          this.setState({
            modalSlide: false,
          });
          this.getDataConfigWeb();
        });
      }
    );
  }
  openFormEditSlide(item, i) {

    this.setState({
      actionSlide: "edit",

      modalSlide: true,

      imageSlide: item.image,
      imageSlide_show: item.image,
      contentSlide: item.content,
      indexSlideUpdate: i,
    });
  }
  async deleteSlide(i) {
    const { dataConfigWeb } = this.state;
    let coppyData = {
      ...dataConfigWeb,
    };
    coppyData.value.slideShow.splice(i, 1);
    this.setState(
      {
        dataConfigWeb: coppyData,
      },
      async () => {
        await this.onUpdate().then(() => {
          Swal.fire({
            icon: "success",
            title: "Xóa thành công",
            showConfirmButton: false,
            timer: 700,
          });
          this.getDataConfigWeb();
        });
      }
    );
  }
  async saveEditSlide() {
    const { imageSlide, contentSlide, dataConfigWeb, indexSlideUpdate } =
      this.state;
    let ob = {
      image: imageSlide,
      content: contentSlide,
    };
    let coppy = { ...dataConfigWeb };
    coppy.value.slideShow[indexSlideUpdate] = ob;

    await this.setState(
      {
        dataConfigWeb: coppy,
      },
      async () => {
        Swal.fire({
          icon: "success",
          title: "Cập nhật thành công",
          showConfirmButton: false,
          timer: 700,
        });
        this.setState({
          modalSlide: false,
        });
        await this.onUpdate();

        this.getDataConfigWeb();
      }
    );
  }
  async updateCompany(e) {
    e.preventDefault();
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

    const newComany_id = this.state.company_id;

    const body = {
      isHash: false,
      sub_mainColor: sub_mainColor,
      mainColor: mainColor,
      sub2_mainColor: sub2_mainColor,
      company_id: newComany_id,
      button_color: button_color,
      sucess_color: sucess_color,
      error_color: error_color,
      text_mainColor: text_mainColor,
    };

    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.CONFIG_THEME_UPDATE,
      method: "POST",
      data: body,
    });

    if (res.data.is_success == true) {
      Swal.fire({
        icon: "success",
        title: "Cập nhật thành công",
        showConfirmButton: false,
        timer: 700,
      });
      await this.getData();
    } else {
      alert(res.data.message);

    }
  }
  setStateByName=(name, value)=>{
    this.setState({ [name]: value });
  }
  render() {
    const {
      contentSlide,
      slideShow,
      titleSeo,
      descSeo,
      keywordSeo,
      authorSeo,
      titleSeo2,
      dataFooter,
      isDisable,

      mainColor,
    } = this.state;

    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn" >
          <div className="flex-tabs">
            <div class="tab">
              <List
                sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                {
                  this.state.tabNameConfig ? this.state.tabNameConfig.map((item, i) => {
                    return (
                      <ListItemButton
                        key={item._id}
                        className={i === 0 ? " tablinks tabcontent-left-active" : " tablinks"}
                        onClick={() => this.ToggleViewConfigWeb(item._id)}
                        sx={{ pl: 4 }}
                      >
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText className="tabcontent-left" style={{ fontSize: "14px !important", color: "rgb(52, 71, 103)" }} primary={item.name} />
                      </ListItemButton>
                    );
                  }) : null
                }
              </List>
            </div>
            <div className="tabcontents">
              <div id="tabcontent1" className="tabcontent defaultOpen">
                <div class="text-center">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => this.SaveAllConfigWeb("homepage")}
                  >
                    Lưu thay đổi
                  </Button>
                </div>
                <TextFieldGroup
                  field="titlePen1"
                  label="Heading 1:"
                  value={this.state?.titlePen1}
                  onChange={(e) => {
                    this.setState({ titlePen1: e.target.value });
                  }}
                />
                <TextFieldGroup
                  field="titlePen2"
                  label="Heading 2: "
                  value={this.state?.titlePen2}
                  onChange={(e) => {
                    this.setState({ titlePen2: e.target.value });
                  }}
                />

                <TextFieldGroup
                  field="sologan"
                  label="Sologan:"
                  value={this.state?.sologan}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ sologan: e.target.value });
                  }}
                />

                <TextFieldGroup
                  field="introduce"
                  label="Giới thiệu:"
                  value={this.state?.introduce}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ introduce: e.target.value });
                  }}
                />

               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/huong-dan-chup-anh.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                      <TextFieldGroup
                      field="image1"
                      label="Hình ảnh hướng dẫn chụp ảnh (400px * 400px):"
                      type={"file"}
                      className="mt-5"
                      onChange={(e) => {
                        this.onChangeImage(e, "imagePhoto", "imagePhoto_link", "imagePhoto_show");
                      }}
                      onClick={(e) => {
                        e.target.value = null;
                        this.setState({ imagePhoto_show: "" });
                      }}
                    />
                    <div class="text-center mb-5">
                      <img
                        alt=""
                        style={{ width: "200px", marginBottom: 20 }}
                        height="auto"
                        src={this.state?.imagePhoto}
                      />
                    </div>
                  </div>      
               </div>
                <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '300px' , marginRight:'10px'}} src="/assets/image/tieu-de-huong-dan-chup-anh.png" alt="img" />
                  </div>
                      <div style={{ width : '100%' }}>
                      <TextFieldGroup
                      field="titlePhoto"
                      label="Tiêu đề hình ảnh hướng dẫn chụp ảnh:"
                      value={this.state?.titlePhoto}
                      placeholder={""}
                      onChange={(e) => {
                        this.setState({ titlePhoto: e.target.value });
                      }}
                    />
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/tieu-de-nut-chup-anh.png" alt="img" />
                  </div>
                      <div style={{ width : '100%' }}>
                      <TextFieldGroup
                      field="titleButtonPhoto"
                      label="Tiêu đề nút chụp ảnh:"
                      value={this.state?.titleButtonPhoto}
                      placeholder={""}
                      onChange={(e) => {
                        this.setState({ titleButtonPhoto: e.target.value });
                      }}
                    />
                   
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/tieu-de-huong-dan-chon-anh.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                      <TextFieldGroup
                  field="titleButtonChoose"
                  label="Tiêu đề nút chọn ảnh:"
                  value={this.state?.titleButtonChoose}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ titleButtonChoose: e.target.value });
                  }}
                />
                   
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/tieu-de-goi-y-dang-nhap-1.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="buttonSuggestLogin1"
                  label="Tiêu đề nút gợi ý đăng nhập - 1:"
                  value={this.state?.buttonSuggestLogin1}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ buttonSuggestLogin1: e.target.value });
                  }}
                />
                   
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/tieu-de-goi-y-dang-nhap-2.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="buttonSuggestLogin2"
                  label="Tiêu đề nút gợi ý đăng nhập - 2:"
                  value={this.state?.buttonSuggestLogin2}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ buttonSuggestLogin2: e.target.value });
                  }}
                />
                   
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/chup-anh-buoc-1.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="titleStep1"
                  label="Tiều đề : Bước 1 - Chụp ảnh:"
                  value={this.state?.titleStep1}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ titleStep1: e.target.value });
                  }}
                />
                   
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/chup-anh-buoc-2.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="titleStep2"
                  label="Tiều đề : Bước 2 - Đã chụp - tải ảnh:"
                  value={this.state?.titleStep2}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ titleStep2: e.target.value });
                  }}
                />
                   
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/chup-anh-buoc-3.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="titleStep3"
                  label="Tiều đề : Bước 3 - Kết quả:"
                  value={this.state?.titleStep3}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ titleStep3: e.target.value });
                  }}
                />
                   
                  </div>      
               </div> 
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/ket-qua-tong-quan.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="titleResultSkin"
                  label="Tiều đề : Kết quả soi da:"
                  value={this.state?.titleResultSkin}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ titleResultSkin: e.target.value });
                  }}
                />
                   
                  </div>      
               </div>  
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/ket-qua-tong-quan-2.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="textResultSkin"
                  label="Tiêu đề phụ : Kết quả soi da:"
                  value={this.state?.textResultSkin}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ textResultSkin: e.target.value });
                  }}
                />
                   
                  </div>      
               </div>    
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/ket-qua-chuyen-sau.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="titleResultDepthSkin"
                  label="Tiều đề : Kết quả chuyên sâu:"
                  value={this.state?.titleResultDepthSkin}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ titleResultDepthSkin: e.target.value });
                  }}
                />
                   
                  </div>      
               </div>  
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/ket-qua-chuyen-sau2.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="textResultDepthSkin"
                  label="Tiêu đề phụ : Kết quả chuyên sâu:"
                  value={this.state?.textResultDepthSkin}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ textResultDepthSkin: e.target.value });
                  }}
                />
                   
                  </div>      
               </div> 
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/dang-nhap-xem-ket-qua.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="loginViewResult1"
                  label="Gợi ý đăng nhập: Vị trí 1:"
                  value={this.state?.loginViewResult1}
                  placeholder={"Vui lòng"}
                  onChange={(e) => {
                    this.setState({ loginViewResult1: e.target.value });
                  }}
                />
                   
                  </div>    
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="loginViewResult2"
                  label="Gợi ý đăng nhập: Vị trí 2:"
                  value={this.state?.loginViewResult2}
                  placeholder={"Để nhận ngay"}
                  onChange={(e) => {
                    this.setState({ loginViewResult2: e.target.value });
                  }}
                />
                   
                  </div>   
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="loginViewResult3"
                  label="Gợi ý đăng nhập: Vị trí 3:"
                  value={this.state?.loginViewResult3}
                  placeholder={"E-voucher"}
                  onChange={(e) => {
                    this.setState({ loginViewResult3: e.target.value });
                  }}
                />
                   
                  </div>    
                  <div style={{ width : '100%' }}>
                  <TextFieldGroup
                  field="loginViewResult4"
                  label="Gợi ý đăng nhập: Vị trí 4:"
                  value={this.state?.loginViewResult4}
                  placeholder={"giảm giá 1.000.000 VND"}
                  onChange={(e) => {
                    this.setState({ loginViewResult4: e.target.value });
                  }}
                />
                   
                  </div>  
               </div> 
              </div>
              <div id="tabcontent10" className="tabcontent">
                <div class="text-center">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => this.SaveAllConfigWeb("button")}
                  >
                    Lưu thay đổi
                  </Button>
                </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/phan-tich-soi-da.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="btn_soida"
                    label="Phân tích tình trạng da"
                    value={this.state?.btn_soida}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ btn_soida: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/get-voucher.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="btn_get_voucher"
                    label="Nhận Voucher"
                    value={this.state?.btn_get_voucher}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ btn_get_voucher: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/dang-ky-nhan-voucher-nut.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="btn_register_get_voucher"
                    label="Nhận Voucher"
                    value={this.state?.btn_register_get_voucher}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ btn_register_get_voucher: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/get-voucher2.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="btn_get_voucher2"
                    label="Nhận quà Voucher"
                    value={this.state?.btn_get_voucher2}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ btn_get_voucher2: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
              </div>
              <div id="tabcontent12" className="tabcontent">
                <div class="text-center">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => this.SaveAllConfigWeb("form")}
                  >
                    Lưu thay đổi
                  </Button>
                </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/tieu-de-dang-nhap.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="titleLogin"
                    label="Tiêu đề: Form đăng nhập"
                    value={this.state?.titleLogin}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ titleLogin: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/nut-dang-nhap.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="btn_login"
                    label="Tiêu đề: Nút đăng nhập"
                    value={this.state?.btn_login}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ btn_login: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/tieu-de-cap-nhap.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="titleUpdate"
                    label="Tiêu đề: Form cập nhập"
                    value={this.state?.titleUpdate}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ titleUpdate: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/nut-cap-nhap.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="btn_update"
                    label="Tiêu đề: Nút cập nhập"
                    value={this.state?.btn_update}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ btn_update: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               
              </div>
              <div id="tabcontent13" className="tabcontent">
                <div class="text-center">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => this.SaveAllConfigWeb("aia")}
                  >
                    Lưu thay đổi
                  </Button>
                </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/da-dang-nhap-nhan-voucher-aia.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="titleGetVoucherAia"
                    label="Tiêu đề: Form đã đăng nhập - nhận voucher"
                    value={this.state?.titleGetVoucherAia}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ titleGetVoucherAia: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/danh-sach-thuong-hieu.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="titleListCam"
                    label="Tiêu đề: Danh sách thương hiệu"
                    value={this.state?.titleListCam}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ titleListCam: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/goi-y-dang-nhap-nhan-voucher-aia.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="titleSuggestFormLoginGetVoucher"
                    label="Tiêu đề: Form gợi ý đăng nhập nhận voucher"
                    value={this.state?.titleSuggestFormLoginGetVoucher}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ titleSuggestFormLoginGetVoucher: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/tieu-de-sau-khi-dang-nhap-nhan-voucher-aia.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="titleFormGetVoucherAfterLoginFormSuggest"
                    label="Tiêu đề: Sau khi đăng nhập form gợi ý đăng nhập nhận voucher"
                    value={this.state?.titleFormGetVoucherAfterLoginFormSuggest}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ titleFormGetVoucherAfterLoginFormSuggest: e.target.value });
                    }}
                  />           
                  </div>      
               </div>

               
              </div>
              <div id="tabcontent11" className="tabcontent">
                <div class="text-center">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => this.SaveAllConfigWeb("voucher")}
                  >
                    Lưu thay đổi
                  </Button>
                </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/receive-voucher.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="receiveVoucher"
                    label="Tiêu đề: Thông báo nhận voucher"
                    value={this.state?.receiveVoucher}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ receiveVoucher: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/text-sales.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="textSales"
                    label="Tiêu đề: Khuyến mãi"
                    value={this.state?.textSales}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ textSales: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/get-voucher-success.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="receiveVoucherSuccess"
                    label="Tiêu đề: Nhận voucher thành công"
                    value={this.state?.receiveVoucherSuccess}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ receiveVoucherSuccess: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/dang-nhap-xem-voucher.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="loginWatchVoucher"
                    label="Tiêu đề: Đăng nhập xem voucher"
                    value={this.state?.loginWatchVoucher}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ loginWatchVoucher: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/dang-ky-nhan-voucher.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="registerGetVoucher"
                    label="Tiêu đề: Đăng ký nhận voucher"
                    value={this.state?.registerGetVoucher}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ registerGetVoucher: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
               <div class="flex-a-center config-box-border">
                  <div>
                    <img style={{ maxWidth : '150px' , marginRight:'10px'}} src="/assets/image/gui-sms.png" alt="img" />
                  </div>
                  <div style={{ width : '100%' }}>
                    <TextFieldGroup
                    field="sendSMS"
                    label="Tiêu đề: Gửi SMS"
                    value={this.state?.sendSMS}
                    placeholder={""}
                    onChange={(e) => {
                      this.setState({ sendSMS: e.target.value });
                    }}
                  />           
                  </div>      
               </div>
              
              </div>

              <div id="tabcontent2" className="tabcontent">
                <div class="flex-end mt-3">
                  <CButton
                    color="info"
                    style={{ marginBottom: "10px" }}
                    size="md"
                    className="btn-main"
                    onClick={() => this.openFormAddSlide()}
                  >
                    <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                    <p style={{ margin: "auto 0" }}>Thêm mới</p>
                  </CButton>

                </div>

                <table
                  ble
                  className="table table-hover mt-3 table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">STT.</th>
                      {/* <th className="text-center">Tên</th> */}
                      <th className="text-center">Hình ảnh</th>
                      <th className="text-center">Mô tả</th>

                      <th className="text-center">#</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slideShow
                      ? slideShow.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td className="text-center">{i + 1}</td>
                            <td className="text-center">
                              <img
                                width="150"
                                height="150"
                                src={item.image}
                                alt=""
                              />
                            </td>

                            <td className="text-center">{item.content}</td>
                            {/* <td className="text-center">
                                {Number(item.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} đ
                              </td> */}
                            <td className="">
                              <div className="flex">
                                <CButton
                                  shape="rounded-pill"
                                  variant="ghost"
                                  color="info"
                                  style={styles.mgl5}
                                  size="md"
                                  onClick={() => this.openFormEditSlide(item, i)}
                                >
                                  <FiEdit3
                                    style={styles.icon}
                                    className="icon"

                                    name="cilPencil"
                                  />
                                </CButton>{" "}
                                <CButton
                                  shape="rounded-pill"
                                  variant="ghost"
                                  color="danger"
                                  style={styles.mgl5}
                                  onClick={() => this.deleteSlide(i)}
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
                      : null}
                  </tbody>
                </table>
              </div>
              <div id="tabcontent3" className="tabcontent">
                <div className="text-center">
                  {" "}
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => this.SaveAllConfigWeb("seoInfo")}
                  >
                    Lưu thay đổi
                  </Button>
                </div>
                <TextFieldGroup
                  field="titleSeo"
                  label="Tiêu đề:"
                  value={titleSeo}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ titleSeo: e.target.value });
                  }}
                />
                <TextFieldGroup
                  field="titleSeo2"
                  label="Tiêu đề 2:"
                  value={titleSeo2}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ titleSeo2: e.target.value });
                  }}
                />
                 <TextFieldGroup
                  field="image1"
                  label="Hình ảnh share (***px * ***px):"
                  type={"file"}
                  className="mt-5"
                  onChange={(e) => {
                    this.onChangeImage(e, "imageShareSeo", "imageShareSeo_link", "imageShareSeo_show");
                  }}
                  onClick={(e) => {
                    e.target.value = null;
                    this.setState({ imageShareSeo_show: "" });
                  }}
                />
                <div class="text-center mb-5">
                  <img
                    alt=""
                    style={{ width: "200px", marginBottom: 20 }}
                    height="auto"
                    src={this.state?.imageShareSeo}
                  />
                </div>
                <TextFieldGroup
                  field="keywordSeo"
                  label="Từ khóa:"
                  value={keywordSeo}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ keywordSeo: e.target.value });
                  }}
                />
                <label className="control-label">Mô tả:</label>
                <CTextarea
                  name="descSeo"
                  rows="4"
                  value={descSeo}
                  onChange={(e) => {
                    this.setState({ descSeo: e.target.value });
                  }}
                />
                <TextFieldGroup
                  field="authorSeo"
                  label="Tác giả:"
                  value={authorSeo}
                  placeholder={""}
                  onChange={(e) => {
                    this.setState({ authorSeo: e.target.value });
                  }}
                />
                <TextFieldGroup
                  field="imgLayout"
                  label="Hình ảnh favicon: (20px * 20px)"
                  type={"file"}
                  className="mt-5"
                  onChange={(e) => {
                    this.onChangeImage(
                      e,
                      "imgLayout",
                      "imgLayout_link",
                      "imgLayout_show"
                    );
                  }}
                  onClick={(e) => {
                    e.target.value = null;
                    this.setState({ imgLayout_show: "" });
                  }}
                />
                <div className="text-center">
                  <img
                    alt=""
                    style={{ width: "140px", marginBottom: 20 }}
                    src={this.state.imgLayout}
                  />
                </div>
              </div>
              <div id="tabcontent4" className="tabcontent ">
                <div class="text-center">
                  <CButton
                    onClick={() => this.SaveAllConfigWeb("logos")}
                    style={styles.mgl5}
                    outline
                    color="success"
                    size="md"
                  >
                    {/* <CIcon name="cilPencil" /> */}
                    Lưu thay đổi
                  </CButton>
                </div>
                <div className="mt-3"></div>
                <div class="mt-3">
                  <h1>Header</h1>
                  <TextFieldGroup
                    field="image"
                    label="Logo :(Tỷ lệ 2:1)"
                    type={"file"}
                    onChange={(e) => {
                      this.onChangeImage(e, "image", "image_link", "image_show");
                    }}
                    onClick={(e) => {
                      e.target.value = null;
                      this.setState({ image_show: "" });
                    }}
                  />
                  <div class="text-center">
                    <img
                      alt=""
                      style={{ width: "140px" }}
                      height="auto"
                      src={this.state.image}
                    />
                  </div>
                  <TextFieldGroup
                    field="hrefLogoHeader"
                    label="Đường dẫn"
                    value={this.state.hrefLogoHeader}
                    placeholder=""
                    type={"text"}
                    className="mt-3"
                    // value={this.state.image}
                    onChange={(e) => {
                      this.setState({
                        hrefLogoHeader: e.target.value,
                      });
                    }}
                  />
                </div>
                <hr />
                <h1>Footer</h1>
                <TextFieldGroup
                  field="logoFooter"
                  label="Logo :(Tỷ lệ 2:1)"
                  type={"file"}
                  className="mt-5"
                  onChange={(e) => {
                    this.onChangeImage(
                      e,
                      "imgLogoFooter",
                      "imgLogoFooter_link",
                      "imgLogoFooter_show"
                    );
                  }}
                  onClick={(e) => {
                    e.target.value = null;
                    this.setState({ imgLogoFooter_show: "" });
                  }}
                />
                <div className="text-center">
                  <img
                    alt=""
                    style={{ width: "200px", marginBottom: 20 }}
                    src={this.state.imgLogoFooter}
                  />
                </div>
                <TextFieldGroup
                  field="hrefLogoHeader"
                  label="Đường dẫn"
                  value={this.state.hrefLogoFooter}
                  placeholder=""
                  type={"text"}
                  className="mt-3"
                  // value={this.state.image}
                  onChange={(e) => {
                    this.setState({
                      hrefLogoFooter: e.target.value,
                    });
                  }}
                />

              </div>
              <div id="tabcontent5" className="tabcontent ">
                <Chats
                setStateByName={this.setStateByName}
                codeChat={this.state.codeChat}
                codeMess={this.state.codeMess}
                />
              </div>
              <div id="tabcontent6" className="tabcontent">
                <div class="text-center">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => this.SaveAllConfigWeb("mxh")}
                  >
                    Lưu thay đổi
                  </Button>
                </div>
                <div class="mt-3"></div>
                {this.state.configData.map((product, i) => {
                  return (
                    <div class="configData_item">
                      <div class="">
                        <strong>{product.label}</strong>
                      </div>
                      <div class="">
                        <FormGroup>
                          <FormControlLabel
                            onChange={(e) => {
                              let x = [...this.state.configData];
                              x[i].value = !x[i].value;
                              this.setState({
                                configData: x,
                              });
                            }}
                            checked={product.value}
                            control={<Switch defaultChecked />}
                            label=""
                          />
                        </FormGroup>
                        <span>{product.value ? "Kích hoạt" : "Tắt"}</span>
                      </div>
                    </div>
                  );
                })}
                <div class="text-center">
                  <p>Facebook</p>
                </div>
                <div class="col-md-12 mt-3">
                  <div>
                    <TextFieldGroup
                      field=""
                      label="Mã ứng dụng"
                      value={this.state.keyAppFb}
                      onChange={(e) => {
                        this.setState({ keyAppFb: e.target.value });
                      }}
                    />

                    <TextFieldGroup
                      field=""
                      label="Mật khẩu"
                      value={this.state.PassFb}
                      onChange={(e) => {
                        this.setState({ PassFb: e.target.value });
                      }}
                    />
                    <TextFieldGroup
                      field=""
                      label="Đường dẫn"
                      value={this.state.hrefFb}
                      onChange={(e) => {
                        this.setState({ hrefFb: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div class="text-center">
                  <p>Google</p>
                </div>
                <div class="col-md-12 mt-3">
                  <div>
                    <TextFieldGroup
                      field=""
                      label="Mã ứng dụng"
                      value={this.state.keyAppGg}
                      placeholder={"Mã app"}
                      onChange={(e) => {
                        this.setState({ keyAppGg: e.target.value });
                      }}
                    />

                    <TextFieldGroup
                      field=""
                      label="Mật khẩu"
                      value={this.state.PassGg}
                      placeholder={"Mật khẩu"}
                      onChange={(e) => {
                        this.setState({ PassGg: e.target.value });
                      }}
                    />
                    <TextFieldGroup
                      field=""
                      label="Đường dẫn"
                      value={this.state.hrefGg}
                      onChange={(e) => {
                        this.setState({ hrefGg: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div class="text-center">
                  <p>Zalo</p>
                </div>
                <div class="col-md-12 mt-3">
                  <div>
                    <TextFieldGroup
                      field=""
                      label="Mã ứng dụng"
                      value={this.state.keyAppZalo}
                      placeholder={"Mã app"}
                      onChange={(e) => {
                        this.setState({ keyAppZalo: e.target.value });
                      }}
                    />

                    <TextFieldGroup
                      field=""
                      label="Mật khẩu"
                      value={this.state.PassZalo}
                      placeholder={"Mật khẩu"}
                      onChange={(e) => {
                        this.setState({ PassZalo: e.target.value });
                      }}
                    />
                    <TextFieldGroup
                      field=""
                      label="Đường dẫn"
                      value={this.state.hrefZalo}
                      onChange={(e) => {
                        this.setState({ hrefZalo: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div id="tabcontent7" className="tabcontent">
                <div class="text-center">
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => this.SaveAllConfigWeb("footer")}
                    >
                      Lưu thay đổi
                    </Button>
                  </div>
                  <div className="config_footer_box">
                      <h1>Tiêu đề trái</h1>
                      <div className="flex-a-center">
                      <p style={{marginRight:'10px'}}>Căn giữa</p>
                        <div className="">
                        <FormGroup>
                            <FormControlLabel onChange={e=>{
                              this.setState({
                                centerFooterLeft : !this.state.centerFooterLeft
                              })
                            }} checked={this.state.centerFooterLeft} control={<Switch defaultChecked />} label="" />               
                        </FormGroup>
                        </div>
                      </div>
                                 
                      <CKEditor
                        editor={ ClassicEditor }
                        data={this.state.footerLeft}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            this.setState({
                              footerLeft : data
                            })
                        } }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                    />
                  </div>
                  <div className="config_footer_box">
                    <h1>Tiêu đề phải</h1>
                    
                      <div className="flex-a-center">
                      <p style={{marginRight:'10px'}}>Căn giữa</p>
                     
                      <div className="">
                      <FormGroup>
                          <FormControlLabel onChange={e=>{
                            console.log(this.state.centerFooterRight)
                            this.setState({
                              centerFooterRight : !this.state.centerFooterRight
                            })
                          }} checked={this.state.centerFooterRight} control={<Switch defaultChecked />} label="" />
                      
                      </FormGroup>
                      
                      </div>
                      </div>

                    

                      <CKEditor
                        editor={ ClassicEditor }
                        data={this.state.footerRight}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          this.setState({
                            footerRight : data
                          })
                        } }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                    />
                  </div>
               
              </div>
              <div id="tabcontent8" className="tabcontent">
                <div class="flex-end">
                  {isDisable ? (
                    <CButton
                      outline
                      color="info"
                      size="md"
                      className="btn-main"
                      onClick={async (e) => {
                        this.setState({ isDisable: !isDisable });
                      }}
                    >
                      <CIcon name="cil-pencil" style={{ marginRight: '6px' }} /> Cập nhật
                    </CButton>
                  ) : (
                    <CButton
                      outline
                      color="info"
                      size="md"
                      className="btn-main"
                      onClick={async (e) => {
                        this.updateCompany(e);
                      }}
                    >
                      <CIcon name="cil-pencil" style={{ marginRight: '6px' }} /> Xác nhận cập nhật
                    </CButton>
                  )}
                </div>

                <CLabel>Màu chủ đạo</CLabel>
                <Input
                  style={styles.searchInput}
                  onChange={(e) => {
                    this.setState({ mainColor: e.target.value });
                  }}
                  value={mainColor}
                  readOnly={isDisable}
                />
                <CLabel>Màu chủ đạo 2</CLabel>
                <Input
                  style={styles.searchInput}
                  onChange={(e) => {
                    this.setState({ button_color: e.target.value });
                  }}
                  value={this.state.button_color}
                  readOnly={isDisable}
                />
              </div>
              <div id="tabcontent9" className="tabcontent">
              <div class="text-center">
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => this.SaveAllConfigWeb("banner")}
                    >
                      Lưu thay đổi
                    </Button>
                  </div>
              <div class="mt-3">
                  <h1>Banner Desktop</h1>
                  <TextFieldGroup
                    field="image"
                    label="Hình ảnh"
                    type={"file"}
                    onChange={(e) => {
                      this.onChangeImage(e, "imageBannerDesktop", "imageBannerDesktop_link", "imageBannerDesktop_show");
                    }}
                    onClick={(e) => {
                      e.target.value = null;
                      this.setState({ imageBannerDesktop_show: "" });
                    }}
                  />
                  <div class="text-center">
                    <img
                      alt=""
                      style={{ width: "400px" }}
                      height="auto"
                      src={this.state.imageBannerDesktop}
                    />
                  </div>
                  <TextFieldGroup
                    field="hrefImageBannerDesktop"
                    label="Đường dẫn"
                    value={this.state.hrefImageBannerDesktop}
                    placeholder=""
                    type={"text"}
                    className="mt-3"
                    onChange={(e) => {
                      this.setState({
                        hrefImageBannerDesktop: e.target.value,
                      });
                    }}
                  />
                </div>
                <hr/>
                <div class="mt-3">
                  <h1>Banner Mobile</h1>
                  <TextFieldGroup
                    field="image"
                    label="Hình ảnh"
                    type={"file"}
                    onChange={(e) => {
                      this.onChangeImage(e, "imageBannerMobile", "imageBannerMobile_link", "imageBannerMobile_show");
                    }}
                    onClick={(e) => {
                      e.target.value = null;
                      this.setState({ imageBannerMobile_show: "" });
                    }}
                  />
                  <div class="text-center">
                    <img
                      alt=""
                      style={{ width: "400px" }}
                      height="auto"
                      src={this.state.imageBannerMobile}
                    />
                  </div>
                  <TextFieldGroup
                    field="hrefImageBannerMobile"
                    label="Đường dẫn"
                    value={this.state.hrefImageBannerMobile}
                    placeholder=""
                    type={"text"}
                    className="mt-3"
                    onChange={(e) => {
                      this.setState({
                        hrefImageBannerMobile: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            
            </div>
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
              <label className="control-label">Nội dung</label>

              <CKEditor
                editor={ClassicEditor}
                data={this.state.contentFooter}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.

                }}
                onChange={(event, editor) => {
                  const data = editor.getData();

                  this.setState({ contentFooter: data });
                }}
                onBlur={(event, editor) => { }}
                onFocus={(event, editor) => { }}
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
              <TextFieldGroup
                field="slugFooter"
                label="Slug"
                value={this.state.slugFooter}
                placeholder={"Link"}
                onChange={(e) => {
                  this.setState({ slugFooter: e.target.value });
                }}
              />
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={() => {
                  this.state.action === "new"
                    ? this.addFooter()
                    : this.updateFooter();
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
          <Modal
            size="xl"
            isOpen={this.state.modalSlide}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.actionSlide === "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="contentSlide"
                label="Mô tả"
                value={contentSlide}
                placeholder={"Tiêu đề"}
                onChange={(e) => {
                  this.setState({ contentSlide: e.target.value });
                }}
              />
              <TextFieldGroup
                field="imageSlide"
                label="Hình ảnh: (180px x 190px)"
                type={"file"}
                className="mt-5"
                onChange={(e) => {
                  this.onChangeImage(
                    e,
                    "imageSlide",
                    "imageSlide_link",
                    "imageSlide_show"
                  );
                }}
                onClick={(e) => {
                  e.target.value = null;
                  this.setState({ imageSlide_show: "" });
                }}
              />

              <img
                alt=""
                style={{ width: "140px", marginBottom: 20 }}
                height="auto"
                src={this.state.imageSlide}
              />
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={() => {
                  this.state.actionSlide === "new"
                    ? this.saveAddSlide()
                    : this.saveEditSlide();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={() => {
                  this.setState({
                    modalSlide: false,
                  });
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



