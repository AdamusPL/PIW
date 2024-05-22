// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVBgbtlP_l4-m7VMoKc7TSysplb-hFeuc",
  authDomain: "tranquil-travels.firebaseapp.com",
  projectId: "tranquil-travels",
  storageBucket: "tranquil-travels.appspot.com",
  messagingSenderId: "378602017945",
  appId: "1:378602017945:web:2484a7ac2d8903efa81408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);