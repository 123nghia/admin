import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  CTooltip,
  CButton
} from '@coreui/react'
import { cifAU, freeSet } from '@coreui/icons';

const css = {}
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
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý sản phẩm'],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh mục',
    to: '/danh_muc',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Thương hiệu',
    to: '/thuong_hieu',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sản phẩm',
    to: '/san_pham',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2']
  },
]

const _navOrther = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý tài khoản'],
    role: ["0"],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách công ty',
    to: '/list_company',
    icon: <CIcon style={css} content={freeSet.cilTablet} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách tài khoản công ty',
    to: '/user_admin',
    icon: <CIcon style={css} content={freeSet.cilTablet} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách người dùng',
    to: '/users_table',
    icon: <CIcon style={css} content={freeSet.cilTablet} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: '',
    to: '',
    role: ['0', '1', '2'],
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
    role: ['0', '1'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách đặt lịch ',
    to: '/danh-sach-dat-lich',
    icon: <CIcon style={css} content={freeSet.cilCalendar} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách dịch vụ ',
    to: '/danh-sach-dich-vu',
    icon: <CIcon style={css} content={freeSet.cilHamburgerMenu} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách địa điểm',
    to: '/danh-sach-dia-diem',
    icon: <CIcon style={css} content={freeSet.cilHamburgerMenu} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1']
  }

]

const _navNotification = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý thông báo'],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách loại thông báo',
    to: '/loai_thong_bao',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách thông báo',
    to: '/danh_sach_thong_bao',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Nội dung thông báo',
    to: '/noi_dung_thong_bao',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1']
  },
]

const _navGH = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý đơn hàng'],
    role: ['0', '1'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách đơn hàng',
    to: '/don_hang',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách vận chuyển',
    to: '/van_chuyen',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1']
  }
]

const _navTichDiem = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý tích điểm'],
    role: ['0', '1'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách tích điểm',
    to: '/tich_diem',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1']
  },
]

const _navVNPAY = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Cấu hình VNPAY'],
    role: ['0'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Thiết lập cấu hình',
    to: '/cau_hinh_vnpay',
    icon: <CIcon style={css} content={freeSet.cilSettings} customClasses="c-sidebar-nav-icon" />,
    role: ['0']
  },
]



export default [_navSoida, _navMakeUp, _navBooking, _navNotification, _navGH, _navTichDiem, _navVNPAY, _navOrther]
