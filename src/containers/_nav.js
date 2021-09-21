import React from 'react'
import CIcon from '@coreui/icons-react'
import { cifAU } from '@coreui/icons';

const _nav = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Danh mục'],
    role: ['ADMIN', 'ADMINSALE']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tổng quan',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    role: ['ADMIN', 'ADMINSALE', 'COMPANY', 'SHOPMANAGER', 'SALES']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hồ sơ',
    to: '/profile',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
    role: ['ADMIN', 'ADMINSALE', 'COMPANY', 'SHOPMANAGER', 'SALES']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lí khách hàng TIKITECH'],
    role: ['ADMIN', 'ADMINSALE']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Danh sách',
    icon: 'cil-star',
    role: ['ADMIN', 'ADMINSALE'],
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách công ty',
      to: '/company',
      role: ['ADMIN', 'ADMINSALE'],
    }]
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý phần cứng'],
    role: ['ADMIN', 'ADMINSALE', 'COMPANY', 'SHOPMANAGER', 'SALES']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Cấu hình phần cứng',
    icon: 'cil-star',
    role: ['ADMIN', 'ADMINSALE', 'COMPANY', 'SHOPMANAGER', 'SALES'],
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách shop',
      to: '/shopmanager',
      role: ['ADMIN', 'ADMINSALE', 'COMPANY']
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Danh sách sale',
      to: '/sales',
      role: ['ADMIN', 'ADMINSALE', 'COMPANY']
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Danh sách khách hàng',
      to: '/customers',
      role: ['ADMIN', 'ADMINSALE', 'COMPANY', 'SHOPMANAGER', 'SALES']
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Danh sách phần cứng',
      to: '/hardware',
      role: ['ADMIN', 'ADMINSALE']
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Danh sách sở hữu phần cứng',
      to: '/hardwaremanager',
      role: ['COMPANY']
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Danh sách key',
      to: '/key',
      role: ['ADMIN', 'ADMINSALE']
    }]
  }
  ,
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Thông tin đơn hàng'],
    role: ['ADMIN', 'ADMINSALE']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Thông tin đơn hàng',
    icon: 'cil-star',
    role: ['ADMIN', 'ADMINSALE'],
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Tạo đơn hàng',
      to: '/orders',
      role: ['ADMIN', 'ADMINSALE']
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Danh sách đơn hàng',
      to: '/order_table',
      role: ['ADMIN', 'ADMINSALE']
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Danh sách giao dịch',
      to: '/transaction',
      role: ['ADMIN', 'ADMINSALE']
    },
      //{
      //   _tag: 'CSidebarNavItem',
      //   name: 'Đơn hàng chờ thanh toán',
      //   to: '/spending_order',
      //   role: ['COMPANY']
      // }
    ]
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý sản phẩm sale PG'],
    role: ['COMPANY', 'SALES', 'ADMIN', 'SHOPMANAGER']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Thương hiệu',
    icon: 'cil-star',
    to: '/thuong_hieu',
    role: ['COMPANY', 'SALES', 'ADMIN', 'SHOPMANAGER']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sản phẩm',
    icon: 'cil-star',
    to: '/san_pham',
    role: ['COMPANY', 'SALES', 'ADMIN', 'SHOPMANAGER']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Thông kê doanh số sale PG'],
    role: ['COMPANY', 'SALES', 'ADMIN', 'SHOPMANAGER']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Theo đơn hàng',
    icon: 'cil-star',
    to: '/doanh_so',
    role: ['ADMIN', 'ADMINSALE', 'COMPANY']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Theo sản phẩm',
    icon: 'cil-star',
    to: '/doanh_so_theo_san_pham',
    role: ['ADMIN', 'ADMINSALE', 'COMPANY']
  },

]

export default _nav
