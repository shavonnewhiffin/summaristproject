import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANbtgE8e90SOeeuDrOYmgbjIKd6y8nD1E",
  authDomain: "summarist-1b0ca.firebaseapp.com",
  projectId: "summarist-1b0ca",
  storageBucket: "summarist-1b0ca.firebasestorage.app",
  messagingSenderId: "1069704224693",
  appId: "1:1069704224693:web:68e06160b6e523c08ec3fc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);