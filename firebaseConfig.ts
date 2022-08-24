import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaHgEe3Gho0H6ICK-PfnadeGvYumtteV0",
  authDomain: "marketplace-app-5a69b.firebaseapp.com",
  projectId: "marketplace-app-5a69b",
  storageBucket: "marketplace-app-5a69b.appspot.com",
  messagingSenderId: "475285347341",
  appId: "1:475285347341:web:38ba4b4385453078a50944",
  measurementId: "G-B2PLGZL0JN",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
