// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAim-FthZcM1tJgLdhmtDSriy78X9Qfpzw",
  authDomain: "work07remind.firebaseapp.com",
  projectId: "work07remind",
  storageBucket: "work07remind.appspot.com",
  messagingSenderId: "1096755999478",
  appId: "1:1096755999478:web:bacc7adba381aa54d5f2d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
