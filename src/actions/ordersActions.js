import { GET_ORDERS, GET_ORDERS_FAIL } from './types';

export function addOrders(orders, response) {
  return {
    type: GET_ORDERS,
    orders,
  };
}
export function addOrdersFail(response) {
  return {
    type: GET_ORDERS_FAIL,
    response,
  }
}
