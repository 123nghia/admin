import { freeSet } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CTooltip } from "@coreui/react";
import { AiFillSetting } from "@react-icons/all-files/ai/AiFillSetting";
import { BsCardChecklist } from "@react-icons/all-files/bs/BsCardChecklist";
import { BsFillBarChartFill } from "@react-icons/all-files/bs/BsFillBarChartFill";
import { BsImageFill } from "@react-icons/all-files/bs/BsImageFill";
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite";
import { HiUserGroup } from "@react-icons/all-files/hi/HiUserGroup";
import React from "react";

const css = {};
const content = {
  profile:
    "Quản lý các thông tin cá nhân của bạn như số điện thoại, email, v.v",
  dashboard: "Tổng hợp những phần quan trọng",
  role: "Quản lý các cấp bậc phân quyền hiện tại của TIKITECH",
  package:
    "Quản lý các gói dịch vụ hiện có của TIKITECH, một gói dịch vụ sẽ chứa một hoặc nhiều tính năng",
  package_company:
    "Quản lý các gói dịch vụ mà bạn đăng ký của TIKITECH, một gói dịch vụ sẽ chứa một hoặc nhiều tính năng",
  feature: "Quản lý các tính năng hiện có của TIKITECH",
  accountSale: "Danh sách Sale của TIKITECH",
  accountCompany: "Danh sách khách hàng của TIKITECH",
  package_order:
    "Danh tất cả đơn hàng bao gồm các gói dịch vụ mà TIKITECH cung cấp cho khách hàng",
  create_order: "Tạo đơn hàng để TIKITECH cung cấp dịch vụ mà khách hàng cần",
  customer: "Danh sách mà người dùng đến và sử dụng dịch vụ",
  suggest: "Danh sách sản phẩm gợi ý khi người dùng sử dụng dịch vụ soi da",
  history_skin:
    "Danh sách lịch sử soi da của người dùng sử dụng dịch vụ soi da",
  brand: "Danh sách các thương hiệu hiện có",
  subType: "Danh sách các danh mục hiện có",
  color: "Danh sách các mã màu hiện có",
  product: "Danh sách các sản phẩm hiện có",
  reward_info: "Nội dung các chương trình khuyến mãi hiện tại",
  reward_customer: "Danh sách nhận quà của người dùng đã đến sử dụng dịch vụ",
  reward_type: "Danh sách các loại khuyến mãi",
  update_package: "Nâng cấp gói",
  contact: "Danh sach liên hệ",
  none: "...",
};

const _navOverview = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["PHẦN QUẢN LÝ & THỐNG KÊ"],
    role: ["0", "1", "2", "5"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Tổng quan",
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
    _tag: "CSidebarNavDropdown",
    name: "Thông tin chung",
    role: ["0", "1", "2", "5"],
    icon: (
      <CIcon
        style={css}
        content={freeSet.cilCenterFocus}
        customClasses="c-sidebar-nav-icon"
      />
    ),
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Thông tin tài khoản",
        to: "/profile",
        icon: (
          <CIcon
            style={css}
            name="cil-user"
            customClasses="c-sidebar-nav-icon"
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
      {
        _tag: "CSidebarNavDropdown",
        name: "Quản lý Loại tài khoản",
        role: ["0", "1"],
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilList}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Danh sách tài khoản hệ thống",

            to: "/subsale",
            role: ["0"],
            badge: {
              color: "info",
              text: (
                <CTooltip placement={"right"} content={content.accountSale}>
                  <CIcon content={freeSet.cilInfo} />
                </CTooltip>
              ),
            },
          },

          {
            _tag: "CSidebarNavItem",
            name: "Danh sách khách hàng",
            to: "/customer_manager",
            role: ["0"],
            badge: {
              color: "info",
              text: (
                <CTooltip placement={"right"} content={content.accountCompany}>
                  <CIcon content={freeSet.cilInfo} />
                </CTooltip>
              ),
            },
          },
        ],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cấu hình Web",
        to: "/cau-hinh-trang-web",
        icon: (
          <CgWebsite
            style={css}
            content={freeSet.none}
            className="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cấu hình Web-Admin",
        to: "/admin-config-web",
        icon: (
          <CgWebsite
            style={css}
            name="cil-user"
            className="c-sidebar-nav-icon"
          />
        ),
        role: ["0"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.none}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },

      {
        _tag: "CSidebarNavItem",
        name: "Quản lý phân quyền",
        to: "/role_manager",
        icon: (
          <CIcon
            style={css}
            name="cil-people"
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.role}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Quản lý nâng cấp",
        to: "/update_package",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilExpandUp}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.update_package}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
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
  {
    _tag: "CSidebarNavItem",
    name: "Quản Lý Nhà Cung Cấp",
    to: "/manage-provider",
    icon: (
      <AiFillSetting
        style={css}
        content={freeSet.cilTruck}
        className="c-sidebar-nav-icon"
      />
    ),
    role: ["0", "1", "2"],
    badge: {
      color: "info",
      text: (
        <CTooltip placement={"right"} content={content.none}>
          <CIcon content={freeSet.cilInfo} />
        </CTooltip>
      ),
    },
  },
];

