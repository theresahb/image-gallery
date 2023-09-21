// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIp_LkGo2wEz5pBoO4-fLWLCws6lbNXuo",
  authDomain: "drag-drop-app-38602.firebaseapp.com",
  projectId: "drag-drop-app-38602",
  storageBucket: "drag-drop-app-38602.appspot.com",
  messagingSenderId: "619708516491",
  appId: "1:619708516491:web:34b5ee02d43c781cd36c8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);