import { GET_DISHES, GET_DISHES_FAIL } from '../actions/types';

const initialState = {
  dishes: [],
  response: null
};

const dishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DISHES:
      return { 
      	...state,
      	dishes: action.dishes,
      	response: action.response,
      }
    case GET_DISHES_FAIL:
      return {
        ...state,
        response: action.response,
      }
    default:
      return state;
  }
};

export default dishesReducer;
