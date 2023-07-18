import React from "react";
import { Link, NavLink } from "react-router-dom";
import flightlogo from "../resources/airplane_logo.jpg";

export default function Navbar() {
  return (
    <div className="flex flex-col fixed w-full mt-10 drop-shadow-xl">
      <div className="flex flex-row justify-between w-[90%] items-center mx-auto bg-white text-center p-2 rounded-3xl h-35 z-50">
        <div className="ml-3">
          <Link to="/">
            <img src={flightlogo} alt="logo" width={40} />
          </Link>
        </div>
        <div className="flex flex-row gap-10 mr-10 justify-center text-center items-center">
          <NavLink to="/about">
            <h2 className="cursor-pointer hover:text-indigo hover:font-semibold hover:tracking-wider transition-all">
              {" "}
              About Mayank{" "}
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
        </div>
      </div>
    </div>
  );
}
