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
import logoMainnet from './../assets/img/logo-test.png';
import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const auth = localStorage.getItem('role');


  for(let i = 0; i < navigation.length; i++){
    if(navigation[i]._children != undefined){
      if(navigation[i]._children.length > 1){
        var arr = navigation[i]._children;
        for(let y = 0; y < arr.length; y++){
          if(arr[y].role.includes(auth)){
            arr[y].hidden = false;
          } else {
            arr[y].hidden = true;
          }
        }
      }
    }
  }
  var temp = navigation[4]._children.concat(navigation[6]._children.concat(navigation[8]._children));

  localStorage.setItem('url', JSON.stringify(temp))

  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
      <NavLink style={{ fontSize: 20 }} href="/" className="nav-link" activeStyle={{textDecoration:'underline'}}><img src={logoMainnet} width="40" height="auto" alt="HB Analytics Logo" className="navbar-brand-full"/> Beas</NavLink>
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
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
