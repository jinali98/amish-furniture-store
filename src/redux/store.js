import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [thunk, sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);

//persist the store
const persistor = persistStore(store);

export { store, persistor };
