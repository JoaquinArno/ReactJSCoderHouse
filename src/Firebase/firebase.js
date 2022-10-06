import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCiqvVVwWngh4QD5e22uCB61LuyqcYap6U",
  authDomain: "reactjsappparsifal.firebaseapp.com",
  projectId: "reactjsappparsifal",
  storageBucket: "reactjsappparsifal.appspot.com",
  messagingSenderId: "381395783378",
  appId: "1:381395783378:web:aafa996986ad01cb73270b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);