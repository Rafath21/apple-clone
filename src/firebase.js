import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

import "firebase/compat/auth";

import "firebase/compat/storage";

import {apiKey,authDomain,projectId,storageBucket,messagingSenderId,appId,measurementId} from "./secrets.js";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
}
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage()


let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;