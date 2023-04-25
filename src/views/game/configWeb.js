import React, { Component } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "react-datepicker/dist/react-datepicker.css";
import Constants from "./../../contants/contants";
import axios from "axios";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { IoLogoBuffer } from "@react-icons/all-files/io/IoLogoBuffer";
import BannerAia from "./configWeb/BannerAia";
import Logo from "./configWeb/GameConfig";
import Seo from "./configWeb/Content";
import { BiSlideshow } from "react-icons/bi";
import { MdOutlinePermDataSetting } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
class ConfigWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNameConfig: [
        {
          _id: "10",
          name: "Thông tin tổng quan",
          icon: <BsChatDots style={{ width: "24px ", height: "24px " }} />,
        },
        {
          _id: "5",
          name: "Danh sách trúng thưởng",
          icon: <BsChatDots style={{ width: "24px ", height: "24px " }} />,
        },

        {
          _id: "9",
          name: "Banner game",
          icon: <BiSlideshow style={{ width: "24px ", height: "24px " }} />,
        },
        {
          _id: "3",
          name: "Nội dung game",
          icon: (
            <MdOutlinePermDataSetting
              style={{ width: "24px ", height: "24px " }}
            />
          ),
        },
        {
          _id: "4",
          name: "Cấu hình game",
          icon: <IoLogoBuffer style={{ width: "24px ", height: "24px " }} />,
        },
      ],
      company_id: JSON.parse(localStorage.getItem("user")).company_id
        ? JSON.parse(localStorage.getItem("user")).company_id
        : null,
      poupintro: "",
      pupupSuccess: "",
      popupfail: "",
      fromDate: "",
      todate: "",
      fromtime: "",
      totime: "",
      skinNumber: "",
      statusGame: "",
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
 
  async componentDidMount() {
      await this.getDataConfigWeb();
      this.ToggleViewConfigWeb("9");
  }

  async getDataConfigWeb() {
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "/api/game/getInfo";
    const newComany_id = this.state.company_id;
    let Output_newComany_id;
    if (newComany_id) {
      Output_newComany_id = newComany_id;
    } else {
      Output_newComany_id = "-1";
    }
    await axios
      .get(url, {
        params: {
          gameType: "1",

          company_id: Output_newComany_id,
        },
      })
      .then((res) => {
        console.log("res", res.data);
        if (res.data.data.length > 0) {
          let dataConfig = res.data.data[0];

          let valueConfig = JSON.parse(dataConfig.Value);

          this.setState(
            {
              dataConfigWeb: valueConfig,
              idUpdate: dataConfig._id,
              bannerCampaign: valueConfig.value.bannerCampaign,
              poupintro: valueConfig.poupintro,
              pupupSuccess: valueConfig.poupintro,
              popupfail: valueConfig.popupfail,
              fromDate: valueConfig.fromDate,
              todate: valueConfig.todate,
              fromtime: valueConfig.fromtime,
              totime: valueConfig.totime,
              skinNumber: valueConfig.skinNumber,
              statusGame: valueConfig.statusGame,
            },
            () => {}
          );
        }
      });
  }

  SaveAllConfigWeb = async (change) => {
    const { dataConfigWeb } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "/api/config/update";
    const newComany_id = this.state.company_id;
    let itOutput = "-1";
    if (newComany_id) {
      itOutput = newComany_id;
    }
  
 
  };

  setStateByName = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <div className="flex-tabs">
            <div className="tab">
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
              <div id="tabcontent3" className="tabcontent">
                <Seo
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  setStateByName={this.setStateByName}
         
                  pupupSuccess={this.state.pupupSuccess}
                  poupintro={this.state.poupintro}
                  popupfail={this.state.popupfail}
                  fromDate={this.state.fromDate}
                  todate={this.state.todate}
                  fromtime={this.state.fromtime}
                  totime={this.state.totime}
                  skinNumber={this.state.skinNumber}
                  statusGame={this.state.statusGame}
                />
              </div>
              <div id="tabcontent9" className="tabcontent">
                <BannerAia
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  setStateByName={this.setStateByName}
                 
                  imageBannerDesktop={this.state.imageBannerDesktop}
                  hrefImageBannerDesktop={this.state.hrefImageBannerDesktop}
                  imageBannerMobile={this.state.imageBannerMobile}
                  hrefImageBannerMobile={this.state.hrefImageBannerMobile}
                />
              </div>
              <div id="tabcontent4" className="tabcontent ">
                <Logo
                  SaveAllConfigWeb={this.SaveAllConfigWeb}
                  setStateByName={this.setStateByName}
              
                  pupupSuccess={this.state.pupupSuccess}
                  poupintro={this.state.poupintro}
                  popupfail={this.state.popupfail}
                  fromDate={this.state.fromDate}
                  todate={this.state.todate}
                  fromtime={this.state.fromtime}
                  totime={this.state.totime}
                  skinNumber={this.state.skinNumber}
                  statusGame={this.state.statusGame}
                />
              </div>
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

export default ConfigWeb;
