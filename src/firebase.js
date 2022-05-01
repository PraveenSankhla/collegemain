import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBGfjrnlrrRwhWWOgQMmFBe23phuwB_-H4",
  authDomain: "collegeproject-27765.firebaseapp.com",
  projectId: "collegeproject-27765",
  storageBucket: "collegeproject-27765.appspot.com",
  messagingSenderId: "858374603707",
  appId: "1:858374603707:web:5836eccf25a6916555ba9e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
export const auth = getAuth(app)
export default app;
