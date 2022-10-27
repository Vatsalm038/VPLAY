// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpMaKcXwCSigSu6cpB9uMTCaC2lVP-SdQ",
  authDomain: "login-a7556.firebaseapp.com",
  databaseURL: "https://login-a7556-default-rtdb.firebaseio.com",
  projectId: "login-a7556",
  storageBucket: "login-a7556.appspot.com",
  messagingSenderId: "109871245592",
  appId: "1:109871245592:web:ccb8853e38614e7028566d",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
