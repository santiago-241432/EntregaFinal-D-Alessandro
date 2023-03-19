import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4CqJvx_ZcRybPKiZb-KK8DqKzXlkrSro",
  authDomain: "proyecto-final-5733e.firebaseapp.com",
  projectId: "proyecto-final-5733e",
  storageBucket: "proyecto-final-5733e.appspot.com",
  messagingSenderId: "741407898913",
  appId: "1:741407898913:web:c570ec450661c33d71d260"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

