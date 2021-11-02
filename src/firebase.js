import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjx8vSqfCIx0B8MwwZdmX7lsquvAeXKGY",
  authDomain: "linkedin-clone-f2f7b.firebaseapp.com",
  projectId: "linkedin-clone-f2f7b",
  storageBucket: "linkedin-clone-f2f7b.appspot.com",
  messagingSenderId: "188068215116",
  appId: "1:188068215116:web:0160be4442854407c8f7e9",
  measurementId: "G-3XCQERFQYD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
