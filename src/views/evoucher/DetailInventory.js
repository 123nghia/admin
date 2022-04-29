import React, { Component } from "react";
import { Chip, IconButton, Tooltip } from "@mui/material";

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
import { BsInfoCircleFill } from "@react-icons/all-files/bs/BsInfoCircleFill";
import { Link } from 'react-router-dom';
import CopyToClipboard from "react-copy-to-clipboard";
import { HiUserGroup } from "@react-icons/all-files/hi/HiUserGroup";

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
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";
import { TiArrowBack } from "@react-icons/all-files/ti/TiArrowBack";
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
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { GrClose } from "@react-icons/all-files/gr/GrClose";
import { freeSet } from "@coreui/icons";


import { Tag, Divider } from "antd";
import Pagination from "@material-ui/lab/Pagination";
import { BsFillBarChartFill } from "@react-icons/all-files/bs/BsFillBarChartFill";


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
          _id: "t2",
          name: "Thông tin về chiến dịch",
          icon: <BsInfoCircleFill style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "t3",
          name: "Danh sách khách hàng",
          icon: <HiUserGroup style={{ width: "24px ", height: "24px " }} />
        },
        {
          _id: "t3",
          name: "Thống kê",
          icon: <BsFillBarChartFill style={{ width: "24px ", height: "24px " }} />
        },

      ],
      company_id: JSON.parse(localStorage.getItem("user")).company_id
        ? JSON.parse(localStorage.getItem("user")).company_id
        : null,

      action: "new",
      arrPagination: [],
      data: [],
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
  pagination(dataApi) {
    var i,
      j,
      temparray,
      chunk = 7;
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

  async getDetailCampaign(id) {
    const { company_id } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_DETAIL_CAMPAIGN;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          id
        },
      })
      .then((res) => {
        let val = res.data?.data[0];
        this.setState({
          detailCampaign: val
        });
        console.log(val)
        // this.pagination(val);
        // this.setState({ dataApi: val });

        // let active = 0;

        // this.setState({ isLoading: false, totalActive: active });
      });
  }
  async getDataCustomer(id) {
    const { company_id } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.COLLABORATOR_DETAIL_GET_CUSTOMER;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          saleId: id
        },
      })
      .then((res) => {
        let val = res.data?.data;
        // this.setState({
        //   detailCampaign : val
        // });

        this.pagination(val);
        this.setState({ dataApi: val });

        let active = 0;

        this.setState({ isLoading: false, totalActive: active });
      });
  }
  async componentDidMount() {
    await this.getDetailCampaign(this.props.match.params.id);
    await this.getDataCustomer(this.props.match.params.id);

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
    const newComany_id = JSON.parse(this.state.company_id).company_id;
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
   checkStatusUserVoucherColor = (status) => {
    const statusColorMap = {
      2: "#2eb85c",
      A: "#2db7f5",
      1: "#87d068",
      0: "#dc0e04",
    };

    return statusColorMap[status] || "#FF0004";
  };
  checkStatusUserVoucherContent = (status) => {
    const statusContentMap = {
      A: "Đã nhận voucher",
      0: "Đã check-in",
      1: "Hoàn thành",
      2: "Hủy bỏ",
    };

    return statusContentMap[status] || "Chưa xác nhận";
  };

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
      data,
      slideShow,
      arrPagination,
      titleSeo,
      descSeo,
      keywordSeo,

      authorSeo,
      titleSeo2,
      dataFooter,

      isDisable,
      detailCampaign,
      mainColor,
    } = this.state;

    if (!this.state.isLoading) {
      return (
        <>


          <div className="animated fadeIn " >
            <div className="header-flex-tabs">
              <div className="detail-campaign-goback-position">
                <Link className="" to="/manage-sales">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="detail-campaign-goback bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                  </svg>
                </Link>
              </div>
              <h4 className="detail-title-campaign">
                Thông tin
              </h4>
            </div>
            <div className="flex-tabs">
              <div className="tab">
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

                <div className="tabcontent defaultOpen">
                  <div class="" style={{ width: '100%', overflowX: 'scroll' }}>
                    <table
                      ble
                      className="mt-3 table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                    >
                      <thead className="thead-light">
                        <tr>
                          <th className="text-center">STT.</th>
                          <th className="text-center">Tên</th>
                          <th className="text-center">Thời gian</th>
                          <th className="text-center">Lượng Evoucher - Khách CheckIn</th>
                          <th className="text-center">Tỷ lệ CheckIn</th>
                          <th className="text-center">Ghi chú</th>
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
                        {data != undefined
                          ? data.map((item, i) => {
                            console.log(item)
                            return (
                              <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td className="text-center">{item.name}</td>
                                <td className="text-center">{item.creat_at}</td>
                                <td className="text-center">
                                  {item.name}
                                  -----
                                  {item.name}
                                </td>
                                <td className="text-center">{item.address}</td>

                                <td className="text-center">{item.group}</td>

                                <td className="text-center" >
                                  <div className="flex">
                                    <CopyToClipboard
                                      style={{ marginRight: '5px' }}
                                      text={item.voucherCode}
                                      onCopy={() => { }}
                                    >
                                      <Tooltip title="Copy">
                                        <IconButton size="small">
                                          <CIcon content={freeSet.cilCopy} />
                                        </IconButton>
                                      </Tooltip>
                                    </CopyToClipboard>
                                    <Link to={"/detail-collaborators/" + item._id}>
                                      <CButton
                                        shape="rounded-pill"
                                        variant="outline"
                                        color="info"
                                        style={styles.mgl5}
                                        size="md"
                                        className="flex-a-center height-detail-btn"

                                      >
                                        <BsSearch className="mr-1 " />

                                      </CButton>
                                    </Link>

                                    <CButton
                                      shape="rounded-pill"
                                      variant="ghost"
                                      color="info"
                                      style={styles.mgl5}
                                      size="md"
                                      onClick={(e) => this.openEditVoucher(item)}
                                    >
                                      <FiEdit3
                                        style={styles.icon}
                                        name="cilPencil"
                                        className="icon"
                                      />
                                    </CButton>{" "}
                                    <CButton
                                      shape="rounded-pill"
                                      variant="ghost"
                                      color="danger"
                                      style={styles.mgl5}
                                      onClick={(e) => {
                                        this.remove(item);
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
                  </div>
                </div>

                <div className="tabcontent">
                  <div class="" style={{ width: '100%', overflowX: 'scroll' }}>

                    <table
                      ble
                      className="mt-3 table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                    >
                      <thead className="thead-light">
                        <tr>
                          <th className="text-center">STT.</th>
                          <th className="text-center">Tên</th>
                          <th className="text-center">Số điện thoại</th>
                          <th className="text-center">Mã voucher</th>
                          <th className="text-center">Trạng thái</th>
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
                        {data != undefined
                          ? data.map((item, i) => {
                            console.log(item)
                            return (
                              <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td className="text-center">{item.fullName}</td>
                                <td className="text-center">{item.phoneNumber}</td>
                                <td className="text-center">{item.voucherCode}
                                  <CopyToClipboard
                                    text={item.voucherCode}
                                    onCopy={() => { }}
                                  >
                                    <Tooltip title="Copy">
                                      <IconButton size="small">
                                        <CIcon content={freeSet.cilCopy} />
                                      </IconButton>
                                    </Tooltip>
                                  </CopyToClipboard>
                                </td>
                                <td className="text-center">
                                  <Tag
                                    className="ant-tag"
                                    color={this.checkStatusUserVoucherColor(item.status)}
                                  >
                                    {this.checkStatusUserVoucherContent(item.status)}
                                  </Tag>

                                </td>

                                <td className="text-center" >
                                  <div className="flex">
                                    <Link to={"/detail-collaborators/" + item._id}>
                                      <CButton
                                        shape="rounded-pill"
                                        variant="outline"
                                        color="info"
                                        style={styles.mgl5}
                                        size="md"
                                        className="flex-a-center height-detail-btn"

                                      >
                                        <BsSearch className="mr-1 " />

                                      </CButton>
                                    </Link>

                                    <CButton
                                      shape="rounded-pill"
                                      variant="ghost"
                                      color="info"
                                      style={styles.mgl5}
                                      size="md"
                                      onClick={(e) => this.openEditVoucher(item)}
                                    >
                                      <FiEdit3
                                        style={styles.icon}
                                        name="cilPencil"
                                        className="icon"
                                      />
                                    </CButton>{" "}
                                    <CButton
                                      shape="rounded-pill"
                                      variant="ghost"
                                      color="danger"
                                      style={styles.mgl5}
                                      onClick={(e) => {
                                        this.remove(item);
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
        </>
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



