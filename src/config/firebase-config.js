import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApAHHVSD-9BId-GMj7BAA0IUX91LeosB0",
  authDomain: "expense-tracker-d14e8.firebaseapp.com",
  projectId: "expense-tracker-d14e8",
  storageBucket: "expense-tracker-d14e8.appspot.com",
  messagingSenderId: "738196435189",
  appId: "1:738196435189:web:007916e2e57f751fe6d5bc",
  //  apiKey: "AIzaSyCZWFhO0GNrKNj3AVOkC2pD3J936TMO2e0",
  // authDomain: "expense-tracker-44d14.firebaseapp.com",
  // projectId: "expense-tracker-44d14",
  // storageBucket: "expense-tracker-44d14.appspot.com",
  // messagingSenderId: "348736329573",
  // appId: "1:348736329573:web:3f73710ce41043666eb38c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

