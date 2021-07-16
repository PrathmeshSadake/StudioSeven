import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA1OE-LLHyHeuw0vIV9XSrIkEVEqXrJO1w",
  authDomain: "studioseven-6d186.firebaseapp.com",
  projectId: "studioseven-6d186",
  storageBucket: "studioseven-6d186.appspot.com",
  messagingSenderId: "44062066397",
  appId: "1:44062066397:web:0f8c9fa70838bca2fd7d34",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if user is not signed in
  if (!userAuth) return;

  //firestore returns query-reference and query-snapshot from firestore when we do a query request
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log(userRef);
  const snapShot = await userRef.get();
  // console.log(snapShot);
  //snapshot is only the data in document
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //if snapshot doesn't exist it will add to firestore using set method
    try {
      await userRef.set({
        // displayName : displayName short hand syntax below and spreading all other properties
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// look for firebase auth documentation
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
