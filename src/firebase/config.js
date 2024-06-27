import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvXxn02m87AiiLojTO-36eL8PfewxIvl0",
  authDomain: "black-panter-e-commerce.firebaseapp.com",
  projectId: "black-panter-e-commerce",
  storageBucket: "black-panter-e-commerce.appspot.com",
  messagingSenderId: "691171868747",
  appId: "1:691171868747:web:303075b0b0430bf17b8dce"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)