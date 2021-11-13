import { userActionTypes } from "./user.types";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from "../../firebase/firebase.utils";
import {
  signinFailed,
  signinSuccess,
  signOutFail,
  signOutSuccess,
  signUpFailed,
} from "./user.actions";

export function* getSnapShotfromUserAuth(user, otherInfo) {
  try {
    const userRef = yield call(createUserProfileDocument, user, { otherInfo });
    const userRefSnapShot = yield userRef.get();
    yield put(
      signinSuccess({ id: userRefSnapShot.id, ...userRefSnapShot.data() })
    );
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* signinGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotfromUserAuth(user);
  } catch (error) {
    yield put(signinFailed(error));
  }
}
export function* signinEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotfromUserAuth(user);
  } catch (error) {
    yield put(signinFailed(error));
  }
}
export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield getSnapShotfromUserAuth(user, { displayName });
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFail(error));
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signinGoogle);
}
export function* onEmailSignIn() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signinEmail);
}
export function* onSignUp() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* onSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onEmailSignIn),
    call(onGoogleSignIn),
    call(onSignUp),
    call(onSignOut),
  ]);
}
