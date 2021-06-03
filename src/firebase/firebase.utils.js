import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBxkd7RrseZrNmbd4hs8Qg3YsYZVkdKSo4",
  authDomain: "cellphone-online-store.firebaseapp.com",
  projectId: "cellphone-online-store",
  storageBucket: "cellphone-online-store.appspot.com",
  messagingSenderId: "799057269596",
  appId: "1:799057269596:web:7dfd4838053c850dbf2799",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithEmailAndPassword = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default firebase;
