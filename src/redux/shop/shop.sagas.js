import { call, put, takeLatest } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import {
  failFetchingCollection,
  successFetchingCollection,
} from "./shop.actions";
import { shopActionType } from "./shop.types";

export function* fetchCollectionData() {
  try {
    const collectionRef = firestore.collection("collections");
    const snaoshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snaoshot
    );

    yield put(successFetchingCollection(collectionsMap));
  } catch (error) {
    yield put(failFetchingCollection(error));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(shopActionType.FETCH_COLLECTION_START, fetchCollectionData);
}
