import "firebase/auth";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDn9jZo7IzFwSS0ge8uiEOwOaos82qypZ4",
  authDomain: "agikfendi-uas.firebaseapp.com",
  databaseURL: "https://agikfendi-uas.firebaseio.com",
  projectId: "agikfendi-uas",
  storageBucket: "agikfendi-uas.appspot.com",
  messagingSenderId: "222265854401",
  appId: "1:222265854401:web:081874ea1eadd17fb28740",
  measurementId: "G-VHGD2E02JV"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
