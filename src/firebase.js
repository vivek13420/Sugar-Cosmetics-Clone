import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyB896pvCZwGVU5RUIWBIVzUAtTllNAu0n8",
//   authDomain: "fir-auth-1132.firebaseapp.com",
//   projectId: "fir-auth-1132",
//   storageBucket: "fir-auth-1132.appspot.com",
//   messagingSenderId: "1029021654707",
//   appId: "1:1029021654707:web:14aa4dee98449061701ac6",
//   measurementId: "G-MFP6M081T7",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBwGkDcgMI8W0Ekqj9JzSTUEQB10PqEGj0",
  authDomain: "fir-auth-7c0b6.firebaseapp.com",
  projectId: "fir-auth-7c0b6",
  storageBucket: "fir-auth-7c0b6.appspot.com",
  messagingSenderId: "392239304558",
  appId: "1:392239304558:web:04549c75dbe2845729fb7f",
  measurementId: "G-Z2MWH6HXS0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
