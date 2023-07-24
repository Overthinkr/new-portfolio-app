import React, { useState } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar.component";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/login.slice";

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
      })
      .catch((error) => {
        console.log("Error signing in with Google:", error);
      });
  };

  return (
    <div className="bg-gradient-to-b from-toppage to-bottompage min-h-screen bg-fixed">
      <Navbar />
      {loggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
}
