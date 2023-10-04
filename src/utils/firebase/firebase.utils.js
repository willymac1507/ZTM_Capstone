// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB0CYnLdG9V9S-uoykCSf9VIgIdiV-JG_Q',
    authDomain: 'crwn-clothing-db-93c6d.firebaseapp.com',
    projectId: 'crwn-clothing-db-93c6d',
    storageBucket: 'crwn-clothing-db-93c6d.appspot.com',
    messagingSenderId: '848421484220',
    appId: '1:848421484220:web:ff98231c7f1a73f36882b9'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);