const _navMangerSales = [
  //   {
  //     _tag: "CSidebarNavTitle",
  //     _children: ["Quản lý Sales"],
  //     role: ["0", "1", "2", "5"],
  //   },
  {
    _tag: "CSidebarNavDropdown",
    name: "Quản lý Sales",
    icon: (
      <CIcon
        style={css}
        content={freeSet.cilList}
        customClasses="c-sidebar-nav-icon"
      />
    ),
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Danh sách Nhóm Sales",
        to: "/manage-sales-group",
        icon: (
          <HiUserGroup
            style={css}
            content={freeSet.cilPeople}
            className="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "2", "5"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Quản lý Cộng tác viên",
        to: "/manage-sales",
        icon: (
          <HiUserGroup
            style={css}
            content={freeSet.cilUserFemale}
            className="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "2", "5"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.customer}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
    ],

    role: ["0"],
  },
];

const _navMangerCampaigns = [
  {
    _tag: "CSidebarNavDropdown",
    name: "Quản lý chiến dịch",
    icon: (
      <CIcon
        style={css}
        content={freeSet.cilBullhorn}
        customClasses="c-sidebar-nav-icon"
      />
    ),
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Quản lý chiến dịch",
        to: "/manage-campaign",
        icon: (
          <AiFillSetting
            style={css}
            content={freeSet.cilUserPlus}
            className="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.none}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Danh sách chiến dịch tham gia",
        to: "/list-campaign",
        icon: (
          <BsCardChecklist
            style={css}
            content={freeSet.cilUserPlus}
            className="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.none}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Danh sách người dùng Voucher",
        to: "/list-user-evoucher",
        icon: (
          <HiUserGroup
            style={css}
            content={freeSet.cilUserPlus}
            className="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.none}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Quản lý Banner Trang chủ",
        to: "/banner-sales",
        icon: (
          <BsImageFill
            style={css}
            content={freeSet.cilUserPlus}
            className="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.none}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Danh sách Banner",
        to: "/quan-ly-banner",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilList}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["2"],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Quản lý Tồn kho eVoucher",
        to: "/manage-inventory",
        icon: (
          <AiFillSetting
            style={css}
            content={freeSet.cilUserPlus}
            className="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.none}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Quản lý eVoucher",
        to: "/manage-voucher",
        icon: (
          <AiFillSetting
            style={css}
            content={freeSet.cilUserPlus}
            className="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.none}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
    ],
    badge: {
      color: "info",
      text: (
        <CTooltip placement={"right"} content={content.none}>
          <CIcon content={freeSet.cilInfo} />
        </CTooltip>
      ),
    },
    role: ["0", "1", "2"],
  },
];

const _navMangerUser = [
  //   {
  //     _tag: "CSidebarNavTitle",
  //     _children: ["Quản lý người dùng"],
  //     role: ["0", "1", "2", "5"],
  //   },
  {
    _tag: "CSidebarNavDropdown",
    name: "Quản lý người dùng",

    icon: (
      <CIcon
        style={css}
        content={freeSet.cilList}
        customClasses="c-sidebar-nav-icon"
      />
    ),
    role: ["0", "1", "2"],
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Danh sách người dùng",
        to: "/customer",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilUserPlus}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.customer}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },

      {
        _tag: "CSidebarNavItem",
        name: "Danh sách tài khoản người dùng",
        to: "/end_user",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilUserPlus}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.role}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Lịch sử soi da",
        to: "/historyskin",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilHistory}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.history_skin}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Thống kê",
    to: "/evoucher-statistics",
    icon: (
      <BsFillBarChartFill
        style={css}
        content={freeSet.cilUserPlus}
        className="c-sidebar-nav-icon"
      />
    ),
    role: ["0", "1", "2"],
    badge: {
      color: "info",
      text: (
        <CTooltip placement={"right"} content={content.none}>
          <CIcon content={freeSet.cilInfo} />
        </CTooltip>
      ),
    },
  },
];

const _navSkinCare = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["PHẦN VẬN HÀNH"],
    role: ["0", "1", "2"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Quản lý Giao Diện Soi Da",
    icon: (
      <CIcon
        style={css}
        content={freeSet.cilList}
        customClasses="c-sidebar-nav-icon"
      />
    ),
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Nhãn hiệu sản phẩm soi da",
        to: "/brand_skin",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilBookmark}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.brand}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Hỗ trợ giảm lão hóa da",
        to: "/items/1",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilMoodVeryGood}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.suggest}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Hỗ trợ điều trị mụn",
        to: "/items/2",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilMoodVeryGood}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.suggest}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Hỗ trợ giảm quầng thâm mắt",
        to: "/items/3",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilMoodVeryGood}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.suggest}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Hỗ trợ giảm lỗ chân lông",
        to: "/items/4",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilMoodVeryGood}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.suggest}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Hỗ trợ giảm thâm nám da",
        to: "/items/5",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilMoodVeryGood}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.suggest}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Bộ lọc sản phẩm",
        to: "/skin/config",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilMoodVeryGood}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.suggest}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tư vấn tổng quan",

        to: "/skin/configContent",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilMoodVeryGood}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.suggest}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },

      {
        _tag: "CSidebarNavItem",
        name: "Tư vấn chi tiết",

        to: "/skin/configOverView",
        icon: (
          <CIcon
            style={css}
            content={freeSet.cilMoodVeryGood}
            customClasses="c-sidebar-nav-icon"
          />
        ),
        role: ["0", "1", "2"],
        badge: {
          color: "info",
          text: (
            <CTooltip placement={"right"} content={content.suggest}>
              <CIcon content={freeSet.cilInfo} />
            </CTooltip>
          ),
        },
      },
    ],
    role: ["0", "1", "2"],
  },
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
  _navMangerSales,
  _navMangerCampaigns,
  _navMangerUser,
  _navSkinCare,
  _navManagerStatistics,
  _navLogOut,
];
