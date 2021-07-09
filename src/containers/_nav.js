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
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Quản lí danh sách'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   icon: 'cil-star',
  //   _children: [
  //     // {
  //     //   _tag: 'CSidebarNavItem',
  //     //   name: 'Users',
  //     //   to: '/users',
  //     //   icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
  //     //   role: arrRole
  //     // },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Link',
  //       to: '/link',
  //       icon: <CIcon name="cilPencil" customClasses="c-sidebar-nav-icon" />,
  //       role: arrRoleADMIN
  //     },
  //     // {
  //     //   _tag: 'CSidebarNavItem',
  //     //   name: 'Company',
  //     //   to: '/company',
  //     //   icon: <CIcon name="cil-location-pin" customClasses="c-sidebar-nav-icon" />,
  //     //   role: arrRole
  //     // },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Key',
  //       to: '/key',
  //       icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />,
  //       role: arrRoleADMIN
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'KeyOrder',
  //       to: '/key_order',
  //       icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />,
  //       role: arrRoleADMIN
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'TypeKey',
  //       to: '/type_key',
  //       icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />,
  //       role: arrRoleADMIN
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Package Sale',
  //       to: '/pakage_sale',
  //       icon: <CIcon name="cilPencil" customClasses="c-sidebar-nav-icon" />,
  //       role: arrRoleADMIN
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Package Sale Log',
  //       to: '/pakage_sale_log',
  //       icon: <CIcon name="cilPencil" customClasses="c-sidebar-nav-icon" />,
  //       role: arrRoleADMIN
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Role',
  //       to: '/role',
  //       icon: <CIcon name="cil-location-pin" customClasses="c-sidebar-nav-icon" />,
  //       role: arrRoleADMIN
  //     }],
  //   name: "Quản lí dữ liệu"
  // },
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
      name: 'Danh sách chủ shop',
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
      role: ['ADMIN', 'ADMINSALE', 'COMPANY']
    }]
  }

]

export default _nav
