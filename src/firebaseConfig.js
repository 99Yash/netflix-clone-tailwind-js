// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//! problem in process env
const firebaseConfig = {
  apiKey: "AIzaSyAsAQALkOyPLpIzRbYdLzMbhffcS8_9Nfk",
  authDomain: "react-tailwind-project-24bbb.firebaseapp.com",
  projectId: "react-tailwind-project-24bbb",
  storageBucket: "react-tailwind-project-24bbb.appspot.com",
  messagingSenderId: "123843846072",
  appId: "1:123843846072:web:f9f282ed6fd0128900b94d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
