import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5gvdqDA2miT6d6q-18pJCSOPnSUe2FwE",
  authDomain: "signal-react-97f9a.firebaseapp.com",
  projectId: "signal-react-97f9a",
  storageBucket: "signal-react-97f9a.appspot.com",
  messagingSenderId: "1008188973899",
  appId: "1:1008188973899:web:017e8813ac0a467a7f3ece"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };