import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBAryfFVpmYnl1OVEXjM1EhdbQze-IinvM",
    authDomain: "todo-auth-c11.firebaseapp.com",
    projectId: "todo-auth-c11",
    storageBucket: "todo-auth-c11.appspot.com",
    messagingSenderId: "316275732643",
    appId: "1:316275732643:web:ca7c3ff81ab76d81844f16"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 