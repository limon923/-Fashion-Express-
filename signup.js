import { auth, googleProvider } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert(`Sign up successful! Welcome ${fullName}`);
        window.location.href = 'index.html';
    } catch(error) {
        alert(error.message);
    }
});

// Google Signup
document.querySelector('.btn-google').addEventListener('click', async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        alert(`Sign up with Google successful! Welcome ${result.user.displayName}`);
        window.location.href = 'index.html';
    } catch(error) {
        alert(error.message);
    }
});