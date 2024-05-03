// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // Update this import
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';

//import { getAnalytics } from "firebase/analytics";
//import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnIzDmhXn-BK3cLOBYxRm89rR3rgyAvu4",
  authDomain: "plant7-aac68.firebaseapp.com",
  projectId: "plant7-aac68",
  storageBucket: "plant7-aac68.appspot.com",
  messagingSenderId: "379600214447",
  appId: "1:379600214447:web:75b3f069a91a78ef8db75a",
  measurementId: "G-MNC4583BNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
export default app;