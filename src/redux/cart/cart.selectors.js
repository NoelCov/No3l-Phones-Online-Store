import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectTotal = createSelector([selectCart], (cart) => cart.total);

export const selectItemCount = createSelector([selectCartItems], (cartItems) =>
  Object.keys(cartItems).reduce(
    (itemCount, currentItem) => (itemCount += cartItems[currentItem].quantity),
    0
  )
);
