// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9EwViDsgP-QPxugA4XtcoyMH_jeKYIQI",
    authDomain: "clone-14cce.firebaseapp.com",
    projectId: "clone-14cce",
    storageBucket: "clone-14cce.appspot.com",
    messagingSenderId: "337642294380",
    appId: "1:337642294380:web:e54c59360bccfeb8609c49",
    measurementId: "G-JZMMYMS4SM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };