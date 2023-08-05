import React, { useState } from "react";
import { auth, provider } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import glogo from "../resources/g-logo.png";
import { useForm } from "react-hook-form";

export default function Login() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [allErrors, setAllErrors] = useState("");

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [signupUser, setSignupUser] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(result.user));
        localStorage.setItem("isLoggedIn", true);
        navigate("/blog");
      })
      .catch((error) => {
        console.log("Error signing in with Google:", error);
      });
  };

  const handleLoginSubmit = (data) => {
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        navigate("/blog");
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("password")) {
          setAllErrors("Invalid password!");
        } else if (errorMessage.includes("email")) {
          setAllErrors("Invalid email!");
        } else {
          setAllErrors("Unknown error!");
        }
      });
  };

  const handleSignUpSubmit = async () => {
    createUserWithEmailAndPassword(auth, signupUser, signupPassword)
      .then((userCredential) => {
        navigate("/blog");
        updateProfile(auth.currentUser, {
          photoURL:
            "https://divedigital.id/wp-content/uploads/2022/07/1-Blank-TikTok-Default-PFP.jpg",
        }).catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("already")) {
          setAllErrors("User already exists!");
        } else if (errorMessage.includes("password")) {
          setAllErrors("Password must be at least 6 characters!");
        } else if (errorMessage.includes("email")) {
          setAllErrors("Invalid email!");
        } else {
          setAllErrors("Unknown error!");
        }
      });
  };

  return (
    <div className="bg-gradient-to-b from-toppage to-bottompage min-h-screen bg-fixed">
      {!loggedIn && (
        <div className="flex flex-col items-center justify-center h-screen gap-6">
          {!signUp ? (
            <form
              onSubmit={handleSubmit((data) => {
                handleLoginSubmit(data);
              })}
            >
              <div className="login-form gap-5 flex flex-col items-center">
                <h1 className="text-4xl font-bold text-black mb-3">Login</h1>
                <div className="input-field flex flex-col items-center">
                  <input
                    {...register("loginusername", {
                      required: "This is required!",
                    })}
                    type="text"
                    placeholder="Username"
                    className=" rounded-3xl px-5 py-1 bg-white"
                    onChange={(event) => {
                      setUser(event.target.value);
                    }}
                  />
                  {errors.loginusername && (
                    <span className="text-red-500">
                      {errors.loginusername.message}
                    </span>
                  )}
                </div>
                <div className="input-field flex flex-col items-center">
                  <input
                    {...register("loginpassword", {
                      required: "This is required!",
                    })}
                    type="password"
                    placeholder="Password"
                    className=" rounded-3xl px-5 py-1 bg-white"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  {errors.loginpassword && (
                    <span className="text-red-500">
                      {errors.loginpassword.message}
                    </span>
                  )}
                </div>
                <button
                  className="bg-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit(handleSignUpSubmit)}>
              <div className="signup-form gap-5 flex flex-col items-center">
                <h1 className="text-4xl font-bold text-black mb-2">Sign Up</h1>
                <div className="input-field flex flex-col items-center">
                  <input
                    {...register("signupusername", {
                      required: "This is required!",
                    })}
                    type="text"
                    placeholder="Username"
                    className="rounded-3xl px-5 py-1 bg-white"
                    onChange={(event) => {
                      setSignupUser(event.target.value);
                    }}
                  />
                  {errors.signupusername && (
                    <span className="text-red-500">
                      {errors.signupusername.message}
                    </span>
                  )}
                </div>
                <div className="input-field flex flex-col items-center">
                  <input
                    {...register("password", {
                      required: "This is required!",
                    })}
                    type="password"
                    placeholder="Password"
                    className="rounded-3xl px-5 py-1 bg-white"
                    onChange={(event) => {
                      setSignupPassword(event.target.value);
                    }}
                  />
                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="input-field flex flex-col items-center">
                  <input
                    {...register("confirmpassword", {
                      required: "This is required!",
                      validate: (value) =>
                        value === signupPassword || "Passwords do not match.",
                    })}
                    type="password"
                    placeholder="Confirm Password"
                    className="rounded-3xl px-5 py-1 bg-white"
                  />
                  {errors.confirmpassword && (
                    <span className="text-red-500">
                      {errors.confirmpassword.message}
                    </span>
                  )}
                </div>
                <button
                  className="bg-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          )}
          <p className="text-red-500">{allErrors}</p>
          <p
            className="font-semibold tracking-wide text-blue-500 cursor-pointer underline underline-offset-2"
            onClick={() => setSignUp(!signUp)}
          >
            {signUp ? "Already have an account?" : "Don't have an account?"}
          </p>
          <hr className="w-1/2 border-2 border-white rounded-3xl" />
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
