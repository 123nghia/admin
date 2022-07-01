import React, { Component } from "react";
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

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InfoIcon from '@mui/icons-material/Info';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
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
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LockResetIcon from '@mui/icons-material/LockReset';
import { MdAdd } from "@react-icons/all-files/md/MdAdd";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { IoLogoBuffer } from "@react-icons/all-files/io/IoLogoBuffer";
import { AiFillWechat } from "@react-icons/all-files/ai/AiFillWechat";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { IoIosColorPalette } from "@react-icons/all-files/io/IoIosColorPalette";
// import {HiInformationCircle
// } from "react-icons/hi";
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
          icon: <svg  style={{ width: "24px ", height: "24px " }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-slides-fill" viewBox="0 0 16 16">
          <path d="M7 7.78V5.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 7.778z"/>
          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 .496.438l.5 4A.5.5 0 0 1 11.5 9h-3v2.016c.863.055 1.5.251 1.5.484 0 .276-.895.5-2 .5s-2-.224-2-.5c0-.233.637-.429 1.5-.484V9h-3a.5.5 0 0 1-.496-.562l.5-4A.5.5 0 0 1 5 4z"/>
            </svg>
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
          _id: "t7",
          name: "Thông tin footer",
          icon: <InfoIcon style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "t8",
          name: "Quản lý màu sắc",
          icon: <IoIosColorPalette style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "t8",
          name: "Quản lý Cache",
          icon: <LockResetIcon style={{ width: "24px ", height: "24px " }} />
        },
       
      ],
      imgLogoFooter : "",
      imgLogoFooter_link : "",
      imgLogoFooter_show : "",
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
      updateLevel: "1",
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
      dataConfigWeb: null,
      idUpdateCurrent: null,
      loadingSaveLogo: false,
      htmlFuncWeb: null,
      codeChat: "",
      codeMess: "",
      openHomeItem: false,
      seoInfo: {},
      homepage: {},
      sliderWelcome: [],
      sologan: "",
      introduce: "",
      imageSlide : "",
      imageSlide_show : "",
      imageSlide_link :"",
      contentSlide : "",
      modalSlide : false,
      actionSlide: "new",
      imgLayout_show :"",
      imgLayout_link :"",
      imgLayout :"",
      imageSeo_link : "",
      configData : [
        {
          label : "Trạng thái Facebook",
          value : true,
          key : "fb"
        },
        {
          label : "Trạng thái Google",
          value : true,
          key : "gg"

        },
      ]
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
    for (i = 0; i < tablinks.length; i++) {
      
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
  onChangeImageCustom(e, value, valueLink, valueShow) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ [valueLink]: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({ [value]: e.target.result, [valueShow]: e.target.result });
    };
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
  onChangeImage2(e) {

    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ imageSeo_link: files[0] });
    console.log(this.state.imageSeo_link)
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({
        imageSeo: e.target.result,
        imageSeo_show: e.target.result,
      });
    };

    
  }
  onChangeImageHomepage(e,value) {
    let files = e.target.files;
    let reader = new FileReader();
    if(value==="1"){
      this.setState({ image1_link: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({
        image1: e.target.result,
        image1_show: e.target.result,
      });
    };
    }
    if(value==="2"){
      this.setState({ image2_link: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({
        image2: e.target.result,
        image2_show: e.target.result,
      });
    };
    }
    if(value==="3"){
      this.setState({ image3_link: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({
        image3: e.target.result,
        image3_show: e.target.result,
      });
    };
    }
    
  }
  onChangeImageSeo(e) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ imgLayout_link: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({
        imgLayout: e.target.result,
        imgLayout_show: e.target.result,
      });
    };
  }
  onChangeImageSlide(e) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ imageSlide_link: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({
        imageSlide: e.target.result,
        imageSlide_show: e.target.result,
      });
    };
  }
  onChangeLogoFooter(e) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ imgLogoFooter_link: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({
        imgLogoFooter: e.target.result,
        imgLogoFooter_show: e.target.result,
      });
    };
  }
  async componentDidMount() {
    this.getData().then(() => {
      this.getInfoFunc();
    });

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
                  onClick={() => this.openFormEdit(item, i)}
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
          <tbody>
          {x}
          </tbody>
        </table>
      );
      return render;
    }
  }

  renderInfoFuncWeb() {
    // document.getElementById("renderInfoFuncWebId").innerHTML = this.state.htmlFuncWeb;
  }
  async getInfoFunc() {
    let baseUrlapi = Constants.INFO_FUNC_WEB;
    let url = baseUrlapi;
    await axios.get(url).then((res) => {
      if (res) {
        if (res.data.is_success) {
          this.setState(
            {
              htmlFuncWeb: res.data.data,
            },
            () => {
              this.renderInfoFuncWeb();
            }
          );
        } else {
          console.log("Lấy thông tin chung trang web thất bại !!!");
        }
      }
    });
  }
  async getDataConfigWeb() {
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/getAll?key=webinfo";
    console.log("call",url)
    await axios
      .get(url, {
        key: "webinfo",
      })
      .then((res) => {
        
        console.log('data 123',res)
        if (res.data.data.length > 0) {
          let dataConfig = res.data.data[0];

          let valueConfig = JSON.parse(dataConfig.Value);
          console.log(valueConfig);
          
          this.setState(
            {
              image: valueConfig.value.logo,
              image_show: valueConfig.value.logo,
              dataConfigWeb: valueConfig,
              idUpdate: dataConfig._id,
              codeChat: valueConfig.value.tawk,
              codeMess: valueConfig.value.chatMess,
              seoInfo: valueConfig.value.seoInfo,
              homepage: valueConfig.value.homepage,
              slideShow: valueConfig.value.slideShow,
              imgLogoFooter : valueConfig.value.logoFooter,
              imgLogoFooter_show: valueConfig.value.logoFooter,
              imgLogoFooter_link : valueConfig.value.logoFooter,
              configData : valueConfig.value.statusConfig,
              keyAppFb: valueConfig.value.facebook.appid,
              PassFb: valueConfig.value.facebook.password,
              PassGg: valueConfig.value.google.password,
              keyAppGg: valueConfig.value.google.appid,

             
              logoFooter : valueConfig.value.logoFooter,
              logoHeader : valueConfig.value.logo,

            
              
            },
            () => {
              const {homepage, seoInfo} = this.state;
              if(homepage){
                this.setState({
                  textAi: this.state.homepage.textAi,

                  titlePen1 : this.state.homepage.title1,
                  titlePen2 : this.state.homepage.title2,
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
              }
                )}
         
            if(seoInfo){
              this.setState({
                titleSeo: this.state.seoInfo.title,
                titleSeo2: this.state.seoInfo.titleSEO,
                descSeo: this.state.seoInfo.description,
                imgLayout: this.state.seoInfo.imageShare,
                imgLayout_show : this.state.seoInfo.imageShare,
                imgLayout_link : this.state.seoInfo.imageShare,

                keywordSeo: this.state.seoInfo.key,
                authorSeo: this.state.seoInfo.author,
              })
            }    
              
            }
          );
          // this.onUpdate();
        } else {
          let templateDataConfigWeb = {
            key: "webinfo",
            value: {
              logo: "",
              tawk: "",
              configFacebook: true,
              configGoogle : true,
              logoFooter : "",
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
    

      }).catch((err) => {
        console.log("errConfig",err)
      })
  }
  async addDataConfig() {
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/add";
    axios.post(url, {
      dataType: "1",
      key: "webinfo",
      value: JSON.stringify(this.state.dataConfigWeb),
      type: "system",
    }).then((res)=>{
      console.log('add',res)
    })
  }
  saveAdd = () => {
    const { dataConfigWeb, updateLink, updateTitle, updateLevel } = this.state;

    let coppyData = {
      ...dataConfigWeb,
    };
    let footerAdd = {
      title: updateTitle,
      href: updateLink,
      Level: updateLevel,
    };
    coppyData.value.footerData.push(footerAdd);
    this.setState(
      {
        dataConfigWeb: coppyData,
        statusModalUpdate: false,
      },
      () => {
        this.onUpdate();
      }
    );
  };


  async onFocusOutCodeMess() {
    const { dataConfigWeb, updateLink, codeMess, updateLevel } = this.state;
    let coppyData = {
      ...dataConfigWeb,
    };
    coppyData.value.chatMess = codeMess;
    this.setState({
      dataConfigWeb: coppyData,
    });

    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/update";
    await axios.post(url, {
      value: JSON.stringify(this.state.dataConfigWeb),
      dataType: "1",
      type: "system",
      id: this.state.idUpdate,
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
  async BlurForm(change) {
    const {
      dataConfigWeb,
      updateLink,
      codeChat,
      introduce,
      sologan,
      imgSeo,
      titleSeo,
      titleSeo2,
      descSeo,
      authorSeo,
      keywordSeo,
      image1,
      image1_show,
      image3,
      image3_show,
      image2,
      imageSeo_show,
      image2_show,
      imgLayout,
      imageSeo_link,
      updateLevel,
      imgLayout_link,
      image1_link,
      image2_link,
      image3_link,
      imgLogoFooter,
      imgLogoFooter_link,
      configData,
      keyAppFb,
      PassFb,
      PassGg,
      keyAppGg
    } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/update";
    let coppyData = {
      ...dataConfigWeb,
    };
    if (change === "config") {
   
      coppyData.value.statusConfig = configData;
      coppyData.value.facebook.appid = keyAppFb;
      coppyData.value.facebook.password = PassFb;
      coppyData.value.google.appid = keyAppGg;
      coppyData.value.google.password = PassGg;

      

    }
    if (change === "logoFooter") {
      const formLogoFooter = new FormData();

      formLogoFooter.append("image", imgLogoFooter_link);
     
      await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, formLogoFooter, "", "POST").then((res)=>{console.log(res)})
      if(imgLogoFooter_link){
        if(imgLogoFooter_link.name){
         var newLogoFooter = `${Constants.BASE_URL}image_brand/${imgLogoFooter_link.name}`;
         
     
        }
      }
      if(newLogoFooter){
        coppyData.value.logoFooter = newLogoFooter;
       
      }
     }
      
     
    if (change === "homepage") {
      if(!coppyData.value.homepage){
        coppyData.value.homepage = {};
      }
      const form1 = new FormData();

      form1.append("image", image1_link);
     
      await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form1, "", "POST").then((res)=>{console.log(res)})
      if(image1_link){
        if(image1_link.name){
         var newImage = `${Constants.BASE_URL}image_brand/${image1_link.name}`;
 
        }
 
      }
 
       const form2 = new FormData();
 
       form2.append("image", image2_link);
      
     await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form2, "", "POST").then((res)=>{console.log(res)})
     
    if(image2_link){
     if(image2_link.name){
     var newImage2 = `${Constants.BASE_URL}image_brand/${image2_link.name}`;
     }
      }
 
     const form3 = new FormData();
     form3.append("image", image3_link);
      
     await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form3, "", "POST").then((res)=>{console.log(res)})
     
     if(image3_link){
       if(image3_link.name){
       var newImage3 = `${Constants.BASE_URL}image_brand/${image3_link.name}`;
     }
      }
      coppyData.value.homepage.title1 = this.state.titlePen1;
      coppyData.value.homepage.title2 = this.state.titlePen2;
      coppyData.value.homepage.textAi = this.state.textAi;
     
       coppyData.value.homepage.sologan = sologan;
       coppyData.value.homepage.introduction = introduce;
       if(newImage!==undefined){
         coppyData.value.homepage.image1 = newImage;
 
       }
       
       if(newImage2){
       coppyData.value.homepage.image2 = newImage2;
         
       }
       if(newImage3){
       coppyData.value.homepage.image3 = newImage3;
         
       }
      }
     
      
    
    if (change === "seoInfo") {
      if(!coppyData.value.seoInfo){
        coppyData.value.seoInfo = {};
      }
      coppyData.value.seoInfo.title = titleSeo;
      coppyData.value.seoInfo.titleSEO = titleSeo2;
      coppyData.value.seoInfo.description = descSeo;
      coppyData.value.seoInfo.author = authorSeo;
      coppyData.value.seoInfo.key = keywordSeo;
      const form1 = new FormData();
    form1.append("image", imgLayout_link);
     
    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form1, "", "POST").then((res)=>{console.log(res)})
    let newImage4 = `${Constants.BASE_URL}image_brand/${imgLayout_link.name}`;
    
    coppyData.value.seoInfo.imageShare = newImage4;
    }
    
    if(change === "logos"){
    
      let newImage1 = await this.postImage(this.state.logoHeader_link);
      let newImage2 = await this.postImage(this.state.logoFooter_link);
     
      if (newImage1) {
        coppyData.value.logo = `${Constants.BASE_URL}image_brand/${newImage1}`;
      }
      if (newImage2) {
        coppyData.value.logoFooter = `${Constants.BASE_URL}image_brand/${newImage2}`;
      }
    }
    if(change === "chats"){
  
        coppyData.value.tawk = this.state.codeChat
     
 
        coppyData.value.chatMess = this.state.codeMess
      
    }
    this.setState({
      dataConfigWeb: coppyData,
    });

    await axios
      .post(url, {
        value: JSON.stringify(this.state.dataConfigWeb),
        dataType: "1",
        type: "system",
        id: this.state.idUpdate,
      })
      .then(() => {
        this.getDataConfigWeb();
        Swal.fire({
          icon: "success",
          title: "Hoàn tất !",
          showConfirmButton: false,
          timer: 1200,
        });
       
      });
  }
  async onFocusOutText() {
    const { dataConfigWeb, updateLink, codeChat, updateLevel } = this.state;
    let coppyData = {
      ...dataConfigWeb,
    };
    coppyData.value.tawk = codeChat;
    this.setState({
      dataConfigWeb: coppyData,
    });

    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/update";
    await axios.post(url, {
      value: JSON.stringify(this.state.dataConfigWeb),
      dataType: "1",
      type: "system",
      id: this.state.idUpdate,
    });
  }
  async onUpdate() {
    const { dataConfigWeb } = this.state;
//     let copy = {...dataConfigWeb}
//     copy.value.homepage = {}
//     copy.value.seoInfo = {}
//     copy.value.slideShow = []
// this.setState({
//   dataConfigWeb : copy
// })
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/update";
    await axios.post(url, {
      value: JSON.stringify(dataConfigWeb),
      dataType: "1",
      type: "system",
      id: this.state.idUpdate,
    }).then(()=>{
      this.getDataConfigWeb();
    })
  }
  openDelete = (i) => {
    const { dataConfigWeb } = this.state;
    let coppyData = {
      ...dataConfigWeb,
    };
    coppyData.value.footerData.splice(i, 1);
    this.setState(
      {
        dataConfigWeb: coppyData,
      },
      () => {
        this.onUpdate();
      }
    );
  };
  async saveEdit() {
    const {
      dataConfigWeb,
      updateLink,
      updateTitle,
      idUpdateCurrent,
      updateLevel,
    } = this.state;

    let coppyData = {
      ...dataConfigWeb,
    };
    let footerAdd = {
      title: updateTitle,
      href: updateLink,
      Level: updateLevel,
    };

    for (let i = 0; i < coppyData.value.footerData.length; i++) {
      if (i === idUpdateCurrent) {
        coppyData.value.footerData[i] = footerAdd;
      }
    }

    this.setState(
      {
        dataConfigWeb: coppyData,
        statusModalUpdate: false,
      },
      () => {
        this.onUpdate();
      }
    );
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
      action: "new",
      updateLevel: "1",
      statusModalUpdate: true,
      updateLink: "",
      updateTitle: "",
    });
  };
  async openFormEdit(item, i) {
    this.setState({
      action: "edit",
      updateLevel: item.Level,
      idUpdateCurrent: i,
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

  async saveLogo() {
    const { image, image_link } = this.state;
    const form = new FormData();
    form.append("image", image_link);
    console.log(image_link)
    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST").then(
      (res) => console.log(res)
    );
   


    this.setState({ loadingSaveLogo: true });
    setTimeout(() => {
      this.setState({ loadingSaveLogo: false });

      const { dataConfigWeb } = this.state;
      let coppyData = {
        ...dataConfigWeb,
      };
      let newImage = `${Constants.BASE_URL}image_brand/${image_link.name}`;
      coppyData.value.logo = newImage;
      this.setState(
        {
          dataConfigWeb: coppyData,
          statusModalUpdate: false,
        },
        () => {
          console.log(this.state.dataConfigWeb);
          this.onUpdate();
        }
      );
    }, 1000);
  }
  canelLogo = () => {
    this.setState({
      image: "",
      image_link: "",
    });
  };

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
  openFormAddSlide(){
    this.setState({
      actionSlide: "new",
      modalSlide : true,
      imageSlide : "",
      imageSlide_link : "",
      imageSlide_show : "",
      contentSlide : "",
   
    })
  }
  async saveAddSlide(){
    const {
      imageSlide,contentSlide,dataConfigWeb,indexSlideUpdate,imageSlide_link
    } = this.state
    const form = new FormData();
    form.append("image", imageSlide_link);
   
    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST").then(
      (res) => console.log(res)
    );
    let newImage = `${Constants.BASE_URL}image_brand/${imageSlide_link.name}`;
    
    let ob = {
      image : newImage,
      content : contentSlide
    }
    let coppy = {...dataConfigWeb};
    if(!coppy.value.slideShow){
      coppy.value.slideShow = []
    }
    coppy.value.slideShow.push(ob)
    this.setState({
      dataConfigWeb : coppy
    },()=>{
      this.onUpdate();
      this.getInfoFunc();
    })
  }
  openFormEditSlide (item,i){
    console.log(item)
    this.setState({
      actionSlide: "edit",

      modalSlide : true,

      imageSlide : item.image,
      imageSlide_show : item.image,
      contentSlide : item.content,
      indexSlideUpdate : i
    });

    
  }
  async deleteSlide  (i) {
    const { dataConfigWeb } = this.state;
    let coppyData = {
      ...dataConfigWeb,
    };
    coppyData.value.slideShow.splice(i, 1);
    this.setState(
      {
        dataConfigWeb: coppyData,
      },
      () => {
        this.onUpdate();
      this.getInfoFunc();

      }
    );
  };
  saveEditSlide (){
    const {
      imageSlide,contentSlide,dataConfigWeb,indexSlideUpdate
    } = this.state
    let ob = {
      image : imageSlide,
      content : contentSlide
    }
    let coppy = {...dataConfigWeb};
    coppy.value.slideShow[indexSlideUpdate] = ob
    this.setState({
      dataConfigWeb : coppy
    },()=>{
      this.onUpdate();
      this.getInfoFunc();
    })
    
  }
  async resetCache(){
 
    let url = "https://soida.pensilia.com/api/clear_cache"
    await axios.get(url, {
     
    }).then((res)=>{
     
      if(res.data.success === "success"){
        Swal.fire({
       
          icon: 'success',
          title: 'Clear cache thành công',
          showConfirmButton: false,
          timer: 1200
        })
      }else{
        Swal.fire({
       
          icon: 'error',
          title: 'Xảy ra lỗi trong quá trình xử lý',
          showConfirmButton: false,
          timer: 1200
        })
      }
    })
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
      actionSlide ,
      contentSlide,
      seoInfo,
      homepage,
      slideShow,
      imgSeo,
      titleSeo,
      descSeo,
      keywordSeo,
      introduce,
      authorSeo,
      titleSeo2,

      sliderWelcome,
      image1,
      image3,
      image2,
      openHomeItem,
      sologan,
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
      modalSlide
    } = this.state;

    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <div class="flex-tabs">
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

          <div id="tabcontent1" class="tabcontent defaultOpen">
            <div class="text-center">
              <Button
                variant="contained"
                color="success"
                onClick={() => this.BlurForm("homepage")}
              >
                Lưu thay đổi
              </Button>
            </div>
            <TextFieldGroup
              field="titlePen1"
              label="Heading 1:"
              value={this.state.titlePen1}
              
              onChange={(e) => {
                this.setState({ titlePen1: e.target.value });
              }}
            />
             <TextFieldGroup
              field="titlePen2"
              label="Heading 2: (Không thay đổi cú pháp (<span>) - chỉ thay đổi nội dung)"
              value={this.state.titlePen2}
              
              onChange={(e) => {
                this.setState({ titlePen2: e.target.value });
              }}
            />
            
            <TextFieldGroup
              field="sologan"
              label="Sologan:"
              value={sologan}
              placeholder={""}
              onChange={(e) => {
                this.setState({ sologan: e.target.value });
              }}
            />

            <TextFieldGroup
              field="introduce"
              label="Giới thiệu:"
              value={introduce}
              placeholder={""}
              onChange={(e) => {
                this.setState({ introduce: e.target.value });
              }}
            />
            <div class="text-center">
              <h6>Hình ảnh Startup</h6>
            </div>
            
            
            <TextFieldGroup
              field="image1"
              label="Hình ảnh 1: (170px x 170px)"
              type={"file"}
              className="mt-5"
              onChange={(e) => {
                this.onChangeImageHomepage(e,"1");
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
              src={image1}
            />
            </div>
            
            <TextFieldGroup
              field="image2"
              label="Hình ảnh 2: (280px x 280px)"
              type={"file"}
              className="mt-5"
              onChange={(e) => {
                this.onChangeImageHomepage(e,"2");
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
              src={image2}
            />
            </div>
            
            <TextFieldGroup
              field="image3"
              label="Hình ảnh 3: (170px x 170px)"
              type={"file"}
              className="mt-5"
              onChange={(e) => {
                this.onChangeImageHomepage(e,"3");
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
              src={image3}
            />
            </div>
            <label className="control-label">Text AI:(Không thay đổi cú pháp - chỉ thay đổi nội dung)</label>
            <CTextarea
              name="textAi"
              rows="4"
              value={this.state.textAi}
              onChange={(e) => {
                this.setState({ textAi: e.target.value });
              }}
            />
          </div>
          <div id="tabcontent2" class="tabcontent">
          <div class="text-center">
              <Button
                variant="contained"
                color="success"
                onClick={() => this.openFormAddSlide()}
              >
                Thêm mới
              </Button>
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
                            <CButton
                              outline
                              color="success"
                              size="sm"
                              onClick={() => this.openFormEditSlide(item, i)}
                            >
                              {/* <CIcon name="cilTrash" /> */}
                              Chỉnh sửa
                            </CButton>{" "}
                            <CButton
                              style={styles.mgl5}
                              outline
                              color="danger"
                              size="sm"
                              onClick={() => this.deleteSlide(i)}
                            >
                              {/* <CIcon name="cilPencil" /> */}
                              Xóa
                            </CButton>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
          <div id="tabcontent3" class="tabcontent">
            <div className="text-center">
              {" "}
              <Button
                variant="contained"
                color="success"
                onClick={() => this.BlurForm("seoInfo")}
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
              label="Hình ảnh favicon: (20px x 20px)"
              type={"file"}
              className="mt-5"
              onChange={(e) => {
                this.onChangeImageSeo(e);
              }}
              onClick={(e) => {
                e.target.value = null;
                this.setState({ imgLayout_show: "" });
              }}
            />
         
            <img
              alt=""
              style={{ width: "auto", marginBottom: 20 }}
              height="140px"
              src={this.state.imgLayout}
            />
           
          </div>
          <div id="tabcontent4" class="tabcontent ">
          <div class="text-center">
                  <CButton
                    onClick={() => this.BlurForm("logos")}
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
                      this.onChangeImageCustom(e, "logoHeader", "logoHeader_link", "logoHeader_show");
                    }}
                    onClick={(e) => {
                      e.target.value = null;
                      this.setState({ logoHeader_show: "" });
                    }}
                  />
                  <div class="text-center">
                    <img
                      alt=""
                      style={{ width: "140px" }}
                      height="auto"
                      src={this.state.logoHeader}
                    />
                  </div>
                
                </div>
                <hr />
                <h1>Footer</h1>
                <TextFieldGroup
                  field="logoFooter"
                  label="Logo :(Tỷ lệ 2:1)"
                  type={"file"}
                  className="mt-5"
                  onChange={(e) => {
                    this.onChangeImageCustom(
                      e,
                      "logoFooter",
                      "logoFooter_link",
                      "logoFooter_show"
                    );
                  }}
                  onClick={(e) => {
                    e.target.value = null;
                    this.setState({ logoFooter_show: "" });
                  }}
                />
                <div className="text-center">
                  <img
                    alt=""
                    style={{ width: "200px", marginBottom: 20 }}
                    src={this.state.logoFooter}
                  />
                </div>  
          </div>
        
          <div id="" class="tabcontent ">
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
                    {dataConfigWeb
              ? this.renderData(dataConfigWeb.value.footerData)
              : null}
                  </CardBody>
                </Card>
              </Col>
            </Row>
           
          </div>
          
        <div id="" class="tabcontent">
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
                    <CLabel>Màu button</CLabel>
                    <Input
                      style={styles.searchInput}
                      value={button_color}
                      onChange={(e) => {
                        this.setState({
                          button_color: e.target.value,
                        });
                      }}
                      readOnly={isDisable}
                    />
                  </CCol>
                  {/* <CCol sm="12" lg="12">
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
                  </CCol> */}
                </CRow>
              </CCol>
            </CRow>
          </CardBody>
        </Card>
      </Col>
      
    </Row>
        </div> 
        <div id="" class="tabcontent ">
          <div className="text-center">
          <Button
                variant="contained"
                color="success"
                style={{ paddingRight:'20px', paddingLeft:'20px' , fontSize : "20px"}}
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
                this.onChangeImageSlide(e);
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
                    modalSlide: false
                    
                  })
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
