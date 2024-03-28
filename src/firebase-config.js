
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA05f7gvWPe78sV5jR1jM-0e4Hy-aDEXIQ",
  authDomain: "legion-ai-content-machine.firebaseapp.com",
  databaseURL: "https://legion-ai-content-machine-default-rtdb.firebaseio.com",
  projectId: "legion-ai-content-machine",
  storageBucket: "legion-ai-content-machine.appspot.com",
  messagingSenderId: "1154447933",
  appId: "1:1154447933:web:f63d39f0d94db538af0854",
  measurementId: "G-G4K2KKXNE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
