import * as firebase from 'firebase';
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDfxm6cmYCHv_WlsxCtRi_gEzgCXSAALfk",
  authDomain: "theprovibers-28f96.firebaseapp.com",
  databaseURL: "https://theprovibers-28f96.firebaseio.com",
  projectId: "theprovibers-28f96",
  storageBucket: "theprovibers-28f96.appspot.com",
  messagingSenderId: "882367912653",
  appId: "1:882367912653:web:44dd7c9cf2ac5f60252784",
  measurementId: "G-C6FSD5KB67"
});


export const firestore = firebase.firestore();
