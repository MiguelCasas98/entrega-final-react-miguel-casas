import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqJgSNvYr22vvikCeADyI-GI9P_rad5as",
  authDomain: "electrohouse-ecommerce.firebaseapp.com",
  projectId: "electrohouse-ecommerce",
  storageBucket: "electrohouse-ecommerce.appspot.com",
  messagingSenderId: "650227584427",
  appId: "1:650227584427:web:f40de89e444ae271c7d6ee"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);