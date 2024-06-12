// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBsPV3sscb31JejaymuWYYvgCc_SeNZgY",
  authDomain: "chat-b7af5.firebaseapp.com",
  projectId: "chat-b7af5",
  storageBucket: "chat-b7af5.appspot.com",
  messagingSenderId: "340135319234",
  appId: "1:340135319234:web:5cf1af7a7327d7291d4d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// kimlik dogrulama hizmetinin referansini aliyoruz
export const auth = getAuth(app)

// google saglayicisinin kurulumuu 
export const provider = new GoogleAuthProvider()

//veri tabaninin referansini aliyoruz
export const db = getFirestore(app)
