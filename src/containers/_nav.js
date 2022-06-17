import { freeSet } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CTooltip } from "@coreui/react";
import { AiOutlineInfoCircle, AiOutlineUser , AiOutlineSetting} from 'react-icons/ai';
import { BiWorld, BiCategory } from "react-icons/bi";
import React from "react";
import { BsCardList } from "react-icons/bs";
import {VscFeedback} from "react-icons/vsc";
import {GrSystem } from "react-icons/gr";
import {FaRegUser, FaUserFriends} from "react-icons/fa";
import {IoSettingsOutline, IoLogoDropbox} from "react-icons/io5";
import {SiProducthunt} from "react-icons/si";
import {ImNewspaper} from "react-icons/im";


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
      // {
      //   _tag: "CSidebarNavDropdown",
      //   name: "Quản lý loại tài khoản",
      //   role: ["0", "1"],
      //   icon: (
      //     <AiOutlineSetting className="c-sidebar-nav-icon c-sidebar-nav-icon-child" />
      //   ),
      //   _children: [
      //     {
      //       _tag: "CSidebarNavItem",
      //       name: "Danh sách tài khoản hệ thống",

      //       to: "/subsale",
      //       role: ["0"],
      //       badge: {
      //         color: "info",
      //         text: (
      //           <CTooltip placement={"right"} content={content.accountSale}>
      //             <CIcon content={freeSet.cilInfo} />
      //           </CTooltip>
      //         ),
      //       },
      //     },

      //     {
      //       _tag: "CSidebarNavItem",
      //       name: "Danh sách khách hàng",
      //       to: "/customer_manager",
      //       role: ["0"],
      //       badge: {
      //         color: "info",
      //         text: (
      //           <CTooltip placement={"right"} content={content.accountCompany}>
      //             <CIcon content={freeSet.cilInfo} />
      //           </CTooltip>
      //         ),
      //       },
      //     },
      //   ],
        
      // },

      {
        _tag: "CSidebarNavItem",
        name: "Cấu hình Web - Admin",
        to: "/admin-config-web",
        icon: (
          <BiWorld className="c-sidebar-nav-icon  c-sidebar-nav-icon-child" />
        ),
        role: ["0"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.configweb_admin}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Danh sách",
    role: ["0", "1"],
    icon: (
      <BsCardList className="c-sidebar-nav-icon" />
    ),
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Danh mục",
        to: "/list-categories",
        hidden: true,
        icon: (
          <BiCategory className="c-sidebar-nav-icon c-sidebar-nav-icon-child" />
        ),
        role: ["0", "1"],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Sản phẩm",
        to: "/list-products",
        hidden: true,
        icon: (
          <SiProducthunt className="c-sidebar-nav-icon c-sidebar-nav-icon-child" />
        ),
        role: ["0", "1"],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Thương hiệu",
        to: "/list-brand",
        hidden: true,
        icon: (
          <IoLogoDropbox className="c-sidebar-nav-icon c-sidebar-nav-icon-child" />
        ),
        role: ["0", "1"],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Đối tác",
        to: "/list-partner",
        hidden: true,
        icon: (
          <FaUserFriends className="c-sidebar-nav-icon c-sidebar-nav-icon-child" />
        ),
        role: ["0", "1"],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tin tức",
        to: "/list-news",
        hidden: true,
        icon: (
          <ImNewspaper className="c-sidebar-nav-icon c-sidebar-nav-icon-child" />
        ),
        role: ["0", "1"],
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Hệ thống",
    role: ["0", "1"],
    icon: (
      <IoSettingsOutline className="c-sidebar-nav-icon" />
    ),
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Phản hồi",
        to: "/feedback",
        hidden: true,
        icon: (
          <VscFeedback className="c-sidebar-nav-icon c-sidebar-nav-icon-child" />
        ),
        role: ["0", "1"],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Đăng ký nhận khuyến mãi",
        to: "/register-promotion",
        hidden: true,
        icon: (
          <FaRegUser className="c-sidebar-nav-icon c-sidebar-nav-icon-child" />
        ),
        role: ["0", "1"],
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
