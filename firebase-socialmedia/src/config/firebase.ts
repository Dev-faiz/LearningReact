// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG7dMcMOcqeFtqt9LPxbmq3lsZaO3W9bQ",
  authDomain: "react-course-1c592.firebaseapp.com",
  projectId: "react-course-1c592",
  storageBucket: "react-course-1c592.appspot.com",
  messagingSenderId: "777608346092",
  appId: "1:777608346092:web:d74e572b46c5aa279ae8c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);