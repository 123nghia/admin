import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Nav, NavItem, NavLink } from 'reactstrap';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import logoMainnet from './../assets/img/logo_head.png';
import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const type = localStorage.getItem('type');

  var temp = []
  for (let i = 0; i < navigation.length; i++) {
    if (navigation[i].role.includes(type)) {
      navigation[i].hidden = false;
    } else {
      navigation[i].hidden = true;
    }
  }

  for (let i = 0; i < navigation.length; i++) {
    if(navigation[i]._children){
      for (let y = 0; y < navigation[i]._children.length; y++) {
        if(navigation[i]._children[y].to){
         temp.push({"url": "#" + navigation[i]._children[y].to, "isHidden": navigation[i].hidden})
        }
      }
    }
  }
  // console.log(navigation)
  // console.log(temp)
  localStorage.setItem('url', JSON.stringify(temp))

  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <NavLink style={{ fontSize: 20 }} href="/" className="nav-link" activeStyle={{ textDecoration: 'underline' }}>
          <img src={logoMainnet} width="110" height="auto" alt="HB Analytics Logo" className="navbar-brand-full" /></NavLink>
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
