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

// export const fetchCollectionStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(startFetchingCollection());

//     //useonSnapShot() method on reference in order to get latest and updated data. whenever the reference data updated it will send the latest data

//     collectionRef
//       .get()
//       .then((snapshot) => {
//         //this is an object of shop data
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(successFetchingCollection(collectionsMap));
//         // this.props.updateCollection(collectionsMap);
//         // this.setState({ loading: false });
//         console.log(collectionsMap);
//       })
//       .catch((error) =>
//         dispatch(failFetchingCollection(`this is the error ${error.message}`))
//       );
//   };
// };
