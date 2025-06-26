// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUKfrVKVdFK70bJwSADJGrQng4sx6aY-E",
  authDomain: "gardening-hub-application.firebaseapp.com",
  projectId: "gardening-hub-application",
  storageBucket: "gardening-hub-application.firebasestorage.app",
  messagingSenderId: "435393966706",
  appId: "1:435393966706:web:0a80e3daaefa86d81688eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);