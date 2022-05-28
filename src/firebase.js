import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCF5GMk3QTstF2ieE8DyZVXWKBvVHrUHgo",
  authDomain: "gigsman-36be3.firebaseapp.com",
  projectId: "gigsman-36be3",
  storageBucket: "gigsman-36be3.appspot.com",
  messagingSenderId: "891013985663",
  appId: "1:891013985663:web:727136d818985c1adf964a",
  measurementId: "G-0X7DH27GR3"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default firebase;