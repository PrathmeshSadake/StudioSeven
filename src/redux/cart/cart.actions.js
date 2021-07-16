import cartActionTypes from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
  };
};
