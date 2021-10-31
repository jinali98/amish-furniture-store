import { createSelector } from "reselect";

const selectWishList = (state) => state.wishlist;

export const selectWishlistedItems = createSelector(
  [selectWishList],
  (wishlist) => wishlist.wishlistedItems
);

export const selectNumberOfItemsInTheWishlist = createSelector(
  [selectWishlistedItems],
  (wishlist) => wishlist.length
);
