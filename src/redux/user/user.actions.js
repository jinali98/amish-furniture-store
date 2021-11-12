import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
export const emailSigninStarted = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});
export const googleSigninStarted = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});
export const signinSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const signinFailed = (error) => ({
  type: userActionTypes.SIGN_IN_FAIL,
  payload: error,
});
export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});
export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFail = (error) => ({
  type: userActionTypes.SIGN_OUT_FAIL,
  payload: error,
});
export const SignUpStarted = (emailAndPasswordAndDisplayName) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: emailAndPasswordAndDisplayName,
});
export const signUpSuccess = (user) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});
export const signUpFailed = (error) => ({
  type: userActionTypes.SIGN_UP_FAIL,
  payload: error,
});
