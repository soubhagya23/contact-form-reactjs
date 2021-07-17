import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCztpexZAD3Foa-lS26oWjXuj8hiR82JHw",
  authDomain: "contact-form-react-c103e.firebaseapp.com",
  projectId: "contact-form-react-c103e",
  storageBucket: "contact-form-react-c103e.appspot.com",
  messagingSenderId: "898770705027",
  appId: "1:898770705027:web:fdc7ea2bf76df4a98b19b6",
});

var db = firebaseApp.firestore();

export { db };
