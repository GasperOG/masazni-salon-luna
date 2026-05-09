import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAT9b8XH5sTELvaud6HexiCWonDXOVXP1g",
  authDomain: "masazni-salon-luna.firebaseapp.com",
  projectId: "masazni-salon-luna",
  storageBucket: "masazni-salon-luna.firebasestorage.app",
  messagingSenderId: "851286271983",
  appId: "1:851286271983:web:34ba24d12c43b25a34f81a",
  measurementId: "G-JT035Q1JZ0"
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics only on the client side
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
