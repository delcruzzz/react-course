// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAHbds0cPHzN1eSX0H6jUVeapj11zjuADg',
  authDomain: 'test-technical-01.firebaseapp.com',
  projectId: 'test-technical-01',
  storageBucket: 'test-technical-01.appspot.com',
  messagingSenderId: '325698285810',
  appId: '1:325698285810:web:7269673fa48b21a2d0206b'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)
