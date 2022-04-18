// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCevn-gzkIt0YTaehUcwI3he3JDMXN_0Uo",
    authDomain: "assignment-10-aa3d5.firebaseapp.com",
    projectId: "assignment-10-aa3d5",
    storageBucket: "assignment-10-aa3d5.appspot.com",
    messagingSenderId: "304939533982",
    appId: "1:304939533982:web:64d9f5b1c9d574202d1d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;