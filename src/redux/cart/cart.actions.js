import { cartActionTypes } from "./cart.types";

export const cartToggle = () => ({
  type: cartActionTypes.CART_HIDDEN_TOGGLE,
});

export const addItems = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItems = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
