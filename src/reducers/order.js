import {
  SERVICE_CHOOSE,
  CART_SUBMIT,
  ORDER_CLEAR,
  ORDER_DELETE,
  AS_OWNER_SUBSCRIBER_ADD,
  ORDER_LOAD
} from '../actions/types';

const initialState = {
  time: '',
  service: {},
  owner: {},
  dishes: [],
  subscriber: [],
  _id: ''
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_CHOOSE: {
      return {
        ...state,
        service: action.service,
        time: action.time
      };
    }
    case CART_SUBMIT: {
      return {
        ...state,
        dishes: action.dishes
      };
    }
    case ORDER_CLEAR: {
      return initialState;
    }
    case ORDER_DELETE: {
      return initialState;
    }
    case AS_OWNER_SUBSCRIBER_ADD: {
      return {
        ...state,
        subscriber: action.subscriber,
        response: action.response
      }
    }
    case ORDER_LOAD: {
      return { ...state,
        dishes: action.dishes,
        owner: action.owner,
        service: action.service,
        time: action.time,
        subscriber: action.subscriber,
        id: action._id
      }
    }
    default:
      return state;
  }
};

export default orderReducer;
