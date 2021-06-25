import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppSidebarToggler } from '@coreui/react';
import logoMainnet from '../../assets/img/logo-main.png'
import logoTestnet from '../../assets/img/logo-test.png'

const logo = process.env.REACT_APP_ENV === 'dev' ? logoTestnet : logoMainnet
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
          <NavLink href="/" className="navbar-brand"><img src={logo} width="25" height="auto" alt="HB Analytics Logo" className="navbar-brand-full"/> Beas</NavLink>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="#/logout">Logout</NavLink>
          </NavItem>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
