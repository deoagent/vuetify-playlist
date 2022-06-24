// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4b_r_f773syM4p-beGPsMLyao6UE5xO0",
  authDomain: "todo-ninja-vuetify-9a461.firebaseapp.com",
  projectId: "todo-ninja-vuetify-9a461",
  storageBucket: "todo-ninja-vuetify-9a461.appspot.com",
  messagingSenderId: "767045030685",
  appId: "1:767045030685:web:e53747f1661238435607f4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots:true });

export default db;

