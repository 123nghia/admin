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
    role: ['ADMIN', 'COMPANY', 'SALE'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách tính năng',
    to: '/dashboard',
    icon: <CIcon name="cil-chartPie" customClasses="c-sidebar-nav-icon" />,
    role: ['COMPANY'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hồ sơ',
    to: '/profile',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
    role: ['ADMIN', 'COMPANY', 'SALE'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tính năng đã đăng ký',
    to: '/feature_customer',
    icon: <CIcon name="cil-laptop" customClasses="c-sidebar-nav-icon" />,
    role: ['COMPANY'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý phân quyền',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon" />,
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách quyền',
      to: '/role_manager',
    }],
    role: ['ADMIN'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý gói tính năng',
    icon: 'cil-laptop',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Quản lý gói sản phẩm',
      to: '/plugin_manager',
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Quản lý tính năng',
      to: '/feature',
    }],
    role: ['ADMIN', 'SALE'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý khách hàng',
    icon: 'cil-userFollow',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Quản lý khách hàng',
      to: '/customer_manager',
    }],
    role: ['ADMIN', 'SALE'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý Sale',
    icon: 'cil-people',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách Sale',
      to: '/saleAdmin',
    }],
    role: ['ADMIN'],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Chương trình khuyến mãi',
    icon: 'cil-bell',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Nội dung khuyến mãi',
      to: '/reward_info'
    },{
      _tag: 'CSidebarNavItem',
      name: 'Yêu cầu khách hàng',
      to: '/cus_request'
    }],
    role: ['ADMIN'],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý đơn hàng',
    icon: 'cil-chartPie',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách đơn hàng',
      to: '/list_order',
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Tạo đơn hàng',
      to: '/plugin_create_order',
    }],
    role: ['ADMIN', 'SALE'],
  }
]

export default _nav
