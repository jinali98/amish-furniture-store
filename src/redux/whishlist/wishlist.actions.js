import { wishlistActionTypes } from "./wishlist.types";

export const addItemsToWishlist = (item) => ({
  type: wishlistActionTypes.ADD_REMOVE_WISHLIST,
  payload: item,
});
