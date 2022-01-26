// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4WLQ6X_WPYrYJLXFz2yZR6s6m-xzjq68",
  authDomain: "bookstore-c3ca6.firebaseapp.com",
  projectId: "bookstore-c3ca6",
  storageBucket: "bookstore-c3ca6.appspot.com",
  messagingSenderId: "386774547117",
  appId: "1:386774547117:web:dee60851354f02eab16424",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();

export { db };
