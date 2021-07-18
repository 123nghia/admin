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
    await this.getCompanyData();
  }

  async getCompanyData() {
    const resCom = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_FEATURE,
      method: 'POST'
    });
    this.setState({ array_feature: resCom.data.data })
  }

  render() {
    const { array_feature, company_slug } = this.state;

    return (
      <div>
        <div class="title" className="h3" style={{ alignSelf: 'center' }}>
          DANH SÁCH QUẢN LÝ TÍNH NĂNG
        </div>
        <CRow>
          {
            array_feature != undefined ?
              array_feature.map((item, i) => {
                return (
                  <CCol lg="3" sm="12" xm="12">
                    <NavLink target='_blank' style={{ pointer: 'cursor' }} onClick={() => { window.location.href = item.Value + company_slug }}>
                      <div style={styles.feature}>
                        <div style={{ height: '200px', width: '100%', 'marginTop': '24px' }}>
                          <img width="80" height="80" src="https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg" />
                        </div>
                        <div className="feature__body">
                          <div className="feature__title h4" style={{ marginBottom: 50 }}>{item.Key}</div>
                          <p className="feature__desc">
                            Nhấp vào đây để chuyển hướng đến
                            {item.Value + JSON.parse(user).username + "/" + md5(JSON.parse(user).password)}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </CCol>
                );
              }) : ""
          }
        </CRow>
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
