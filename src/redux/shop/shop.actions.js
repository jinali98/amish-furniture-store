import { shopActionType } from "./shop.types";

export const startFetchingCollection = () => ({
  type: shopActionType.FETCH_COLLECTION_START,
});
export const successFetchingCollection = (fetchedCollection) => ({
  type: shopActionType.FETCH_COLLECTION_SUCCESS,
  payload: fetchedCollection,
});
export const failFetchingCollection = (errorMessage) => ({
  type: shopActionType.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});
