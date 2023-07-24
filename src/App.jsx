import React from "react";
import "./App.css";
import Button from "./components/button.component";
import Navbar from "./components/navbar.component";
import gitlogo from "./resources/github.jpg";
import linktree from "./resources/linktree.jpg";

function App() {
  return (
    <>
      <div className="App h-screen bg-landing-one bg-cover bg-no-repeat bg-left-top m-auto">
        <Navbar />
        <div
          className="flex flex-col absolute left-1/2 bottom-5 bg-white rounded-full p-3 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
        >
          <span className="material-icons">keyboard_arrow_down</span>
        </div>
      </div>
      <div className="h-screen flex flex-col bg-landing-two bg-cover bg-no-repeat bg-left align-middle justify-end items-center text-center text-white">
        <div className="flex flex-col align-middle justify-end items-center text-center gap-5 m-4">
          <h2 className="text-2xl font-bold">Find the Repository here:</h2>
          <a
            href="https://github.com/Overthinkr/new-portfolio-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button btnimg={gitlogo} btntxt="Github" />{" "}
          </a>
        </div>
        <div className="flex flex-col align-middle justify-end items-center text-center gap-5 m-4">
          <h2 className="text-2xl font-bold">Find my other socials here:</h2>
          <a
            href="https://linktr.ee/Mayank.Roy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button btnimg={linktree} btntxt="Linktree" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
