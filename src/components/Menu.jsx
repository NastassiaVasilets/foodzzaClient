import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { logout } from '../actions/userActions';

import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import NavDropDown  from 'react-bootstrap/lib/NavDropDown';
import MenuItem  from 'react-bootstrap/lib/MenuItem';
import Grid  from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/button';
import { Link } from 'react-router';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

const Menu = ({ ...props, children }) => {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>FoodZZa </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav navbar>
            <LinkContainer to='/services'>
              <NavItem>Сделать заказ</NavItem>
            </LinkContainer>
            <AuthPanel
            isAuthorized = {props.isAuthorized}
            onLogin = {props.login}
            onLogout = {props.logout}
            onSignUp = {props.signUp}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Grid>{ children }</Grid>
    </div>
  );
}

export default connect(state => {
  return {
    user: state.userReducer.user,
    isAuthorized: state.userReducer.isAuthorized,
  };
}, (dispatch) => {
  return {
    login: ()=>{dispatch(push('/login'))},
    logout: ()=>{dispatch(logout())},
    signUp: ()=>{dispatch(push('/signup'))},
  }
})(Menu)

const AuthPanel = ({ isAuthorized, onLogout, onLogin, onSignUp }) => {
  if (isAuthorized) {
    return (
      <NavItem>
        <Button onClick={onLogout}>Logout</Button>
      </NavItem>
    );
  }
  return (
    <NavDropDown  title='Авторизация' id='nav-dropdown'>
      <MenuItem onClick={onLogin}>Войти</MenuItem>
      <MenuItem onClick={onSignUp}>Зарегестрироваться</MenuItem>
    </NavDropDown>
  );
};
