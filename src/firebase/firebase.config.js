import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpydGw9Nn-ItYBaRCuPOKtMvSupwn8QWM",
  authDomain: "event-explorer-day-82a01.firebaseapp.com",
  projectId: "event-explorer-day-82a01",
  storageBucket: "event-explorer-day-82a01.firebasestorage.app",
  messagingSenderId: "916826887354",
  appId: "1:916826887354:web:969438720d53926ccede83",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
