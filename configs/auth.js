import firebase_app from "./firebase";
import { createUserWithEmailAndPassword, getAuth , signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebase_app);


export const signUp = async(email, password)=> {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export const signIn = async(email, password)=> {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}