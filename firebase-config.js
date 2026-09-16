// KIDD OG STORE — Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLYA3daZnWcp9gQmtKBGiW3nmKQFKM-Bo",
  authDomain: "kidd-og-store.firebaseapp.com",
  projectId: "kidd-og-store",
  storageBucket: "kidd-og-store.firebasestorage.app",
  messagingSenderId: "514728842046",
  appId: "1:514728842046:web:b5d39eb481a3998fed126f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);