import { createSelector } from "reselect";

const selectCollection = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectCollection],
  (shop) => shop.collections
);
