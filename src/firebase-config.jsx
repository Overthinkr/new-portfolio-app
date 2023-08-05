// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjwgWYneXU2JpEryC6vZppCoAOX7FdgJg",
  authDomain: "new-portfolio-react.firebaseapp.com",
  projectId: "new-portfolio-react",
  storageBucket: "new-portfolio-react.appspot.com",
  messagingSenderId: "1026160791264",
  appId: "1:1026160791264:web:b0e08bb6ddf2f143fa0a85",
  measurementId: "G-C7HLCZBHY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const OnAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
