import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import userReducer from './user';
import ordersReducer from './orders';
import servicesReducer from './services';
import orderReducer from './order';
import dishesReducer from './dishes';
import cartReducer from './cart';

const store = createStore(
  combineReducers({
    routing: routerReducer,
    userReducer: userReducer,
    servicesReducer: servicesReducer,
    orderReducer: orderReducer,
    ordersReducer: ordersReducer,
    dishesReducer: dishesReducer,
    cartReducer: cartReducer
  }),
  load(),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(browserHistory)),
    applyMiddleware(reduxThunk),
    applyMiddleware(save({ states: [
      'userReducer',
      'servicesReducer',
      'orderReducer',
      'cartReducer',
      ] }))
  )
);

export default store;
