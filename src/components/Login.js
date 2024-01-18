import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { firebaseAuth, ggProvider } from "../firebase";
import { useEffect } from "react";
export const Login = () => {
  const signInGoogle = () => {
    signInWithPopup(firebaseAuth, ggProvider).then((result) => {
      console.log(result);
    });
  };

  return (
    <div>
      <button onClick={() => signInGoogle()}>Login</button>
    </div>
  );
};
