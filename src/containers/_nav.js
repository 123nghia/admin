import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  CTooltip,
  CButton
} from '@coreui/react'
import { cifAU, freeSet } from '@coreui/icons';

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
                }

const _nav = [
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Tính năng',
  //   to: '/dashboard',
  //   icon: <CIcon name="cil-chartPie" customClasses="c-sidebar-nav-icon" />,
  //   role: ['2'],
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Thông tin cá nhân',
    to: '/profile',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
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
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon" />,
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
    icon: <CIcon name="cil-laptop" customClasses="c-sidebar-nav-icon" />,
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
    icon: <CIcon content={freeSet.cilExpandUp} customClasses="c-sidebar-nav-icon" />,
    role: ['2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.update_package}>
              <CIcon content={freeSet.cilBellExclamation} />
            </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý tính năng AI AR',
    icon: <CIcon content={freeSet.cilApplications} customClasses="c-sidebar-nav-icon" />,
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
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    _children: [{
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
    role: ['0', '1'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý đơn hàng',
    icon: <CIcon content={freeSet.cilFile} customClasses="c-sidebar-nav-icon" />,
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
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý người dùng'],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách người dùng',
    to: '/customer',
    icon: <CIcon content={freeSet.cilUserPlus} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.customer}>
              <CIcon content={freeSet.cilBellExclamation} />
            </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lí soi da'],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sản phẩm da mặt',
    to: '/suggest',
    icon: <CIcon content={freeSet.cilFace} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.suggest}>
              <CIcon content={freeSet.cilBellExclamation} />
            </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lịch sử soi da',
    to: '/historyskin',
    icon: <CIcon content={freeSet.cilHistory} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.history_skin}>
              <CIcon content={freeSet.cilBellExclamation} />
            </CTooltip>,
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lí trang điểm'],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Nhãn hiệu',
    to: '/brand',
    icon: <CIcon content={freeSet.cilBookmark} customClasses="c-sidebar-nav-icon" />,
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
    name: 'Danh mục',
    to: '/subtype',
    icon: <CIcon content={freeSet.cilMenu} customClasses="c-sidebar-nav-icon" />,
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
    icon: <CIcon content={freeSet.cilColorPalette} customClasses="c-sidebar-nav-icon" />,
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
    icon: <CIcon content={freeSet.cilTablet} customClasses="c-sidebar-nav-icon" />,
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
    _children: ['Quản lý chương trình khuyến mãi'],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Chương trình khuyến mãi',
    icon: 'cil-bell',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Nội dung khuyến mãi',
      to: '/reward_info',
      role: ['0', '1', '2'],
      badge: {
        color: 'info',
        text: <CTooltip placement={"right"} content={content.reward_info}>
                <CIcon content={freeSet.cilBellExclamation} />
              </CTooltip>,
      }
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Quản lý loại yêu cầu',
      to: '/type_request',
      role: ['0', '1'],
      badge: {
        color: 'info',
        text: <CTooltip placement={"right"} content={content.reward_type}>
                <CIcon content={freeSet.cilBellExclamation} />
              </CTooltip>,
      }
    }],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách khuyến mãi',
    to: '/cus_request',
    icon: <CIcon content={freeSet.cilGift} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
    badge: {
      color: 'info',
      text: <CTooltip placement={"right"} content={content.reward_customer}>
              <CIcon content={freeSet.cilBellExclamation} />
            </CTooltip>,
    }
  }
]

export default _nav
