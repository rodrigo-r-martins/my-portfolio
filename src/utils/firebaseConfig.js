import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA-WnMWZYphXLzd44AlWJ2d7Psa-ivYzzI",
  authDomain: "rodrigo-martins-portfolio.firebaseapp.com",
  projectId: "rodrigo-martins-portfolio",
  storageBucket: "rodrigo-martins-portfolio.appspot.com",
  messagingSenderId: "924261899769",
  appId: "1:924261899769:web:c7a8ac96e767453495b128"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database();

export default database;