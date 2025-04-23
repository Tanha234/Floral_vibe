// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCLWCK9Z5k6umECxx_-L3K5pRj9bB4CbGE",
  authDomain: "floral-vibe.firebaseapp.com",
  projectId: "floral-vibe",
  storageBucket: "floral-vibe.firebasestorage.app",
  messagingSenderId: "68572961736",
  appId: "1:68572961736:web:0dc0c7fe32ae58db987efd",
  measurementId: "G-BP8HBG5CPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth()
export default auth;