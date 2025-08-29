// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfBUZ4UbTl1n6yC-6IMoqeZ3VpfxddXMo",
  authDomain: "fashion-express-c89b4.firebaseapp.com",
  projectId: "fashion-express-c89b4",
  storageBucket: "fashion-express-c89b4.firebasestorage.app",
  messagingSenderId: "841775407823",
  appId: "1:841775407823:web:ef657df232b0a7a989cdba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };