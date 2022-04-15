import { css } from "@emotion/react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import "moment-timezone";
import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillSchedule, AiOutlineFundView } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import DotLoader from "react-spinners/DotLoader";
import { toast } from "react-toastify";
import Constants from "../../../../contants/contants";
import NotInfoSale from "../../../../assets/img/NotInfoSale.png";

import EvoucherInfoTable from "./TabContent/EvoucherInfoTable";
import CheckInForm from "./TabContent/CheckInForm";
import NoteHistory from "./TabContent/NoteHistory";

let headers = new Headers();
const auth = localStorage.getItem("auth");

headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
class DetailVoucher extends Component {
  state = {
    tabNameConfig: [
      {
        _id: "t1",
        name: "Thông tin voucher",
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
        name: "Thông tin check-in",
        icon: (
          <BsPatchCheck
            style={{ width: "24px ", height: "24px ", color: "#3399ff" }}
          />
        ),
      },
      {
        _id: "t3",
        name: "Thông tin CSKH",
        icon: (
          <RiCustomerService2Line
            style={{ width: "24px ", height: "24px ", color: "#3399ff" }}
          />
        ),
      },
      {
        _id: "t4",
        name: "Lịch sử đặt hẹn và ghi chú",
        icon: (
          <AiFillSchedule
            style={{ width: "24px ", height: "24px ", color: "#3399ff" }}
          />
        ),
      },
    ],
    action: "new",
    idUpdate: "",
    data: [],
    updated: "",
    detailUserVoucher: null,
    hiddenUrl: true,
    token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    role: localStorage.getItem("role"),
    type: localStorage.getItem("type"),
    isChange: true,
    isLoading: true,
    updateLevel: "1",
  };

  componentDidMount() {
    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to === window.location.hash) {
        if (arr[i].hiddenUrl === true) {
          window.location.href = "#/";
        }
      }
    }
    const { params } = this.props.match;
    console.log(params);

    axios({
      url: `${Constants.BASE_URL}${Constants.FETCH_DETAIL_USER_VOUCHER}/getDetail?id=${params.id}`,
      method: "GET",
    })
      .then((res) => {
        let val = res.data.data[0];
        console.log(val);
        this.setState({
          detailUserVoucher: val,
          isLoading: false,
        });
      })
      .catch((err) => {
        toast(`${err.message}`, {
          type: "error",
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(err);
      });
  }

  onFetchDetailUserVoucher() {
    return;
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

  render() {
    const { type } = this.state;

    console.log("type:", type);

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
                  ? this.state.tabNameConfig
                      .filter(function (item) {
                        return !(type !== "0" && item._id === "t3");
                      })
                      .map((item, i) => {
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
                  : this.state.tabNameConfig.map((item, i) => {
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
                    })}
              </List>
            </div>
            <div className="tabcontents" style={{ minHeight: "50vh" }}>
              <div id="tabcontent1" className="tabcontent defaultOpen">
                <div className="table__overflow">
                  <EvoucherInfoTable
                    detailUserVoucher={this.state?.detailUserVoucher}
                  />
                </div>
              </div>

              <div id="tabcontent2" className="tabcontent">
                <CheckInForm
                  detailUserVoucher={this.state?.detailUserVoucher}
                />
              </div>
              {type === "0" ? (
                <>
                  <div id="tabcontent3" className="tabcontent ">
                    <div class="text-center">
                      <img
                        style={{ objectFit: "contain", width: "80%" }}
                        src={NotInfoSale}
                        alt={NotInfoSale}
                      />
                    </div>
                    )
                  </div>
                  <div id="tabcontent4" className="tabcontent">
                    <NoteHistory
                      detailUserVoucher={this.state?.detailUserVoucher}
                    />
                  </div>
                </>
              ) : (
                <div id="tabcontent4" className="tabcontent">
                  <NoteHistory
                    detailUserVoucher={this.state?.detailUserVoucher}
                  />
                </div>
              )}
            </div>
          </div>
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
    minHeight: "30vh",
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
