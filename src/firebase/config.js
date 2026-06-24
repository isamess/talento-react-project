// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBsA_gzihbL1T1Mbh-yM0Oydfi3TpfN_XE",
  authDomain: "talento-react-project.firebaseapp.com",
  projectId: "talento-react-project",
  storageBucket: "talento-react-project.firebasestorage.app",
  messagingSenderId: "893925764670",
  appId: "1:893925764670:web:6ff78ed38a040fda082b6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth= getAuth(app);    //para el login


export {db, auth}