// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdJFjjh8o_96b2MD3HbzSVbAwdY3S_Zlk",
  authDomain: "souled-8d422.firebaseapp.com",
  projectId: "souled-8d422",
  storageBucket: "souled-8d422.appspot.com",
  messagingSenderId: "210838597729",
  appId: "1:210838597729:web:e1e47f7319dd9745f83a20",
  measurementId: "G-FR53QL6T6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(App);
const auth = getAuth(app);

export {auth,fireDB};