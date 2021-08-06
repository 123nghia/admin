import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import validateInput from '../../../shared/validations/login';
import axios from 'axios'
import jwt from 'jsonwebtoken'
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
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    }
    localStorage.removeItem('auth');
    if (this.props.location.pathname === '/logout') {
      window.location.href = '#/login';
    }
  }
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  async onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      const res = await axios({
        baseURL: Constants.BASE_URL,
        url: Constants.PLUGIN_LOGIN_ADMIN,
        method: 'POST',
        data: {
          username: this.state.username,
          password: md5(this.state.password)
        }
      });

      if (res.data.is_success) {
        var token = jwt.decode(res.data.data.token);
        localStorage.setItem('user', JSON.stringify({
          username: this.state.username,
          password: this.state.password, company_id: res.data.data.data.Company_Id, sale_id: res.data.data.data._id
        }));
        localStorage.setItem('auth', 'abv');
        localStorage.setItem('role', token.role);
        localStorage.setItem('type', token.type);
        localStorage.setItem('token', res.data.data.token);

        if (token.type == '0' || token.type == '1') {
          localStorage.setItem('isAD', "0");
          this.props.history.push('/list_order')
        } else {
          localStorage.setItem('isAD', "1");
          this.props.history.push('/profile')
        }
      } else {
        console.log(this.state.username)
        console.log(this.state.password)
        this.setState({ isLoading: false, errors: { common: 'Tên đăng nhập hoặc mật khẩu không chính xác' } });
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
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <form onSubmit={async e => await this.onSubmit(e)}>
                      <h1>Đăng nhập</h1>
                      <span style={{ color: 'red' }} className="error">{errors.common}</span>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Tên đăng nhập" autoComplete onChange={e => this.onChange(e, 'username')} />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Mật khẩu" onChange={e => this.onChange(e, 'password')} />
                      </CInputGroup>

                      <Row>
                        <Col xs="12" lg="12" sm="12">
                          <Button color="primary" className="px-4" disabled={isLoading}>Đăng nhập</Button>
                        </Col>
                      </Row>

                    </form>
                  </CCardBody>
                </CCard>
                <CCard className="bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <img style={{ alignSelf: 'center' }} height="20px" width="130px" src={Logo} />
                  <CCardBody className="text-center">
                    <div>
                      <h2>Đăng ký</h2>
                      <p>Bạn muốn tạo tài khoản để sử dụng dịch vụ của TiKiTech. Hãy tham gia cùng chúng tôi ngay bên dưới.</p>
                      <a href="https://applamdep.com/" target="_blank">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Đăng ký ngay</CButton>
                      </a>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      // <div className="app flex-row align-items-center mt-5">
      //   <Container>
      //     <Row className="justify-content-center">
      //       <Col md="4">
      //         <form onSubmit={async e => await this.onSubmit(e)}>
      //           <CardGroup>
      //             <Card className="p-4">
      //               <CardBody>
      //                 <h1>Login</h1>
      //                 <span className="error">{errors.common}</span>
      //                 <InputGroup className="mb-3">
      //                   <TextFieldGroup
      //                     field="username"
      //                     label="Username"
      //                     value={username}
      //                     error={errors.username}
      //                     onChange={e => this.onChange(e)}
      //                   />
      //                 </InputGroup>
      //                 <InputGroup className="mb-4">
      //                   <TextFieldGroup
      //                     type="password"
      //                     field="password"
      //                     label="Password"
      //                     value={password}
      //                     error={errors.password}
      //                     onChange={e => this.onChange(e)}
      //                   />
      //                 </InputGroup>
      //                 <Row>
      //                   <Col xs="6">
      //                     <Button color="primary" className="px-4" disabled={isLoading}>Login</Button>
      //                   </Col>
      //                 </Row>
      //               </CardBody>
      //             </Card>
      //           </CardGroup>
      //         </form>
      //       </Col>
      //     </Row>
      //   </Container>
      // </div>
    );
  }
}
export default Login;
