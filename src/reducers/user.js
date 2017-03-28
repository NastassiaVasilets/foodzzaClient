import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../actions/types';

const initialState = {
  user: null,
  isAuthorized: false,
  response: {errors: {}}
}

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthorized: true,
        response: action.response
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        response: action.response,
      };
    case LOGOUT:
      return initialState;
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthorized: true,
        response: action.response,
      };
    case SIGN_UP_FAILURE:
      return{
        ...state,
        response: action.response,
      }
  }
  return state;
}

export default userReducer;
