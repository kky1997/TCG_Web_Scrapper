// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that  we need.... right now just Auth
// https://firebase.google.com/docs/web/setup#available-libraries (for reference)

import { getAuth } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqfZkqz0eTojMArB6uEH8qPVOPEBBhpdc",
  authDomain: "tcg-web-scraper.firebaseapp.com",
  projectId: "tcg-web-scraper",
  storageBucket: "tcg-web-scraper.firebasestorage.app",
  messagingSenderId: "63391793412",
  appId: "1:63391793412:web:dd930715a3130e9ac31051"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };