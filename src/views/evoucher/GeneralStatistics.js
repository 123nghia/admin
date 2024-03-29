import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { Tag, Divider } from "antd";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import Pagination from "@material-ui/lab/Pagination";
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
import TextFieldGroup from "../Common/TextFieldGroup";
import API_CONNECT from "../../functions/callAPI";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

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
import Constants from "../../contants/contants";
import axios from "axios";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import logoMainnet from "../../assets/img/logo_head.png";
import CircularProgress from "@mui/material/CircularProgress";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';



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
                    name: "Chiến dịch",
                    icon: <EmojiFlagsIcon style={{ width: "24px ", height: "24px " }} />
                },
                {
                    _id: "t2",
                    name: "E-voucher",
                    icon: <CardGiftcardIcon style={{ width: "24px ", height: "24px " }} />
                },

            ],
            company_id: JSON.parse(localStorage.getItem("user")).company_id
                ? JSON.parse(localStorage.getItem("user")).company_id
                : "-1",
            colorWebCurrent: localStorage.getItem('colorpicker'),
            action: "new",
            idUpdate: "",
            checkFb: false,
            checkGg: true,
            // data: [],
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
            arrPagination: [],

            Message_Code: "",
            sub_mainColor: "",
            modal: false,
            modalVoucher: false,
            modalVoucherSent: false,

            statusModalUpdate: false,

            dataConfigWeb: null,
            idUpdateCurrent: null,
            loadingSaveLogo: false,
            htmlFuncWeb: null,

            openHomeItem: false,
            hidden: false,

            modalSlide: false,
            actionSlide: "new",
            actionBanner: "new",
            modalBanner: false,
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
    pagination(dataApi) {
        console.log(dataApi)

        var i,
            j,
            temparray,
            chunk = 8;
        var arrTotal = [];
        for (i = 0, j = dataApi.length; i < j; i += chunk) {
            temparray = dataApi.slice(i, i + chunk);
            arrTotal.push(temparray);
        }


        if (arrTotal.length == 0) {
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

    ChangeColorWeb = () => {
        const colorInput = document.getElementById("colorpicker");
        if (colorInput) {
            colorInput.addEventListener("input", (e) => {
                // document.body.style.setProperty("--main_web_admin", e.target.value);
                localStorage.setItem("colorpicker", e.target.value);
            });
        }
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
        const newComany_id = JSON.parse(this.state.company_id).company_id;
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
        const newComany_id = JSON.parse(this.state.company_id).company_id;
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
        const newComany_id = JSON.parse(this.state.company_id).company_id;
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
        const newComany_id = JSON.parse(this.state.company_id).company_id;
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
    getData = async () => {
        const newComany_id = JSON.parse(this.state.company_id).company_id;
        let idOutput = "-1";
        if (newComany_id) {
            idOutput = newComany_id
        }
        this.setState({ isLoading: true });
        const res = await axios({
            baseURL: Constants.BASE_URL,
            url: Constants.CONFIG_THEME_GET + "/" + idOutput,
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
    openFormAddBanner() {
        this.setState({
            actionBanner: "new",
            modalBanner: true,
            image_banner2: "",
            contentBanner: "",
            hrefBanner: "",
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

    async saveAddBanner() {
        const { contentBanner, dataConfigWeb, image_banner2_link, hrefBanner } = this.state;
        let newImage = await this.postImage(image_banner2_link);
        let imageOutput;
        if (newImage) {
            imageOutput = `${Constants.BASE_URL}image_brand/${newImage}`;
        } else {
            imageOutput = "";
        }
        let ob = {
            image: imageOutput,
            content: contentBanner,
            href: hrefBanner
        };
        let coppy = { ...dataConfigWeb };
        coppy.value.banner.bannerSlide.push(ob);
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
    }

    openFormEditBanner(item, i) {

        this.setState({
            actionBanner: "edit",

            modalBanner: true,
            image_banner2: item.image,
            contentBanner: item.content,
            hrefBanner: item.href,
            indexBannerEditor: i,
        });
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
    async deleteBanner(i) {
        const { dataConfigWeb } = this.state;
        let coppyData = {
            ...dataConfigWeb,
        };
        coppyData.value.banner.bannerSlide.splice(i, 1);
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

    async saveEditBanner() {
        const { image_banner2, contentBanner, dataConfigWeb, indexBannerEditor, hrefBanner } =
            this.state;
        let ob = {
            image: image_banner2,
            content: contentBanner,
            href: hrefBanner
        };
        let coppy = { ...dataConfigWeb };
        coppy.value.banner.bannerSlide[indexBannerEditor] = ob;

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

        const newComany_id = JSON.parse(this.state.company_id).company_id;

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
            arrPagination,
        } = this.state;

        const data = [
            {
                "Name": "ABC",
                "Provider": "Diem",
                "totalVoucher": "1000",
                "CheckIn": "30",
                "Status": "",
                "from": "",
                "to": "",
                "create_at": ""
            },
            {
                "Name": "SSSS",
                "Provider": "Di",
                "totalVoucher": "200",
                "CheckIn": "30",
                "Status": "",
                "from": "",
                "to": "",
                "create_at": ""
            },
        ]

        if (!this.state.isLoading) {
            return (
                <div className="animated fadeIn">
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
                                <div className="tabContentItem" style={styles.tabContentItem}>
                                    Số lượng chiến dịch
                                    <a href="" className="btn-link"
                                        style={styles.btnLink}
                                        onClick={e => this.setState({ modal: !this.state.modal })}>30</a>
                                    <span className="detail"
                                        style={styles.detail}
                                        onClick={e => this.setState({ modal: !this.state.modal })}>Xem chi tiết</span>
                                </div>
                                <div className="tabContentItem" style={styles.tabContentItem}>
                                    Số lượng voucher phát
                                    <a href="" className="btn-link"
                                        style={styles.btnLink}
                                        onClick={e => this.setState({ modalVoucherSent: !this.state.modalVoucherSent })}>40</a>
                                    <span className="detail"
                                        style={styles.detail}
                                        onClick={e => this.setState({ modalVoucherSent: !this.state.modalVoucherSent })}>Xem chi tiết</span>
                                </div>
                                <div className="tabContentItem" style={styles.tabContentItem}>
                                    Tỉ lệ hoàn thành
                                    <a href="#" className="btn-link" style={styles.btnLink}>30</a>
                                </div>
                                <div className="tabContentItem" style={styles.tabContentItem}>
                                    Số lượng khách check in
                                    <a href="" className="btn-link"
                                        style={styles.btnLink}
                                        onClick={e => this.setState({ modalCusCheckIn: !this.state.modalCusCheckIn })}>40</a>
                                    <span className="detail"
                                        style={styles.detail}
                                        onClick={e => this.setState({ modalCusCheckIn: !this.state.modalCusCheckIn })}>Xem chi tiết</span>
                                </div>
                                <div className="tabContentItem" style={styles.tabContentItem}>
                                    Tỉ lệ khách check in
                                    <a href="#" className="btn-link" style={styles.btnLink}>30</a>
                                </div>
                            </div>
                            <div id="tabcontent2" className="tabcontent ">
                                <div className="tabContentItem" style={styles.tabContentItem}>
                                    Số lượng voucher
                                    <a href="" className="btn-link"
                                        style={styles.btnLink}
                                        onClick={e => this.setState({ modalVoucher: !this.state.modalVoucher })}>40</a>
                                    <span className="detail"
                                        style={styles.detail}
                                        onClick={e => this.setState({ modalVoucher: !this.state.modalVoucher })}>Xem chi tiết</span>
                                </div>
                                <div className="tabContentItem" style={styles.tabContentItem}>
                                    Số lượng voucher phát
                                    <a href="" className="btn-link"
                                        style={styles.btnLink}
                                        onClick={e => this.setState({ modalVoucherSent: !this.state.modalVoucherSent })}>40</a>
                                    <span className="detail"
                                        style={styles.detail}
                                        onClick={e => this.setState({ modalVoucherSent: !this.state.modalVoucherSent })}>Xem chi tiết</span>
                                </div>
                                <div className="tabContentItem" style={styles.tabContentItem}>
                                    Tỉ lệ hoàn thành
                                    <a href="#" className="btn-link" style={styles.btnLink}>30</a>
                                </div>
                                <div className="tabContentItem" style={styles.tabContentItem}>
                                    Số lượng khách check in
                                    <a href="" className="btn-link"
                                        style={styles.btnLink}
                                        onClick={e => this.setState({ modalCusCheckIn: !this.state.modalCusCheckIn })}>40</a>
                                    <span className="detail"
                                        style={styles.detail}
                                        onClick={e => this.setState({ modalCusCheckIn: !this.state.modalCusCheckIn })}>Xem chi tiết</span>
                                </div>
                                <div className="tabContentItem" style={styles.tabContentItem}>
                                    Tỉ lệ khách check in
                                    <a href="#" className="btn-link" style={styles.btnLink}>30</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal isOpen={this.state.modal} className={this.props.className} size="xl">
                        <ModalHeader>Danh sách các chiến dịch</ModalHeader>
                        <ModalBody>
                            <table
                                ble
                                className="table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                            >
                                <thead className="thead-light">
                                    <tr>
                                        <th className="text-center">STT.</th>
                                        <th className="text-center">Tên</th>
                                        <th className="text-center">Nhà cung cấp</th>
                                        <th className="text-center">Số lượng voucher</th>
                                        <th className="text-center">Tỉ lệ check in</th>
                                        <th className="text-center">Trạng thái</th>
                                        <th className="text-center">Bắt đầu</th>
                                        <th className="text-center">Kết thúc</th>
                                        <th className="text-center">Ngày tạo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <td colSpan="9" hidden={this.state.hidden} className="text-center">Không tìm thấy dữ liệu</td> */}
                                    {
                                        data !== undefined ?
                                            data.map((item, i) => {
                                                console.log(item)
                                                return (
                                                    <tr key={i}>
                                                        <td className="text-center">{i + 1}</td>
                                                        <td className="text-center">{item.Name}</td>
                                                        <td className="text-center">{item.Provider}</td>
                                                        <td className="text-center">{item.totalVoucher}</td>
                                                        <td className="text-center">{item.CheckIn}</td>
                                                        <td className="text-center">{item.Status}</td>
                                                        <td className="text-center"> {new Date(item.from).toLocaleDateString()}</td>
                                                        <td className="text-center">{new Date(item.to).toLocaleDateString()}</td>
                                                        <td className="text-center">{new Date(
                                                            item.create_at
                                                        ).toLocaleDateString()}</td>
                                                    </tr>
                                                );
                                            }) : ""
                                    }
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
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={e => this.setState({ modal: !this.state.modal })}>Đóng</Button>
                        </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modalVoucher} className={this.props.className} size="xl">
                        <ModalHeader>Danh sách voucher</ModalHeader>
                        <ModalBody>
                            <table
                                ble
                                className="table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                            >
                                <thead className="thead-light">
                                    <tr>
                                        <th className="text-center">STT.</th>
                                        <th className="text-center">Mã voucher</th>
                                        <th className="text-center">Nội dung</th>
                                        <th className="text-center">Ngày tạo</th>
                                        <th className="text-center">Ngày kết thúc</th>
                                        <th className="text-center">Trạng thái</th>
                                        <th className="text-center">Tỉnh/thành</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <td colSpan="9" hidden={this.state.hidden} className="text-center">Không tìm thấy dữ liệu</td> */}
                                    {
                                        data !== undefined ?
                                            data.map((item, i) => {
                                                console.log(item)
                                                return (
                                                    <tr key={i}>
                                                        <td className="text-center">{i + 1}</td>
                                                        <td className="text-center"></td>
                                                        <td className="text-center"></td>
                                                        <td className="text-center"></td>
                                                        <td className="text-center"></td>
                                                        <td className="text-center"></td>
                                                        <td className="text-center"></td>
                                                    </tr>
                                                );
                                            }) : ""
                                    }
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
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={e => this.setState({ modalVoucher: !this.state.modalVoucher })}>Đóng</Button>
                        </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modalVoucherSent} className={this.props.className} size="xl">
                        <ModalHeader>Danh sách voucher đã phát</ModalHeader>
                        <ModalBody>
                            <table
                                ble
                                className="table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                            >
                                <thead className="thead-light">
                                    <tr>
                                        <th className="text-center">STT.</th>
                                        <th className="text-center">Mã voucher</th>
                                        <th className="text-center">Mã chiến dịch</th>
                                        <th className="text-center">Nội dung</th>
                                        <th className="text-center">Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <td colSpan="9" hidden={this.state.hidden} className="text-center">Không tìm thấy dữ liệu</td> */}
                                    {
                                        data !== undefined ?
                                            data.map((item, i) => {
                                                console.log(item)
                                                return (
                                                    <tr key={i}>
                                                        <td className="text-center">{i + 1}</td>
                                                        <td className="text-center">{item.VoucherCode}</td>
                                                        <td className="text-center">{item.CampaignCode}</td>
                                                        <td className="text-center">{item.Content}</td>
                                                        <td className="text-center">{item.Status}</td>
                                                    </tr>
                                                );
                                            }) : ""
                                    }
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
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={e => this.setState({ modalVoucherSent: !this.state.modalVoucherSent })}>Đóng</Button>
                        </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modalCusCheckIn} className={this.props.className} size="xl">
                        <ModalHeader>Danh sách khách check in</ModalHeader>
                        <ModalBody>
                            <table
                                ble
                                className="table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                            >
                                <thead className="thead-light">
                                    <tr>
                                        <th className="text-center">STT.</th>
                                        <th className="text-center">Tên</th>
                                        <th className="text-center">Số điện thoại</th>
                                        <th className="text-center">Email</th>
                                        <th className="text-center">Mã voucher</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <td colSpan="9" hidden={this.state.hidden} className="text-center">Không tìm thấy dữ liệu</td> */}
                                    {
                                        data !== undefined ?
                                            data.map((item, i) => {
                                                console.log(item)
                                                return (
                                                    <tr key={i}>
                                                        <td className="text-center">{i + 1}</td>
                                                        <td className="text-center">{item.Name}</td>
                                                        <td className="text-center">{item.Phone}</td>
                                                        <td className="text-center">{item.Email}</td>
                                                        <td className="text-center">{item.VoucherCode}</td>
                                                    </tr>
                                                );
                                            }) : ""
                                    }
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
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={e => this.setState({ modalCusCheckIn: !this.state.modalCusCheckIn })}>Đóng</Button>
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
    tabContentItem: {
        borderRadius: "4px",
        marginBottom: "5px",
        border: "1px solid #ccc",
        padding: "20px 15px",
        position: "relative"
    },
    btnLink: {
        color: "#fff",
        backgroundColor: "#1890ff",
        padding: "3px 5px",
        marginLeft: "20px",
        fontSize: "16px",
        borderRadius: "3px"
    },
    detail: {
        fontSize: "12px",
        color: "#1890ff",
        position: "absolute",
        right: "10px",
        bottom: "13px",
        cursor: "pointer"
    }

};

export default Users;
