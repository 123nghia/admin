import React from "react";
import Constants from "../../../../contants/contants";
import axios from "axios";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import StatisticalSaleGroup from "./TabContent/Tab1_StatisticalSaleGroup";
import MemberOfGroupSale from "./TabContent/Tab2_ListMemberOfGroupSale/Table_MemberOfGroupSale";
import InfoGroupSale from "./TabContent/Tab3_TableInfoGroupSale";

const tabNameConfig = [
  {
    id: "1",
    name: "Thống kê",
    icon: (
      <AssessmentOutlinedIcon
        style={{ width: "24px ", height: "24px", color: "#389bff" }}
      />
    ),
  },
  {
    id: "2",
    name: "Danh sách thành viên",
    icon: (
      <ListAltIcon
        style={{ width: "24px ", height: "24px ", color: "#389bff" }}
      />
    ),
  },
  {
    id: "3",
    name: "Thông tin nhóm",
    icon: (
      <InfoOutlinedIcon
        style={{ width: "24px ", height: "24px ", color: "#389bff" }}
      />
    ),
  },
];

function ToggleViewConfigWeb(id) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabNameConfig.length; i++) {
    if (tabNameConfig[i].id === id) {
      if (tablinks[i]) {
        tablinks[i].classList.add("tabcontent-left-active");
      }
    } else {
      if (tablinks[i]) {
        tablinks[i].classList.remove("tabcontent-left-active");
      }
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

function DetailManagerSaleGroup(props) {
  const [dataMember, setDataMember] = React.useState([]);
  const [infoMember, setInfoMember] = React.useState({});

  //Call API TabContent
  //Tab 2
  React.useEffect(() => {
    const baseUrlapi = Constants.BASE_URL;
    const baseUrlCallApi = Constants.DETAIL_LIST_ALL_MEMBER_GROUP;
    const url = baseUrlapi + baseUrlCallApi;
    axios
      .get(url, {
        params: {
          id: props.match.params.id,
        },
      })
      .then((res) => {
        console.log("dataMember", res);
        if (res.is_success) {
          setDataMember([...res.data.data]);
        }
      });
  }, []);

  //Tab 3
  React.useEffect(() => {
    const baseUrlapi = Constants.BASE_URL;
    const baseUrlCallApi = Constants.DETAIL_GET_INFO_MEMBER_GROUP;
    const url = baseUrlapi + baseUrlCallApi;
    axios
      .get(url, {
        params: {
          id: props.match.params.id,
        },
      })
      .then((res) => {
        console.log("infoMember", res.data.data);
        setInfoMember((infoMember) => ({ ...infoMember, ...res.data.data }));
      });
  }, []);
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
            {tabNameConfig.map((item, i) => {
              return (
                <ListItemButton
                  key={item.id}
                  className={
                    i === 0 ? "tablinks tabcontent-left-active" : "tablinks"
                  }
                  onClick={() => ToggleViewConfigWeb(item.id)}
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
        <div className="tabcontents">
          <div id="tabcontent1" className="tabcontent defaultOpen">
            <StatisticalSaleGroup />
          </div>
          <div id="tabcontent2" className="tabcontent">
            <MemberOfGroupSale dataMember={dataMember} />
          </div>
          <div id="tabcontent3" className="tabcontent">
            <InfoGroupSale infoMember={infoMember} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailManagerSaleGroup;
