import React, { Component } from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';

import { loginSuccess, loginFailure } from '../../actions/userActions';

import { login } from '../../api/userApi';

import { Grid, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

import './authForm.css';


class Login extends Component {
	constructor(props) {
		super(props);

		this.handleLoginChange = this.handleLoginChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleLoginButton = this.handleLoginButton.bind(this);

		this.state = {
			loginValue: '',
			passwordValue: '',
		}
	}

	getValidationLoginState() {
	   const length = this.state.loginValue.length;
	   if (length > 2) return 'success';
	}
	getValidationPasswordState() {
	   const length = this.state.passwordValue.length;
	   if (length > 2) return 'success';
	}

  	handleLoginChange(e) {
    	this.setState({ loginValue: e.target.value });
  	}
  	handlePasswordChange(e) {
    	this.setState({ passwordValue: e.target.value });
  	}
  	handleLoginButton() {
  		if ((this.getValidationLoginState() === 'success') &&
  			(this.getValidationPasswordState() === 'success')) {
  			this.props.login({
  				login: this.state.loginValue,
  				password: this.state.passwordValue
  			})
  		}
  	}

	render() {
		return (
			<Grid>
				<Row className='showGrid'>
					<Col xs={12} md={2} lg={3} />
			        <Col xs={12} md={8} lg={6}>
						<Form horizontal className='authForm'>
							<FormGroup>
      							<Col smOffset={4} sm={12}>
        							<h2>Вход</h2>
      							</Col>
      						</FormGroup>
      						<FormGroup validationState={this.getValidationLoginState()}>
      							<Col componentClass={ControlLabel} sm={2}>Логин</Col>
      							<Col sm={10}>
      								<input
      									type='text'
							        	value={this.state.loginValue}
							        	placeholder='Введите логин'
							        	onChange={this.handleLoginChange}
							        	className='form-control'
      								/>
      								<FormControl.Feedback />
      							</Col>
      						</FormGroup>
						    <FormGroup
						        validationState={this.getValidationPasswordState()}
						    >
						        <Col componentClass={ControlLabel} sm={2}>Пароль</Col>
						        <Col sm={10}>
						          	<FormControl
							        type='password'
							        value={this.state.passwordValue}
							        placeholder='Введите пароль'
							        onChange={this.handlePasswordChange}
							        />
							        <FormControl.Feedback />
							    </Col>
						    </FormGroup>
						    <FormGroup>
      							<Col smOffset={4} sm={12}>
        							<Button onClick={this.handleLoginButton}>Войти</Button>
      							</Col>
      						</FormGroup>
      						<FormGroup>
      							<Col sm={12}>
      								<div className='noticeLink'>Еще нет аккаунта? <Link to={'/signup'}>cоздайте</Link>.</div>
      							</Col>
      						</FormGroup>
					    </Form>
			        </Col>
		          	<Col xs={12} md={2} lg={3} />
		      	</Row>
			</Grid>
		);
	}
}
function mapStateToProps(state, ownProps) {
  return {
    errors: state.userReducer.response.errors,
  };
}
export default connect(
	mapStateToProps,
	dispatch => {
		return {
			login: (user) => {
 				return login(user).then((response) => {
 						dispatch(loginSuccess(response.data, response))
 						dispatch(push("/"));
 				}, (response) => {
 					dispatch(
 						dispatch(loginFailure(response.response.data.errors))
 					);
 				});
			}
		}
	})(Login);
