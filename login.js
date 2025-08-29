import { auth, googleProvider } from './firebase.js';
import { signInWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert(`Login successful! Welcome ${userCredential.user.email}`);
        window.location.href = 'index.html';
    } catch(error) {
        alert(error.message);
    }
});

// Google Login
document.querySelector('.btn-google').addEventListener('click', async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        alert(`Login with Google successful! Welcome ${result.user.displayName}`);
        window.location.href = 'index.html';
    } catch(error) {
        alert(error.message);
    }
});