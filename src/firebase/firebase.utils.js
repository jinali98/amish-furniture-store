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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
