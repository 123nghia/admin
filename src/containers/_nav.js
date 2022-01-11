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
  dashboard: "Tổng hợp những phần quan trọng",
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

const _navDashboard = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Tổng quan'],
    role: ['0', '1'],
    hidden: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tổng quan',
    to: '/dashboard',
    hidden: true,
    icon: <CIcon style={css} content={freeSet.cilSpeedometer} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.dashboard}>
              <CIcon content={freeSet.cilBellExclamation} />
            </CTooltip>,
    },
  },
]

const _navSoida = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý soi da'],
    role: ['0', '1', '2']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Nhãn hiệu sản phẩm soi da',
    to: '/brand_skin',
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
    name: 'Hỗ trợ giảm lão hóa da',
    to: '/items/1',
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
    to: '/items/2',
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
    to: '/items/3',
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
    to: '/items/4',
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
    to: '/items/5',
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
    name: 'Bộ lọc sản phẩm gợi ý',
    to: '/skin/config',
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
    name: 'Kết luận chi tiết',
    to: '/skin/configContent',
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
    name: 'Kết luận tổng quan',
    to: '/skin/configOverView',
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


const _navSpecialProduct = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý sản phẩm'],
    role: ['0', '1', '2']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sản phẩm nổi bật',
    to: '/products-special',
    icon: <CIcon style={css} content={freeSet.cilBookmark} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.brand}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  }
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
    to: '/brand',
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
    name: 'Danh mục trang điểm',
    to: '/subtype_makeup',
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
    to: '/color',
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
    to: '/product',
    icon: <CIcon style={css} content={freeSet.cilTablet} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.product}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Danh mục tóc',
  //   to: '/subtype_hair',
  //   icon: <CIcon style={css} content={freeSet.cilMenu} customClasses="c-sidebar-nav-icon" />,
  //   role: ['0', '1', '2'],
  //   badge: {
  //     color: 'info',
  //     text: <CTooltip placement={"right"} content={content.subType}>
  //       <CIcon content={freeSet.cilBellExclamation} />
  //     </CTooltip>,
  //   }
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Sản phẩm',
  //   to: '/product_hair',
  //   icon: <CIcon style={css} content={freeSet.cilTablet} customClasses="c-sidebar-nav-icon" />,
  //   role: ['0', '1', '2'],
  //   badge: {
  //     color: 'info',
  //     text: <CTooltip placement={"right"} content={content.product}>
  //       <CIcon content={freeSet.cilBellExclamation} />
  //     </CTooltip>,
  //   }
  // },
]

