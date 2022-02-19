// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGfjrnlrrRwhWWOgQMmFBe23phuwB_-H4",
  authDomain: "collegeproject-27765.firebaseapp.com",
  projectId: "collegeproject-27765",
  storageBucket: "collegeproject-27765.appspot.com",
  messagingSenderId: "858374603707",
  appId: "1:858374603707:web:5836eccf25a6916555ba9e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
