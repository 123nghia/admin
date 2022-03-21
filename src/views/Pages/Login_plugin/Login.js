import React, { Component } from "react";
import { Button, Col, Row } from "reactstrap";
import validateInput from "../../../shared/validations/login";
import axios from "axios";
import jwt from "jsonwebtoken";
import Constants from "./../../../contants/contants";
import Logo from "./../../../../src/assets/img/logo_head.png";
import md5 from "md5";
import * as actions from "../../../redux/reducersForder/account";
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
        const { changeTypeUser } = action;

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
  render() {
    const { errors, isLoading } = this.state;
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="5">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <form onSubmit={async (e) => await this.onSubmit(e)}>
                      <div class="text-center">
                        <img
                          style={{ alignSelf: "center" }}
                          height="40px"
                          width="auto"
                          src={this.state.logoAdmin}
                        />
                      </div>
                      <h1>Đăng nhập</h1>
                      <span style={{ color: "red" }} className="error">
                        {errors.common}
                      </span>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          placeholder="Tên đăng nhập"
                          name="username"
                          onChange={(e) => this.onChange(e, "username")}
                          autoComplete="name"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="password"
                          placeholder="Mật khẩu"
                          onChange={(e) => this.onChange(e, "password")}
                        />
                      </CInputGroup>

                      <Row>
                        <Col xs="6" lg="6" sm="6">
                          <Button
                            color="primary"
                            className="px-4"
                            disabled={isLoading}
                          >
                            Đăng nhập
                          </Button>
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
    action: bindActionCreators(actions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
