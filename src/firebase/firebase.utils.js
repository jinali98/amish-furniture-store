import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCwziDr6uEs7ZZkNDmyjVOg-z7s2f2VDAs",
  authDomain: "amish-app-5f876.firebaseapp.com",
  projectId: "amish-app-5f876",
  storageBucket: "amish-app-5f876.appspot.com",
  messagingSenderId: "1049798694582",
  appId: "1:1049798694582:web:4b6208b37ae0bf2652b817",
  measurementId: "G-8SS0E5FH4Y",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapShot = await userRef.get();
  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("cannot create the user");
    }
  }

  return userRef;
};

//create  collection/document
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    console.log(obj);
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//this is to conver the received reference object in to actual data we want
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformaedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  //convert the shop data array to an object
  return transformaedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;

    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
