// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import { getFirestore} from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyC5pCt5TnV9-LLmAHDdbw1vO083NKJ9A-8",
  authDomain: "reactjs-portfolio-11e96.firebaseapp.com",
  projectId: "reactjs-portfolio-11e96",
  storageBucket: "reactjs-portfolio-11e96.appspot.com",
  messagingSenderId: "154189928604",
  appId: "1:154189928604:web:bd81e6fbec418f7d063559",
  measurementId: "G-YT3JDG31GR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const provider = new GoogleAuthProvider();
export const storgae = getStorage(app)
export const firestore = getFirestore(app);

export const loginWithGoogle = () => signInWithPopup (auth, provider);

















// import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import {getStorage} from 'firebase/storage'
// import { getFirestore} from 'firebase/firestore/lite'

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBTsTTwmCEKOP_Bx7hPyjO9ovkqlNBWAhQ",
//   authDomain: "asadullohs-75646.firebaseapp.com",
//   projectId: "asadullohs-75646",
//   storageBucket: "asadullohs-75646.appspot.com",
//   messagingSenderId: "879901928903",
//   appId: "1:879901928903:web:f40b8fbc620b164ecc3de2",
//   measurementId: "G-E0RN9MEENT"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth()
// const provider = new GoogleAuthProvider();
// export const storage = getStorage(app)
// export const firestore = getFirestore(app);

// export const loginWithGoogle = () => signInWithPopup (auth, provider);
