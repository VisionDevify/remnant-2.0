// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmBZQwm0-2puIhAcLaonEBX-YsvQqQ0GE",
    authDomain: "remnant-2-17fea.firebaseapp.com",
    projectId: "remnant-2-17fea",
    storageBucket: "remnant-2-17fea.appspot.com",
    messagingSenderId: "491852150158",
    appId: "1:491852150158:web:27f512dbe08794b244a0df",
    measurementId: "G-RV7PHVZFC9",
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };