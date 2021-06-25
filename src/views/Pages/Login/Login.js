import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, InputGroup, Row } from 'reactstrap';
import validateInput from '../../../shared/validations/login';
import TextFieldGroup from '../../Common/TextFieldGroup';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    }
    localStorage.removeItem('auth');
    if(this.props.location.pathname === '/logout') window.location.href = '#/login';
  }
  isValid() {
    const {errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({errors});
    }
    return isValid;
  }
  onSubmit(e) {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      
      // todo verify admin later
      // let fetchData = {
      //     method: 'POST',
      //     body: JSON.stringify({username:this.state.identifier, password: this.state.password}),
      //     headers: { 'Content-Type': 'application/json' }
      // };
      // fetch(global.BASE_URL + '/admin/login',
      //   fetchData
      // ).then(res => res.json())
      // .then(json => {
      //     if(json.statusCode === 400){
      //         this.setState({isLoading: false, errors: {common: 'Username or password is incorrect'}});
      //     }
      //     else  {
      //       localStorage.setItem('auth', json.token);
      //       localStorage.setItem('user', JSON.stringify(json.user || ''));
      //       this.props.history.push('/other-settings')
      //     }
      // });

      // this.props.history.push('/news')
      if (this.state.identifier === 'admin' && this.state.password ==='admin') {
        localStorage.setItem('user', JSON.stringify({ username: this.state.identifier, password: this.state.password }));
        localStorage.setItem('auth', 'abv');
        this.props.history.push('/brand')
      } else {
        this.setState({ isLoading: false, errors: { common: 'Username or password is incorrect' } });
      }
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const {errors, identifier, password, isLoading} = this.state;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <form onSubmit={e => this.onSubmit(e)}>
                <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <span className="error">{errors.common}</span>
                    <InputGroup className="mb-3">
                      <TextFieldGroup
                          field="identifier"
                          label="Username"
                          value={identifier}
                          error={errors.identifier}
                          onChange={e=>this.onChange(e)}
                          />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <TextFieldGroup
                          type="password"
                          field="password"
                          label="Password"
                          value={password}
                          error={errors.password}
                          onChange={e=>this.onChange(e)}
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" disabled={isLoading}>Login</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </CardGroup>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Login;