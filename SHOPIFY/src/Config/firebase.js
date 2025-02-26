import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT_1,
  authDomain: "fir-be178.firebaseapp.com",
  projectId: "fir-be178",
  storageBucket: "fir-be178.firebasestorage.app",
  messagingSenderId: "311513523665",
  appId: "1:311513523665:web:97a791e6608b68098bacf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
