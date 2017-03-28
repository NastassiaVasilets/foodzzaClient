import {
  GET_SERVICES,
  GET_SERVICES_FAIL,
  GET_KITCHENS,
  GET_KITCHENS_FAIL
} from './types';

export function addServices(services, response) {
  return {
    type: GET_SERVICES,
    services,
  };
}
export function addServicesFail(response) {
  return {
    type: GET_SERVICES_FAIL,
    response,
  }
}
export function addKitchens(kitchens, response) {
  return {
    type: GET_KITCHENS,
    kitchens,
  };
}
export function addKitchensFail(response) {
  return {
    type: GET_KITCHENS_FAIL,
    response,
  }
}