import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import flightlogo from "../resources/airplane_logo.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { UserContext } from "../context/user.context";

const Navbar = () => {
  const [darkmode, setDarkmode] = useState(false);
  const toggledarkmode = () => {
    setDarkmode(!darkmode);
    document.documentElement.classList.toggle("dark");
  }

  const [showUserDetails, setShowUserDetails] = useState(false);

  const { user, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const SignUserOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
    });
  };

  return (
    <div className="flex flex-col fixed w-full mt-10 drop-shadow-xl z-50">
      <div className="flex flex-row justify-between w-[70%] items-center mx-auto bg-white text-center p-2 rounded-3xl h-35 z-50 dark:bg-slate-900 dark:text-white">
        <div className="ml-3">
          <Link to="/">
            <img src={flightlogo} alt="logo" width={40} />
          </Link>
        </div>
        <div className="flex flex-row gap-10 mr-10 justify-center text-center items-center">
          <NavLink to="/">
            <h2 className="cursor-pointer hover:text-indigo hover:font-semibold hover:tracking-wider transition-all">
              {" "}
              About Me{" "}
            </h2>
          </NavLink>
          <NavLink to="/movie-game">
            <h2 className="cursor-pointer hover:text-indigo hover:font-semibold hover:tracking-wider transition-all">
              {" "}
              Movie Game{" "}
            </h2>
          </NavLink>
          <NavLink to="/blog">
            <h2 className="cursor-pointer hover:text-indigo hover:font-semibold hover:tracking-wider transition-all">
              {" "}
              Blog{" "}
            </h2>
          </NavLink>
          {isLoggedIn && (
            <>
              <div
                onMouseEnter={() => setShowUserDetails(true)}
                onMouseLeave={() => setShowUserDetails(false)}
              >
                <img
                  src={user?.photoURL}
                  alt="prof"
                  width={35}
                  className="rounded-3xl hover:transform transition-transform hover:scale-110 cursor-pointer"
                />
                {showUserDetails && (
                  <div className="userdeets absolute  mr-10 bg-white rounded-2xl p-2 drop-shadow-md">
                    <p className="text-center text-sm font-bold">
                      {" "}
                      {user?.displayName}{" "}
                    </p>
                    <p className="text-center text-sm font-semibold">
                      {" "}
                      {user?.email}{" "}
                    </p>
                    <button
                      className="text-center text-lg font-semibold text-red-500 transition-all hover:transform hover:scale-105 hover:tracking-wide cursor-pointer"
                      onClick={() => {
                        SignUserOut();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
          <button className="hover:text-indigo flex" onClick={toggledarkmode}><span class="material-symbols-outlined">
            {darkmode ? 'dark_mode' : 'light_mode'}
          </span></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
