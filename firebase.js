import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAqYIJEMJiuXiVnvo5j7pdCsylR0320BGQ",
  authDomain: "deliveroo-f76db.firebaseapp.com",
  projectId: "deliveroo-f76db",
  storageBucket: "deliveroo-f76db.appspot.com",
  messagingSenderId: "603553042038",
  appId: "1:603553042038:web:eeab119da8af0787b95957",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
