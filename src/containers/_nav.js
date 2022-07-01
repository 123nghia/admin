import { freeSet } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CTooltip } from "@coreui/react";
import { AiOutlineInfoCircle, AiOutlineUser} from 'react-icons/ai';
import { BiCategory } from "react-icons/bi";
import React from "react";
import { HiColorSwatch } from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";


// const typePartner = JSON.parse(localStorage.getItem("user")).typePartner;
const type = JSON.parse(localStorage.getItem("type"));
const css = {};
const content = {

};

const _navOverview = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["PHẦN QUẢN LÝ & THỐNG KÊ"],
    role: ["0", "1", "2", "5"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Tổng quan - Thống kê",
    to: "/dashboard",
    hidden: true,
    icon: (
      <CIcon
        style={css}
        content={freeSet.cilSpeedometer}
        customClasses="c-sidebar-nav-icon"
      />
    ),
    role: ["0", "1"],
    badge: {
      color: "info",
      text: (
        <CTooltip placement={"right"} content={content.dashboard}>
          <CIcon content={freeSet.cilInfo} />
        </CTooltip>
      ),
    },
  },

  {
    _tag: "CSidebarNavItem",
    name: "Tổng quan - Thống kê",
    to: "/general-statistics",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "DÀNH CHO NCC",
    },
    role: ["1", "2"],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Thông tin chung",
    role: ["0", "1", "2", "5"],
    icon: (
      <AiOutlineInfoCircle className="c-sidebar-nav-icon" />
    ),
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Thông tin tài khoản",
        to: "/profile",
        icon: (
          <AiOutlineUser
         
          className="c-sidebar-nav-icon c-sidebar-nav-icon-child"
        />
        ),
        role: ["0", "1", "2", "5"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.profile}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Mã màu",
    to: "/code-color",
    icon: (
      <HiColorSwatch className="c-sidebar-nav-icon" />
    ),
    role: ["0", "1", "2", "5"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Dữ liệu màu",
    role: ["0", "1", "2", "5"],
    icon: (
      <IoColorPaletteOutline className="c-sidebar-nav-icon" />
    ),
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Màu Makeup",
        to: "/list-color-makeup",
        icon: (
          <IoColorPaletteOutline
          className="c-sidebar-nav-icon c-sidebar-nav-icon-child"
        />
        ),
        role: ["0", "1", "2", "5"],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Màu Tóc",
        to: "/list-color-hair",
        icon: (
          <IoColorPaletteOutline        
          className="c-sidebar-nav-icon c-sidebar-nav-icon-child"
        />
        ),
        role: ["0", "1", "2", "5"],
      },
    ],
  },
];

const _navMangerProviders = [
  //   {
  //     _tag: "CSidebarNavTitle",
  //     _children: ["Quản lý nhà cung cấp"],
  //     role: ["0", "1", "2", "5"],
  //   },
];
const _navMangerPartner = [
  //   {
  //     _tag: "CSidebarNavTitle",
  //     _children: ["Quản lý nhà cung cấp"],
  //     role: ["0", "1", "2", "5"],
  //   },
];
const _navManagerStatistics = [
  //   {
  //     _tag: "CSidebarNavItem",
  //     name: "Dashboard",
  //     to: "/general-statistics",
  //     icon: (
  //       <CgWebsite
  //         style={css}
  //         content={freeSet.none}
  //         className="c-sidebar-nav-icon"
  //       />
  //     ),
  //     role: ["1", "2"],
  //   },
];

const _navLogOut = [
  {
    _tag: "CSidebarNavItem",
    name: "Đăng xuất",
    to: "/login",
    role: ["0", "1", "2", "5"],
    icon: (
      <CIcon
        style={css}
        content={freeSet.cilAccountLogout}
        customClasses="c-sidebar-nav-icon"
      />
    ),
  },
];

export default [
  _navOverview,
  _navMangerProviders,
  _navMangerPartner,
  _navManagerStatistics,
  _navLogOut,
];
