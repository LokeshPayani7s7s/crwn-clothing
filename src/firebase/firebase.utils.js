import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBu1ggIlgQKHFMkppZrmtAf9TV9jq59ykY",
  authDomain: "crwn-db-a6c2d.firebaseapp.com",
  projectId: "crwn-db-a6c2d",
  storageBucket: "crwn-db-a6c2d.appspot.com",
  messagingSenderId: "1078637571402",
  appId: "1:1078637571402:web:cd5c07073da7b1c32065b3",
  measurementId: "G-S072Q1YG1G"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;