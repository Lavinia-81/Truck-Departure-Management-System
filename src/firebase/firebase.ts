// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA24e3_Jrnw5B5xS4aKk3k1E2f9g0h7Y8o",
  authDomain: "truck-departure-management-a202c.firebaseapp.com",
  projectId: "truck-departure-management-a202c",
  storageBucket: "truck-departure-management-a202c.appspot.com",
  messagingSenderId: "33887532644",
  appId: "1:33887532644:web:e0f8f8f4a1c5b2a4c1c9e4",
  measurementId: "G-7E4Y9XQJ1E"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
