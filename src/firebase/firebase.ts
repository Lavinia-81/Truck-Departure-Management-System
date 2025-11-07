// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  "projectId": "studio-6900668736-45260",
  "appId": "1:966294973587:web:771815f5f2772a0618f166",
  "apiKey": "AIzaSyBsDfq1ZyEQSBRYh2SixKZ0IJtH-a9-EtY",
  "authDomain": "studio-6900668736-45260.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "966294973587"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
