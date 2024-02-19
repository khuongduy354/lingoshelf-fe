import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { firebaseApp, firebaseAuth, ggProvider } from "../helper/firebase";
import { useEffect } from "react";
export const Login = () => {
  const signInGoogle = () => {
    signInWithPopup(firebaseAuth, ggProvider).then(async (result) => {
      const idTok = await firebaseAuth.currentUser.getIdToken();
      const url = "http://localhost:8000/v1/login";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `${idTok}`,
        },
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        alert("Login success");
      } else {
        alert("Login failed");
      }
    });
  };

  return (
    <div>
      <button onClick={() => signInGoogle()}>Login</button>
    </div>
  );
};
