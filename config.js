import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCp0uz5jR9yL7HLI79czrZ_AHG-dUDeSoI",
    authDomain: "pro-c7-config.firebaseapp.com",
    projectId: "pro-c7-config",
    storageBucket: "pro-c7-config.appspot.com",
    messagingSenderId: "148585339357",
    appId: "1:148585339357:web:01151455261e3004d7fe34"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
