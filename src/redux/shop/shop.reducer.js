import { shopActionType } from "./shop.types";

const INITIAL_STATE = {
  shop: null,
  isLoading: false,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionType.FETCH_COLLECTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case shopActionType.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        shop: action.payload,
        isLoading: false,
      };
    case shopActionType.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
