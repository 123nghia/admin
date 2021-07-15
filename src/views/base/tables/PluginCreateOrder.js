import React, { Component } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import Moment from 'react-moment';
import 'moment-timezone';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table, Button, Input,
  ModalHeader, ModalBody, ModalFooter, Modal,
  Alert
} from 'reactstrap';
import Select from 'react-select'
import {
  CBadge,
  CRow,
  CCol,
  CSelect,
  CInput
} from '@coreui/react'

import 'moment-timezone';
import Constants from "../../../contants/contants";
import TextFieldGroup from "../../Common/TextFieldGroup";
import axios from 'axios'
import md5 from "md5";
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class PluginCreateOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      Company_Id: '',
      Package_Id: '',
      Feature_Id: '',
      arrayFeature: [],
      arrayChooseFeature: [],
      activePage: 1,
      page: 1,
      itemsCount: 0,
      limit: 20,
      totalActive: 0,
      modalCom: false,
      updated: '',
      dataApi: [],
      action: 'new',
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      dataCompany: [],
      currentCompany: '',
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      company_id: localStorage.getItem('user'),
      dataPackage: [],
      dataFeature: [],
      company_name: '',
      package_name: '',
      package_time: '',
      package_key: '',
      package_unit: '',
      arrFeature: [],
    };
  }

  async componentDidMount() {
    this.getCompanyData();
    this.getPackageData();
    this.getFeatureData();
    let arr = JSON.parse(localStorage.getItem('url'));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to == window.location.hash) {
        if (arr[i].hidden == true) {
          window.location.href = '#/'
        }
      }
    }

  }

  async getCompanyData() {
    const resCompany = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_LIST_COMPANY,
      method: 'POST',
    });

    this.setState({ dataCompany: resCompany.data.data });
  }

  getCompanyName = async (company_id) => {
    const resCom = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_DATA_COMPANY,
      method: 'POST',
      data: {
        company_id: company_id
      }
    });
    this.setState({ company_name: resCom.data.data.Name })
    return resCom.data.data.Name;
  }

  getPackageName = async (package_id) => {
    const resPackage = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_DATA_PACKAGE,
      method: 'POST',
      data: {
        package_id: package_id
      }
    });
    this.setState({ package_name: resPackage.data.data.Name,
      package_time: resPackage.data.data.Value + " " + this.convertUnitToDate(resPackage.data.data.Unit),
      package_key: resPackage.data.data.Value, package_unit: resPackage.data.data.Unit})
    return resPackage.data.data.Name;
  }

  getFeatureChoose = async (feature) => {
    const resPackage = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.DATA_CHOOSE_FEATURE,
      method: 'POST',
      data: {
        feature: feature.length == 0 ? JSON.parse(localStorage.getItem('arrFeature')) : feature
      }
    });
    this.setState({ arrFeature: resPackage.data.data })
    return resPackage.data.data;
  }

  async getPackageData() {
    const resPackage = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_PACKAGE,
      method: 'POST',
    });

    this.setState({ dataPackage: resPackage.data.data });
  }

  async getPackage_forFeature() {
    const resPackage = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_PACKAGE,
      method: 'POST',
    });

    return resPackage.data.data;
  }

  async getFeatureData() {
    const resFeature = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_FEATURE,
      method: 'POST',
    });

    this.setState({ dataFeature: resFeature.data.data });
  }

  async toggleModal(key) {

  }

  getBadge(status) {
    switch (status) {
      case 'INSTOCK': return 'success'
      case 'AVAILABLE': return 'secondary'
      case 'Locked': return 'warning'
      case 'Deactived': return 'danger'
      default: return 'primary'
    }
  }

  convertUnitToDate(unit){
    switch (unit) {
      case '0': return 'Ngày'
      case '1': return 'Tháng'
      case '2': return 'Năm'
    }
  }

  renderSelect() {
    const { dataFeature, dataPackage, Package_Id } = this.state;
    var arrChoose = new Array();
    let arrTemp = [];
    let arrFeature = [];
    let arrSetDefault = [];
    for (let i = 0; i < dataPackage.length; i++) {
      if(dataPackage[i]._id == Package_Id && dataPackage[i].Status == "1"){
        for (let y = 0; y < dataPackage[i].Array_Feature.length; y++) {
          arrFeature.push({ name: dataPackage[i].Array_Feature[y].Key, id: dataPackage[i].Array_Feature[y]._id });
          arrSetDefault.push(dataPackage[i].Array_Feature[y]._id)
        }
      }
    }

    localStorage.setItem('arrFeature', JSON.stringify(arrSetDefault));
    //Đang lấy đúng config của multiselect để đổ dữ liệu vào cho multi select
    for (let i = 0; i < dataFeature.length; i++) {
      if(dataFeature[i].Type == "1"){
        arrTemp.push({ name: dataFeature[i].Key, id: dataFeature[i]._id })
      }
    }
    return (
      <Multiselect
        options={arrTemp}
        selectedValues={arrFeature}
        onSelect={async (e) => {
          arrChoose = new Array();
          for (let i = 0; i < e.length; i++) {
            arrChoose.push(e[i].id);
          }
          this.setState({ arrayChooseFeature: arrChoose });
        }}
        onRemove={async (e) => {
          arrChoose = new Array();
          for (let i = 0; i < e.length; i++) {
            arrChoose.push(e[i].id);
          }
          this.setState({ arrayChooseFeature: arrChoose });
        }}
        displayValue="name"
      />
    )
  }

  async addOrderPlugin() {
    const {Company_Id, Package_Id, arrFeature} = this.state;
    var body = {
      Company_Id: Company_Id,
      Package_Id: Package_Id,
      Array_Feature: arrFeature
    }

    const resOrder = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.ADD_PLUGIN_ORDER,
      method: 'PUT',
      data: body
    });

    if (resOrder.data.is_success == true) {
      alert(resOrder.data.message);
      window.location.reload();
    } else {
      alert(resOrder.data.message);
    }
  }

  renderTable(arrFeature, company_name, package_name, package_time) {
    return (
      <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th className="text-center">No.</th>
            <th className="text-center">Tên công ty</th>
            <th className="text-center">Tên gói</th>
            <th className="text-center">Thời hạn</th>
            <th className="text-center">Tên tính năng</th>
            <th className="text-center">Đường dẫn</th>
          </tr>
        </thead>
        <tbody>
          <td colSpan="10" hidden={true} className="text-center">Không tìm thấy dữ liệu</td>
          {
            arrFeature != undefined || arrFeature.length != 0 || arrFeature != null ?
              arrFeature.map((item, i) => {
                return (
                  <tr key={i}>
                    <td className="text-center">{i + 1}</td>
                    <td className="text-center">{company_name}</td>
                    <td className="text-center">{package_name}</td>
                    <td className="text-center">{package_time}</td>
                    <td className="text-center">{item.Key}</td>
                    <td className="text-center">{item.Value}</td>
                  </tr>
                );
              }) : ""
          }
        </tbody>
      </table>
    )
  }

  render() {
    const { dataCompany, dataPackage, Company_Id, Package_Id, arrayChooseFeature,
            company_name, package_name, package_time, arrFeature, company_id, package_id, package_key,
            package_unit } = this.state;
    const arrT = [];
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Quản lý đơn hàng
          </CardHeader>
          <CardBody>
            <div style={styles.tags}>
              <CRow>
                <CCol sm="12" lg="12">
                  <div>
                    <label style={styles.flexLabel} htmlFor="tag">Chọn công ty:    </label>
                    <CSelect style={styles.flexOption} onChange={async e => { this.setState({ Company_Id: e.target.value }); await this.getCompanyName(e.target.value) }}>
                      <option value={this.state.Company_Id}>-----</option>
                      {
                        dataCompany.map((item, i) => {
                          return (
                            <option value={item._id}>{item.Name}</option>
                          );
                        })
                      }
                    </CSelect>
                  </div>
                </CCol>

                <CCol sm="12" lg="12">
                  <div>
                    <label style={styles.flexLabel} htmlFor="tag">Chọn gói sản phẩm:    </label>
                    <CSelect style={styles.flexOption} onChange={async e => { this.setState({ Package_Id: e.target.value }); await this.getPackageName(e.target.value) }}>
                      <option value={this.state.Package_Id}>-----</option>
                      {
                        dataPackage.map((item, i) => {
                          return (
                            <option value={item._id}>{`${item.Name} (${item.Value} ${this.convertUnitToDate(item.Unit)})`}</option>
                          );
                        })
                      }
                    </CSelect>
                  </div>
                </CCol>

                <CCol sm="12" lg="12">
                  <label style={styles.flexLabel} htmlFor="tag">Chọn các tính năng cho gói:    </label>
                  {
                    this.renderSelect()
                  }
                </CCol>

                <CCol sm="12" lg="12">
                  <label style={{ marginTop: 10 }} htmlFor="tag">Số lượng tính năng: {this.state.arrayChooseFeature.length == 0 ? JSON.parse(localStorage.getItem('arrFeature')).length : this.state.arrayChooseFeature.length}    </label>
                </CCol>

                <CCol sm="12" lg="12">
                  <CRow>
                    <CCol sm="12" lg="6">
                    </CCol>
                    <CCol sm="12" lg="6">
                      <Button outline color="primary" style={styles.floatRight} size="sm" onClick={async e => {
                        // await this.onNext(Company_Id, Package_Id, arrayChooseFeature);
                        await this.getCompanyName(Company_Id)
                        await this.getPackageName(Package_Id)
                        await this.getFeatureChoose(arrayChooseFeature);
                      }}>Tiếp tục</Button>
                    </CCol>
                  </CRow>
                </CCol>
                {  arrFeature.length != 0 ?
                  <CCol sm="12" lg="12">
                    <CRow>
                      <CCol sm="12" lg="12">
                        KIỂM TRA LẠI ĐƠN HÀNG TRƯỚC KHI XÁC NHẬN
                      </CCol>
                      <CCol sm="12" lg="12">
                        Tên Công Ty: {company_name}
                      </CCol>
                      <CCol sm="12" lg="12">
                        Tên Công Ty: {company_name}
                      </CCol>
                      <CCol sm="12" lg="12">
                        Thời gian kích hoạt dự kiến: {(new Date(Date.now())).toLocaleDateString()}
                      </CCol>
                      <CCol sm="12" lg="12">
                        Thời gian hết hạn dự kiến: {package_time} bắt đầu từ ngày kích hoạt dự kiến,
                        {/* { package_unit == '0' ? (new Date(new Date().getTime() + (86400000 * Number(package_key))).toLocaleDateString())
                        : package_unit == '1' ? (new Date().getMonth()) : ""} */}
                      </CCol>

                      <CCol sm="12" lg="12">
                        {
                          this.renderTable(arrFeature, company_name, package_name, package_time)
                        }
                      </CCol>
                      <CCol sm="12" lg="12">
                        <Button outline color="primary" style={styles.floatRight} size="sm" onClick={async e => {
                          await this.addOrderPlugin();
                        }}>Kết thúc</Button>
                      </CCol>
                    </CRow>
                  </CCol> : ""
                }
              </CRow>
            </div>
          </CardBody>
        </Card>

        <Modal isOpen={this.state.modalCom} >
          <ModalHeader>Danh sách phần cứng</ModalHeader>

          <ModalBody>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={e => { this.setState({ arrHardWard: this.state.arrChooseHard }); }}>Save</Button>{' '}
            <Button color="secondary" onClick={e => this.toggleModal("new")}>Close</Button>
          </ModalFooter>
        </Modal>
      </div >

    )

  }
}

