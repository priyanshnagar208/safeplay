
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2C6AFRNXuCFbTNByARN4AXlcmj4OjQpE",
  authDomain: "safepaywebsite.firebaseapp.com",
  projectId: "safepaywebsite",
  storageBucket: "safepaywebsite.firebasestorage.app",
  messagingSenderId: "190304552907",
  appId: "1:190304552907:web:cdc8ae49ad684b46a0984e",
  measurementId: "G-8W809H63C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);