import {
  ADD_TO_CART,
  CART_CLEAR,
  PRODUCT_DELETE,
  PRODUCT_ADD_AMOUNT,
  PRODUCT_REM_AMOUNT,
  CART_LOAD
} from './types';

export function addToCart(products, response) {
  return {
    type: ADD_TO_CART,
    products,
  }
}

export function clearCart(initailState) {
  return {
    type: CART_CLEAR,
  }
}

export function deleteProduct(products, initialState) {
  return {
    type: PRODUCT_DELETE,
    products,
  }
}

export function addProductAmount(products, initialState) {
  return {
    type: PRODUCT_ADD_AMOUNT,
    products,
  }
}
export function remProductAmount(products, initialState) {
  return {
    type: PRODUCT_REM_AMOUNT,
    products,
  }
}
export function cartLoad(products, initialState) {
  return {
    type: CART_LOAD,
    products,
  }
}