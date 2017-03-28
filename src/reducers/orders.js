import { GET_ORDERS, GET_ORDERS_FAIL } from '../actions/types';

const initialState = {
  orders: [],
  response: null
}

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.orders,
        response: action.response,
      };
    case GET_ORDERS_FAIL:
      return {
        ...state,
        response: action.response,
      }
    default:
      return initialState;
  }
  return state;
}

export default ordersReducer;
