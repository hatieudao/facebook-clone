import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAX-IDhlTyKPBWXPTfbU3llaQ_lDMPVu24",
    authDomain: "facebook-clone-2020-789ef.firebaseapp.com",
    databaseURL: "https://facebook-clone-2020-789ef.firebaseio.com",
    projectId: "facebook-clone-2020-789ef",
    storageBucket: "facebook-clone-2020-789ef.appspot.com",
    messagingSenderId: "964209415139",
    appId: "1:964209415139:web:b1d2b85b8920f764e686d6",
    measurementId: "G-PDVD793R4T"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;