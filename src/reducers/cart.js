import {
  GET_PRODUCTS,
  ADD_TO_CART,
  CART_CLEAR,
  PRODUCT_DELETE,
  PRODUCT_ADD_AMOUNT,
  PRODUCT_REM_AMOUNT,
  CART_LOAD
} from '../actions/types';

const initialState = {
  products: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
      	...state,
      	products: action.products,
      }
    case ADD_TO_CART: {
      // TODO find the best practice of state updating
      let p = [];
      let products = state.products;
      products.forEach(
        (product)=>{
          p.push(product);
      });
      return Object.assign({...state},{products: p});
    }
    case CART_CLEAR: {
      return {
        products: [],
        total: 0
      };
    }
    case CART_LOAD : {
      return {
        products: action.products,
      }
    }
    case PRODUCT_DELETE: {
      let p = [];
      let products = state.products;
      products.forEach(
        (product)=>{
          p.push(product);
      });
      return Object.assign({...state},{products: p});
    }
    case PRODUCT_ADD_AMOUNT: {
      let p = [];
      let products = state.products;
      products.forEach(
        (product)=>{
          p.push(product);
      });
      return Object.assign({...state},{products: p});
    }
    case PRODUCT_REM_AMOUNT: {
      let p = [];
      let products = state.products;
      products.forEach(
        (product)=>{
          p.push(product);
      });
      return Object.assign({...state},{products: p});
    }
    default:
      return state;
  }
};

export default cartReducer;
