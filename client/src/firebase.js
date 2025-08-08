// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-notice-board.firebaseapp.com",
  projectId: "mern-notice-board",
  storageBucket: "mern-notice-board.firebasestorage.app",
  messagingSenderId: "463876122321",
  appId: "1:463876122321:web:3d7a91955134bb52f307f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

