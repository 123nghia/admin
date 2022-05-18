import React, { Component } from "react";
import { Button, Col, Row } from "reactstrap";
import validateInput from "../../../shared/validations/login";
import axios from "axios";
import jwt from "jsonwebtoken";
import Constants from "./../../../contants/contants";
import Logo from "./../../../../src/assets/img/logo_head.png";
import md5 from "md5";

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import $ from "jquery";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
      isLoading: false,
    };
    localStorage.removeItem("auth");
    if (this.props.location.pathname === "/logout") {
      window.location.href = "#/login";
    }
  }
  async componentDidMount() {
    await this.getDataConfigWeb();
  }
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  async getDataConfigWeb() {
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/getAll";
   
    await axios
      .get(url, {
        params: {
          key: "webinfo_admin",
          company_id: "-1",
        },
      })
      .then((res) => {
  
        if (res.data.data.length > 0) {
          let dataConfig = res.data.data[0];
  
          let valueConfig = JSON.parse(dataConfig.Value);
          console.log(valueConfig);
          this.setState({
            logoAdmin : valueConfig.value.logos.webAdmin.logo
          })
          
        }})}
  async onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      const res = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.PLUGIN_LOGIN_ADMIN,
        method: "POST",
        data: {
          username: this.state.username,
          password: md5(this.state.password),
        },
      });

      console.log(res.data);

      if (res.data.is_success) {
        var token = jwt.decode(res.data.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            typePartner : token.typePartner,
            username: this.state.username,
            password: this.state.password,
            company_id: res.data.data.data.Company_Id,
            sale_id: res.data.data.data._id,
          })
        );
        localStorage.setItem("auth", "abv");
        localStorage.setItem("role", token.role);
        localStorage.setItem("type", token.type);
        sessionStorage.setItem("type", token.type);

        localStorage.setItem("token", res.data.data.token);
        
        const { action } = this.props;
       

        // changeTypeUser(token.type);
       
        if (token.type == "0" || token.type == "1") {
          localStorage.setItem("isAD", "0");
          this.props.history.push("/list_order");
        } else {
          localStorage.setItem("isAD", "1");
          this.props.history.push("/profile");
        }
        window.location.reload();
      } else {
        console.log(this.state.username);
        console.log(this.state.password);
        this.setState({
          isLoading: false,
          errors: { common: "Tên đăng nhập hoặc mật khẩu không chính xác" },
        });
      }
    }
  }
  onChange(e, name) {
    this.setState({ [name]: e.target.value });
  }
  ChangeTypeInput(status){
    if(status){
      $("#password").attr('type', 'text');
      $(".login-eye-hide").css("display","block");
      $(".login-eye-show").css("display","none");

    }else{
      $("#password").attr('type', 'password');
      $(".login-eye-hide").css("display","none");
      $(".login-eye-show").css("display","block");
    }
  }
  render() {
    const { errors, isLoading } = this.state;
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="4">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody style={{overflow: 'hidden'}}>
                    <form onSubmit={async (e) => await this.onSubmit(e)}>
                      <div class="text-center">
                        <img
                          style={{ alignSelf: "center" }}
                          height="72px"
                          width="auto"
                          src={this.state.logoAdmin}
                        />
                      </div>
                      <div class="text-center mt-3">
                      <h1 class="login-title">Đăng nhập</h1>

                      </div>
                      <span style={{ color: "red" }} className="error">
                        {errors.common}
                      </span>
                      <label className="login-label">Tài khoản</label>
                      <CInputGroup className="mb-3 login-input" >
                        
                      
                        <CInput
                        className="login-input"
                          type="text"
                          placeholder="Tên đăng nhập"
                          name="username"
                          onChange={(e) => this.onChange(e, "username")}
                          autoComplete="name"
                        />
                      </CInputGroup>
                      <label className="login-label">Mật khẩu</label>

                      <CInputGroup className="login-input relative" >
                       
                        <CInput
                        className="login-input"
                          id="password"
                          type="password"
                          placeholder="Mật khẩu"
                          onChange={(e) => this.onChange(e, "password")}
                        />
                        <div className="login-eye">
                        <svg onClick={()=>this.ChangeTypeInput(true)} className="login-eye-show" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                      </svg>
                      <svg onClick={()=>this.ChangeTypeInput(false)}  className="login-eye-hide" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
</svg>
                        </div>
                      </CInputGroup>

                      <Row>
                        <Col xs="6" lg="6" sm="6">
                         
                        </Col>
                        <CCol xs="6" lg="6" sm="6" className="text-right">
                          <CButton
                            color="link"
                            className="px-0"
                            onClick={() => {
                              window.location.href = "#/change_password";
                            }}
                          >
                            Quên mật khẩu?
                          </CButton>
                        </CCol>
                      </Row>
                    
                      <CButton
                        type="submit"
                      color="info"
                            size="lg"
                            className=" w-100 mt-3 btn-main"
                            disabled={isLoading}
                          >
                            <p style={{ margin: "auto" }}>Đăng nhập</p>
                            
                          </CButton>
                         
                     
                    </form>
                  </CCardBody>
                </CCard>
                {/* <CCard className="bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                
                  <CCardBody className="text-center">
                    <div>
                      <h2>Đăng ký</h2>
                      <p>Bạn muốn tạo tài khoản để sử dụng dịch vụ của TiKiTech. Hãy tham gia cùng chúng tôi ngay bên dưới.</p>
                      <a href="https://applamdep.com/" target="_blank">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Đăng ký ngay</CButton>
                      </a>
                    </div>
                  </CCardBody>
                </CCard> */}
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
