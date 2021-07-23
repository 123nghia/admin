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
import { Nav, NavItem, NavLink } from 'reactstrap';
import ReactTooltip from 'react-tooltip';
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: '',
      company_slug: '',
      package_name: '',
      package_time: '',
      package_unit: '',
      array_feature: [],
      company_id: localStorage.getItem('user'),
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      isLoading: false
    };
  }

  async componentWillMount() {
    await this.getCompanyData();
    await this.getPackageData();
  }

  async getCompanyData() {

    const resCom = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_DATA_COMPANY,
      method: 'POST',
      data: {
        company_id: JSON.parse(this.state.company_id).company_id
      }
    });
    console.log(JSON.parse(this.state.company_id))
    this.setState({ company_name: resCom.data.data.Name, company_slug: resCom.data.data.Slug, })
  }

  async getPackageData() {
    this.setState({ isLoading: true })
    const resPackage = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_PLUGIN_ORDER_BY_ID,
      method: 'POST',
      headers: this.state.token
    });
    let val = resPackage.data.data.result;
    let arrTemp = [];
    let arrCheckID = [];
    for (let i = 0; i < val.length; i++) {
      let arrFeat = val[i].Array_Feature;
      for (let y = 0; y < arrFeat.length; y++) {
        if (arrCheckID.includes(arrFeat[y]._id) == false) {
          arrTemp.push(arrFeat[y]);
        }
        arrCheckID.push(arrFeat[y]._id)
      }
    }

    this.setState({ array_feature: val.length > 0 ? arrTemp : [], isLoading: false })
    // return resPackage.data.data.Name;
  }

  render() {
    const { array_feature, company_slug } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="container">
          <div class="title" className="h3" style={{ alignSelf: 'center' }}>
            Danh sách quản lý các tính năng Admin
          </div>
          <CRow>
            {
              array_feature != undefined ?
                array_feature.map((item, i) => {
                  if (item.Type == "0") {
                    return (
                      <CCol lg="3" sm="12" xm="12">
                        <a data-tip={`${item.Value + company_slug}`} style={{ cursor: "pointer", margin: 5 }} href={item.Value + "#" + "/" + company_slug} target="_blank">
                          <div style={styles.feature}>
                            <div style={{ height: '200px', width: '100%', 'marginTop': '24px' }}>
                              <img width="80" height="80" src={item.Image} />
                            </div>
                            <div className="feature__body">
                              <center>
                                <div style={{ width: '80%', height: 50, alignItems: 'center', fontSize: 17, fontWeight: 'bold' }}>{item.Key}</div>

                                <div style={{ width: '80', height: 70, fontSize: 12 }}>
                                  Nhấp vào đây để chuyển hướng đến {item.Value + company_slug}
                                </div>
                              </center>
                            </div>
                          </div>
                        </a>
                        <ReactTooltip />
                      </CCol>
                    );
                  }
                }) : ""
            }
          </CRow>
          {
            array_feature == undefined || array_feature.length == 0 ?
              <div>Bạn chưa có bất kì tính năng nào !!! Vui lòng liên hệ admin !!!</div> : ""
          }
        </div>
      )
    }

    return (
      <div className="sweet-loading">
        <DotLoader css={override} size={50} color={"#123abc"} loading={this.state.isLoading} speedMultiplier={1.5} />
      </div>
    );
  }
}


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const styles = {
  feature: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '85%',
    height: 280,
    color: '#fff',
    padding: '10px',
    border: '1px',
    background: '#FF4F23',
    borderRadius: '10px',
    borderRadius: '10px'

  }
}

export default Company
