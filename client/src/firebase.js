// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const apiKey = process.env.REACT_APP_FIREBASE_KEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "mern-estate-15d36.firebaseapp.com",
  projectId: "mern-estate-15d36",
  storageBucket: "mern-estate-15d36.appspot.com",
  messagingSenderId: "73736741150",
  appId: "1:73736741150:web:6bb9ec5b0d9911582f290f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
