import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import shopReducer from "./shop/shop.reducer";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import wishlistReducer from "./whishlist/wishlist.reducer";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
  key: "amish",
  storage,
  whitelist: ["cart", "wishlist"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  wishlist: wishlistReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
