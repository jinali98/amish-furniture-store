import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

//select cart items from cart state
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

//select hidden state from the cart state
export const selectHiddenState = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//calculate total items in the cart
export const totalItemsInCart = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

//calculate the total amount
export const selectTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
