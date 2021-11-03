import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shopitems) => shopitems.shop
);

//converted the shop object in to an array
export const selectShopItemsConverted = createSelector(
  [selectShopItems],
  (shop) => (shop ? Object.keys(shop).map((key) => shop[key]) : [])
);

//get the collection for each category

export const selectCollection = (urlParam) =>
  createSelector([selectShopItems], (collections) =>
    collections ? collections[urlParam] : null
  );

export const selectIsLoading = createSelector(
  [selectShop],
  (shop) => shop.isLoading
);
export const selectErrorMessage = createSelector(
  [selectShop],
  (shop) => shop.errorMessage
);
export const selectIsShopLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.shop
);
