import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQ22kFrkgQXEt00IzSNwPSNE7Dkb-Yz_U",
    authDomain: "clone-cdf1b.firebaseapp.com",
    projectId: "clone-cdf1b",
    storageBucket: "clone-cdf1b.appspot.com",
    messagingSenderId: "317701941591",
    appId: "1:317701941591:web:379e22f0fb73bc366db612",
    measurementId: "G-W4JMWYS7B1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db,auth};