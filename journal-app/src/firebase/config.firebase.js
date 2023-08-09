// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCyJxWqKgZRBVCI8_t7zb22YthsmkdHjnA', 
  authDomain: 'journal-app-backend-a3cd5.firebaseapp.com', 
  projectId: 'journal-app-backend-a3cd5', 
  storageBucket: 'journal-app-backend-a3cd5.appspot.com', 
  messagingSenderId: '1042231757252', 
  appId: '1:1042231757252:web:5ed71d4a8bd0d7727ebc91', 
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)
