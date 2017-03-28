import React, { Component } from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';

import { signUpSuccess, signUpFailure } from '../../actions/userActions';

import { signUp } from '../../api/userApi';

import { Grid, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

import './authForm.css';


class SignUp extends Component {
	constructor(props) {
		super(props);

		this.handleLoginChange = this.handleLoginChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSignUpButton = this.handleSignUpButton.bind(this);

		this.state = {
			loginValue: '',
			nameValue: '',
			passwordValue: '',
			errors: [],
		}
	}

	getValidationLoginState() {
	   const length = this.state.loginValue.length;
	   if (length > 2) return 'success';
	}
	getValidationNameState() {
	   const length = this.state.nameValue.length;
	   if (length > 2) return 'success';
	}
	getValidationPasswordState() {
	   const length = this.state.passwordValue.length;
	   if (length > 2) return 'success';
	}

  	handleLoginChange(e) {
    	this.setState({ loginValue: e.target.value });
  	}
  	handleNameChange(e) {
    	this.setState({ nameValue: e.target.value });
  	}
  	handlePasswordChange(e) {
    	this.setState({ passwordValue: e.target.value });
  	}
  	handleSignUpButton() {
  		if ((this.getValidationLoginState() === 'success') &&
  			(this.getValidationNameState() === 'success') &&
  			(this.getValidationPasswordState() === 'success')) {
  			this.props.signUp({
  				login: this.state.loginValue,
  				name: this.state.nameValue,
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
        							<h2>Регистрация</h2>
      							</Col>
      						</FormGroup>
				            <FormGroup
						        validationState={this.getValidationLoginState()}
						    >
						       	<Col componentClass={ControlLabel} sm={2}>Логин</Col>
						        <Col sm={10}>
						          	<FormControl
							        type='text'
							        value={this.state.loginValue}
							        placeholder='Введите логин (необходимо для входа на сайт)'
							        onChange={this.handleLoginChange}
							        />
							        <FormControl.Feedback />
							    </Col>
						    </FormGroup>
						    <FormGroup
						        validationState={this.getValidationNameState()}
						    >
						       	<Col componentClass={ControlLabel} sm={2}>Имя</Col>
						        <Col sm={10}>
						          	<FormControl
							        type='text'
							        value={this.state.nameValue}
							        placeholder='Введите имя (будет отображаться в заказе)'
							        onChange={this.handleNameChange}
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
        							<Button onClick={this.handleSignUpButton}>Зарегестрироваться</Button>
      							</Col>
      						</FormGroup>
      						<FormGroup>
      							<Col sm={12}>
      								<div className='noticeLink'>Уже есть аккаунт? <Link to={'/login'}>войдите</Link>.</div>
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
			signUp: (user) => {
				return signUp(user)
				.then(
					(response) => {
						dispatch((dispatch) => {
							dispatch(signUpSuccess(response.data, response))
							.then(() => {
								dispatch(push('/'));
							})
						});
					},
					(response) => {
						dispatch(signUpFailure(response.response.data.errors))
					}
				)
			}
		}
	})(SignUp);
