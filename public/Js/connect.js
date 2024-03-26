import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

 const firebaseConfig = {
    apiKey: "AIzaSyC0wn2NMmqJ52v3esdo28GxH8u6fXjUClk",
    authDomain: "project-fe431.firebaseapp.com",
    projectId: "project-fe431",
    storageBucket: "project-fe431.appspot.com",
    messagingSenderId: "241441495325",
    appId: "1:241441495325:web:6a637beb8076ac50a029f4"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();

export {app}
export {auth}
export {createUserWithEmailAndPassword}
export {signInWithEmailAndPassword}
export {onAuthStateChanged}
export {GoogleAuthProvider}
export {provider}
export {signInWithPopup}
export {signOut}


