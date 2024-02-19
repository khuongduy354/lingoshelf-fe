import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

//TODO: env this
const firebaseConfig = {
  apiKey: "AIzaSyBEvKFgKZpUclm4DWIUyNz-GwyUyrQlMSQ",
  authDomain: "lingoshelf.firebaseapp.com",
  projectId: "lingoshelf",
  storageBucket: "lingoshelf.appspot.com",
  messagingSenderId: "592627651608",
  appId: "1:592627651608:web:161282eecac40bf6dbdf6d",
  measurementId: "G-T99071R5W6",
};
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const ggProvider = new GoogleAuthProvider();
