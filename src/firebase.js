import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyA_29tHqTbftIWoPlj29jVbA8mG_P0th3M",
  authDomain: "bt3103-week-6-b9655.firebaseapp.com",
  projectId: "bt3103-week-6-b9655",
  storageBucket: "bt3103-week-6-b9655.appspot.com",
  messagingSenderId: "364452680697",
  appId: "1:364452680697:web:48b7f18a5efc1ae99c6328",
  measurementId: "G-R77D3ZE32E"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;