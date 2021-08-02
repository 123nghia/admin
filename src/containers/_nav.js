import React from 'react'
import CIcon from '@coreui/icons-react'
import { cifAU, freeSet } from '@coreui/icons';
const arrRoleADMIN = ['SALES', 'ADMIN', 'SHOPMANAGER', 'ADMINSALES', 'COMPANY'];
const arrRoleCOMPANY = ['SALES', 'SHOPMANAGER'];
const arrRoleSHOPMANAGER = ['SALES'];
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
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Quản lý phân quyền',
    to: '/role_manager',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon" />,
    role: ['0'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tính năng AI, AR',
    to: '/feature_customer',
    icon: <CIcon name="cil-laptop" customClasses="c-sidebar-nav-icon" />,
    role: ['2']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Quản lý nâng cấp',
    to: '/update_package',
    icon: <CIcon content={freeSet.cilExpandUp} customClasses="c-sidebar-nav-icon" />,
    role: ['2']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý gói tính năng AI AR',
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
    name: 'Quản lý tài khoản',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách tài khoản Sale',
      to: '/saleAdmin',
      role: ['0'],
    },{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách khách hàng',
      to: '/customer_manager',
      role: ['0', '1'],
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
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Tạo đơn hàng',
      to: '/plugin_create_order',
      role: ['0', '1'],
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
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lịch sử soi da',
    to: '/historyskin',
    icon: <CIcon content={freeSet.cilHistory} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
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
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh mục',
    to: '/subtype',
    icon: <CIcon content={freeSet.cilMenu} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Mã màu',
    to: '/color',
    icon: <CIcon content={freeSet.cilColorPalette} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sản phẩm',
    to: '/product',
    icon: <CIcon content={freeSet.cilTablet} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2'],
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
      role: ['0', '1', '2']
    },{
      _tag: 'CSidebarNavItem',
      name: 'Quản lý loại yêu cầu',
      to: '/type_request',
      role: ['0', '1'],
    }],
    role: ['0', '1', '2'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách khuyến mãi',
    to: '/cus_request',
    icon: <CIcon content={freeSet.cilGift} customClasses="c-sidebar-nav-icon" />,
    role: ['0', '1', '2']
  }
]

export default _nav
