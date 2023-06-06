import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "funko-world.firebaseapp.com",
  projectId: "funko-world",
  storageBucket: "funko-world.appspot.com",
  messagingSenderId: "109804419834",
  appId: "1:109804419834:web:8984250ede37067e3f6743"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
