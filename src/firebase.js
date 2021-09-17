import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

import "firebase/compat/auth";

import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYbrs6hrSHRLmpX9mVKa72iOuycZ1jcxE",
  authDomain: "apple-clone-3ac22.firebaseapp.com",
  projectId: "apple-clone-3ac22",
  storageBucket: "apple-clone-3ac22.appspot.com",
  messagingSenderId: "921508141111",
  appId: "1:921508141111:web:0dba93d5d96d78136a87b2",
  measurementId: "G-8GXVXKCGJT"
}
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage()


let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;