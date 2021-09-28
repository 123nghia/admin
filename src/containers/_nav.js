import React from 'react'
import CIcon from '@coreui/icons-react'
import { cifAU, freeSet } from '@coreui/icons';

const _nav = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Danh mục']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tổng quan',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lí tài khoản']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách tài khoản người dùng',
    to: '/account',
    icon: <CIcon content={freeSet.cilUser} customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lí sản phẩm']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách danh mục',
    to: '/category',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách thương hiệu',
    to: '/brand',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách sản phẩm',
    to: '/product',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Lượt mua từng sản phẩm',
    to: '/countorder',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lí đơn hàng']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách đơn hàng',
    to: '/order',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lí deal']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách banner',
    to: '/deal',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />
  },
]

export default _nav
