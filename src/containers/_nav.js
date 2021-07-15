import React from 'react'
import CIcon from '@coreui/icons-react'
import { cifAU } from '@coreui/icons';
const arrRoleADMIN = ['SALES', 'ADMIN', 'SHOPMANAGER', 'ADMINSALES', 'COMPANY'];
const arrRoleCOMPANY = ['SALES', 'SHOPMANAGER'];
const arrRoleSHOPMANAGER = ['SALES'];
const _nav = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Danh mục'],
    role: ['ADMIN', 'COMPANY'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách tính năng',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    role: ['COMPANY'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hồ sơ',
    to: '/profile',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
    role: ['ADMIN', 'COMPANY'],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Phân quyền'],
    role: ['ADMIN'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Danh sách quyền',
    icon: 'cil-star',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Quản lý quyền',
      to: '/role_manager',
    }],
    role: ['ADMIN'],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Khách hàng'],
    role: ['ADMIN'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Khách hàng',
    icon: 'cil-star',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Quản lý khách hàng',
      to: '/customer_manager',
    }],
    role: ['ADMIN'],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Gói sản phẩm'],
    role: ['ADMIN'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Gói sản phẩm',
    icon: 'cil-star',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Quản lý gói sản phẩm',
      to: '/plugin_manager',
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Quản lý tính năng',
      to: '/feature',
    }],
    role: ['ADMIN'],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Đơn hàng'],
    role: ['ADMIN'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Tạo mới đơn hàng',
    icon: 'cil-star',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách đơn hàng',
      to: '/list_order',
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Tạo đơn hàng',
      to: '/plugin_create_order',
    }],
    role: ['ADMIN'],
  },
]

export default _nav
