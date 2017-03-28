import axios from 'axios';

export function login(user) {
  return axios({
    method: 'post',
    url: '/auth/login',
    data: {
      login: user.login,
      password: user.password,
    }
  });
}

export function signUp(user) {
  return axios({
    method: 'post',
    url: '/auth/signup',
    data: {
      name: user.name,
      login: user.login,
      password: user.password,
      phone: [],
      email: []
    }
  });
}
