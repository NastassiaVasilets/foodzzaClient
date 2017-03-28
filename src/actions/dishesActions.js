import { GET_DISHES, GET_DISHES_FAIL } from './types';

export function addDishes(dishes, response) {
  return {
    type: GET_DISHES,
    dishes,
  };
}
export function addDishesFail(response) {
  return {
    type: GET_DISHES_FAIL,
    response,
  }
}
