import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };

    case userActionTypes.SIGN_IN_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
