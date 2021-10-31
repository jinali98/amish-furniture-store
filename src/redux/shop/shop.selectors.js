import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shopitems) => shopitems.shop
);

//converted the shop object in to an array
export const selectShopItemsConverted = createSelector(
  [selectShopItems],
  (shop) => Object.keys(shop).map((key) => shop[key])
);

//get the collection for each category

export const selectCollection = (urlParam) =>
  createSelector([selectShopItems], (collections) => collections[urlParam]);
