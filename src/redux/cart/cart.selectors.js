import { createSelector } from "reselect";
// SELECTORS prevent re-rendering of components when state change is not related to the component

const selectCart = (state) => state.cart;

// returns cartItems
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// returns total count of items in cart
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

// Toggling hidden state of cart dropdown
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