const _navOrther = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý người dùng'],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách người dùng',
    to: '/customer',
    icon: <CIcon style={css} content={freeSet.cilUserPlus} customClasses="c-sidebar-nav-icon" />,
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
    name: 'Danh sách end user',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    to: '/end_user',
    icon: <CIcon style={css} name="cil-people" customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.role}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lịch sử soi da',
    to: '/historyskin',
    icon: <CIcon style={css} content={freeSet.cilHistory} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.history_skin}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lịch sử trang điểm',
    to: '/historyskin-makeup',
    icon: <CIcon style={css} content={freeSet.cilHistory} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.history_skin}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  // {
    // _tag: 'CSidebarNavTitle',
  //   _children: ['Quản lý chương trình khuyến mãi'],
  //   role: ['0', '1', '2'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Chương trình khuyến mãi',
  //   icon: <CIcon style={css} content={freeSet.cilBell} customClasses="c-sidebar-nav-icon" />,
  //   _children: [{
  //     _tag: 'CSidebarNavItem',
  //     name: 'Nội dung khuyến mãi',
  //     to: '/reward_info',
  //     role: ['0', '1', '2'],
  //     badge: {
  //       color: 'info',
  //       text: <CTooltip placement={"right"} content={content.reward_info}>
  //         <CIcon content={freeSet.cilBellExclamation} />
  //       </CTooltip>,
  //     }
  //   }],
  //   role: ['0', '1', '2'],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Danh sách khuyến mãi',
  //   to: '/cus_request',
  //   icon: <CIcon style={css} content={freeSet.cilGift} customClasses="c-sidebar-nav-icon" />,
  //   role: ['0', '1', '2'],
  //   badge: {
  //     color: 'info',
  //     text: <CTooltip placement={"right"} content={content.reward_customer}>
  //       <CIcon content={freeSet.cilBellExclamation} />
  //     </CTooltip>,
  //   }
  // }
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Thông tin chung'],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Thông tin tài khoản',
    to: '/profile',
    icon: <CIcon style={css} name="cil-user" customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.profile}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Quản lý phân quyền',
    to: '/role_manager',
    icon: <CIcon style={css} name="cil-people" customClasses="c-sidebar-nav-icon" />,
    role: ['0'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.role}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tính năng AI, AR',
    to: '/feature_customer',
    icon: <CIcon style={css} name="cil-laptop" customClasses="c-sidebar-nav-icon" />,
    role: ['2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.package_company}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Quản lý nâng cấp',
    to: '/update_package',
    icon: <CIcon style={css} content={freeSet.cilExpandUp} customClasses="c-sidebar-nav-icon" />,
    role: ['2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.update_package}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
]

const _navContact = [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý tính năng AI AR',
    icon: <CIcon style={css} content={freeSet.cilApplications} customClasses="c-sidebar-nav-icon" />,
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Quản lý gói sản phẩm',
      to: '/plugin_manager',
      role: ['0'],
      badge: {
        color: 'info',
        text: <CTooltip placement={"right"} content={content.package}>
          <CIcon content={freeSet.cilBellExclamation} />
        </CTooltip>,
      }
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Quản lý tính năng',
      to: '/feature',
      role: ['0'],
      badge: {
        color: 'info',
        text: <CTooltip placement={"right"} content={content.feature}>
          <CIcon content={freeSet.cilBellExclamation} />
        </CTooltip>,
      }
    }],
    role: ['0']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý tài khoản',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách Sale',
      to: '/subsale',
      role: ['2'],
      badge: {
        color: 'info',
        text: <CTooltip placement={"right"} content={content.accountSale}>
          <CIcon content={freeSet.cilBellExclamation} />
        </CTooltip>,
      }
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Danh sách tài khoản Sale',
      to: '/saleAdmin',
      role: ['0'],
      badge: {
        color: 'info',
        text: <CTooltip placement={"right"} content={content.accountSale}>
          <CIcon content={freeSet.cilBellExclamation} />
        </CTooltip>,
      }
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Danh sách khách hàng',
      to: '/customer_manager',
      role: ['0', '1'],
      badge: {
        color: 'info',
        text: <CTooltip placement={"right"} content={content.accountCompany}>
          <CIcon content={freeSet.cilBellExclamation} />
        </CTooltip>,
      }
    }],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Thông tin liên hệ'],
    role: ['0', '1'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách liên hệ',
    to: '/contact',
    role: ['0', '1'],
    icon: <CIcon style={css} content={freeSet.cilContact} customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.contact}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách loại yêu cầu',
    to: '/type_request',
    role: ['0', '1'],
    icon: <CIcon style={css} content={freeSet.cilHamburgerMenu} customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.contact}>
        <CIcon content={freeSet.cilBellExclamation} />
      </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý đơn hàng',
    icon: <CIcon style={css} content={freeSet.cilFile} customClasses="c-sidebar-nav-icon" />,
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách đơn hàng',
      to: '/list_order',
      role: ['0', '1'],
      badge: {
        color: 'info',
        text: <CTooltip placement={"right"} content={content.package_order}>
          <CIcon content={freeSet.cilBellExclamation} />
        </CTooltip>,
      }
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Tạo đơn hàng',
      to: '/plugin_create_order',
      role: ['0', '1'],
      badge: {
        color: 'info',
        text: <CTooltip placement={"right"} content={content.create_order}>
          <CIcon content={freeSet.cilBellExclamation} />
        </CTooltip>,
      }
    }],
    role: ['0', '1'],
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách banner',
    to: '/quan-ly-banner',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách đặt hẹn',
    to: '/book-calendar',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cấu hình trang web',
    to: '/cau-hinh-trang-web',
    icon: <CIcon style={css} content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
  },

]
const _navLogOut = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Đăng xuất',
    to: '/login',
    role: ['0', '1', '2', '5'],
    icon: <CIcon style={css} content={freeSet.cilAccountLogout} customClasses="c-sidebar-nav-icon" />
  },
]

export default [_navSoida, _navMakeUp, _navOrther, _navContact, _navLogOut]
