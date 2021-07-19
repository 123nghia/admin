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
    role: ['ADMIN', 'COMPANY', 'SALE'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý phân quyền',
    icon: <CIcon name="cil-star" customClasses="c-sidebar-nav-icon" />,
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
    role: ['ADMIN', 'SALE'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý khách hàng',
    icon: 'cil-star',
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
    icon: 'cil-star',
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
    icon: 'cil-star',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Comming soon',
    }],
    role: ['ADMIN'],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý đơn hàng',
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
    role: ['ADMIN', 'SALE'],
  }
]

export default _nav
