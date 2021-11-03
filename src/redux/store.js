import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middleWares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

//persist the store
const persistor = persistStore(store);

export { store, persistor };
