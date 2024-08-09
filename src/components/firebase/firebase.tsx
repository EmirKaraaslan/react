import React from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/database';

//Firebase in kendi sitesinedeki dokümandan almış olduğum bu kaynak 
//kodu ekleyerek ilk aşamayı başlatıyorum.



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqQZQ_ERZdv-l7qXKNZtQBHlbO9Xg36tI",
  authDomain: "cybersoft-mywork.firebaseapp.com",
  projectId: "cybersoft-mywork",
  storageBucket: "cybersoft-mywork.appspot.com",
  messagingSenderId: "1064592922887",
  appId: "1:1064592922887:web:28aa0261f9760807abcda2",
  measurementId: "G-WQ49VEPVWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {app , auth};

export default function firebase() {
  return (
    <div>
      
    </div>
  )
}
