import { cartActionTypes } from "./cart.types";

import {
  addItemToCart,
  getCartTotal,
  deleteItem,
  decreaseItem,
} from "./cart.utils";

const INITIAL_STATE = {
  cartItems: {},
  total: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.GET_TOTAL:
      return {
        ...state,
        total: getCartTotal(state.cartItems),
      };
    case cartActionTypes.DELETE_ALL:
      return {
        ...state,
        cartItems: {},
        total: 0,
      };
    case cartActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItem(state.cartItems, action.payload),
      };
    case cartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseItem(state.cartItems, action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
