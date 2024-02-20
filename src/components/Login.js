import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { firebaseAuth, ggProvider } from "../helper/firebase";
import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export const Login = () => {
  const { setIdTok, setPage } = useContext(AppContext);
  useEffect(() => {
    async function initLogin() {
      if (firebaseAuth.currentUser) {
        const idTok = await firebaseAuth.currentUser.getIdToken();
        const url = "http://localhost:8000/v1/login";
        const res = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `${idTok}`,
          },
        });
        if (res.ok) {
          alert("Login success");
          setIdTok(idTok);
          setPage("mybooks");
        } else {
          alert("Login failed");
          setIdTok(null);
        }
      }
    }
    firebaseAuth.onAuthStateChanged((user) => {
      initLogin();
    });
  }, []);
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
      if (res.ok) {
        alert("Login success");
        setIdTok(idTok);
        setPage("mybooks");
      } else {
        alert("Login failed");
        setIdTok(null);
      }
    });
  };

  return (
    <div>
      <button onClick={() => signInGoogle()}>Login</button>
    </div>
  );
};
