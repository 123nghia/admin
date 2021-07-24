import React from 'react'
import CIcon from '@coreui/icons-react'
import { cifAU, freeSet } from '@coreui/icons';
const arrRoleADMIN = ['SALES', 'ADMIN', 'SHOPMANAGER', 'ADMINSALES', 'COMPANY'];
const arrRoleCOMPANY = ['SALES', 'SHOPMANAGER'];
const arrRoleSHOPMANAGER = ['SALES'];
const _nav = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Danh mục'],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách tính năng',
    to: '/dashboard',
    icon: <CIcon name="cil-chartPie" customClasses="c-sidebar-nav-icon" />,
    role: ['2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hồ sơ',
    to: '/profile',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tính năng đã đăng ký',
    to: '/feature_customer',
    icon: <CIcon name="cil-laptop" customClasses="c-sidebar-nav-icon" />,
    role: ['2']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý phân quyền',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon" />,
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách quyền',
      to: '/role_manager',
      role: ['0'],
    }],
    role: ['0'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý gói tính năng',
    icon: 'cil-laptop',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Quản lý gói sản phẩm',
      to: '/plugin_manager',
      role: ['0'],
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Quản lý tính năng',
      to: '/feature',
      role: ['0'],
    }],
    role: ['0'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý khách hàng',
    icon: 'cil-userFollow',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Quản lý khách hàng',
      to: '/customer_manager',
      role: ['0', '1'],
    }],
    role: ['0', '1'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý Sale',
    icon: 'cil-people',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách Sale',
      to: '/saleAdmin',
      role: ['0'],
    }],
    role: ['0'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Chương trình khuyến mãi',
    icon: 'cil-bell',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Nội dung khuyến mãi',
      to: '/reward_info',
      role: ['0', '1', '2']
    },{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách nhận quà',
      to: '/cus_request',
      role: ['0', '1', '2']
    },{
      _tag: 'CSidebarNavItem',
      name: 'Quản lý loại yêu cầu',
      to: '/type_request',
      role: ['0', '1'],
    },{
      _tag: 'CSidebarNavItem',
      name: 'Thống kê lượt khách hàng',
      to: '/customer',
      role: ['0', '1', '2'],
    }],
    role: ['0', '1', '2'],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý đơn hàng',
    icon: 'cil-chartPie',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách đơn hàng',
      to: '/list_order',
      role: ['0', '1'],
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Tạo đơn hàng',
      to: '/plugin_create_order',
      role: ['0', '1'],
    }],
    role: ['0', '1'],
  }
]

export default _nav
