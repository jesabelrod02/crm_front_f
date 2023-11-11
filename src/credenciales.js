// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_bZZgjjSoP023Rmj4SAI4E4JGoIcYNuw",
  authDomain: "loginprueba-76560.firebaseapp.com",
  projectId: "loginprueba-76560",
  storageBucket: "loginprueba-76560.appspot.com",
  messagingSenderId: "217816074702",
  appId: "1:217816074702:web:e93cf2d30c2f6c1f02439f",
  measurementId: "G-L537VSSLMZ"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
export default appfirebase;