const styles = {
  pagination: {
    marginRight: '5px'
  },
  flexLabel: {
    width: '100%',
    marginTop: 6
  },
  flexOption: {
    width: '100%',
    margin: '1px'
  },
  a: {
    textDecoration: 'none'
  },
  floatRight: {
    float: 'right',
    margin: '5px'
  },
  spinner: {
    width: "30px"
  },
  center: {
    textAlign: "center"
  },
  tbody: {
    height: "380px",
    overflowY: "auto"
  },
  wh12: {
    width: "8%",
    float: "left",
    height: "80px"
  },
  wh15: {
    width: "15%",
    float: "left",
    height: "80px"
  },
  w5: {
    width: "12%",
    float: "left",
    height: "80px"
  },
  wa10: {
    width: "5%",
    float: "left",
    height: "80px"
  },
  row: {
    float: "left",
    width: "100%"
  },
  success: {
    color: 'green'
  },
  danger: {
    color: 'red'
  },
  mgl5: {
    marginLeft: '5px'
  },
  tags: {
    padding: 10,
  },
  searchInput: {
    width: "160px",
    display: 'inline-block',
    margin: '1px'
  },
  userActive: {
    color: 'green'
  },
  userPending: {
    color: 'red'
  },
  nagemonNameCol: {
    width: '328px'
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '99999px'
  },
  mgl5: {
    marginBottom: '5px'
  }
}

export default PluginCreateOrder;
