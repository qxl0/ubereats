// Import the functions you need from the SDKs you need
// expo install firebase
// yarn add tslib
import firebase from "firebase";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx_NfwDDtQEAQb5vspBqrgCzaDLzMBa7w",
  authDomain: "ubereats-341600.firebaseapp.com",
  projectId: "ubereats-341600",
  storageBucket: "ubereats-341600.appspot.com",
  messagingSenderId: "322640633549",
  appId: "1:322640633549:web:9f2ca0cbbad818336c1384",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
