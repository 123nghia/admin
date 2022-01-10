import React, { Component } from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import {
  CLabel,
  CRow,
  CCol,
  CButton,
  CTooltip,
  CTextarea,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import 'moment-timezone';
import "react-datepicker/dist/react-datepicker.css";
import Constants from "./../../contants/contants";
import axios from 'axios'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import logoMainnet from '../../assets/img/logo_head.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
let headers = new Headers();
const auth = localStorage.getItem('auth');

headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class Users extends Component {
  constructor(props) {

    super(props);
    this.state = {
      data: [],
      updated: '',
      dataApi: [],
      delete: null,
      hidden: true,
      token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      role: localStorage.getItem('role'),
      type: localStorage.getItem('type'),
      company_id: localStorage.getItem('user'),
      current_slug: '',
      companyID: '',
      arrTotalPackage: [],
      isChange: true,
      isChangeSlug: true,
      currentPassword: '',
      isLoading: false,
      isDisable: true,
      Email: "",
      sub2_mainColor: "",
      button_color: "",
      sucess_color: "",
      error_color:"",
      text_mainColor: "",
      valueTab : 0,
      Name: "",
      Phone: "",
      Address: "",
      UserName: "",
      Message_Code: "",
      sub_mainColor: "",
      tvTq : [
        {
          title : "Bảo vệ và chăm sóc",
          content : "Trang bị kem chống nắng ít nhất là SPF 35 hoặc cao hơn. Hãy đội mũ trở thành một phần của quần áo và đồ thể thao hàng ngày của bạn, đồng thời đeo kính râm để chống lại tia UV. Chúng ta có thể giúp chống lại và thậm chí sửa chữa những tổn thương da hàng ngày bằng cách thoa một loại huyết thanh chống oxy hóa như vitamin C.",
          img : "https://pensilia.applamdep.com/images/tvtq2.png"
        },
        {
          title : "Thói quen tốt",
          content : "Thực hiện các lựa chọn lối sống lành mạnh, khi có thể Ăn một chế độ ăn uống lành mạnh Giảm lượng đường Giữ đủ nước Giảm uống rượu Đừng hút thuốc Tập thể dục Nghỉ ngơi Giảm căng thẳng",
          img : "https://pensilia.applamdep.com/images/tvtq2.png"
        },
      ],
      kqTq : [
        {
          title : "Nguyên nhân Mụn đầu đen",
          content : "Mụn đầu đen xảy ra khi lỗ chân lông bị tắc do sự kết hợp của bã nhờn và tế bào da chết. Phần trên cùng của lỗ chân lông vẫn mở, mặc dù phần còn lại của nó bị tắc nghẽn. Điều này dẫn đến màu đen đặc trưng nhìn thấy trên bề mặt.",
          img : "https://pensilia.applamdep.com/images/klct1.png"
        },
        {
          title : "Nguyên nhân mụn viêm",
          content : "Mặc dù bã nhờn và tế bào da chết góp phần gây ra mụn viêm, vi khuẩn cũng có thể đóng một vai trò trong việc làm tắc nghẽn lỗ chân lông. Vi khuẩn có thể gây nhiễm trùng sâu bên dưới bề mặt da. Điều này có thể dẫn đến những nốt mụn sưng tấy và khó loại bỏ.",
          img : "https://pensilia.applamdep.com/images/klct2.png"
        },
      ]
    };
  }


  changeConfigWeb(id){
   
      var i,tabcontent, tablinks
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
       
        if(i === id){
          tabcontent[i].classList.add("defaultOpen");
          tabcontent[i].style.animation = "hideOpa 1s ease-in-out";

          
        }else{
          tabcontent[i].classList.remove("defaultOpen")
          tabcontent[i].style.animation = "none";

        }

      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        if(i === id){
          tablinks[i].classList.add("active")

        } else{
          tablinks[i].classList.remove("defaultOpen")
          tablinks[i].classList.remove("active")


        }
        
      }

  }
 
  async componentDidMount() {
  
  
    this.getData();

    let arr = JSON.parse(localStorage.getItem('url'));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to == window.location.hash) {
        if (arr[i].hidden == true) {
          window.location.href = '#/'
        }
      }
    }
  }

  getData = async () => {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.CONFIG_THEME_GET+"/"+"61ce79c4d19f5244aa161b36",
      method: 'GET',
      headers: this.state.token
    });
    let val = res.data.data
   ;


    this.setState({
      dataApi: val, data: val, currentPassword: val.Password,
      isLoading: false,
      current_slug: val.Company_Id == null || val.Company_Id == undefined ? null : val.Company_Id.Slug,
      companyID: val.Company_Id == null || val.Company_Id == undefined ? null : val.Company_Id._id,

      mainColor: val.mainColor,
      sub_mainColor: val.sub_mainColor,
      Phone: val.Phone,
      Address: val.Address,
      UserName: val.UserName,
      Message_Code: val.Message_Code,
      sub2_mainColor: val.sub2_mainColor,
      button_color: val.button_color,
      sucess_color: val.sucess_color,
      error_color:val.error_color,
      text_mainColor: val.text_mainColor,
      isDisable: true
    });
  }

  onChange(key, val) {
    this.setState({ [key]: val })
  }

  openUpdate(name_link) {
    this.setState({
      [name_link]: !this.state[name_link]
    });
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
    return resPackage.data.data;
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async updatePassword(id, password) {
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_UPDATE_PASSWORD,
      method: 'POST',
      data: {
        id: id,
        new_password: password
      }
    });

    if (res.data.is_success == true) {
      this.getData();
      this.setState({ isChange: true });
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }
  }

  async updateSlug() {
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_SLUG,
      method: 'POST',
      data: {
        id: this.state.companyID,
        Slug: this.state.current_slug,
      }
    });

    if (res.data.is_success == true) {
      this.getData();
      this.setState({ isChangeSlug: true });
    } else {
      alert(res.data.message);
      this.setState({ isChangeSlug: false });
    }
  }
  handleChangeTab(e,value){
    this.setState({ valueTab : value });
  }
 
  renderKQ(products){
    if(products){
      let x = products.map((item,i) => {
        return (
                  <tbody>
                    <td
                      colSpan="10"
                      hidden={this.state.hidden}
                      className="text-center"
                    >
                      Không tìm thấy dữ liệu
                    </td>
                                     
                            <tr key={i}>
                              <td className="text-center">
                                {i + 1}
                              </td>
                              <td className="text-center">
                                {item.title}
                                 
                              </td>
                              {/* <td className="text-center">{item.name}</td> */}
                              <td className="text-center">
                               
                                  <img
                                    src={item.img}
                                    width={"60px"}
                                    height={"60px"}
                                    alt=""
                                  />
                              
                                
                              </td>
  
                              <td className="text-center">
                              <textarea     class="mt-3 content_kqtq" cols='60' rows='8'>
  {item.content}
    </textarea>
                              </td>
                             
                              <td className="">
                              <CButton
                                  outline
                                  color="success"
                                  size="sm"
                                  onClick={() => this.openFormEdit(item)}
                                >
                                  {/* <CIcon name="cilTrash" /> */}
                                  Chỉnh sửa
                                </CButton>{" "}
                                <CButton
                                  style={styles.mgl5}
                                  outline
                                  color="danger"
                                  size="sm"
                                  onClick={() =>
                                     this.removeItem(item._id, item.GroupProduct)
                                  }
                                >
                                  {/* <CIcon name="cilPencil" /> */}
                                 Xóa
                                </CButton>
                               
                              </td>
                            </tr>
                  </tbody>         
                          
                )
      })         
      let render = (
   <div>
          <div class="flex-center">
              <CButton
                                  style={styles.mgl5}
                                  outline
                                  color="primary"
                                  size="md"
                                 
                                >
                                  {/* <CIcon name="cilPencil" /> */}
                                 Thêm mới
                                </CButton>
              </div>
                <table
                  ble
                  className="table table-hover mt-3 table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">STT.</th>
                      {/* <th className="text-center">Tên</th> */}
                      <th className="text-center">Tiêu đề</th>
                      <th className="text-center">Ảnh</th>
  
                      <th className="text-center">Chi tiết</th>
                   
                      <th className="text-center">#</th>
                    </tr>
                  </thead>
                    {x}
                  </table>
                  </div>
              
      
      )
      return render
    } 
  }
   
  async updateCompany() {
    const {
            mainColor, sub_mainColor, button_color,
            sucess_color,error_color,
            text_mainColor,Phone,
            sub2_mainColor,  Address, UserName, data, Message_Code
          
          } = this.state
  
    if (mainColor == null || mainColor == '') {
      alert("Vui lòng nhập đầy đủ trường !!!");
      return
    }

    const body = {
      isHash: false,
      sub_mainColor: sub_mainColor,
      mainColor:  mainColor,
      sub2_mainColor: sub2_mainColor,
      company_id: "61ce79c4d19f5244aa161b36",
      button_color: button_color,
      sucess_color: sucess_color,
      error_color: error_color,
      text_mainColor: text_mainColor
    }
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.CONFIG_THEME_UPDATE,
      method: 'POST',
      data: body
    });

    if (res.data.is_success == true) {
      this.getData();
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }
  }
  render() {
    const { 
      tvTq, kqTq,
      data, current_slug, isChange,error_color, sucess_color,button_color , sub2_mainColor, currentPassword, isChangeSlug, type, isDisable,
      sub_mainColor, mainColor, Phone, Address, UserName, Message_Code,text_mainColor } = this.state;

    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
         <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={this.state.valueTab} onChange={(e,value) =>{this.handleChangeTab(e,value)}} aria-label="basic tabs example">
          <Tab label="TƯ VẤN TỔNG QUAN" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
          <Tab label="KẾT QUẢ TỔNG QUAN" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
        </Tabs>
      </Box>
      <TabPanel value={this.state.valueTab} index={0}>
      <div class="mt-5">
     {this.renderKQ(tvTq)}
     
    </div>
      </TabPanel>
      <TabPanel value={this.state.valueTab} index={1}>
      <div class="mt-5">
     {this.renderKQ(kqTq)}
     
    </div>
      </TabPanel>
    </Box>

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
  datePicker: {
    marginBottom: 20
  },
  wa10: {
    width: "5%",
    float: "left",
    height: "80px"
  },
  pagination: {
    marginRight: '5px'
  },
  flexLabel: {
    width: 100
  },
  flexOption: {
    width: 200,
    margin: '1px'
  },
  a: {
    textDecoration: 'none'
  },
  floatRight: {
    float: "right",
    marginTop: '3px'
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
    width: "10%",
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
    float: "right",
    marginRight: "5px"
  },
  searchInput: {
    width: '100%',
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
}

export default Users;
