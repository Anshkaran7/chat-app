// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoY7vRmiwsqp3RGHzwBjaXfZP-haww4Pw",
  authDomain: "chat-123ff.firebaseapp.com",
  projectId: "chat-123ff",
  storageBucket: "chat-123ff.appspot.com",
  messagingSenderId: "457513272352",
  appId: "1:457513272352:web:619c363fcdaac819902845"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()