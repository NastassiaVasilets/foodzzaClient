import React from 'react';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { connect } from 'react-redux';

import Menu from './Menu.jsx';
import Orders from './Orders/Orders.jsx';
import Login from './Auth/Login.jsx';
import SignUp from './Auth/SignUp.jsx';
import Services from './Services/Services.jsx';
import Dishes from './Dishes/Dishes.jsx';
import NotFound from './NotFound/NotFound.jsx';
import store from '../reducers/store';
import { syncHistoryWithStore } from 'react-router-redux'
import UserIsAuthenticated from '../lib/auth';

import './App.css';
 
const history = syncHistoryWithStore(browserHistory, store)

const AppRouter = (props) => {
  return (
    <Router history={ history } >
      <Route path='/' component={ Menu } >
        <IndexRoute component={ Orders }/>
        <Route path='/services' component={ UserIsAuthenticated(Services) } />
        <Route path='services/:id' component={ UserIsAuthenticated(Dishes) } />\
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </Route>
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='*' component={ NotFound } />
    </Router>
  );
}

export default connect(
  store => {
    return {
      user: store.userReducer.user,
      isAuthorized: store.userReducer.isAuthorized
    }
  }
)(AppRouter);
