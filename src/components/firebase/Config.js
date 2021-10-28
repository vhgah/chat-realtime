import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhQ0aywq5wgeyLCpehZgYV894H5wFqi-U",
  authDomain: "realtimechat-6ba2a.firebaseapp.com",
  projectId: "realtimechat-6ba2a",
  storageBucket: "realtimechat-6ba2a.appspot.com",
  messagingSenderId: "502722494732",
  appId: "1:502722494732:web:173225f9aecfc3bdb7c929",
  measurementId: "G-TE0ZXK0Q4Q",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

export default firebase;
