import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD0r7hicr5irPzRdZtYfYmOV2oUvY9npMY",
  authDomain: "reactinstaclone-75912.firebaseapp.com",
  projectId: "reactinstaclone-75912",
  storageBucket: "reactinstaclone-75912.appspot.com",
  messagingSenderId: "986071947564",
  appId: "1:986071947564:web:ab03ffdb4555ed7ac2f489",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
