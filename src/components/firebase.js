// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHQ9biMGZCzQt2hK9SPaY2PLSBMZRTfNU",
  authDomain: "cloud-storage-system-90092.firebaseapp.com",
  projectId: "cloud-storage-system-90092",
  storageBucket: "cloud-storage-system-90092.appspot.com",
  messagingSenderId: "755573946419",
  appId: "1:755573946419:web:f6aaf9a6ffadf07c3a4b46",
  measurementId: "G-B0Z2RTB2G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import {getStorage} from "firebase/storage";
const storage = getStorage(app);

export {storage}