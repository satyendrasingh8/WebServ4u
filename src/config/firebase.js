import firebase from 'firebase'



 var firebaseConfig = {
    apiKey: "AIzaSyA8t-pSyq2oxpoow6mj8JC_lWxBY4FX3FA",
    authDomain: "quizbeater-2ac1c.firebaseapp.com",
    projectId: "quizbeater-2ac1c",
    storageBucket: "quizbeater-2ac1c.appspot.com",
    messagingSenderId: "676638204565",
    appId: "1:676638204565:web:a6ff35ade19ce46cccb19c",
    measurementId: "G-8MZQ8X36GX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   const db = firebase.firestore();
  export default db