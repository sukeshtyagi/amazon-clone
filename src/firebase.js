import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs_hHbxulHACOwJPXok-VplFbA8dHAumM",
  authDomain: "clone-65449.firebaseapp.com",
  projectId: "clone-65449",
  storageBucket: "clone-65449.appspot.com",
  messagingSenderId: "696380573231",
  appId: "1:696380573231:web:e90b1f3af1b5dbdbc368da",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
