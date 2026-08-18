// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANbtgE8e90SOeeuDrOYmgbjIKd6y8nD1E",
  authDomain: "summarist-1b0ca.firebaseapp.com",
  projectId: "summarist-1b0ca",
  storageBucket: "summarist-1b0ca.firebasestorage.app",
  messagingSenderId: "1069704224693",
  appId: "1:1069704224693:web:68e06160b6e523c08ec3fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();