import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/compat/firestore';

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyB8BJEhB4lXCQg3fRPOlqrGVBr_Rr4tpmk",
    authDomain: "unichat-2579d.firebaseapp.com",
    projectId: "unichat-2579d",
    storageBucket: "unichat-2579d.appspot.com",
    messagingSenderId: "519107842348",
    appId: "1:519107842348:web:f81cd99508c0906117dc89"
  }).auth();

  export default auth;