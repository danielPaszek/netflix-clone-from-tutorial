import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBnaNisLh1zsgzyc9LxCPfcaOFVYK9Fm3E",
  authDomain: "netflix-clone-eae8a.firebaseapp.com",
  projectId: "netflix-clone-eae8a",
  storageBucket: "netflix-clone-eae8a.appspot.com",
  messagingSenderId: "761004174606",
  appId: "1:761004174606:web:2481c81a827b85006a3b5f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
