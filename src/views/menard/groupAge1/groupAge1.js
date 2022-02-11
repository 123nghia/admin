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
import update from "react-addons-update";
import PropTypes from "prop-types";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
import API_CONNECT from "../../../../src/functions/callAPI";

import TabPanel from "./tabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Editor } from '@tinymce/tinymce-react';
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
import Constants from "./../../../contants/contants";
import axios from "axios";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import logoMainnet from "../../../assets/img/logo_head.png";
import CircularProgress from "@mui/material/CircularProgress";
import Swal from 'sweetalert2'
let headers = new Headers();
const auth = localStorage.getItem("auth");

headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      image_show: "",

      link: "",
      image_link: "",
      statusModalUpdate: false,
      updateLink: "",
      dataConfigWeb: null,
      idUpdateCurrent: null,
      loadingSaveLogo: false,
      htmlFuncWeb: null,
      codeChat: "",
      codeMess: "",
      valueTabs: 0,
      actionProduct : "new",
      valueOverview: 0,
      dataColegenTemp: [
        {
          level: "3",
          description: "colegen",
          minmax: "1:3",
        },
        {
          level: "2",
          description: "colegen",
          minmax: "1:3",
        },
        {
          level: "1",
          description: "colegen",
          minmax: "1:3",
        },
      ],
      dataNamTemp: [
        {
          level: "3",
          description: "nám",
          minmax: "1:3",
        },
        {
          level: "2",
          description: "nám",
          minmax: "1:3",
        },
        {
          level: "1",
          description: "nám",
          minmax: "1:3",
        },
      ],
      dataProductTemp: [
        {
          title: "Dưỡng da",
          img: "https://yhl.com.vn/wp-content/uploads/2021/09/Artboard-2-copy-5-100.jpg",

          level: "3",
        },
        {
          img: "https://yhl.com.vn/wp-content/uploads/2021/09/Artboard-2-copy-5-100.jpg",

          title: "Dưỡng da",
          level: "2",
          description: "nám",
        },
        {
          img: "https://yhl.com.vn/wp-content/uploads/2021/09/Artboard-2-copy-5-100.jpg",

          title: "Dưỡng da",
          level: "1",
          description: "nám",
        },
      ],
      dataColegen : [],
      dataNamda : [],
      dataProduct : [],
      modalNormal: false,
      modalProduct: false,
      titleNormal : "",
      valueNormal : "1",
      levelNormal :"1",

        titleProduct : "",
        levelProduct : "1",
        group : "group1",
        typeColegen : "0",
        typeSkin : "1",

        typeCurrentUpdate : "0",
        idCurrentUpdate : "",
        idUpdateProduct : null,
        imageProduct : "",
        imageProduct_link : "",
        imageProduct_show : "",
      dataTuVan1 : [],
      dataTuVan2: [],
      idAddTuvan : null,
      imageTuvan : "",
      imageTuvan_show:"",
      imageTuvan_link :""

    };
  }
  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
        levelNormal: e.target.value,
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
  onChangeImageTuVan(e) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ imageTuvan_link: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({ imageTuvan: e.target.result, imageTuvan_show: e.target.result });
    };
  }
  async getDataTuVan(value){
    const 
    {group} = this.state
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/AdvisorItem/getAll";
    var type = null
    if(value==="0"){
        type = 0
    }else{
      type = 1

    }
    await axios.get(url,{
      params : {
     
        type : type,
        group : group
      }
    }).then((res) => {
      if(value==="0"){
        this.setState({
          dataTuVan1 :res.data.data
    
          })
    }else{
      this.setState({
        dataTuVan2 :res.data.data
  
        })

    }
      
      console.log("res",res)
    })
  }
  async componentDidMount() {
    this.getDataColegen();
    this.getDataNamda();
    this.getProduct();
    this.getDataTuVan("0");
    this.getDataTuVan("1");

    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to == window.location.hash) {
        if (arr[i].hidden == true) {
          window.location.href = "#/";
        }
      }
    }
  }
  // renderInfoFuncWeb() {
  //   document.getElementById("renderInfoFuncWebId").innerHTML =
  //     this.state.htmlFuncWeb;
  // }
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
  async getProduct(){
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/Recomend/getAll";
    await axios
      .get(url,{
        params: {
          group : this.state.group
        }
      })
      .then((res) => {
        console.log('product',res)
        this.setState({
          dataProductTemp : res.data.data
        })
      })
  }
  async getDataConfigWeb() {
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/getAll?key=webinfo";
    await axios
      .get(url, {
        key: "webinfo",
      })
      .then((res) => {
        if (res.data.data.length > 0) {
          let dataConfig = res.data.data[0];

          let valueConfig = JSON.parse(dataConfig.Value);
          this.setState({
            image: valueConfig.value.logo,
            image_show: valueConfig.value.logo,
            dataConfigWeb: valueConfig,
            idUpdate: dataConfig._id,
            codeChat: valueConfig.value.tawk,
            codeMess: valueConfig.value.chatMess,
          });
        } else {
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
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/add";
    axios.post(url, {
      dataType: "1",
      key: "webinfo",
      value: JSON.stringify(this.state.dataConfigWeb),
      type: "system",
    });
  }
 
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
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/update";
    await axios.post(url, {
      value: JSON.stringify(this.state.dataConfigWeb),
      dataType: "1",
      type: "system",
      id: this.state.idUpdate,
    });
  }
  getData = async () => {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.CONFIG_THEME_GET + "/" + "61e8c3498f019a121b6fc5ae",
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
  onChangeImageProduct(e){
    
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ imageProduct_link: files[0] });
    
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({
        imageProduct: e.target.result,
        imageProduct_show: e.target.result,
      });
    };

   

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


  openFormAddProduct=()=>{
    this.setState({
        actionProduct : "new",
        modalProduct : true,
        titleProduct : "",
        descProduct : "",
        hrefProduct : "",
          imageProduct: "",
          imageProduct_show: "",
          imageProduct_link : "",
          levelProduct : "",
     
    })
}
async openFormEditProduct(item){
  this.setState({
      actionProduct : "edit",
      titleProduct : item.title,
        descProduct : item.description,
        brandName : item.brandName,
        productType : item.productType,

        hrefProduct :item.href,
          imageProduct: item.avatar,
          imageProduct_show: item.avatar,
        
          levelProduct : item.level,
      idUpdateProduct : item._id,
      brandProduct : item.brandName,
      modalProduct : true
  })
}
  openFormAdd = (value) => {
    if(value === "0"){
      this.setState({
      typeCurrentUpdate : 0

      })
    }else{
      this.setState({
        typeCurrentUpdate :1
  
        })
    }
      
    this.setState({
      action: "new",

      levelNormal : "1",
      
      titleNormal : "",

      modalNormal: true,

      
        
    },()=>{
      
    });
  };
  openAddTuVan=(value)=>{
    this.setState({
      actionTuvan: "new",
      modalTuvan: true,
      imageTuvan : "",
      title :"",
      lifeStyle :"",
      skincare :"",
        idAddTuvan : value
    },()=>{
      
    });
  };
  openEditTuVan=(item,value)=>{
    this.setState({
      actionTuvan: "new",
      modalTuvan: true,
      imageTuvan : item.avatar,
      imageTuvan_link : item.avatar,
      imageTuvan_show : item.avatar,
      levelNormal : item.level,
      title :item.title,
      lifeStyle :item.lifeStyle,
      skincare :item.skincare,
        idAddTuvan : value
    },()=>{
      
    });
  };
  async deleteTuvan (item) {
    const {dataTuVan1, dataTuVan2} = this.state
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/AdvisorItem/delete";
    await axios.post(url, {
        id : item._id
    }).then((res)=>{
      this.getDataTuVan("0");
      this.getDataTuVan("1");

    })
  };
  async saveAddTuvan () {
    const {
      imageTuvan,
        levelNormal,
        titleTuvan,
        titleNormal,
        lifeStyle,
        imageTuvan_link,
        skincare,
    } = this.state;
    const form = new FormData();
    form.append("image", imageTuvan_link);
   
    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST").then(
      (res) => console.log(res)
    );
    let newImage =""
    if(imageTuvan_link){
      newImage = `${Constants.BASE_URL}image_brand/${imageTuvan_link.name}`;

    }
    console.log(newImage)

    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/AdvisorItem/add";
    await axios.post(url, {
        level: levelNormal,
        title : titleTuvan,
      avatar : newImage,
        lifeStyle : lifeStyle,
        skincare : skincare,
        type: this.state.idAddTuvan,
        group: this.state.group,
        icon :newImage
    }).then((res)=>{
      this.getDataTuVan("0");
      this.getDataTuVan("1");

    })    
  };
  async saveEditTuvan () {
    const {
      imageTuvan,
        levelNormal,
        titleTuvan,
        titleNormal,
        lifeStyle,
        skincare,
        imageTuvan_link,
        imageTuvan_show,
    } = this.state;
    const form = new FormData();
    form.append("image", imageTuvan_link);
   
    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST").then(
      (res) => console.log(res)
    );
    let newImage =""
    if(imageTuvan_link){
      newImage = `${Constants.BASE_URL}image_brand/${imageTuvan_link.name}`;

    }
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/AdvisorItem/add";
    await axios.post(url, {
        level: levelNormal,
        title : titleTuvan,
      avatar : newImage,
        lifeStyle : lifeStyle,
        skincare : skincare,
        type: this.state.idAddTuvan,
        group: this.state.group,
        icon :newImage
    }).then((res)=>{
      this.getDataTuVan("0");
      this.getDataTuVan("1");

    })    
  };
  async openFormEdit(item) {
    this.setState({
      action: "edit",
      idUpdateProduct : item._id,
      levelNormal : item.level,
      
      titleNormal : item.content,

      modalNormal: true,

      idCurrentUpdate : item._id,
 
      typeCurrentUpdate : item._type
    
    });
  }
  async notificationAlert(item){
    Swal.fire({
        title: 'Chắc chắn xóa?',
        text: "Bạn sẽ không thể hoàn tác!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Xóa ngay'
      }).then((result) => {
        if (result.isConfirmed) {
            this.openDelete(item);
        }
      })
  }
  async openDelete (item) {
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/ConcludeItem/delete";
    await axios.post(url, {
        id : item._id
    }).then((res)=>{
        if(item._type === "0"){
            this.getDataColegen();
        }else{
            this.getDataNamda();
        }
    })
  };
 async openDeleteProduct (item)  {
    
  Swal.fire({
    title: 'Chắc chắn xóa?',
    text: "Bạn sẽ không thể hoàn tác!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Xóa ngay'
  }).then((result) => {
        if (result.isConfirmed) {
          var baseUrlapi = Constants.BASE_URL;
            let url = baseUrlapi + "api/Recomend/delete";
           axios.post(url, {
            
              id:item._id,
            }).then(()=>{
              this.getProduct();

            })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    
   
  };
  async saveEdit() {
    const {
        levelNormal,
        titleNormal,
        idCurrentUpdate,
        typeCurrentUpdate,
        group
    } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/ConcludeItem/update";
    await axios.post(url, {
        "level": levelNormal,
        "content": titleNormal,
        "type": typeCurrentUpdate,
        "group":group,
        "icon" : [],
        "id" : idCurrentUpdate
    }).then((res)=>{
      this.getDataNamda();
      this.getDataColegen();
    })    
  }
  async saveEditProduct() {
    const {
      titleProduct  ,
      descProduct  ,
      hrefProduct ,
        image,
        image_show ,
        levelProduct ,
    imageProduct_show,
    imageProduct,
    imageProduct_link,
    linkProduct,
    brandProduct,
    productType,
    brandName,
    group,
    levelNormal
    } = this.state;
    const form = new FormData();
    form.append("image", imageProduct_link);
   
    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST").then(
      (res) => console.log(res)
    );
    let newImage = imageProduct
    if(imageProduct_link){
      newImage  = `${Constants.BASE_URL}image_brand/${imageProduct_link.name}`;

    }
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/Recomend/update";
    await axios.post(url, {
      level :levelNormal,
      group : group,
      productType :productType, 
      brandName: brandName,
      description : descProduct,
      title : titleProduct, 
      avatar:newImage,
      href : hrefProduct,
      type:"0",
      id: this.state.idUpdateProduct,
    }).then(()=>{
      this.getProduct();

    })

    
  }
  async saveAdd () {

    const {
        levelNormal,
        titleNormal
    } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/ConcludeItem/add";
    await axios.post(url, {
        level: levelNormal,
    content: titleNormal,
        type: this.state.typeCurrentUpdate,
        group: this.state.group,
        icon : []
    }).then((res)=>{
      this.getDataNamda();
      this.getDataColegen();
    })    
};

async saveAddProduct () {
  const {titleProduct, 
    descProduct,
    imageProduct_show,
    imageProduct,
    imageProduct_link,
    linkProduct,group,hrefProduct
    ,
    brandProduct,
    levelNormal,
    brandName,
    productType,
    title
  } = this.state
  const form = new FormData();
  form.append("image", imageProduct_link);
 
  await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST").then(
    (res) => console.log(res)
  );
  let newImage = imageProduct
  if(imageProduct_link){
    newImage = `${Constants.BASE_URL}image_brand/${imageProduct_link.name}`;

  }

    let baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/Recomend/add";
    await axios.post(url, {
      level :levelNormal,
      group : group,
      productType :productType, 
      brandName: brandName,
      description : descProduct,
      title : titleProduct, 
      avatar:newImage,
      href : hrefProduct,
      type:"0"
    }).then(res=>{
        this.getProduct();
      
    })
};
  async getDataColegen(){
    let baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/ConcludeItem/getAll";
    await axios.get(url, {
      params : {
      
        group : this.state.group,
        type : this.state.typeColegen
      }
    }).then(res=>{
     

       
        let coppyData = [
            ...res.data.data
        ]
        coppyData.forEach((item)=>{
            item._type = this.state.typeColegen
        })
        this.setState({
            dataColegen : coppyData,   
        })
    })
  }
  async getDataNamda(){
    let baseUrlapi = Constants.BASE_URL;
    
    let url = baseUrlapi + "api/ConcludeItem/getAll";
    await axios.get(url, {
      params : {
       
        group : this.state.group,
        type : this.state.typeSkin
      }
    }).then(res=>{
        let coppyData = [
            ...res.data.data
        ]
        coppyData.forEach((item)=>{
            item._type = this.state.typeSkin
        })
        this.setState({
            dataNamda : coppyData,   
        })
    })
  }
  async getDataTvtq(){
    let baseUrlapi = Constants.BASE_URL;
    
    let url = baseUrlapi + "api/ConcludeItem/getAll";
    await axios.get(url, {
      params : {
        level : "1",
        group : this.state.group,
        type : this.state.typeSkin
      }
    }).then(res=>{
        let coppyData = [
            ...res.data.data
        ]
        coppyData.forEach((item)=>{
            item._type = this.state.typeSkin
        })
        this.setState({
            dataNamda : coppyData,   
        })
    })
  }

  renderData(data,value) {
    if (data && data.length > 0) {
      let x = data.map((item, i) => {
        return (
          <tr key={i}>
            <td className="text-center">{i + 1}</td>
            <td className="text-center">
              {item.level === "1" ? "1-3" : "4-5"}
            </td>
            {/* <td className="text-center">{item.name}</td> */}

            <td className="text-center">{item.content}</td>
            <td className="text-center">
              <CButton
                outline
                color="success"
                size="sm"
                onClick={() => this.openFormEdit(item)}
              >
                {/* <CIcon name="cilTrash" /> */}
                Chỉnh sửa
              </CButton>{" "}
              <CButton
                style={styles.mgl5}
                outline
                color="danger"
                size="sm"
                onClick={() => this.notificationAlert(item)}
              >
                {/* <CIcon name="cilPencil" /> */}
                Xóa
              </CButton>
            </td>
          
          </tr>
        );
      });
      let render = (
          <div className="bg_panel">
              <div class="text-center">
            <CButton
              outline
              color="info"
              size="md"
              onClick={() => this.openFormAdd(value)}
            >
              {/* <CIcon name="cilTrash" /> */}
              Thêm mới
            </CButton>{" "}
          </div>
          

        <table
          ble
          className="table table-hover mt-3 table-outline mb-0 d-none d-sm-table"
        >
          <thead className="thead-light">
            <tr>
              <th className="text-center">STT.</th>
              {/* <th className="text-center">Tên</th> */}
              <th className="text-center">Cấp độ</th>
              <th className="text-center">Mô tả</th>

              <th className="text-center">Hành động</th>

            
            </tr>
          </thead>
          <tbody>{x}</tbody>
        </table>
        </div>
      );
      return render;
    } else {
      let render = (
        <div>
          <div class="text-center">
            <CButton
              outline
              color="info"
              size="md"
              onClick={() => this.openFormAdd(value)}
            >
              {/* <CIcon name="cilTrash" /> */}
              Thêm mới
            </CButton>{" "}
          </div>
          <table
            ble
            className="table table-hover mt-3 table-outline mb-0 d-none d-sm-table"
          >
            <thead className="thead-light">
              <tr>
                <th className="text-center radius_th_left">STT.</th>
                {/* <th className="text-center">Tên</th> */}
                <th className="text-center">Cấp độ</th>
                <th className="text-center">Mô tả</th>

                <th className="text-center">Hành động</th>

                <th className="text-center radius_th_right">Value min-max</th>
              </tr>
            </thead>
            <tbody>
              <td>
                <div class="text-center" rows="4" cols="3">
                  Không tìm thấy dữ liệu
                </div>
              </td>
            </tbody>
          </table>
        </div>
      );
      return render;
    }
  }
  renderDataProduct(data) {
    if (data && data.length > 0) {
      let x = data.map((item, i) => {
        return (
          <tr key={i}>
            <td colSpan="10" hidden={this.state.hidden} className="text-center">
              Không tìm thấy dữ liệu
            </td>
            <td className="text-center">{i + 1}</td>
            <td className="text-center">{item.brandName}</td>

            <td className="text-center">{item.title}</td>

            {/* <td className="text-center">{item.name}</td> */}

            <td className="text-center">
              <img src={`${item.avatar}`} width={"60px"} height={"60px"} alt="" />
            </td>
            <td className="text-center">{item.description}</td>

            <td className="text-center">{item.href}</td>
            <td className="text-center">
              <CButton
                outline
                color="success"
                size="sm"
                onClick={() => this.openFormEditProduct(item)}
              >
                {/* <CIcon name="cilTrash" /> */}
                Chỉnh sửa
              </CButton>{" "}
              <CButton
                style={styles.mgl5}
                outline
                color="danger"
                size="sm"
                onClick={() => this.openDeleteProduct(item)}
              >
                {/* <CIcon name="cilPencil" /> */}
                Xóa
              </CButton>
            </td>
          </tr>
        );
      });
      let render = (
          <div className="bg_panel">
              <div class="text-center">
            <CButton
              outline
              color="info"
              size="md"
              onClick={() => this.openFormAddProduct()}
            >
              {/* <CIcon name="cilTrash" /> */}
              Thêm mới
            </CButton>{" "}
          </div>
         
        <table
          ble
          className="table table-hover mt-3 table-outline mb-0 d-none d-sm-table"
        >
          <thead className="thead-light">
            <tr>
              <th className="text-center radius_th_left">STT.</th>
              <th className="text-center">Thương hiệu</th>
              <th className="text-center">Tên</th>

              <th className="text-center">Ảnh</th>
              <th className="text-center">Mô tả</th>

              <th className="text-center">Đường dẫn</th>

              <th className="text-center radius_th_right">Hành động</th>
            </tr>
          </thead>
          <tbody>{x}</tbody>
        </table>
        </div>
      );
      return render;
    } else {
      let render = (
          <div>
                 <div class="text-center">
            <CButton
              outline
              color="info"
              size="md"
              onClick={() => this.openFormAddProduct()}
            >
              {/* <CIcon name="cilTrash" /> */}
              Thêm mới
            </CButton>{" "}
          </div>
          
        <table
          ble
          className="table table-hover mt-3 table-outline mb-0 d-none d-sm-table"
        >
          <thead className="thead-light">
          <tr>
              <th className="text-center">STT.</th>
              {/* <th className="text-center">Tên</th> */}
              <th className="text-center">Tiêu đề</th>
              <th className="text-center">Ảnh</th>

              <th className="text-center">Độ ưu tiên</th>

              <th className="text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <td>
              <div class="text-center" rows="4" cols="3">
                Không tìm thấy dữ liệu
              </div>
            </td>
          </tbody>
        </table>
        </div>
      );
      return render;
    }
  }
  renderDataTuVan(data,value){
    if (data && data.length > 0) {
      let x = data.map((item, i) => {
        return (
          <tr key={i}>
            <td className="text-center">{i + 1}</td>
            <td className="text-center">
              <img src={`${item.Icon}`} width={"60px"} height={"60px"} alt="" />
            </td>

            <td className="text-center">{item.title}</td>
            <td className="text-center">{item.lifeStyle}</td>

            
            {/* <td className="text-center">{item.name}</td> */}
            <td className="text-center">{item.skincare}</td>
            <td className="text-center">
              {item.level === "1" ? "1-3" : "4-5"}
            </td>
            <td className="text-center">
              <CButton
                outline
                color="success"
                size="sm"
                onClick={() => this.openEditTuVan(item)}
              >
                {/* <CIcon name="cilTrash" /> */}
                Chỉnh sửa
              </CButton>{" "}
              <CButton
                style={styles.mgl5}
                outline
                color="danger"
                size="sm"
                onClick={() => this.deleteTuvan(item)}
              >
                {/* <CIcon name="cilPencil" /> */}
                Xóa
              </CButton>
            </td>
          
          </tr>
        );
      });
      let render = (
          <div className="bg_panel">
              <div class="text-center">
            <CButton
              outline
              color="info"
              size="md"
              onClick={() => this.openAddTuVan(value)}
            >
              {/* <CIcon name="cilTrash" /> */}
              Thêm mới
            </CButton>{" "}
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
              <th className="text-center">Tiêu đề</th>
              <th className="text-center">Lối sống</th>
              <th className="text-center">Chăm sóc</th>
              <th className="text-center">Cấp độ</th>
              <th className="text-center">Hành động</th>       
            </tr>
          </thead>
          <tbody>{x}</tbody>
        </table>
        </div>
      );
      return render;
    } else {
      let render = (
        <div>
          <div class="text-center">
          <CButton
              outline
              color="info"
              size="md"
              onClick={() => this.openAddTuVan(value)}
            >
              {/* <CIcon name="cilTrash" /> */}
              Thêm mới
            </CButton>{" "}
          </div>
          <table
            ble
            className="table table-hover mt-3 table-outline mb-0 d-none d-sm-table"
          >
            <thead className="thead-light">
              <tr>
                <th className="text-center radius_th_left">STT.</th>
                {/* <th className="text-center">Tên</th> */}
                <th className="text-center">Cấp độ</th>
                <th className="text-center">Mô tả</th>

                <th className="text-center">Hành động</th>

                <th className="text-center radius_th_right">Value min-max</th>
              </tr>
            </thead>
            <tbody>
              <td>
                <div class="text-center" rows="4" cols="3">
                  Không tìm thấy dữ liệu
                </div>
              </td>
            </tbody>
          </table>
        </div>
      );
      return render;
    }
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
      company_id: "61e8c3498f019a121b6fc5ae",
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
    const styles = {
      Tab: {
        fontSize: "16px",
        fontWeight: "bold",
        background : "#636f83; !important",
        backgroundColor : "#636f83; !important"

      },
      TabPanel : {
          background : "#636f83;"
      }
    };
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
    const arrValue = [
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
        dataColegen,
        dataNamda,
      valueTabs,
      dataColegenTemp,
      dataNamTemp,
      valueOverview,
      dataTuVan1,
      dataProductTemp,
      dataTuVan2
    } = this.state;

    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
        <div class="modal_product">
        <Modal
            size="xl"
            isOpen={this.state.modalProduct}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.actionProduct === "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
            <TextFieldGroup
                field="titleProduct"
                label="Tên sản phẩm"
                value={this.state.titleProduct}
         
                onChange={(e) => {
                  this.setState({ titleProduct: e.target.value });
                }}
              />
               <TextFieldGroup
                field="productType"
                label="Nhóm sản phẩm"
                value={this.state.productType}
              
                onChange={(e) => {
                  this.setState({ productType: e.target.value });
                }}
              />
               <TextFieldGroup
                field="brandName"
                label="Thương hiệu"
                value={this.state.brandName}
              
                onChange={(e) => {
                  this.setState({ brandName: e.target.value });
                }}
              />
            
              <label>Mô tả</label>
              <CTextarea
                field="descProduct"
                label="Mô tả"
                value={this.state.descProduct}
                placeholder={"Mô tả..."}
                onChange={(e) => {
                  this.setState({ descProduct: e.target.value });
                }}
              />
              <TextFieldGroup
            field="imageProduct"
            label="Ảnh minh họa"
            type={"file"}
            // value={this.state.image}
            onChange={(e) => {
              this.onChangeImageProduct(e);
            }}
            onClick={(e) => {
              e.target.value = null;
              this.setState({ imageProduct_show: "" });
            }}
          />
<img
              alt=""
              style={{ width: "140px", marginBottom: 20 }}
              height="auto"
              src={this.state.imageProduct}
            />

             <TextFieldGroup
                field="hrefProduct"
                label="Đường dẫn"
                value={this.state.hrefProduct}
                placeholder={"Link..."}
                onChange={(e) => {
                  this.setState({ hrefProduct: e.target.value });
                }}
              />
              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Cấp độ:</CLabel>
                {arrLevel != undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevel(e);
                    }}
                    custom
                    size="sm"
                    name="levelNormal"
                    id="SelectLm"
                  >
                    {arrLevel.map((item, i) => {
                      if (item.item === this.state.levelNormal) {
                        return (
                          <option selected key={i} value={item.item}>
                            {item.item === "1"
                              ? "1-3"
                              :  "4-5"
                              }
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                            {item.item === "1"
                              ? "1-3"
                              :  "4-5"
                              }
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
                  this.state.actionProduct === "new"
                    ? this.saveAddProduct()
                    : this.saveEditProduct();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) => {
                  this.setState({
                    modalProduct: false,
                  });
                }}
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
</div>
<div class="modal_normal">
<Modal
            size="xl"
            isOpen={this.state.modalTuvan}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.actionTuvan === "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <CTextarea
                field="titleTuvan"
                label="Tiêu đề"
                className="mt-3"
                value={this.state.titleTuvan}
                placeholder={"Tiêu đề"}
                onChange={(e) => {
                  this.setState({ titleTuvan: e.target.value });
                }}
              />
              <CTextarea
                field="lifeStyle"
                label="Lối sống"
                className="mt-3"
                value={this.state.lifeStyle}
                placeholder={"Lối sống"}
                onChange={(e) => {
                  this.setState({ lifeStyle: e.target.value });
                }}
              />
              <CTextarea
                field="skincare"
                label="Chăm sóc"
                className="mt-3"
                value={this.state.skincare}
                placeholder={"Chăm sóc"}
                onChange={(e) => {
                  this.setState({ skincare: e.target.value });
                }}
              />
              <TextFieldGroup
            field="icon"
            label="Ảnh minh họa"
            type={"file"}
            // value={this.state.image}
            onChange={(e) => {
              this.onChangeImageTuVan(e);
            }}
            onClick={(e) => {
              e.target.value = null;
              this.setState({ imageTuvan_show: "" });
            }}
          />
<img
              alt=""
              style={{ width: "140px", marginBottom: 20 }}
              height="auto"
              src={this.state.imageTuvan}
            />
              {/* <Editor
         onInit={{  }}
         className="mt-3"
         initialValue="<p></p>"
         init={{
           height: 250,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       /> */}
              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Cấp độ:</CLabel>
                {arrLevel != undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevel(e);
                    }}
                    custom
                    size="sm"
                    name="levelNormal"
                    id="SelectLm"
                  >
                    {arrLevel.map((item, i) => {
                      if (item.item === this.state.levelNormal) {
                        return (
                          <option selected key={i} value={item.item}>
                            {item.item === "1"
                              ? "1-3"
                              : "4-5"
                              }
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                            {item.item === "1"
                              ? "1-3"
                              :  "4-5"
                              }
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
                  this.state.actionTuvan === "new"
                    ? this.saveAddTuvan()
                    : this.saveEditTuvan();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) => {
                  this.setState({
                    modalTuvan: false,
                  });
                }}
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
          <Modal
            size="xl"
            isOpen={this.state.modalNormal}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.action === "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <CTextarea
                field="titleNormal"
                label="Mô tả"
                value={this.state.titleNormal}
                placeholder={"Mô tả..."}
                onChange={(e) => {
                  this.setState({ titleNormal: e.target.value });
                }}
              />
              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Cấp độ:</CLabel>
                {arrLevel != undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevel(e);
                    }}
                    custom
                    size="sm"
                    name="levelNormal"
                    id="SelectLm"
                  >
                    {arrLevel.map((item, i) => {
                      if (item.item === this.state.levelNormal) {
                        return (
                          <option selected key={i} value={item.item}>
                            {item.item === "1"
                              ? "1-3"
                              :  "4-5"
                               }
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                            {item.item === "1"
                              ? "1-3"
                              : "4-5"
                              }
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
                onClick={(e) => {
                  this.setState({
                    modalNormal: false,
                  });
                }}
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>

          </div>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={valueTabs}
                onChange={(e, newValue) =>
                  this.setState({
                    valueTabs: newValue,
                  })
                }
                aria-label="basic tabs example"
              >
                <Tab
                  label="Colegen"
                  style={styles.Tab}
                  id="simple-tab-0"
                  aria-controls="simple-tabpanel-0"
                />
                <Tab
                  label="Nám"
                  style={styles.Tab}
                  id="simple-tab-1"
                  aria-controls="simple-tabpanel-1"
                />
                <Tab
                  label="Tư vấn tổng quan"
                  id="simple-tab-2"
                  style={styles.Tab}
                  aria-controls="simple-tabpanel-2"
                />
                <Tab
                  label="Sản phẩm gợi ý"
                  id="simple-tab-3"
                  style={styles.Tab}
                  aria-controls="simple-tabpanel-3"
                />
              </Tabs>
            </Box>
            <TabPanel style={styles.TabPanel} value={valueTabs} index={0}>
              {this.renderData(dataColegen,"0")}
            </TabPanel>
            <TabPanel style={styles.TabPanel} value={valueTabs} index={1}>
              {this.renderData(dataNamda,"1")}
            </TabPanel>
            <TabPanel  value={valueTabs} index={2}>
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={valueOverview}
                  onChange={(e, newValue) =>
                    this.setState({
                      valueOverview: newValue,
                    })
                  }
                  centered
                >
                  <Tab
                    label="Colegen"
                    id="simple-tab-4"
                    style={styles.Tab}
                    aria-controls="simple-tabpanel-4"
                  />
                  <Tab
                    label="Nấm"
                    id="simple-tab-5"
                    style={styles.Tab}
                    aria-controls="simple-tabpanel-5"
                  />
                </Tabs>
                <TabPanel value={valueOverview} index={0}>
                {this.renderDataTuVan(dataTuVan1,"0")}

                </TabPanel>
                <TabPanel value={valueOverview} index={1}>
                {this.renderDataTuVan(dataTuVan2,"1")}

                </TabPanel>
              </Box>
            </TabPanel>
            <TabPanel style={styles.TabPanel} value={valueTabs} index={3}>
              {this.renderDataProduct(dataProductTemp)}
            </TabPanel>
          </Box>
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
