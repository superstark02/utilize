import { auth } from "../firebase";
import firebase from "firebase/compat/app";
import { getAuth, signOut } from "firebase/auth";

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export default async function login() {
    auth.signInWithPopup(provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // The signed-in user info.
            const user = result.user;
            return user
            // ...
        }).catch((error) => {
        });
}

export async function logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}