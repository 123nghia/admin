import React from 'react'
import CIcon from '@coreui/icons-react'
import { cifAU } from '@coreui/icons';

const _nav =  [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Menu'],
    role: ['SALES', 'ADMIN', 'SHOPMANAGER']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    role: ['SALES', 'ADMIN', 'SHOPMANAGER']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/users',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon"/>,
    role: ['SALES', 'ADMIN', 'SHOPMANAGER']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Link',
    to: '/link',
    icon: <CIcon name="cilPencil" customClasses="c-sidebar-nav-icon"/>,
    role: ['ADMIN', 'SHOPMANAGER']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Company',
    to: '/company',
    icon: <CIcon name="cil-location-pin" customClasses="c-sidebar-nav-icon"/>,
    role: ['ADMIN']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Key',
    to: '/key',
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon"/>,
    role: ['ADMIN']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'KeyOrder',
    to: '/key_order',
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon"/>,
    role: ['ADMIN']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'TypeKey',
    to: '/type_key',
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon"/>,
    role: ['ADMIN']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Package Sale',
    to: '/pakage_sale',
    icon: <CIcon name="cilPencil" customClasses="c-sidebar-nav-icon"/>,
    role: ['ADMIN', 'SALES', 'SHOPMANAGER']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Package Sale Log',
    to: '/pakage_sale_log',
    icon: <CIcon name="cilPencil" customClasses="c-sidebar-nav-icon"/>,
    role: ['ADMIN', 'SALES', 'SHOPMANAGER']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Role',
    to: '/role',
    icon: <CIcon name="cil-location-pin" customClasses="c-sidebar-nav-icon"/>,
    role: ['ADMIN']
  },
]

export default _nav
