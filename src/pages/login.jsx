import React, { useState } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar.component";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/login.slice";
import glogo from "../resources/g-logo.png";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(result.user));
        localStorage.setItem("isLoggedIn", true);
        navigate("/blog");
        dispatch(loginActions.toggleLoggedIn());
        dispatch(
          loginActions.setInfo([
            result.user.displayName,
            result.user.email,
            result.user.photoURL,
          ])
        );
      })
      .catch((error) => {
        console.log("Error signing in with Google:", error);
      });
  };

  return (
    <div className="bg-gradient-to-b from-toppage to-bottompage min-h-screen bg-fixed">
      {!loggedIn && (
        <div className="flex flex-col items-center justify-center h-screen">
          <div
            onClick={signInWithGoogle}
            className="bg-white cursor-pointer px-5 py-2 flex flex-row items-center rounded-xl shadow-md hover:shadow-lg transition-all gap-6"
          >
            <img src={glogo} alt="google" width={40} />
            Sign in with Google
          </div>
        </div>
      )}
    </div>
  );
}
