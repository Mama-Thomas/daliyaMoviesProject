import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {firebase_API_KEY} from "./keys"


const firebaseConfig = {
  apiKey: firebase_API_KEY,
  authDomain: "daliyamovies-54080.firebaseapp.com",
  projectId: "daliyamovies-54080",
  storageBucket: "daliyamovies-54080.appspot.com",
  messagingSenderId: "774293382533",
  appId: "1:774293382533:web:2d8f21b3079c5daaacd0ec",
  measurementId: "G-ND07X9GY7E",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
