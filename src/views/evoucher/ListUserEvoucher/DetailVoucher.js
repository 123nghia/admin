import { CButton } from "@coreui/react";
import { css } from "@emotion/react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsPatchCheck } from "react-icons/bs";
import { AiOutlineFundView } from "react-icons/ai";
import { RiChatHistoryLine, RiCustomerService2Line } from "react-icons/ri";
import EvoucherCard from "./EvoucherCard";

import "moment-timezone";
import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DotLoader from "react-spinners/DotLoader";

let headers = new Headers();
const auth = localStorage.getItem("auth");

headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
class DetailVoucher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNameConfig: [
        {
          _id: "t1",
          name: "Thông tin nhận voucher",
          icon: (
            <AiOutlineFundView
              style={{
                width: "24px ",
                height: "24px ",
                color: "#3399ff",
              }}
            />
          ),
        },
        {
          _id: "t2",
          name: "Lịch sử soi da",
          icon: (
            <RiChatHistoryLine
              style={{ width: "24px ", height: "24px ", color: "#3399ff" }}
            />
          ),
        },
        {
          _id: "t3",
          name: "Thông tin check-in",
          icon: (
            <BsPatchCheck
              style={{ width: "24px ", height: "24px ", color: "#3399ff" }}
            />
          ),
        },
        {
          _id: "t4",
          name: "Thông tin chăm sóc khách hàng",
          icon: (
            <RiCustomerService2Line
              style={{ width: "24px ", height: "24px ", color: "#3399ff" }}
            />
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
  ChangeColorWeb = () => {
    const colorInput = document.getElementById("colorpicker");
    if (colorInput) {
      colorInput.addEventListener("input", (e) => {
        // document.body.style.setProperty("--main_web_admin", e.target.value);
        localStorage.setItem("colorpicker", e.target.value);
      });
    }
  };
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

  async componentDidMount() {
    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to === window.location.hash) {
        if (arr[i].hidden === true) {
          window.location.href = "#/";
        }
      }
    }
  }

  render() {
    this.state.isLoading && (
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
              <div class="mb-3 text-center">
                <CButton
                  onClick={() => this.SaveAllConfigWeb("logoCompany")}
                  style={styles.mgl5}
                  outline
                  color="success"
                  size="md"
                >
                  {/* <CIcon name="cilPencil" /> */}
                  Lưu thay đổi
                </CButton>
              </div>
              <h1>Mã voucher</h1>
              <EvoucherCard />
            </div>
            <div id="tabcontent2" className="tabcontent ">
              <div>
                <div class="text-center">
                  <CButton
                    onClick={() => this.SaveAllConfigWeb("banner")}
                    style={styles.mgl5}
                    outline
                    color="success"
                    size="md"
                  >
                    {/* <CIcon name="cilPencil" /> */}
                    Lưu thay đổi
                  </CButton>
                </div>
                <h1>Banner 1 </h1>
              </div>
            </div>
            <div id="tabcontent3" className="tabcontent"></div>
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
            </div>
          </div>
        </div>
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

export default DetailVoucher;
