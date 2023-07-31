import React from "react";
import Navbar from "../components/navbar.component";
import roypic from "../resources/my linkedin pfp.jpg";
import Button from "../components/button.component";
import llogo from "../resources/l-logo.png";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-toppage to-bottompage min-h-screen bg-fixed">
        <div className="about-body flex flex-col pt-[130px] px-2 mx-28 gap-10 ">
          <div className="about-header">
            <h1 className="text-4xl text-back font-semibold">About Me</h1>
          </div>
          <div className="about-body flex flex-row gap-[60px] mx-1">
            <img
              src={roypic}
              alt="mayank"
              className="w-[250px] rounded-xl drop-shadow-md hover:drop-shadow-2xl transition-all hover:scale-105"
            />
            <div className="about-text flex flex-col gap-4">
              <p className="text-back text-xl font-[cursive] leading-[45px]">
                Hi, I'm Mayank Roy, a 3rd year student at SRM Ramapuram.
                <br /> I'm a student full stack web developer and an ML
                enthusiast.
                <br /> I'm keen on building something of real value in the world
                and am hence always looking for new opportunities to explore and
                grow.
              </p>
              <div className="flex flex-col align-middle justify-end items-center text-center gap-5 m-4">
                <h2 className="text-2xl font-bold">
                  Find more in my linkedin page :)
                </h2>
                <a
                  href="https://www.linkedin.com/in/roy-mayank/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button btnimg={llogo} btntxt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
