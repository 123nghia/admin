import React from "react";
import { useParams } from "react-router-dom";
import Constants from "../../../../../contants/contants";
import axios from "axios";

import InfoIcon from "@mui/icons-material/Info";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { HiOutlineTicket } from "react-icons/hi";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HistoryToggleOffRoundedIcon from "@mui/icons-material/HistoryToggleOffRounded";
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
import Pagination from "@mui/material/Pagination";

import InfoEndUser from "./TabContent/InfoEndUser";
import TableCampaignJoinedUser from "./TabContent/TableCampaignJoined_User";
import History from "./TabContent/TabHistory/History";
import ProviderUserSystem from "./TabContent/ProviderUserSystem";
import TabInfoVoucherUser from "./TabContent/TabInfoVoucherUser";

const roleLogin = localStorage.getItem("type");
console.log("role", roleLogin);

function ToggleViewConfigWeb(id) {
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
function DetailEndUser() {
  const tabNameConfig = [
    {
      id: "1",
      name: "Thông tin về người dùng",
      icon: (
        <InfoIcon
          style={{ width: "24px ", height: "24px", color: "#389bff" }}
        />
      ),
    },
    {
      id: "2",
      name: "Danh sách chiến dịch tham gia",
      icon: (
        <ListAltIcon
          style={{ width: "24px ", height: "24px ", color: "#389bff" }}
        />
      ),
    },
    {
      id: "3",
      name: "Lịch sử soi da",
      icon: (
        <HistoryToggleOffRoundedIcon
          style={{ width: "24px ", height: "24px ", color: "#389bff" }}
        />
      ),
    },
    {
      id: "4",
      name: "NCC thành viên hệ thống",
      icon: (
        <CardMembershipOutlinedIcon
          style={{ width: "24px ", height: "24px ", color: "#389bff" }}
        />
      ),
    },
    {
      id: "5",
      name: "Thông tin về voucher",
      icon: (
        <HiOutlineTicket
          style={{ width: "24px ", height: "24px ", color: "#389bff" }}
        />
      ),
    },
  ];

  const [infoUser, setInfoUser] = React.useState([]);
  const [listVendor, setListVendor] = React.useState([]);
  const [infoVoucher, setInfoVoucher] = React.useState([]);
  const [history, setHistory] = React.useState([]);
  const [arrPagination, setArrPagination] = React.useState([]);
  const [hidden, setHidden] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [indexPage, setIndexPage] = React.useState(0);
  const { id } = useParams();
  const [testGlobal, setTestGlobal] = React.useState(0);

  function pagination(dataApi) {
    console.log("dataApi", dataApi);
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
      setHidden(hidden);
    } else {
      setHidden(!hidden);
    }

    setArrPagination((arrPagination) => [...arrPagination, arrTotal]);
    setData((data) => [...data, arrTotal[0]]);
    console.log("arrTotal[0]", arrTotal);
  }

  React.useEffect(() => {
    const baseUrlapi = Constants.BASE_URL;
    const baseUrlCallApi = Constants.DETAIL_USER_GET_INFO;
    const url = baseUrlapi + baseUrlCallApi;
    axios
      .get(url, {
        params: {
          id: id,
        },
      })
      .then((res) => {
        setInfoUser((infoUser) => [...infoUser, res.data?.data]);
        console.log(res.data?.data);
      });
  }, []);

  React.useEffect(() => {
    const baseUrlapi = Constants.BASE_URL;
    const baseUrlCallApi = Constants.DETAIL_USER_GET_INFO;
    const url = baseUrlapi + baseUrlCallApi;
    axios
      .get(url, {
        params: {
          id: id,
        },
      })
      .then((res) => {
        setListVendor(res.data.data.listVendor);
        console.log(res.data.data.listVendor);
        console.log("12312312313221312312", res);
        pagination(res.data.data.listVendor[0]?.vendor);
      });
  }, []);

  React.useEffect(() => {
    const baseUrlapi = Constants.BASE_URL;
    const baseUrlCallApi = Constants.GET_USER_EVOUCHER;
    const url = baseUrlapi + baseUrlCallApi;
    axios
      .get(url, {
        params: {
          userId: id,
        },
      })
      .then((res) => {
        setInfoVoucher(res.data.data);
        console.log(res);
      });
  }, []);

  React.useEffect(() => {
    const baseUrlapi = Constants.BASE_URL;
    const baseUrlCallApi = Constants.LIST_HISTORY_SKIN1;
    const url = baseUrlapi + baseUrlCallApi;
    axios.post(url, {}).then((res) => {
      setHistory(res.data.data);
      console.log(res);
    });
  }, []);
  const setTest = (value) => {
    setTestGlobal(value);

    console.log("testGlobal", testGlobal);
    console.log("qweeqe", value);
  };

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
                  onClick={() => ToggleViewConfigWeb(i)}
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
            {infoUser && infoUser ? (
              <InfoEndUser propsInfoUser={infoUser} />
            ) : null}
          </div>
          <div id="tabcontent2" className="tabcontent">
            <TableCampaignJoinedUser />
          </div>
          <div id="tabcontent3" className="tabcontent">
            {history && history ? (
              <History testHistory={setTest} propsHistory={history} />
            ) : null}
          </div>

          <div id="tabcontent4" className="tabcontent">
            {listVendor && listVendor ? (
              <ProviderUserSystem data={data} />
            ) : null}
            <div style={{ float: "right" }}>
              <Pagination
                count={arrPagination.length}
                color="primary"
                onChange={(e, v) => {
                  setData((data) => [...data, arrPagination[v - 1]]);
                  setIndexPage(v - 1);
                }}
              />
            </div>
          </div>
          <div id="tabcontent5" className="tabcontent">
            {infoVoucher && infoVoucher ? (
              <TabInfoVoucherUser propsVoucher={infoVoucher} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailEndUser;
