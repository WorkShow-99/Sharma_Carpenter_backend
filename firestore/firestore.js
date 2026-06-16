// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


import {
   getAuth,
   GoogleAuthProvider
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpXCm3CGl4ReqlgmGzjWczoITEtKxP3Qc",
  authDomain: "sharma-7e60c.firebaseapp.com",
  projectId: "sharma-7e60c",
  storageBucket: "sharma-7e60c.firebasestorage.app",
  messagingSenderId: "522089429925",
  appId: "1:522089429925:web:728ede56cefa8e99e1064c",
  measurementId: "G-53CTLH7XE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

import { collection, getDocs } from "firebase/firestore";
// import { db } from "./firebaseConfig"; // Assum÷÷ing your init file is named firebaseConfig.js

async function getMyCollection() {
  // 1. Reference the specific collection
  const myCollectionRef = collection(db, "users");

  // 2. Fetch the documents from that collection
  const querySnapshot = await getDocs(myCollectionRef);

  // 3. Loop through and access the data
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}


export const auth = getAuth(app);

export const provider =
   new GoogleAuthProvider();

export { analytics, app, db };
