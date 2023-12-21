import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAY8k4e6SWetPz0kHeX22DEtnTot9v_TDM",
  authDomain: "blog-11ac2.firebaseapp.com",
  projectId: "blog-11ac2",
  storageBucket: "blog-11ac2.appspot.com",
  messagingSenderId: "877289891554",
  appId: "1:877289891554:web:325d51851b4d2f6d62a0bb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
