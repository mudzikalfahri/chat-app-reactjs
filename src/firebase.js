import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBN3T0eHPGqDI-hB70KQ5kh8HyVpEdN60E",
    authDomain: "chat-db-91ed2.firebaseapp.com",
    projectId: "chat-db-91ed2",
    storageBucket: "chat-db-91ed2.appspot.com",
    messagingSenderId: "900494227379",
    appId: "1:900494227379:web:e9084f5ecae6ffcfcabdc6",
    measurementId: "G-HX75CPWYSW"
  });

  const data = firebaseApp.firestore();

  export default data;