import { wishlistActionTypes } from "./wishlist.types";
import { addOrRemoveItems } from "./wishlist.utils";

const INITIAL_STATE = {
  wishlistedItems: [],
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wishlistActionTypes.ADD_REMOVE_WISHLIST:
      return {
        ...state,
        wishlistedItems: addOrRemoveItems(
          state.wishlistedItems,
          action.payload
        ),
      };

    default:
      return state;
  }
};

export default wishlistReducer;
