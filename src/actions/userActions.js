import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './types';

export function loginSuccess(user, response) {
  return {
    type: LOGIN_SUCCESS,
    user,
    response,
  };
}

export function loginFailure(response) {
  return {
    type: LOGIN_FAILURE,
    response,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
};

export function signUpSuccess(user, response) {
  return {
    type: SIGN_UP_SUCCESS,
    user,
    response,
  };
}

export function signUpFailure(response) {
  return {
    type: SIGN_UP_FAILURE,
    response,
  };
}
