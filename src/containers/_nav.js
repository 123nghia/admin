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
    _tag: 'CSidebarNavItem',
    name: 'Lịch sử soi da',
    to: '/history_skin',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lí sản phẩm ưu tiên']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sản phẩm ưu tiên',
    to: '/priority_product',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lí sản phẩm gợi ý']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Nhãn hiệu sản phẩm soi da',
    to: '/brand_suggest',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hỗ trợ giảm lão hóa da',
    to: '/items/1',
    icon: <CIcon content={freeSet.cilMoodVeryGood} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hỗ trợ điều trị mụn',
    to: '/items/2',
    icon: <CIcon content={freeSet.cilMoodVeryGood} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hỗ trợ giảm quầng thâm mắt',
    to: '/items/3',
    icon: <CIcon content={freeSet.cilMoodVeryGood} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hỗ trợ giảm lỗ chân lông',
    to: '/items/4',
    icon: <CIcon content={freeSet.cilMoodVeryGood} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hỗ trợ giảm thâm nám da',
    to: '/items/5',
    icon: <CIcon content={freeSet.cilMoodVeryGood} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lí sản phẩm trang điểm']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Nhãn hiệu sản phẩm trang điểm',
    to: '/brand_makeup',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh mục',
    to: '/subtype_makeup',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Màu sắc',
    to: '/color_makeup',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sản phẩm',
    to: '/product_makeup',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lí sản phẩm tóc']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Màu sắc',
    to: '/color_hair',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sản phẩm',
    to: '/product_hair',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />,
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
    name: 'Banner trang chủ',
    to: '/banner_home_page',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Thông tin SEO']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Thông tin SEO',
  //   to: '/seo',
  //   icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon" />
  // },
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
    _tag: 'CSidebarNavItem',
    name: 'Danh sách vận chuyển',
    to: '/transport',
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
