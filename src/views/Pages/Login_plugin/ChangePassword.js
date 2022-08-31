import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import axios from 'axios'
import Constants from "./../../../contants/contants";
import {
  Redirect
} from 'react-router-dom'

import {
  CCard,
  CButton,
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
      email: ''
    }
  }

  async onSubmit(e) {
    e.preventDefault();
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_FORGOT_PASS,
      method: 'POST',
      data: {
        email: this.state.email
      }
    });

    if (res.status == 200) {
      window.location.href = "#/message"
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
            <CCol md="4">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody style={{overflow: 'hidden'}}>
                    <form onSubmit={async e => await this.onSubmit(e)}>
                    <h1 class="login-title">Quên mật khẩu</h1>

                      <CInputGroup className="mb-2 mt-3 login-input">
                      
                        <CInput className="login-input" type="email" placeholder="Email" name="email" onChange={e => this.onChange(e, 'email')} autoComplete="name" />
                      </CInputGroup>

                      <Row>
                        <Col xs="12" lg="12" sm="12">
                          <CButton    
                            color="info"
                            size="lg"
                            className=" w-100 mt-3 btn-main" disabled={isLoading}><p style={{ margin: "auto" }}>Đặt lại mật khẩu</p></CButton>
                        </Col>
                      </Row>

                    </form>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}
export default Login;
