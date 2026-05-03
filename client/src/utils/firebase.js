
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY || "AIzaSyBPBCQOyuRLe673iqVwLMIfBXnfoM4BpuE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN || "interview-agent-7a68e.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID || "interview-agent-7a68e",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET || "interview-agent-7a68e.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "393807611233",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:393807611233:web:ab9f2715b7e6fab5d9f120",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID || "G-7TY2WZ0YBL"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}