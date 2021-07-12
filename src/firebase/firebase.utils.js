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
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// look for firebase auth documentation
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);
const Githubprovider = new firebase.auth.GithubAuthProvider();
export const SignInWithGithub = () => auth.signInWithPopup(Githubprovider);

export default firebase;
