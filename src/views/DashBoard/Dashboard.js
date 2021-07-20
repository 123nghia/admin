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
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import Constants from "./../../contants/contants";
import MainChartExample from '../charts/MainChartExample.js'
import ShopManager from './ShopManager'
import SaleManager from './SaleManager'
import Company from './Company'
import Admin from './Admin'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: localStorage.getItem('type')
    };
  }
  render() {
    return (
      <div>
        {
          this.state.type == '0' || this.state.type == '1' ? <Admin /> : <Company />
        }
      </div>
    )
  }
}

export default Dashboard
