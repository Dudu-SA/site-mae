import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app-check.js";

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

// Chave do site do reCAPTCHA v3 (gratuito) para o App Check, que o Firebase AI Logic
// exige para a leitura de documentos. Cole a chave entre as aspas quando criar.
const RECAPTCHA_V3_KEY = "";

export const app = initializeApp(firebaseConfig);
if (RECAPTCHA_V3_KEY) {
  initializeAppCheck(app, { provider: new ReCaptchaV3Provider(RECAPTCHA_V3_KEY), isTokenAutoRefreshEnabled: true });
}
export const auth = getAuth(app);
export const db = getFirestore(app);
