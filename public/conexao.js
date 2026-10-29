import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMwkOmrGtE0vt-WORY9j5Vey_xgUicVk8",
  authDomain: "clientes-mae.firebaseapp.com",
  databaseURL: "https://clientes-mae-default-rtdb.firebaseio.com",
  projectId: "clientes-mae",
  storageBucket: "clientes-mae.firebasestorage.app",
  messagingSenderId: "1037855946543",
  appId: "1:1037855946543:web:6d53bee1919a8a8eb913da",
  measurementId: "G-MT8QCZ74KQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);