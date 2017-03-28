import {
  GET_SERVICES,
  GET_SERVICES_FAIL,
  GET_KITCHENS,
  GET_KITCHENS_FAIL
} from '../actions/types';

const initialState = {
  services: [],
  kitchens: [],
  response: null
}

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.services,
        response: action.response
      };
    case GET_SERVICES_FAIL:
      return {
        ...state,
        response: action.response
      };
    case GET_KITCHENS:
      return {
        ...state,
        kitchens: action.kitchens,
        response: action.response
      };
    case GET_KITCHENS_FAIL:
      return {
        ...state,
        response: action.response
      };
    default:
      return initialState;
  }

  return state;
}

export default servicesReducer;
