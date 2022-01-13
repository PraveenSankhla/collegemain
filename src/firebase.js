// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIm6sLcdUCcqqY7YVS38P1tIasAbu5FCk",
  authDomain: "college-web-c5a76.firebaseapp.com",
  projectId: "college-web-c5a76",
  storageBucket: "college-web-c5a76.appspot.com",
  messagingSenderId: "1004753052630",
  appId: "1:1004753052630:web:07944f612f692f0549fa77",
  measurementId: "G-PW4LG8Z7MD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
