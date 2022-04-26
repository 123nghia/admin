import React, { Component } from "react";
import { Tabs } from "antd";
import InfoProvider from "./TabContent/InfoProvider";
import TableCampaignJoined from "./TabContent/ListCampaignJoined/TableCampaignJoined";
import TabContentOverViewEvoucher from "./TabContent/Evoucher_Provider/TabContentOverViewEvoucher";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Constants from "../../../../contants/contants";
import { Tag, Divider } from "antd";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import Pagination from "@material-ui/lab/Pagination";
import { toast } from "react-toastify";
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
  TabContent,
} from "reactstrap";
import Swal from "sweetalert2";
import update from "react-addons-update";
import PropTypes from "prop-types";
import TextFieldGroup from "../../../Common/TextFieldGroup";
import API_CONNECT from "../../../../functions/callAPI";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

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
import axios from "axios";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ListAltIcon from "@mui/icons-material/ListAlt";

let headers = new Headers();
const auth = localStorage.getItem("auth");
const { TabPane } = Tabs;

headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNameConfig: [
        {
          _id: "t1",
          name: "Thông tin NCC",
          icon: (
            <InfoIcon
              style={{ width: "24px ", height: "24px", color: "#389bff" }}
            />
          ),
        },
        {
          _id: "t2",
          name: "Danh sách chiến dịch tham gia",
          icon: (
            <ListAltIcon
              style={{ width: "24px ", height: "24px ", color: "#389bff" }}
            />
          ),
        },
        {
          _id: "t3",
          name: "E-voucher",
          icon: (
            <CardGiftcardIcon
              style={{ width: "24px ", height: "24px ", color: "#389bff" }}
            />
          ),
        },
      ],
      company_id: JSON.parse(localStorage.getItem("user")).company_id
        ? JSON.parse(localStorage.getItem("user")).company_id
        : null,
      action: "new",
      dataApi: [],
      delete: null,
      hidden: true,
      token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      role: localStorage.getItem("role"),
      type: localStorage.getItem("type"),
      arrPagination: [],
      companyID: "",
      arrTotalPackage: [],
      isLoading: false,
      isDisable: true,
      Email: "",
      modal: false,
      modalVoucherSent: false,
      modalVoucher: false,
      modalDetailProvider: false,
      statusModalUpdate: false,
      hidden: false,
      detailInfoProvider: null,
      tableListCampaignJoined: [],
      listOverviewEvoucher: null,
    };
  }
  pagination(dataApi) {
    console.log(dataApi);
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

  async getOverviewEvoucherProvider(id) {
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.DETAIL_PROVIDER;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        company_id: id,
      })
      .then((res) => {
        let valEvoucher = res.data.data.voucherInformation;
        console.log("valEvoucher", valEvoucher);
        this.pagination(valEvoucher);

        this.setState({ listOverviewEvoucher: valEvoucher }, () =>
          console.log("list", this.state.listOverviewEvoucher)
        );

        let active = 0;
        this.setState({ isLoading: false, totalActive: active });
      });
  }

  async getInfoTableCampaign(id) {
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.DETAIL_PROVIDER;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        company_id: id,
      })
      .then((res) => {
        let valCampaign = res.data.data.listCampaign;
        console.log("valCampaign", valCampaign);
        this.pagination(valCampaign);

        this.setState({ tableListCampaignJoined: valCampaign }, () =>
          console.log("table", this.state.tableListCampaignJoined)
        );

        let active = 0;
        this.setState({ isLoading: false, totalActive: active });
      });
  }

  async getInfoProvider(id) {
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.DETAIL_PROVIDER;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        company_id: id,
      })
      .then((res) => {
        let val = res.data.data.dataDetail;
        // console.log("val", val);
        this.pagination(val);

        this.setState({ detailInfoProvider: val });

        let active = 0;
        this.setState({ isLoading: false, totalActive: active });
      });
  }

  async componentDidMount() {
    this.getInfoProvider(this.props.match.params.id);
    this.getInfoTableCampaign(this.props.match.params.id);
    this.getOverviewEvoucherProvider(this.props.match.params.id);
    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to == window.location.hash) {
        if (arr[i].hidden == true) {
          window.location.href = "#/";
        }
      }
    }
  }

  getDetailProvider() {}
  callback(key) {
    if (key === "1") {
      this.setState({
        changeTab: "1",
      });
    } else {
      this.setState({
        changeTab: "2",
      });
    }
  }

  render() {
    const { arrPagination } = this.state;

    const data = [
      {
        Name: "ABC",
        Provider: "Diem",
        totalVoucher: "1000",
        CheckIn: "30",
        Status: "",
        from: "",
        to: "",
        create_at: "",
      },
      {
        Name: "SSSS",
        Provider: "Di",
        totalVoucher: "200",
        CheckIn: "30",
        Status: "",
        from: "",
        to: "",
        create_at: "",
      },
    ];

    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
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
                          onClick={() => this.ToggleViewConfigWeb(i)}
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
                {this.state.detailInfoProvider ? (
                  <InfoProvider
                    detailInfoProvider={this.state.detailInfoProvider}
                  />
                ) : null}
              </div>
              <div id="tabcontent2" className="tabcontent">
                {this.state.tableListCampaignJoined !== undefined ? (
                  <TableCampaignJoined
                    tableListCampaignJoined={this.state.tableListCampaignJoined}
                  />
                ) : null}
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
              <div id="tabcontent3" className="tabcontent ">
                {this.state.listOverviewEvoucher ? (
                  <TabContentOverViewEvoucher
                    listOverviewEvoucher={this.state.listOverviewEvoucher}
                  />
                ) : null}
              </div>
            </div>
          </div>

          <Modal
            isOpen={this.state.modalVoucher}
            className={this.props.className}
            size="xl"
          >
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
                  {data !== undefined
                    ? data.map((item, i) => {
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
            </ModalBody>
            <ModalFooter>
              <Button
                color="secondary"
                onClick={(e) =>
                  this.setState({ modalVoucher: !this.state.modalVoucher })
                }
              >
                Đóng
              </Button>
            </ModalFooter>
          </Modal>
          <Modal
            isOpen={this.state.modalVoucherSent}
            className={this.props.className}
            size="xl"
          >
            <ModalHeader>Danh sách voucher đã phát</ModalHeader>
            <ModalBody>
              <TableCampaignJoined />
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
              <Button
                color="secondary"
                onClick={(e) =>
                  this.setState({
                    modalVoucherSent: !this.state.modalVoucherSent,
                  })
                }
              >
                Đóng
              </Button>
            </ModalFooter>
          </Modal>
          <Modal
            isOpen={this.state.modalCusCheckIn}
            className={this.props.className}
            size="xl"
          >
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
                    <th className="text-center">Tỉnh/Thành</th>
                    <th className="text-center">Mã voucher</th>
                  </tr>
                </thead>
                <tbody>
                  <td
                    colSpan="9"
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
                            <td className="text-center">{item.Phone}</td>
                            <td className="text-center">{item.Email}</td>
                            <td className="text-center">{item.City}</td>
                            <td className="text-center">{item.VoucherCode}</td>
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
            </ModalBody>
            <ModalFooter>
              <Button
                color="secondary"
                onClick={(e) =>
                  this.setState({
                    modalCusCheckIn: !this.state.modalCusCheckIn,
                  })
                }
              >
                Đóng
              </Button>
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
    position: "relative",
  },
  btnLink: {
    color: "#fff",
    backgroundColor: "#1890ff",
    padding: "3px 5px",
    marginLeft: "20px",
    fontSize: "16px",
    borderRadius: "3px",
  },
  detail: {
    fontSize: "12px",
    color: "#1890ff",
    position: "absolute",
    right: "10px",
    bottom: "13px",
    cursor: "pointer",
  },
};

export default Users;
