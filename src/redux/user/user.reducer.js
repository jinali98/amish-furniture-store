import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP_SUCCESS:
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };

    case userActionTypes.SIGN_IN_FAIL:
    case userActionTypes.SIGN_UP_FAIL:
    case userActionTypes.SIGN_OUT_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };

    default:
      return state;
  }
};

export default userReducer;
