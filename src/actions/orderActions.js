import {
  SERVICE_CHOOSE,
  CART_SUBMIT,
  ORDER_CLEAR,
  ORDER_DELETE,
  AS_OWNER_SUBSCRIBER_ADD,
  ORDER_LOAD
} from './types';

export function serviceChoose(service, initialTime) {
  const now = new Date();

  now.setHours(initialTime / 3600);
  now.setMinutes(initialTime % 3600 / 60);
  const time = now.toString();
  return {
    type: SERVICE_CHOOSE,
    service,
    time,
  };
}
export function cartSubmit(dishes, initialState) {
  return {
    type: CART_SUBMIT,
    dishes,
  };
}
export function clearOrder(initialState) {
  return {
    type: ORDER_CLEAR,
  };
}
export function orderDelete() {
  return {
    type: ORDER_DELETE,
  };
}
export function asOwnerSubscriberAdd(subscriber, initialState) {
  return {
    type: AS_OWNER_SUBSCRIBER_ADD,
    subscriber,
  };
}
export function ownSubscriberAdd(subscriber,initialState) {
  
}
export function orderLoad({ owner, service, time, subscriber, dishes, _id }, initialState) {
  return {
    type: ORDER_LOAD,
    dishes,
    owner,
    service,
    time,
    subscriber,
    _id,
  };
}
