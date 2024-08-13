// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyeNjI-GxDdsVJSvOA8GEQorN0UWYlobE",
  authDomain: "mywork-db.firebaseapp.com",
  databaseURL: "https://mywork-db-default-rtdb.firebaseio.com",
  projectId: "mywork-db",
  storageBucket: "mywork-db.appspot.com",
  messagingSenderId: "431892570255",
  appId: "1:431892570255:web:4536694271b8c31ff490fa",
  measurementId: "G-FRZQSRDLDQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
