
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe4ANkAVSga8GmkQF8fFBejrh5YxlxSy8",
  authDomain: "instagram-clone-d3c39.firebaseapp.com",
  projectId: "instagram-clone-d3c39",
  storageBucket: "instagram-clone-d3c39.appspot.com",
  messagingSenderId: "340274174514",
  appId: "1:340274174514:web:548444ab8dad4b2b51fa2b"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();