// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import getDatabase from 'firebase/database';
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP0FZ4rgi1OzoFLnB0duqBXkndbKRcrCU",
  authDomain: "flood-alert-system-3619a.firebaseapp.com",
  databaseURL: "https://flood-alert-system-3619a-default-rtdb.firebaseio.com",
  projectId: "flood-alert-system-3619a",
  storageBucket: "flood-alert-system-3619a.appspot.com",
  messagingSenderId: "1095957474670",
  appId: "1:1095957474670:web:d9388e47fe04808b44257f",
  measurementId: "G-67F76VRBDW"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const my_name =(name) =>{
  console.log(name);
}

// const db = getDatabase();

export default {my_name}