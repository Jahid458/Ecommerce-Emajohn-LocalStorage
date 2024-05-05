// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGG6qRqyvsAz32AAVm3kCDtFdsDz496no",
  authDomain: "ema-john-8841a.firebaseapp.com",
  projectId: "ema-john-8841a",
  storageBucket: "ema-john-8841a.appspot.com",
  messagingSenderId: "745439498521",
  appId: "1:745439498521:web:73deb2adc067cbbc007588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
