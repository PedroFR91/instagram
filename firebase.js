// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestone } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBTS5QBRWI3k8miMlQXDILPAx4guLMTj5I',
  authDomain: 'instaclone-c71f0.firebaseapp.com',
  projectId: 'instaclone-c71f0',
  storageBucket: 'instaclone-c71f0.appspot.com',
  messagingSenderId: '719000253694',
  appId: '1:719000253694:web:8ae5a2b2400ca54f5da1af',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
