import React from 'react'
import CIcon from '@coreui/icons-react'
import { cifAU } from '@coreui/icons';
const arrRoleADMIN = ['SALES', 'ADMIN', 'SHOPMANAGER', 'ADMINSALES', 'COMPANY'];
const arrRoleCOMPANY = ['SALES', 'SHOPMANAGER'];
const arrRoleSHOPMANAGER = ['SALES'];
const _nav = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Thống kê'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    role: arrRoleADMIN
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý'],
  },
  {
    _tag: 'CSidebarNavTitle',
    icon: 'cil-star',
    _children: [{
      _tag: 'CSidebarNavItem',
      name: 'Danh sách công ty',
      to: '/company',
      role: ['ADMIN', 'ADMINSALE'],
    }
      //, {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Danh sách admin sale',
      //   to: '/company',
      //   role: ['ADMIN', 'ADMINSALE']
      // }
      , {
      _tag: 'CSidebarNavItem',
      name: 'Danh sách shop',
      to: '/shopmanager',
      role: ['ADMIN', 'ADMINSALE', 'COMPANY']
    }, {
      _tag: 'CSidebarNavItem',
      name: 'Danh sách sale',
      to: '/sales',
      role: ['ADMIN', 'ADMINSALE', 'COMPANY', 'SHOPMANAGER']
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
      name: 'Danh sách key',
      to: '/key',
      role: ['ADMIN', 'ADMINSALE']
    }]
  }

]

export default _nav
