import React, { lazy, Component } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CForm,
  CFormGroup,
  CLabel,
  CSelect, CCardGroup
} from '@coreui/react'

import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'

import { DocsLink } from 'src/reusable'

import {
  Button
} from 'reactstrap';
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import Constants from "./../../contants/contants";
import MainChartExample from '../charts/MainChartExample.js'
import md5 from 'md5'
import { Nav, NavItem, NavLink } from 'reactstrap';
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
let headers = new Headers();
const auth = localStorage.getItem('auth');
const user = localStorage.getItem('user');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: '',
      company_slug: '',
      package_name: '',
      package_time: '',
      package_unit: '',
      array_feature: []
    };
  }

  async componentDidMount() {
    window.location.href = '#/list_order'
  }

  render() {
    const { array_feature, company_slug } = this.state;

    return (
      <div>

      </div>
    )
  }
}

const styles = {
  feature: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: 280,
    color: '#fff',
    padding: '10px',
    background: '#123254',
    borderRadius: '10px',
    borderRadius: '10px'

  }
}

export default Admin
