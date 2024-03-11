// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDas2AzyASE8xsLu5_fxO4dy0m0ptBJbRI",
    authDomain: "netflix-clone-yt-bee09.firebaseapp.com",
    projectId: "netflix-clone-yt-bee09",
    storageBucket: "netflix-clone-yt-bee09.appspot.com",
    messagingSenderId: "1089200705342",
    appId: "1:1089200705342:web:ab8a61c4bbed1f057ba66f"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }