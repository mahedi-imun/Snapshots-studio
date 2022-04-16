// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBed3wDCxdCpWDTV1p9Q2aurUZr9A68VF0",
  authDomain: "snapshots-studio.firebaseapp.com",
  projectId: "snapshots-studio",
  storageBucket: "snapshots-studio.appspot.com",
  messagingSenderId: "627801830201",
  appId: "1:627801830201:web:f8acf549b38a1a3af96ee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth