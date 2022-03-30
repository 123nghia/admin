import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
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
import update from "react-addons-update";
import PropTypes from "prop-types";
import TextFieldGroup from "../../views/Common/TextFieldGroup";
import API_CONNECT from "../../../src/functions/callAPI";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import {
  CLabel,
  CRow,
  CCol,
  CSelect,
  CButton,
  CTooltip,
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
import logoMainnet from "../../assets/img/logo_head.png";
import CircularProgress from "@mui/material/CircularProgress";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LockResetIcon from "@mui/icons-material/LockReset";
import { MdAdd } from "@react-icons/all-files/md/MdAdd";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { IoLogoBuffer } from "@react-icons/all-files/io/IoLogoBuffer";
import { AiFillWechat } from "@react-icons/all-files/ai/AiFillWechat";



let headers = new Headers();
const auth = localStorage.getItem("auth");

headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNameConfig: [
        {
          _id: "t1",
          name: "Thông tin trang chủ",
          icon: <AiOutlineHome style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "t2",
          name: "Slider",
          icon: <DoorSlidingIcon style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "t3",
          name: "Cấu hình SEO",
          icon: <PermDataSettingIcon style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "t4",
          name: "Logos",
          icon: <IoLogoBuffer style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "t5",
          name: "Mã Chat",
          icon: <AiFillWechat style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "t6",
          name: "Cấu hình mạng xã hội",
          icon: <FacebookIcon style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "t7",
          name: "Thông tin footer",
          icon: <InfoIcon style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "t8",
          name: "Quản lý màu sắc",
          icon: <LockResetIcon style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "t9",
          name: "Quản lý Cache",
          icon: <LockResetIcon style={{ width: "24px ", height: "24px " }} />
        },
      ],
      company_id: JSON.parse(localStorage.getItem("user")).company_id
        ? JSON.parse(localStorage.getItem("user")).company_id
        : null,

      action: "new",
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

      configData: [
        {
          label: "Trạng thái Facebook",
          value: true,
          key: "fb",
          pass: "",
          code: "",
        },
        {
          label: "Trạng thái Google",
          value: true,
          key: "gg",
          pass: "",
          code: "",
        },
        {
          label: "Trạng thái Zalo",
          value: true,
          key: "gg",
          pass: "",
          code: "",
        },
      ],
    };
  }
  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      updateLevel: e.target.value,
    });
  };
  ToggleViewConfigWeb(id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
      if (i === id) {
        tablinks[i].classList.add("tabcontent-left-active");
        tabcontent[i].classList.add("defaultOpen");
        tabcontent[i].style.animation = "hideOpa 1s ease-in-out";
      } else {
        tabcontent[i].classList.remove("defaultOpen");
        tablinks[i].classList.remove("tabcontent-left-active");
        tabcontent[i].style.animation = "none";
      }
    }
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
    this.getDataConfigWeb();
    this.getData();
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
            },
            () => {
              const { homepage, seoInfo, logos, chats, configData, mxh } = this.state;
              if (homepage) {
                this.setState({
                  textAi: this.state.homepage.textAi,
                  titlePen1: this.state.homepage.title1,
                  titlePen2: this.state.homepage.title2,
                  sologan: this.state.homepage.sologan,
                  introduce: this.state.homepage.introduction,

                  image1: this.state.homepage.image1,
                  image1_show: this.state.homepage.image1,
                  image1_link: this.state.homepage.image1,

                  image3_link: this.state.homepage.image3,
                  image3: this.state.homepage.image3,
                  image3_show: this.state.homepage.image3,

                  image2_link: this.state.homepage.image2,
                  image2: this.state.homepage.image2,
                  image2_show: this.state.homepage.image2,
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
  async deleteFooter(item) {
    var baseUrlapi = Constants.BASE_URL;
    let urlCall = Constants.DELETE_FOOTER;
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
        id: item._id,

      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Xóa thành công",
          showConfirmButton: false,
          timer: 700,
        });
        this.getFooter();
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

      coppyData.value.chats.tawk = this.state.codeChat;
      coppyData.value.chats.mess = this.state.codeMess;
    }
    if (change === "homepage") {
      coppyData.value.homepage.title1 = this.state.titlePen1;
      coppyData.value.homepage.title2 = this.state.titlePen2;
      coppyData.value.homepage.textAi = this.state.textAi;
      coppyData.value.homepage.sologan = sologan;
      coppyData.value.homepage.introduction = introduce;
      let newImage1 = await this.postImage(image1_link);
      let newImage2 = await this.postImage(image2_link);
      let newImage3 = await this.postImage(image3_link);
      if (newImage1) {
        coppyData.value.homepage.image1 = `${Constants.BASE_URL}image_brand/${newImage1}`;
      }
      if (newImage2) {
        coppyData.value.homepage.image2 = `${Constants.BASE_URL}image_brand/${newImage2}`;
      }
      if (newImage3) {
        coppyData.value.homepage.image3 = `${Constants.BASE_URL}image_brand/${newImage3}`;
      }
    }
    if (change === "seoInfo") {
      coppyData.value.seoInfo.title = titleSeo;
      coppyData.value.seoInfo.titleSEO = titleSeo2;
      coppyData.value.seoInfo.description = descSeo;
      coppyData.value.seoInfo.author = authorSeo;
      coppyData.value.seoInfo.key = keywordSeo;
      let newImage4 = await this.postImage(imgLayout_link);
      if (newImage4) {
        coppyData.value.seoInfo.imageShare = `${Constants.BASE_URL}image_brand/${newImage4}`;
      }
      this.setState({
        dataConfigWeb: coppyData,
      });
    }
    if (change === "logos") {


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
  openFormAddFooter = () => {
    this.setState({
      action: "new",
      contentFooter: "",
      updateLevel: "1",
      statusModalUpdate: true,
      updateLink: "",
      updateTitle: "",
      slugFooter: "",
    });
  };
  async openFormEditFooter(item, i) {
    this.setState({
      action: "edit",
      updateLevel: item.Level,
      slugFooter: item.slug,
      idFooterEditor: item._id,
      updateTitle: item.title,
      contentFooter: item.content,
      statusModalUpdate: true,
      updateLink: item.link,
    });
  }
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
  async resetCache() {
    let url = "https://soida.pensilia.com/api/clear_cache";
    await axios.get(url, {}).then((res) => {
      if (res.data.success === "success") {
        Swal.fire({
          icon: "success",
          title: "Clear cache thành công",
          showConfirmButton: false,
          timer: 700,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Xảy ra lỗi trong quá trình xử lý",
          showConfirmButton: false,
          timer: 700,
        });
      }
    });
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

    const newComany_id =this.state.company_id;

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
                        onClick={() => this.ToggleViewConfigWeb(i)}
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
                

                <TextFieldGroup
                  field="image1"
                  label="Hình ảnh startup 1: (170px * 170px)"
                  type={"file"}
                  className="mt-5"
                  onChange={(e) => {
                    this.onChangeImage(e, "image1", "image1_link", "image1_show");
                  }}
                  onClick={(e) => {
                    e.target.value = null;
                    this.setState({ image1_show: "" });
                  }}
                />
                <div class="text-center mb-5">
                  <img
                    alt=""
                    style={{ width: "140px", marginBottom: 20 }}
                    height="auto"
                    src={this.state?.image1}
                  />
                </div>

                <TextFieldGroup
                  field="image2"
                  label="Hình ảnh startup 2: (280px * 280px)"
                  type={"file"}
                  className="mt-5"
                  onChange={(e) => {
                    this.onChangeImage(e, "image2", "image2_link", "image2_show");
                  }}
                  onClick={(e) => {
                    e.target.value = null;
                    this.setState({ image2_show: "" });
                  }}
                />
                <div class="text-center mb-5">
                  <img
                    alt=""
                    style={{ width: "140px", marginBottom: 20 }}
                    height="auto"
                    src={this.state?.image2}
                  />
                </div>

                <TextFieldGroup
                  field="image3"
                  label="Hình ảnh startup 3: (170px * 170px)"
                  type={"file"}
                  className="mt-5"
                  onChange={(e) => {
                    this.onChangeImage(e, "image3", "image3_link", "image3_show");
                  }}
                  onClick={(e) => {
                    e.target.value = null;
                    this.setState({ image3_show: "" });
                  }}
                />
                <div class="text-center mb-5">
                  <img
                    alt=""
                    style={{ width: "140px", marginBottom: 20 }}
                    height="auto"
                    src={this.state?.image3}
                  />
                </div>
                <label className="control-label">
                  Text AI:(Không thay đổi cú pháp - chỉ thay đổi nội dung)
                </label>
                <CTextarea
                  name="textAi"
                  rows="8"
                  value={this.state?.textAi}
                  onChange={(e) => {
                    this.setState({ textAi: e.target.value });
                  }}
                />
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
                <div class="text-center">
                  <CButton
                    onClick={() => this.SaveAllConfigWeb("chats")}
                    style={styles.mgl5}
                    outline
                    color="success"
                    size="md"
                  >
                    {/* <CIcon name="cilPencil" /> */}
                    Lưu thay đổi
                  </CButton>
                </div>
                <div className="text-center">
                  <div className="mt-3">
                    <p>Mã chat tawk (nếu có) :</p>
                  </div>

                  <textarea

                    name="codeChat"
                    value={this.state.codeChat}
                    onChange={(e) => this.setState({ codeChat: e.target.value })}
                    class="mt-3"
                    cols="60"
                    rows="8"
                  ></textarea>
                </div>
                <div class="text-center">
                  <div className="mt-3">
                    <p>Mã chat message (nhắn tin với khách hàng) :</p>
                  </div>

                  <textarea

                    name="codeMess"
                    value={this.state.codeMess}
                    onChange={(e) => this.setState({ codeMess: e.target.value })}
                    class="mt-3"
                    cols="60"
                    rows="8"
                  ></textarea>
                </div>
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
                <div class="flex-end">
                <CButton
                    color="info"
                    style={{ marginBottom: "10px" }}
                    size="md"
                    className="btn-main"
                    onClick={this.openFormAddFooter} 
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
                      <th className="text-center">Tiêu đề</th>
                      <th className="text-center">Nội dung</th>

                      <th className="text-center">Link tham chiếu</th>



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

                    {dataFooter
                      ? dataFooter.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td className="text-center">{i + 1}</td>

                            <td className="text-center">{item.title}</td>
                            <td className="text-center">{item.content}</td>
                            <td className="text-center">{item.href}</td>


                            <td className="">
                            <div className="flex">
                                <CButton
                                  shape="rounded-pill"
                                  variant="ghost"
                                  color="info"
                                  style={styles.mgl5}
                                  size="md"
                                  onClick={() => this.openFormEditFooter(item)}
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
                                  onClick={() => this.deleteFooter(item)}
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
                      <CIcon name="cil-pencil" style={{marginRight:'6px'}} /> Cập nhật
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
                      <CIcon name="cil-pencil" style={{marginRight:'6px'}} /> Xác nhận cập nhật
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
              <div id="tabcontent9" className="tabcontent ">
                <div className="text-center">
                  <Button
                    variant="contained"
                    color="success"
                    style={{
                      paddingRight: "20px",
                      paddingLeft: "20px",
                      fontSize: "20px",
                    }}
                    size="md"
                    onClick={() => this.resetCache()}
                  >
                    Reset Cache
                  </Button>
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



