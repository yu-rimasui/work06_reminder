import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAim-FthZcM1tJgLdhmtDSriy78X9Qfpzw",
  authDomain: "work07remind.firebaseapp.com",
  projectId: "work07remind",
  storageBucket: "work07remind.appspot.com",
  messagingSenderId: "1003397800283891083",
  appId: "1:1096755999478:web:bacc7adba381aa54d5f2d7",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
