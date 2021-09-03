import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  CTooltip,
  CButton
} from '@coreui/react'
import { cifAU, freeSet } from '@coreui/icons';

const css = { }
const content = {
  profile: "Quản lý các thông tin cá nhân của bạn như số điện thoại, email, v.v",
  role: "Quản lý các cấp bậc phân quyền hiện tại của TIKITECH",
  package: "Quản lý các gói dịch vụ hiện có của TIKITECH, một gói dịch vụ sẽ chứa một hoặc nhiều tính năng",
  package_company: "Quản lý các gói dịch vụ mà bạn đăng ký của TIKITECH, một gói dịch vụ sẽ chứa một hoặc nhiều tính năng",
  feature: "Quản lý các tính năng hiện có của TIKITECH",
  accountSale: "Danh sách Sale của TIKITECH",
  accountCompany: "Danh sách khách hàng của TIKITECH",
  package_order: "Danh tất cả đơn hàng bao gồm các gói dịch vụ mà TIKITECH cung cấp cho khách hàng",
  create_order: "Tạo đơn hàng để TIKITECH cung cấp dịch vụ mà khách hàng cần",
  customer: "Danh sách mà người dùng đến và sử dụng dịch vụ",
  suggest: "Danh sách sản phẩm gợi ý khi người dùng sử dụng dịch vụ soi da",
  history_skin: "Danh sách lịch sử soi da của người dùng sử dụng dịch vụ soi da",
  brand: "Danh sách các thương hiệu hiện có",
  subType: "Danh sách các danh mục hiện có",
  color: "Danh sách các mã màu hiện có",
  product: "Danh sách các sản phẩm hiện có",
  reward_info: "Nội dung các chương trình khuyến mãi hiện tại",
  reward_customer: "Danh sách nhận quà của người dùng đã đến sử dụng dịch vụ",
  reward_type: "Danh sách các loại khuyến mãi",
  update_package: "Nâng cấp gói",
  contact: "Danh sach liên hệ",
}


const _navSoida = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý soi da'],
    role: ['0', '1', '2']
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Nhãn hiệu sản phẩm soi da',
  //   to: '/brand_skin',
  //   icon: <CIcon style={css} content={freeSet.cilBookmark} customClasses="c-sidebar-nav-icon" />,
  //   role: ['0', '1', '2'],
  //   badge: {
  //     color: 'info',
  //     text: <CTooltip placement={"right"} content={content.brand}>
  //       <CIcon content={freeSet.cilBellExclamation} />
  //     </CTooltip>,
  //   }
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Chăm sóc da hằng ngày',
  //   to: '/suggest/K1',
  //   icon: <CIcon style={css} content={freeSet.cilMoodVeryGood} customClasses="c-sidebar-nav-icon" />,
  //   role: ['0', '1', '2'],
  //   badge: {
  //     color: 'info',
  //     text: <CTooltip placement={"right"} content={content.suggest}>
  //       <CIcon content={freeSet.cilBellExclamation} />
  //     </CTooltip>,
  //   },
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hỗ trợ giảm lão hóa da',
    to: '/suggest/K5',
    icon: <CIcon style={css} content={freeSet.cilMoodVeryGood} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.suggest}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hỗ trợ điều trị mụn',
    to: '/suggest/K6',
    icon: <CIcon style={css} content={freeSet.cilMoodVeryGood} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.suggest}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hỗ trợ giảm quầng thâm mắt',
    to: '/suggest/K7',
    icon: <CIcon style={css} content={freeSet.cilMoodVeryGood} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.suggest}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hỗ trợ giảm lỗ chân lông',
    to: '/suggest/K8',
    icon: <CIcon style={css} content={freeSet.cilMoodVeryGood} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.suggest}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hỗ trợ giảm thâm nám da',
    to: '/suggest/K9',
    icon: <CIcon style={css} content={freeSet.cilMoodVeryGood} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.suggest}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    },
  },
]

const _navMakeUp = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý trang điểm'],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Nhãn hiệu sản phẩm trang điểm',
    to: '/brand_table',
    icon: <CIcon style={css} content={freeSet.cilBookmark} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.brand}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh mục tổng hợp',
    to: '/subtype_table',
    icon: <CIcon style={css} content={freeSet.cilMenu} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.subType}>
              <CIcon content={freeSet.cilBellExclamation} />
            </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Mã màu',
    to: '/color_table',
    icon: <CIcon style={css} content={freeSet.cilColorPalette} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.color}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sản phẩm',
    to: '/sku_table',
    icon: <CIcon style={css} content={freeSet.cilTablet} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.product}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý màu tóc'],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sản phẩm',
    to: '/sku_hair',
    icon: <CIcon style={css} content={freeSet.cilTablet} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.product}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Mã màu',
    to: '/color_hair',
    icon: <CIcon style={css} content={freeSet.cilColorPalette} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.color}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  }
]

const _navOrther = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Thông tin chung'],
    role: ["0"],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý tài khoản',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh sách công ty',
        to: '/list_company',
        role: ['0', '1'],
        badge: {
          color: 'info',
          text: <CTooltip placement={"right"} content={content.accountCompany}>
            <CIcon content={freeSet.cilFactory} />
          </CTooltip>,
        }
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh sách tài khoản công ty',
        to: '/user_admin',
        role: ['0', '1'],
        badge: {
          color: 'info',
          text: <CTooltip placement={"right"} content={content.cilP}>
            <CIcon content={freeSet.cilFactory} />
          </CTooltip>,
        }
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh sách người dùng',
        to: '/users_table',
        role: ['0', '1'],
        badge: {
          color: 'info',
          text: <CTooltip placement={"right"} content={content.cilUserFollow}>
            <CIcon content={freeSet.cilBellExclamation} />
          </CTooltip>,
        }
      }],
    role: ['0', '1'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Đăng xuất',
    to: '/login',
    role: ['0', '1', '2'],
    icon: <CIcon style={css} content={freeSet.cilAccountLogout} customClasses="c-sidebar-nav-icon" />
  },
]

const _navBooking = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý đặt lịch'],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách đặt lịch ',
    to: '/danh-sach-dat-lich',
   icon: <CIcon style={css} content={freeSet.cilCalendar} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.customer}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách dịch vụ ',
    to: '/danh-sach-dich-vu',
icon: <CIcon style={css} content={freeSet.cilHamburgerMenu} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content="">
        <CIcon content={freeSet.cilHamburgerMenu} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách địa điểm',
    to: '/danh-sach-dia-diem',
   icon: <CIcon style={css} content={freeSet.cilHamburgerMenu} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content="Danh sách địa điểm">
        <CIcon content={freeSet.cilHamburgerMenu} />
      </CTooltip>,
    }
  }
  
]

const _navGH = [
      {
        _tag: 'CSidebarNavTitle',
        _children: ['Quản lý gian hàng'],
        role: ['0', '1', '2'],
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Bảng điều khiển ',
        to: '/danh-sach-dat-lich',
       icon: <CIcon style={css} content={freeSet.cilCalendar} customClasses="c-sidebar-nav-icon" />,
        role: ['0', '1', '2'],
        badge: {
          color: 'info',
          text: <CTooltip placement={"right"} content={content.customer}>
            <CIcon content={freeSet.cilBellExclamation} />
          </CTooltip>,
        }
      }
 ]



export default [_navSoida, _navMakeUp, _navOrther,_navBooking,_navGH]
