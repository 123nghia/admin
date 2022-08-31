import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ModalHeader, ModalBody, ModalFooter, Modal } from "reactstrap";
import Swal from "sweetalert2";
import TextFieldGroup from "../Common/TextFieldGroup";
import API_CONNECT from "../../functions/callAPI";
import { CButton, CCol, CLabel, CRow, CSelect, CTextarea } from "@coreui/react";
import "moment-timezone";
import "react-datepicker/dist/react-datepicker.css";
import Constants from "../../contants/contants";
import axios from "axios";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { IoLogoBuffer } from "@react-icons/all-files/io/IoLogoBuffer";
import Banner1 from "./configWebAdmin/Banner1";
import Banner2 from "./configWebAdmin/Banner2";
import Footer from "./configWebAdmin/Footer";
import Logos from "./configWebAdmin/Logo";
import GuideVoucher from "./configWebAdmin/GuideVoucher";
import { BiSlideshow, BiCategory } from "react-icons/bi";
import { RiGuideLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Sologan from "./configWebAdmin/Slogon";
import InfoCompany from "./configWebAdmin/InfoCompany";
import BannerBrand from "./configWebAdmin/BannerBrand";
import Info from './configWebAdmin/Info';
let headers = new Headers();
const auth = localStorage.getItem("auth");

headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
class ConfigWebAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerCampaign: [],
      modalBannerBrand : false,
      actionModalBannerCampaign: "new",
      statusFooter: "0",
      modalBannerCampaign: false,
      tabNameConfig: [
        {
          _id: "1",
          name: "Banner Slide",
          icon: <BiSlideshow style={{ width: "24px ", height: "24px " }} />,
        },
        {
          _id: "8",
          name: "Banner thương hiệu",
          icon: <BiSlideshow style={{ width: "24px ", height: "24px " }} />,
        },
        {
          _id: "6",
          name: "Slogan",
          icon: (
            <AiOutlineInfoCircle style={{ width: "24px ", height: "24px " }} />
          ),
        },
        {
          _id: "2",
          name: "Hạng mục",
          icon: <BiCategory style={{ width: "24px ", height: "24px " }} />,
        },
        {
          _id: "7",
          name: "Thông tin công ty",
          icon: (
            <AiOutlineInfoCircle style={{ width: "24px ", height: "24px " }} />
          ),
        },

        {
          _id: "3",
          name: "Logos",
          icon: <IoLogoBuffer style={{ width: "24px ", height: "24px " }} />,
        },
        {
          _id: "4",
          name: "Thông tin footer",
          icon: (
            <AiOutlineInfoCircle style={{ width: "24px ", height: "24px " }} />
          ),
        },
        {
          _id: "9",
          name: "Thông tin bên lề",
          icon: (
            <AiOutlineInfoCircle style={{ width: "24px ", height: "24px " }} />
          ),
        },
      ],
      company_id: JSON.parse(localStorage.getItem("user")).company_id
        ? JSON.parse(localStorage.getItem("user")).company_id
        : "-1",
      colorWebCurrent: localStorage.getItem("colorpicker"),
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

      updateLevel: "1",

      statusModalUpdate: false,
      dataConfigWeb: null,
      idUpdateCurrent: null,
      loadingSaveLogo: false,
      htmlFuncWeb: null,
      openHomeItem: false,
      modalSlide: false,
      actionSlide: "new",
      actionBanner: "new",
      modalBanner: false,
    };
  }

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
      }
    }
    for (i = 0; i < tabcontent.length; i++) {
      if (tabcontent[i].id.replace("tabcontent", "") === id) {
        tabcontent[i].classList.add("defaultOpen");
        tabcontent[i].style.animation = "hideOpa 1s ease-in-out";
      } else {
        tabcontent[i].classList.remove("defaultOpen");
        tabcontent[i].style.animation = "none";
      }
    }
  }
  onChangeImage = (e, value, valueLink, valueShow) => {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ [valueLink]: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({ [value]: e.target.result, [valueShow]: e.target.result });
    };
    
  };
  async componentDidMount() {
    this.getDataConfigWeb();
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

    const newComany_id = JSON.parse(localStorage.getItem("user")).company_id;
    let Output_newComany_id;
    if (newComany_id) {
      Output_newComany_id = newComany_id;
    } else {
      Output_newComany_id = "-1";
    }

    await axios
      .get(url, {
        params: {
          key: "webinfo_tikicare",
          company_id: Output_newComany_id,
        },
      })
      .then((res) => {
        if (res.data.data.length > 0) {
          let dataConfig = res.data.data[0];

          let valueConfig = JSON.parse(dataConfig.Value);
          console.log(valueConfig);

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
              configData: valueConfig.value.statusConfig,
              banner: valueConfig.value.banner,
              guideVoucher: valueConfig.value.guideVoucher,
              bannerCampaign: valueConfig.value.bannerCampaign,
              bannerCategories: valueConfig.value.bannerCategories,
              sologan: valueConfig.value.sologan,
              infoCompany: valueConfig.value.infoCompany,
              dataFooter: valueConfig.value.dataFooter,
              bannerBrand : valueConfig.value.bannerBrand,
              contentCategoryBanner : valueConfig.value.contentCategoryBanner,
              info: valueConfig.value.info,

            },
            () => {
              const {
                homepage,
                seoInfo,
                logos,
                infoCompany,
                chats,
                info,
                bannerCampaign,
                configData,
                mxh,
                guideVoucher,
                banner,
                sologan,
                contentCategoryBanner,
                dataFooter,
                bannerBrand
              } = this.state;              
              if (contentCategoryBanner) {
                this.setState({
                  titleSectionBannerBrand: contentCategoryBanner.title,
                  contentSectionBannerBrand: contentCategoryBanner.content,
                });
              }
              if (info) {
                this.setState({
                  hotlineCompany: info.hotline,
                  emailCompany: info.email,
                });
              }
              if (infoCompany) {
                this.setState({
                  infoCompany: infoCompany,
                });
              }
              if (bannerBrand) {
                this.setState({
                  bannerBrand: bannerBrand,
                });
              }
              if (dataFooter) {
                this.setState({
                  dataFooter: dataFooter,
                });
              }
              if (sologan) {
                this.setState({
                  sologan_1: this.state.sologan.text_1,
                  sologan_2: this.state.sologan.text_2,
                  sologan_3: this.state.sologan.text_3,
                  sologan_4: this.state.sologan.text_4,
                  sologan_5: this.state.sologan.text_5,
                  sologan_button: this.state.sologan.button,
                });
              }
              
              if (bannerCampaign) {
                this.setState({
                  bannerCampaign: this.state.bannerCampaign,
                });
              }
              if (banner) {
                this.setState({
                  image_banner1: this.state.banner.banner1,
                  bannerSlide: this.state.banner.bannerSlide,
                  bannerMainSlide: this.state.banner,
                });
              }
              if (logos) {
                this.setState({
                  hrefLogoHeader: valueConfig.value.logos.header.href,
                  hrefLogoFooter: valueConfig.value.logos.footer.href,
                  image: valueConfig.value.logos.header.logo,
                  imgLogoFooter: valueConfig.value.logos.footer.logo,
                  imgLogoAdmin: valueConfig.value.logos.webAdmin.logo,
                });
              }
            }
          );
        } else {
          let templateDataConfigWeb = {
            key: "webinfo_tikicare",
            value: {},
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
    axios
      .post(url, {
        company_id: this.state.company_id,
        dataType: "1",
        key: "webinfo_tikicare",
        value: JSON.stringify(this.state.dataConfigWeb),
        type: "system",
      })
      .then((res) => {});
  }
  deleteFooter = async (i) => {
    console.log(this.state.dataConfigWeb);
    const { dataConfigWeb } = this.state;
    let coppyData = {
      ...dataConfigWeb,
    };
    coppyData.value.dataFooter.category.splice(i, 1);
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
  };
  async updateFooter() {
    const {
      slugFooter,
      updateLink,
      contentFooter,
      indexUpdateFooter,
      updateTitle,
      dataConfigWeb,
      statusFooter,
    } = this.state;
    let ob = {
      slug: slugFooter,
      status: statusFooter,
      link: updateLink,
      title: updateTitle,
      content: contentFooter,
    };
    if (!statusFooter || statusFooter === "0") {
      alert("Hãy chọn mục");
      return;
    }
    let coppy = { ...dataConfigWeb };
    console.log(indexUpdateFooter);
    coppy.value.dataFooter.category[indexUpdateFooter] = ob;
    this.setState(
      {
        dataConfigWeb: coppy,
      },
      async () => {
        await this.onUpdate().then(() => {
          Swal.fire({
            icon: "success",
            title: "Cập nhật thành công",
            showConfirmButton: false,
            timer: 700,
          });
          this.setState({
            statusModalUpdate: false,
          });
          this.getDataConfigWeb();
        });
      }
    );
  }
  async addFooter() {
    const {
      slugFooter,
      updateLink,
      contentFooter,
      updateTitle,
      dataConfigWeb,
      statusFooter,
    } = this.state;
    let ob = {
      slug: slugFooter,
      link: updateLink,
      title: updateTitle,
      content: contentFooter,
      status: statusFooter,
    };
    if (statusFooter === "0") {
      alert("Hãy chọn mục");
      return;
    }
    let coppy = { ...dataConfigWeb };
    if (!coppy.value.dataFooter) {
      coppy.value.dataFooter = {};
    }
    if (!coppy.value.dataFooter.category) {
      coppy.value.dataFooter.category = [];
    }
    coppy.value.dataFooter.category.push(ob);
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
            statusModalUpdate: false,
          });
          this.getDataConfigWeb();
        });
      }
    );
  }
  openFormAddFooter = () => {
    this.setState({
      action: "new",
      contentFooter: "",
      updateLevel: "1",
      statusModalUpdate: true,
      updateLink: "",
      updateTitle: "",
      slugFooter: "",
      statusFooter: "0",
    });
  };
  openFormEditFooter = async (item, i) => {
    this.setState({
      action: "edit",
      statusFooter: item.status,
      updateLevel: item.Level,
      slugFooter: item.slug,
      idFooterEditor: item._id,
      updateTitle: item.title,
      contentFooter: item.content,
      statusModalUpdate: true,
      updateLink: item.link,
      indexUpdateFooter: i,
    });
  };
  async postImage(link) {
    var newImage = "";
    if (link && link !== "") {
      const form = new FormData();

      form.append("image", link);

      await API_CONNECT(Constants.UPLOAD_BANNER, form, "", "POST").then(
        (res) => {}
      );

      newImage = link.name;
      return newImage;
    } else {
      return newImage;
    }
  }
  SaveAllConfigWeb = async (change) => {
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
    const newComany_id = JSON.parse(this.state.company_id).company_id;
    let itOutput = "-1";
    if (newComany_id) {
      itOutput = newComany_id;
    }
    let coppyData = {
      ...dataConfigWeb,
    };

    if (change === "guideVoucher") {
      coppyData.value.guideVoucher = this.state.guideVoucher;
    }
    if (change === "info") {
      if(!coppyData.value.info){
        coppyData.value.info = {};
      }
      coppyData.value.info.hotline = this.state.hotlineCompany;
      coppyData.value.info.email = this.state.emailCompany;

    }
    if (change === "bannerCampaign") {
      coppyData.value.bannerCampaign = this.state.bannerCampaign;
    }
    if (change === "logoCompany") {
      let newImage1 = await this.postImage(this.state.imageLogoCompany_link);
      if (newImage1) {
        coppyData.value.homepage.LogoCompany = `${Constants.BASE_URL}image_banner/${newImage1}`;
      }
    }
    if (change === "banner") {
      if (!coppyData.value.banner) {
        coppyData.value.banner = [];
      }
      let newImage1 = await this.postImage(this.state.image_banner1_link);
      if (newImage1) {
        coppyData.value.banner.banner1 = `${Constants.BASE_URL}image_banner/${newImage1}`;
      }
    }
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
        coppyData.value.homepage.image1 = `${Constants.BASE_URL}image_banner/${newImage1}`;
      }
      if (newImage2) {
        coppyData.value.homepage.image2 = `${Constants.BASE_URL}image_banner/${newImage2}`;
      }
      if (newImage3) {
        coppyData.value.homepage.image3 = `${Constants.BASE_URL}image_banner/${newImage3}`;
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
        coppyData.value.seoInfo.imageShare = `${Constants.BASE_URL}image_banner/${newImage4}`;
      }
      this.setState({
        dataConfigWeb: coppyData,
      });
    }
    if (change === "sologan") {
      const {
        sologan_1,
        sologan_2,
        sologan_3,
        sologan_4,
        sologan_5,
        sologan_button,
      } = this.state;
      if (!coppyData.value.sologan) {
        coppyData.value.sologan = {};
      }
      coppyData.value.sologan.text_1 = sologan_1;
      coppyData.value.sologan.text_2 = sologan_2;
      coppyData.value.sologan.text_3 = sologan_3;
      coppyData.value.sologan.text_4 = sologan_4;
      coppyData.value.sologan.text_5 = sologan_5;
      coppyData.value.sologan.button = sologan_button;
      this.setState({
        dataConfigWeb: coppyData,
      });
    }
    if (change === "contentCategoryBanner") {
      const {
        titleSectionBannerBrand,
        contentSectionBannerBrand,
      } = this.state;
      if(!coppyData.value.contentCategoryBanner){
        coppyData.value.contentCategoryBanner = {};
      };
     console.log(titleSectionBannerBrand);
      coppyData.value.contentCategoryBanner.title = titleSectionBannerBrand;
      coppyData.value.contentCategoryBanner.content = contentSectionBannerBrand;
    }
    
    if (change === "logos") {
      if (!coppyData.value.logos) {
        coppyData.value.logos = {};
      }
      if (!coppyData.value.logos.webAdmin) {
        coppyData.value.logos.webAdmin = {};
      }
      if (!coppyData.value.logos.header) {
        coppyData.value.logos.header = {};
      }
      if (!coppyData.value.logos.footer) {
        coppyData.value.logos.footer = {};
      }
      let newImage3 = await this.postImage(this.state.imgLogoAdmin_link);
      if (newImage3) {
        coppyData.value.logos.webAdmin.logo = `${Constants.BASE_URL}image_banner/${newImage3}`;
      }
      let newImage = await this.postImage(this.state.image_link);
      if (newImage) {
        coppyData.value.logos.header.logo = `${Constants.BASE_URL}image_banner/${newImage}`;
      }
      let newImage2 = await this.postImage(this.state.imgLogoFooter_link);
      if (newImage2) {
        coppyData.value.logos.footer.logo = `${Constants.BASE_URL}image_banner/${newImage2}`;
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
  };
  async onUpdate() {
    const { dataConfigWeb } = this.state;

    const newComany_id = JSON.parse(this.state.company_id).company_id;
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
  closeFormEdit = () => {
    this.setState({ statusModalUpdate: false });
  };
  openFormAddSlide = () => {
    this.setState({
      actionSlide: "new",
      modalSlide: true,
      imageSlide: "",
      imageSlide_link: "",
      imageSlide_show: "",
      contentSlide: "",
    });
  };

  saveAddSlide = async () => {
    const { contentSlide, dataConfigWeb, imageSlide_link } = this.state;
    let newImage = await this.postImage(imageSlide_link);
    let imageOutput;
    if (newImage) {
      imageOutput = `${Constants.BASE_URL}image_banner/${newImage}`;
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
  };
  openFormAddBanner = (value) => {
    this.setState({
      positionBannerActive: value,
      actionBanner: "new",
      modalBanner: true,
      image_banner2: "",
      contentBanner: "",
      hrefBanner: "",
    });
  };
  saveAddBanner = async () => {
    const { contentBanner, dataConfigWeb, image_banner2_link, hrefBanner } =
      this.state;
    let newImage = await this.postImage(image_banner2_link);
    let imageOutput;
    if (newImage) {
      imageOutput = `${Constants.BASE_URL}image_banner/${newImage}`;
    } else {
      imageOutput = "";
    }
    console.log(newImage);
    let ob = {
      image: imageOutput,
      content: contentBanner,
      href: hrefBanner,
    };
    let coppy = { ...dataConfigWeb };
    if (!coppy.value.banner) {
      coppy.value.banner = [];
    }
    coppy.value.banner.unshift(ob);

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
            modalBanner: false,
          });
          this.getDataConfigWeb();
        });
      }
    );
  };

  openFormEditBanner = (value, item, i) => {
    this.setState({
      actionBanner: "edit",
      positionBannerActive: value,
      modalBanner: true,
      image_banner2: item.image,
      contentBanner: item.content,
      hrefBanner: item.href,
      indexBannerEditor: i,
    });
  };

  deleteBanner = async (value, i) => {
    const { dataConfigWeb } = this.state;
    let coppyData = {
      ...dataConfigWeb,
    };
    coppyData.value.banner.splice(i, 1);
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
  };

  async saveEditBanner() {
    const {
      image_banner2,
      contentBanner,
      dataConfigWeb,
      indexBannerEditor,
      hrefBanner,
    } = this.state;
    let ob = {
      image: image_banner2,
      content: contentBanner,
      href: hrefBanner,
    };
    let coppy = { ...dataConfigWeb };
    coppy.value.banner[indexBannerEditor] = ob;

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
          modalBanner: false,
        });
        await this.onUpdate();

        this.getDataConfigWeb();
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

  setStateByName = (name, value) => {
    this.setState({ [name]: value });
  };
  openFormAddBannerCampaign = () => {
    console.log("1");
    this.setState({
      nameBannerCampaign: "",
      image_banner_campaign: "",
      image_banner_campaign_link: "",
      image_banner_campaign_show: "",
      contentBannerCampaign: "",
      hrefBannerCampaign: "",
      outputBannerCampaign: "",
      modalBannerCampaign: true,
      actionModalBannerCampaign: "new",
    });
  };
  openEditBannerCampaign = (item, i) => {
    this.setState({
      indexBannerUpdate: i,
      nameBannerCampaign: item.name,
      image_banner_campaign: item.image,
      image_banner_campaign_link: item.image,
      image_banner_campaign_show: item.image,
      contentBannerCampaign: item.content,
      hrefBannerCampaign: item.link,
      outputBannerCampaign: item.output,
      modalBannerCampaign: true,
      actionModalBannerCampaign: "edit",
    });
  };
  deleteBannerCampaign = async (i) => {
    const { dataConfigWeb } = this.state;
    let coppyData = {
      ...dataConfigWeb,
    };
    coppyData.value.bannerCampaign.splice(i, 1);
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
  };
  saveAddBannerCampaign = async () => {
    let newImage = await this.postImage(this.state.image_banner_campaign_link);
    let imageOutput;
    if (newImage) {
      imageOutput = `${Constants.BASE_URL}image_banner/${newImage}`;
    } else {
      imageOutput = "";
    }
    let ob = {
      image: imageOutput,
      name: this.state.nameBannerCampaign,
      content: this.state.contentBannerCampaign,
      link: this.state.hrefBannerCampaign,
      output: this.state.outputBannerCampaign,
    };
    let coppy = { ...this.state.dataConfigWeb };
    if (!coppy.value.bannerCampaign) {
      coppy.value.bannerCampaign = [];
    }
    coppy.value.bannerCampaign.push(ob);
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
            modalBannerCampaign: false,
          });
          this.getDataConfigWeb();
        });
      }
    );
  };
  saveEditBannerCampaign = async () => {
    let newImage = await this.postImage(this.state.image_banner_campaign_link);
    let imageOutput = this.state.image_banner_campaign;
    if (newImage) {
      imageOutput = `${Constants.BASE_URL}image_banner/${newImage}`;
    }
    let ob = {
      image: imageOutput,
      name: this.state.nameBannerCampaign,
      content: this.state.contentBannerCampaign,
      link: this.state.hrefBannerCampaign,
      output: this.state.outputBannerCampaign,
    };
    let coppy = { ...this.state.dataConfigWeb };

    coppy.value.bannerCampaign[this.state.indexBannerUpdate] = ob;
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
          modalBannerCampaign: false,
        });
        await this.onUpdate();

        this.getDataConfigWeb();
      }
    );
  };
  openFormAddCategories = (value) => {
    const {bannerCategories} = this.state
    console.log(bannerCategories.length)
    if(bannerCategories && bannerCategories.length >= 3){
      alert("Tối đa là 3 mục");
      return;
    }
    this.setState({
      positionBannerActive: value,
      actionBannerCategories: "new",
      modalBannerCategories: true,
      imageBannerCategories: "",
      imageBannerCategories_link: "",
      imageBannerCategories_show: "",
      contentBannerCategories: "",
      hrefBannerCategories: "",
      titleCategories: "",
    });
  };
  saveAddCategories = async () => {
    const {
      contentBannerCategories,
      dataConfigWeb,
      imageBannerCategories_link,
      titleCategories,
      hrefBannerCategories,
    } = this.state;
    let newImage = await this.postImage(imageBannerCategories_link);
    let imageOutput;
    if (newImage) {
      imageOutput = `${Constants.BASE_URL}image_banner/${newImage}`;
    } else {
      imageOutput = "";
    }
    let ob = {
      image: imageOutput,
      content: contentBannerCategories,
      href: hrefBannerCategories,
      title: titleCategories,
    };
    let coppy = { ...dataConfigWeb };
    if (!coppy.value.bannerCategories) {
      coppy.value.bannerCategories = [];
    }
    coppy.value.bannerCategories.unshift(ob);
    console.log("coppy", coppy);

    this.setState(
      {
        dataConfigWeb: coppy,
      },
      async () => {
        console.log("dataConfigWeb", dataConfigWeb);

        await this.onUpdate().then(() => {
          Swal.fire({
            icon: "success",
            title: "Thêm mới thành công",
            showConfirmButton: false,
            timer: 700,
          });
          this.setState({
            modalBannerCategories: false,
          });
          this.getDataConfigWeb();
        });
      }
    );
  };
  openFormEditCategories = (value, item, i) => {
    this.setState({
      actionBannerCategories: "edit",
      positionBannerActive: value,
      modalBannerCategories: true,
      imageBannerCategories: item.image,
      contentBannerCategories: item.content,
      hrefBannerCategories: item.href,
      indexBannerEditorCategories: i,
      titleCategories: item.title,
    });
  };
  async saveEditCategories() {
    const {
      imageBannerCategories,
      contentBannerCategories,
      dataConfigWeb,
      indexBannerEditorCategories,
      hrefBannerCategories,
      titleCategories,
    } = this.state;
    let ob = {
      title: titleCategories,
      image: imageBannerCategories,
      content: contentBannerCategories,
      href: hrefBannerCategories,
    };
    let coppy = { ...dataConfigWeb };
    coppy.value.bannerCategories[indexBannerEditorCategories] = ob;

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
          modalBannerCategories: false,
        });
        await this.onUpdate();

        this.getDataConfigWeb();
      }
    );
  }
  deleteCategories = async (value, i) => {
    const { dataConfigWeb } = this.state;
    let coppyData = {
      ...dataConfigWeb,
    };
    coppyData.value.bannerCategories.splice(i, 1);
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
  };

  openFormAddInfoCompany = (value) => {
    this.setState({
      actionModalInfoCompany: "new",
      modalInfoCompany: true,
      imageInfoCompany: "",
      imageInfoCompany_link: "",
      imageInfoCompany_show: "",
      contentInfoCompany: "",
      titleInfoCompany: "",
    });
  };
  saveAddInfoCompany = async () => {
    const {
      contentInfoCompany,
      dataConfigWeb,
      imageInfoCompany_link,
      titleInfoCompany,
    } = this.state;
    let newImage = await this.postImage(imageInfoCompany_link);
    let imageOutput;
    if (newImage) {
      imageOutput = `${Constants.BASE_URL}image_banner/${newImage}`;
    } else {
      imageOutput = "";
    }
    let ob = {
      image: imageOutput,
      content: contentInfoCompany,
      title: titleInfoCompany,
    };
    let coppy = { ...dataConfigWeb };
    if (!coppy.value.infoCompany) {
      coppy.value.infoCompany = [];
    }
    coppy.value.infoCompany.push(ob);
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
            modalInfoCompany: false,
          });
          this.getDataConfigWeb();
        });
      }
    );
  };
  openFormEditInfoCompany = (value, item, i) => {
    this.setState({
      actionModalInfoCompany: "edit",
      modalInfoCompany: true,
      imageInfoCompany: item.image,
      imageInfoCompany_link: item.image,
      imageInfoCompany_show: item.image,
      contentInfoCompany: item.content,
      titleInfoCompany: item.title,
      indexInfoCompanyEditor: i,
    });
  };
  async saveEditInfoCompany() {
    const {
      imageInfoCompany,
      contentInfoCompany,
      dataConfigWeb,
      indexInfoCompanyEditor,
      titleInfoCompany,
    } = this.state;
    let ob = {
      title: titleInfoCompany,
      image: imageInfoCompany,
      content: contentInfoCompany,
    };
    let coppy = { ...dataConfigWeb };
    coppy.value.infoCompany[indexInfoCompanyEditor] = ob;
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
          modalInfoCompany: false,
        });
        await this.onUpdate();
        this.getDataConfigWeb();
      }
    );
  }
  deleteInfoCompany = async (value, i) => {
    const { dataConfigWeb } = this.state;
    let coppyData = {
      ...dataConfigWeb,
    };
    coppyData.value.infoCompany.splice(i, 1);
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
  };

  openFormAddBannerBrand = (value) => {
    this.setState({
      actionModalBannerBrand: "new",
      modalBannerBrand: true,
      imageBannerBrand: "",
      imageBannerBrand_link: "",
      imageBannerBrand_show: "",
      contentBannerBrand: "",
      titleBannerBrand: "",
      hrefBannerBrand : "",
    });
  };
  saveAddBannerBrand = async () => {
    const {
      contentBannerBrand,
      dataConfigWeb,
      imageBannerBrand_link,
      titleBannerBrand,
      hrefBannerBrand
    } = this.state;
    let newImage = await this.postImage(imageBannerBrand_link);
    let imageOutput;
    if (newImage) {
      imageOutput = `${Constants.BASE_URL}image_banner/${newImage}`;
    } else {
      imageOutput = "";
    }
    console.log(imageOutput);
    let ob = {
      image: imageOutput,
      content: contentBannerBrand,
      title: titleBannerBrand,
      href : hrefBannerBrand
    };
    let coppy = { ...dataConfigWeb };
    if (!coppy.value.bannerBrand) {
      coppy.value.bannerBrand = [];
    }
    coppy.value.bannerBrand.push(ob);
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
            modalBannerBrand: false,
          });
          this.getDataConfigWeb();
        });
      }
    );
  };
  openFormEditBannerBrand = (value, item, i) => {
    this.setState({
      actionModalBannerBrand: "edit",
      modalBannerBrand: true,
      imageBannerBrand: item.image,
      imageBannerBrand_link: item.image,
      imageBannerBrand_show: item.image,
      contentBannerBrand: item.content,
      titleBannerBrand: item.title,
      indexBannerBrandEditor: i,
      hrefBannerBrand : item.href
    });
  };
  async saveEditBannerBrand() {
    const {
      contentBannerBrand,
      dataConfigWeb,
      imageBannerBrand_link,
      imageBannerBrand,
      titleBannerBrand,
      indexBannerBrandEditor,
      hrefBannerBrand
    } = this.state;
    let ob = {
      title: titleBannerBrand,
      image: imageBannerBrand,
      content: contentBannerBrand,
      href : hrefBannerBrand
    };
    
    console.log(imageBannerBrand);
    let coppy = { ...dataConfigWeb };
    coppy.value.bannerBrand[indexBannerBrandEditor] = ob;
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
          modalBannerBrand: false,
        });
        await this.onUpdate();
        this.getDataConfigWeb();
      }
    );
  }
  deleteBannerBrand = async (value, i) => {
    const { dataConfigWeb } = this.state;
    let coppyData = {
      ...dataConfigWeb,
    };
    coppyData.value.bannerBrand.splice(i, 1);
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
  };

  render() {
    const arrLevel = [
      {
        item: "0",
      },
      {
        item: "1",
      },
      {
        item: "2",
      },
    ];
    const { contentSlide } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Modal
            size="md"
            closeButton
            toggle={() => this.setState({ modalBannerBrand: false })}
            isOpen={this.state.modalBannerBrand}
            className={this.props.className}
          >
            <ModalHeader
            closeButton
              toggle={() => this.setState({ modalBannerBrand: false })}
            >
              {this.state.actionModalBannerBrand === "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="titleBannerBrand"
                label="Tiêu đề"
                value={this.state.titleBannerBrand}
                placeholder={""}
                onChange={(e) => {
                  this.setState({ titleBannerBrand: e.target.value });
                }}
              />
              <TextFieldGroup
                field="contentBannerBrand"
                label="Mô tả"
                value={this.state.contentBannerBrand}
                placeholder={""}
                onChange={(e) => {
                  this.setState({ contentBannerBrand: e.target.value });
                }}
              />
              <TextFieldGroup
                field="imageBannerBrand"
                label="Hình ảnh: (1230px x 420px)"
                type={"file"}
                className="mt-5"
                onChange={(e) => {
                  this.onChangeImage(
                    e,
                    "imageBannerBrand",
                    "imageBannerBrand_link",
                    "imageBannerBrand_show"
                  );
                }}
                onClick={(e) => {
                  e.target.value = null;
                  this.setState({ imageBannerBrand_show: "" });
                }}
              />
  <div className="text-center">
  <img
                alt=""
                style={{ maxHeight : '400px', width: "300px", marginBottom: 20 }}
                height="auto"
                src={this.state.imageBannerBrand}
              />
  </div>
             
              <TextFieldGroup
                field="hrefBannerBrand"
                label="Đường dẫn"
                value={this.state.hrefBannerBrand}
                placeholder={""}
                onChange={(e) => {
                  this.setState({ hrefBannerBrand: e.target.value });
                }}
              />
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={() => {
                  this.state.actionModalBannerBrand === "new"
                    ? this.saveAddBannerBrand()
                    : this.saveEditBannerBrand();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={() => {
                  this.setState({
                    modalBannerBrand: false,
                  });
                }}
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
          <Modal
            size="md"
            closeButton
            isOpen={this.state.modalBannerCategories}
            className={this.props.className}
          >
            <ModalHeader
              toggle={() => this.setState({ modalBannerCategories: false })}
            >
              {this.state.actionBannerCategories === "new"
                ? `Tạo mới`
                : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="titleCategories"
                label="Tiêu đề"
                value={this.state.titleCategories}
                placeholder={""}
                onChange={(e) => {
                  this.setState({ titleCategories: e.target.value });
                }}
              />
              <TextFieldGroup
                field="contentBannerCategories"
                label="Mô tả"
                value={this.state.contentBannerCategories}
                placeholder={""}
                onChange={(e) => {
                  this.setState({ contentBannerCategories: e.target.value });
                }}
              />
              <TextFieldGroup
                field="imageSlide"
                label="Hình ảnh: (36px x 36px)"
                type={"file"}
                className="mt-5"
                onChange={(e) => {
                  this.onChangeImage(
                    e,
                    "imageBannerCategories",
                    "imageBannerCategories_link",
                    "imageBannerCategories_show"
                  );
                }}
                onClick={(e) => {
                  e.target.value = null;
                  this.setState({ imageBannerCategories_show: "" });
                }}
              />

              <img
                alt=""
                style={{ width: "140px", marginBottom: 20 }}
                height="auto"
                src={this.state.imageBannerCategories}
              />
              <TextFieldGroup
                field="hrefBannerCategories"
                label="Đường dẫn"
                value={this.state.hrefBannerCategories}
                placeholder={""}
                onChange={(e) => {
                  this.setState({ hrefBannerCategories: e.target.value });
                }}
              />
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={() => {
                  this.state.actionBannerCategories === "new"
                    ? this.saveAddCategories()
                    : this.saveEditCategories();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={() => {
                  this.setState({
                    modalBannerCategories: false,
                  });
                }}
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
          <Modal
            size="xl"
            isOpen={this.state.modalInfoCompany}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.actionModalInfoCompany === "new"
                ? `Tạo mới`
                : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="titleInfoCompany"
                label="Tiêu đề"
                value={this.state.titleInfoCompany}
                placeholder={""}
                onChange={(e) => {
                  this.setState({ titleInfoCompany: e.target.value });
                }}
              />
              <p>Mô tả</p>
              <CKEditor
                editor={ClassicEditor}
                data={this.state.contentInfoCompany}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                }}
                style={{ height: "300px" }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({ contentInfoCompany: data });
                }}
                onBlur={(event, editor) => {}}
                onFocus={(event, editor) => {}}
              />
              <div className="mt-3"></div>
              <TextFieldGroup
                field="imageSlide"
                label="Hình ảnh: (600px x 300px)"
                type={"file"}
                className="mt-5"
                onChange={(e) => {
                  this.onChangeImage(
                    e,
                    "imageInfoCompany",
                    "imageInfoCompany_link",
                    "imageInfoCompany_show"
                  );
                }}
                onClick={(e) => {
                  e.target.value = null;
                  this.setState({ imageInfoCompany_show: "" });
                }}
              />
              <div className="text-center">
                <img
                  alt=""
                  style={{ width: "300px", marginBottom: 20 }}
                  height="auto"
                  src={this.state.imageInfoCompany}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={() => {
                  this.state.actionModalInfoCompany === "new"
                    ? this.saveAddInfoCompany()
                    : this.saveEditInfoCompany();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={() => {
                  this.setState({
                    modalInfoCompany: false,
                  });
                }}
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
          <div className="flex-tabs">
            <div class="tab">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                {this.state.tabNameConfig
                  ? this.state.tabNameConfig.map((item, i) => {
                      return (
                        <ListItemButton
                          key={item._id}
                          className={
                            i === 0
                              ? " tablinks tabcontent-left-active"
                              : " tablinks"
                          }
                          onClick={() => this.ToggleViewConfigWeb(item._id)}
                          sx={{ pl: 4 }}
                        >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText
                            className="tabcontent-left"
                            style={{
                              fontSize: "14px !important",
                              color: "rgb(52, 71, 103)",
                            }}
                            primary={item.name}
                          />
                        </ListItemButton>
                      );
                    })
                  : null}
              </List>
            </div>
            <div className="tabcontents">
              <div id="tabcontent1" className="tabcontent defaultOpen">
                <Banner1
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  openFormAddBanner={this.openFormAddBanner}
                  openFormEditBanner={this.openFormEditBanner}
                  deleteBanner={this.deleteBanner}
                  setStateByName={this.setStateByName}
                  bannerMainSlide={this.state.bannerMainSlide}
                />
              </div>
              <div id="tabcontent8" className="tabcontent">
                <BannerBrand
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  openFormAddBannerBrand={this.openFormAddBannerBrand}
                  openFormEditBannerBrand={this.openFormEditBannerBrand}
                  deleteBannerBrand={this.deleteBannerBrand}
                  setStateByName={this.setStateByName}
                  bannerBrand={this.state.bannerBrand}

                />
              </div>
              <div id="tabcontent6" className="tabcontent">
                <Sologan
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  setStateByName={this.setStateByName}
                  sologan_1={this.state.sologan_1}
                  sologan_2={this.state.sologan_2}
                  sologan_3={this.state.sologan_3}
                  sologan_4={this.state.sologan_4}
                  sologan_5={this.state.sologan_5}
                  sologan_button={this.state.sologan_button}
                />
              </div>
              <div id="tabcontent7" className="tabcontent">
                <InfoCompany
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  setStateByName={this.setStateByName}
                  onChangeImage={this.onChangeImage}
                  openFormAddInfoCompany={this.openFormAddInfoCompany}
                  openFormEditInfoCompany={this.openFormEditInfoCompany}
                  deleteInfoCompany={this.deleteInfoCompany}
                  saveAddInfoCompany={this.saveAddInfoCompany}
                  saveEditInfoCompany={this.saveEditInfoCompany}
                  infoCompany={this.state.infoCompany}
                />
              </div>
              <div id="tabcontent9" className="tabcontent">
                <Info
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  setStateByName={this.setStateByName}
                  onChangeImage={this.onChangeImage}
                  emailCompany={this.state.emailCompany}
                  hotlineCompany={this.state.hotlineCompany}
                />
              </div>
              

              <div id="tabcontent3" className="tabcontent ">
                <Logos
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  setStateByName={this.setStateByName}
                  onChangeImage={this.onChangeImage}
                  image={this.state.image}
                  hrefLogoHeader={this.state.hrefLogoHeader}
                  imgLogoFooter={this.state.imgLogoFooter}
                  hrefLogoFooter={this.state.hrefLogoFooter}
                  imgLogoAdmin={this.state.imgLogoAdmin}
                />
              </div>
              <div id="tabcontent2" className="tabcontent ">
                <Banner2
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  setStateByName={this.setStateByName}
                  openFormAddBanner={this.openFormAddBanner}
                  openFormEditBanner={this.openFormEditBanner}
                  deleteBanner={this.deleteBanner}
                  bannerSlide={this.state.bannerSlide}
                  getDataConfigWeb={this.getDataConfigWeb}
                  bannerCategories={this.state.bannerCategories}
                  dataConfigWeb={this.state.dataConfigWeb}
                  openFormAddCategories={this.openFormAddCategories}
                  openFormEditCategories={this.openFormEditCategories}
                  deleteCategories={this.deleteCategories}
                  saveAddCategories={this.saveAddCategories}
                  saveEditCategories={this.saveEditCategories}
                  titleSectionBannerBrand={this.state.titleSectionBannerBrand}
                  contentSectionBannerBrand={this.state.contentSectionBannerBrand}
                />
              </div>
              <div id="tabcontent5" className="tabcontent ">
                <GuideVoucher
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  setStateByName={this.setStateByName}
                  guideVoucher={this.state.guideVoucher}
                />
              </div>
              {/* <div id="tabcontent6" className="tabcontent ">
                <VoucherPartner
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  bannerCampaign={this.state.bannerCampaign}
                  modalBannerCampaign={this.state.modalBannerCampaign}
                  actionModalBannerCampaign={this.state.actionModalBannerCampaign}
                  nameBannerCampaign={this.state.nameBannerCampaign}
                  image_banner_campaign={this.state.image_banner_campaign}
                  contentBannerCampaign={this.state.contentBannerCampaign}
                  hrefBannerCampaign={this.state.hrefBannerCampaign}
                  outputBannerCampaign={this.state.outputBannerCampaign}
                  setStateByName={this.setStateByName}
                  openFormAddBannerCampaign={this.openFormAddBannerCampaign}
                  openEditBannerCampaign={this.openEditBannerCampaign}
                  deleteBannerCampaign={this.deleteBannerCampaign}
                  saveAddBannerCampaign={this.saveAddBannerCampaign}
                  saveEditBannerCampaign={this.saveEditBannerCampaign}
                  onChangeImage={this.onChangeImage}
                />
              </div> */}
              <div id="tabcontent4" className="tabcontent ">
                <Footer
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  setStateByName={this.setStateByName}
                  openFormAddFooter={this.openFormAddFooter}
                  openFormEditFooter={this.openFormEditFooter}
                  deleteFooter={this.deleteFooter}
                  dataFooter={this.state.dataFooter}
                  hidden={this.state.hidden}
                />
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
                style={{ height: "300px" }}
                onChange={(event, editor) => {
                  const data = editor.getData();

                  this.setState({ contentFooter: data });
                }}
                onBlur={(event, editor) => {}}
                onFocus={(event, editor) => {}}
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
              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Mục (*)</CLabel>
                {arrLevel != undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.setState({
                        statusFooter: e.target.value,
                      });
                      console.log(e.target.value);
                    }}
                    custom
                    size="md"
                    name="status"
                    id="SelectLm"
                  >
                    {arrLevel.map((item, i) => {
                      if (item.item === this.state.statusFooter) {
                        return (
                          <option selected key={i} value={item.item}>
                            {item.item === "0"
                              ? "Chưa có"
                              : item.item == "1"
                              ? "Danh mục"
                              : "Về chúng tôi"}
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                            {item.item === "0"
                              ? "Chưa có"
                              : item.item == "1"
                              ? "Danh mục"
                              : "Về chúng tôi"}
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
          <Modal
            size="md"
            closeButton
            toggle={() => this.setState({ modalBanner: false })}
            isOpen={this.state.modalBanner}
            className={this.props.className}
          >
            <ModalHeader toggle={() => this.setState({ modalBanner: false })}>
              {this.state.actionBanner === "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="image_banner2"
                label="Hình ảnh: (784px x 420px)"
                type={"file"}
                className="mt-5"
                onChange={(e) => {
                  this.onChangeImage(
                    e,
                    "image_banner2",
                    "image_banner2_link",
                    "image_banner2_show"
                  );
                }}
                onClick={(e) => {
                  e.target.value = null;
                  this.setState({ image_banner2_show: "" });
                }}
              />
              <div class="text-center">
                <img
                  alt=""
                  style={{ width: "300px", marginBottom: 20 }}
                  height="auto"
                  src={this.state.image_banner2}
                />
              </div>

              <div className="mt-3"></div>
              <label>Mô tả</label>
              <CTextarea
                name="contentBanner"
                rows="4"
                value={this.state.contentBanner}
                onChange={(e) => {
                  this.setState({ contentBanner: e.target.value });
                }}
              />
              <TextFieldGroup
                field="hrefBanner"
                label="Đường dẫn"
                value={this.state.hrefBanner}
          
                onChange={(e) => {
                  this.setState({ hrefBanner: e.target.value });
                }}
              />
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={() => {
                  this.state.actionBanner === "new"
                    ? this.saveAddBanner()
                    : this.saveEditBanner();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={() => {
                  this.setState({
                    modalBanner: false,
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

export default ConfigWebAdmin;
