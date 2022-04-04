import CIcon from "@coreui/icons-react";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CSidebarNavTitle,
} from "@coreui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "reactstrap";
import Constants from "../contants/contants";
import API_CONNECT from "../functions/callAPI";
// sidebar nav config
import navigations from "./_nav--test";
const callApiGetRoleSubAdmin = async (user) => {
  if (user == null || JSON.parse(user) == null) {
    return;
  }
  const res = await API_CONNECT(
    Constants.GET_ROLE_SUBADMIN,
    {
      user_id: JSON.parse(user).sale_id,
    },
    "",
    "POST"
  );
  return res?.data?.sidebar_id;
};

const TheSidebar = () => {
  const [Logo, setLogo] = useState("");
  const [sidebar, setSidebar] = useState([]);
  const type = localStorage.getItem("type");
  async function getDataConfigWeb() {
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/getAll";

    await axios
      .get(url, {
        params: {
          key: "webinfo_admin",
          company_id: "-1",
        },
      })
      .then((res) => {
        if (res.data.data.length > 0) {
          let dataConfig = res.data.data[0];

          let valueConfig = JSON.parse(dataConfig.Value);
          console.log(valueConfig);
          setLogo(valueConfig.value.logos.webAdmin.logo);
        }
      });
  }
  useEffect(() => {
    const user = localStorage.getItem("user");

    const getRoleUser = async () => {
      var data = await callApiGetRoleSubAdmin(user);
      await getDataConfigWeb();

      setSidebar(data);
    };
    getRoleUser();
  }, []);

  var temp = [];
  var navigation = [];

  for (let i = 0; i < navigations.length; i++) {
    for (let y = 0; y < sidebar.length; y++) {
      for (let z = 0; z < navigations[sidebar[y]].length; z++) {
        navigations[sidebar[y]][z].role.push("5");
      }
    }
    navigation = navigation.concat(navigations[i]);
  }

  //Phân quyền bên phía menu
  for (let i = 0; i < navigation.length; i++) {
    if (navigation[i].role.includes(type)) {
      navigation[i].hidden = false;
      if (navigation[i]._children != undefined) {
        var _child = navigation[i]._children;
        for (let y = 0; y < _child.length; y++) {
          var roleCheck = _child[y].role;
          if (roleCheck != undefined) {
            if (roleCheck.includes(type)) {
              _child[y].hidden = false;
            } else {
              _child[y].hidden = true;
            }
          }
        }
      }
    } else {
      navigation[i].hidden = true;
    }
  }

  for (let i = 0; i < navigation.length; i++) {
    if (navigation[i]._children) {
      for (let y = 0; y < navigation[i]._children.length; y++) {
        if (navigation[i]._children[y].to) {
          temp.push({
            url: "#" + navigation[i]._children[y].to,
            isHidden: navigation[i].hidden,
          });
        }
      }
    }
  }

  localStorage.setItem("url", JSON.stringify(temp));

  const show = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar show={show === "responsive" ? false : true} size={"lg"}>
      <div className="header-logo" style={{ backgroundColor: "#ffff" }}>
        <CSidebarBrand className="d-md-down" to="/">
          <div class="flex-center">
            <NavLink
              style={{ fontSize: 20 }}
              href="/"
              className="nav-link"
              activeStyle={{ textDecoration: "underline" }}
            >
              <img
                src={Logo}
                style={{ maxWidth: "12rem" }}
                height="auto"
                alt="HB Analytics Logo"
                className="navbar-brand-full"
              />
            </NavLink>
          </div>
          <CIcon
            className="c-sidebar-brand-minimized"
            name="sygnet"
            height={35}
          />
        </CSidebarBrand>
      </div>
      <CSidebarNav>
        {navigations.map((nav, idx) => (
          <div style={{ backgroundColor: "#ffff" }} key={idx}>
            <CCreateElement
              items={nav}
              components={{
                CSidebarNavDivider,
                CSidebarNavDropdown,
                CSidebarNavItem,
                CSidebarNavTitle,
              }}
            />
          </div>
        ))}
      </CSidebarNav>
      {/* <CSidebarMinimizer className="c-d-md-down-none" /> */}
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
