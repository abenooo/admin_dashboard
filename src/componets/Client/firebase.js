// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app'
import firebase from 'firebase/compat/app';
// import 'firebase/auth'
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkmqsC2NWrVOV5RhQ6vNhF8uK1JESMm_c",
    authDomain: "otp-app-587ca.firebaseapp.com",
    projectId: "otp-app-587ca",
    storageBucket: "otp-app-587ca.appspot.com",
    messagingSenderId: "501922037605",
    appId: "1:501922037605:web:a04d805577f90aea6dab8c"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase