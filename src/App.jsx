import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.component";
import { Link } from "react-router-dom";
import Slider from "./components/slider.component";
import Step from "./components/step.component";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  const projects = [{ name: "Old portfolio website", description: "An initial attempt with raw react and web-development knowledge to build a portfolio application. Accompanied with an API based game to ", when: "Apr 2023", skills: [] },
  { name: "React-Redux Salary Calculator", description: "Quite basic react salary calculator", when: "Jun 2023" },
  { name: "Fleetwise", description: "Fleet management app", when: "Aug 2023" },
  { name: "Travmore", description: "Here Maps Hackathon", when: "Dec 2023" }]

  return (
    <>
      <div className="h-screen bg-gradient-to-b	from-[#6DE5FF] to-white">
        <Navbar />
        <div
          className="flex flex-col absolute left-1/2 bottom-5 rounded-full p-3 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
        >
          <span className="material-icons text-2xl font-extrabold">keyboard_arrow_down</span></div>
        <div className="px-52 py-56 flex flex-row justify-between">
          <div className="flex flex-col"><p className="font-extrabold text-8xl">MAYANK</p>
            <p className="font-extrabold text-8xl leading-relaxed flex items-center">
              ROY<span className="text-xl ml-4 my-10 text-gray-500 self-start">{'\''}s portfolio</span>
            </p>
            <p className="text-lg font-bold mx-2 text-gray-500"> Student Developer, CS enthusiast</p>
            <div className="stacks-known font-semibold text-gray-500 mx-1 my-5 flex flex-row gap-2">
              <span className="border border-double border-sky-400  rounded-full px-3 py-1 cursor-pointer">React.js</span>
              <span className="border border-double border-sky-400  rounded-full px-3 py-1 cursor-pointer">Next.js</span>
              <span className="border border-double border-sky-400  rounded-full px-3 py-1 cursor-pointer">Python</span>
              <span className="border border-double border-sky-400  rounded-full px-3 py-1 cursor-pointer">FastAPI</span>
              <span className="border border-double border-sky-400  rounded-full px-3 py-1 cursor-pointer">Firebase</span>
              <span className="border border-double border-sky-400  rounded-full px-3 py-1 cursor-pointer">& More</span>
            </div></div>

          <div className="flex flex-col gap-12 items-center">
            <Link
              to="https://www.linkedin.com/in/roy-mayank/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex flex-row justify-between gap-4 bg-gradient-to-r	from-[#0258FF] to-[#9FBEF9] py-5 px-16 rounded-full font-semibold text-white tracking-wider hover:to-[#6d9df6] transition-all"><span className="material-symbols-outlined">
                north_east
              </span>Linkedin</button>
            </Link>
            <Link
              to="https://github.com/Overthinkr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex flex-row justify-between gap-4 bg-gradient-to-r	from-[#0258FF] to-[#9FBEF9] py-5 px-16 rounded-full font-semibold text-white tracking-wider hover:to-[#6d9df6] transition-all"><span className="material-symbols-outlined">
                north_east
              </span>Github</button>
            </Link>
            <Link
              to="https://linktr.ee/Mayank.Roy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex flex-row justify-between gap-4 bg-gradient-to-r	from-[#54ed6d] to-[#6af1c7] py-5 px-16 rounded-full font-semibold text-white tracking-wider hover:to-[#32ef5e] transition-all"><span className="material-symbols-outlined">
                north_east
              </span>Linktree</button>
            </Link>
          </div>
        </div>
      </div >
      <div className="projects bg-gradient-to-b from-[#6270E8] to-[#c7ccff] items-center text-center flex flex-col m-auto p-10 h-screen">
        <p className="font-bold leading-loose text-4xl p-5">MY WEB DEV PROJECTS</p>
        <div className="flex flex-row w-[70%] gap-40">
          <div className="flex flex-row w-10 justify-between">
            <div className="container">
              <Step currentIndex={currentIndex} steps={projects} />
            </div>
            <Slider currentIndex={currentIndex} onChange={handleIndexChange} />
          </div>
          <div className="glass-cards rounded-xl drop-shadow-3xl w-full p-10 m-4 flex flex-col gap-6 w-fixed">
            <p className="text-2xl font-extrabold">{projects[currentIndex].name}</p>
            <p className="font-medium text-lg">{projects[currentIndex].description}</p>
          </div>
        </div>
      </div>
      <div className="App h-screen bg-landing-one bg-cover bg-no-repeat bg-left-top m-auto flex flex-row-reverse px-20 py-36">
        <div className="glass-cards rounded-xl drop-shadow-2xl max-w-[700px] p-6 flex justify-center">
          <div className="flex flex-col p-6 justify-between items-center">
            <h3 className="font-bold text-2xl"> ABOUT ME</h3>
            <hr className="text-black border-black h-px w-full" />
            <p>I am a keen and fervid developer in my 3rd year CSE course at SRM Institute of Science and Technology. Looking forward to build something of value in the world and grasp every opportunity to grow. <p className="font-semibold">Also, love flying</p></p>
            <p className="font-bold">⚓🛞A voyager in the world of AI development</p>
            <div className="flex gap-4">
              <p className=" border-black border my-1 px-6 py-1 rounded-full font-medium">Full-Stack Web Developer</p>
              <p className=" border-black border my-1 px-6 py-1 rounded-full font-medium">Machine Learning</p>
            </div>
            <a href="mailto:roy050703@gmail.com?body=Contact_Mayank">
              <button className="bg-blue-600 p-3 rounded-3xl text-cyan-50 flex items-center justify-center gap-2">
                Reach me here "roy050703@gmail.com"<span className="material-symbols-outlined">north_east</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
