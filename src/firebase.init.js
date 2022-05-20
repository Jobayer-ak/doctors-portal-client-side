// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkoVfFUjdnFwSm3WzUOwywhhYr0RO-bxs",
  authDomain: "doctors-portal-ea7ca.firebaseapp.com",
  projectId: "doctors-portal-ea7ca",
  storageBucket: "doctors-portal-ea7ca.appspot.com",
  messagingSenderId: "312711473034",
  appId: "1:312711473034:web:e83087b227ff90de4b4a73",
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
