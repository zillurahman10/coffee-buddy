import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyALp7Fm6MRB_uxz1YaJoF6mk3yORfkkjfM",
    authDomain: "coffee-buddy-zr.firebaseapp.com",
    projectId: "coffee-buddy-zr",
    storageBucket: "coffee-buddy-zr.appspot.com",
    messagingSenderId: "367108095513",
    appId: "1:367108095513:web:27747a5ba5d60a57c47488",
    measurementId: "G-KJWLJZZZZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;