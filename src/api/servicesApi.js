import axios from 'axios';

export function getServices() {
  return axios({
    method: 'get',
    url: 'api/services',
  });
}

export function getDishes(id) {
  return axios({
    method: 'get',
    url: `/api/services/${id}`,
  });
}

export function getDish(id) {
  return axios({
    method: 'get',
    url: `/api/dishes/${id}`,
  });
}
