import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.component";
import { Link } from "react-router-dom";
// import Slider from "./components/slider.component";
// import Step from "./components/step.component";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleIndexChange = (index) => {
  //   setCurrentIndex(index);
  // };

  // const projects = [{ name: "Old portfolio website", description: "An initial attempt with raw react and web-development knowledge to build a portfolio application. Accompanied with an API based game to ", when: "Apr 2023", skills: [] },
  // { name: "React-Redux Salary Calculator", description: "Quite basic react salary calculator", when: "Jun 2023" },
  // { name: "Fleetwise", description: "Fleet management app", when: "Aug 2023" },
  // { name: "Travmore", description: "Here Maps Hackathon", when: "Dec 2023" }]

  const variants = {
    init: { y: +200 },
    after: {
      y: 0, transition: {
        staggerChildren: 0.15
      }
    }
  }

  const items = {
    init: { y: 200, opacity: 0 },
    after: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-[#6DE5FF] to-white dark:bg-gradient-to-t dark:from-slate-900 dark:to-slate-800 dark:text-white">
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
          <span className="material-icons text-2xl font-extrabold">keyboard_arrow_down</span>
        </div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-7 md:px-24 lg:px-52 py-24 md:py-36 lg:py-56 flex flex-col md:flex-row justify-between"
          >
            <div className="flex flex-col mb-10 md:mb-0">
              <p className="font-extrabold text-4xl md:text-6xl lg:text-8xl">MAYANK</p>
              <p className="font-extrabold text-4xl md:text-6xl lg:text-8xl leading-relaxed flex items-center">
                ROY
                <span className="text-lg md:text-xl ml-4 my-4 md:my-10 text-gray-500 self-start">
                  {'\''}s portfolio
                </span>
              </p>
              <p className="text-base md:text-lg font-bold mx-2 text-gray-500">
                Student Developer, CS enthusiast
              </p>
              <motion.div
                variants={variants}
                initial="init"
                animate="after"
                className="stacks-known font-semibold text-gray-500 mx-1 my-5 flex flex-wrap gap-2"
              >
                <motion.span
                  variants={items}
                  className="border border-double border-sky-400 rounded-full px-3 py-1 cursor-pointer"
                >
                  Python/ML
                </motion.span>
                <motion.span
                  variants={items}
                  className="border border-double border-sky-400 rounded-full px-3 py-1 cursor-pointer"
                >
                  React.js
                </motion.span>
                <motion.span
                  variants={items}
                  className="border border-double border-sky-400 rounded-full px-3 py-1 cursor-pointer"
                >
                  Next.js
                </motion.span>
                <motion.span
                  variants={items}
                  className="border border-double border-sky-400 rounded-full px-3 py-1 cursor-pointer"
                >
                  Express.js
                </motion.span>
                <motion.span
                  variants={items}
                  className="border border-double border-sky-400 rounded-full px-3 py-1 cursor-pointer"
                >
                  Firebase
                </motion.span>
                <motion.span
                  variants={items}
                  className="border border-double border-sky-400 rounded-full px-3 py-1 cursor-pointer"
                >
                  & More
                </motion.span>
              </motion.div>
            </div>

            <div className="flex flex-col gap-6 md:gap-12 items-center">
              <Link
                to="https://www.linkedin.com/in/roy-mayank/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex flex-row justify-between gap-4 bg-gradient-to-r from-[#0258FF] to-[#9FBEF9] dark:from-[#0D47A1] dark:to-[#004D40] py-3 md:py-5 px-8 md:px-16 rounded-full font-semibold text-white tracking-wider hover:to-[#6d9df6] transition-all">
                  <span className="material-symbols-outlined">north_east</span>
                  Linkedin
                </button>
              </Link>
              <Link
                to="https://github.com/Overthinkr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex flex-row justify-between gap-4 bg-gradient-to-r from-[#0258FF] to-[#9FBEF9] dark:from-[#0D47A1] dark:to-[#004D40] py-3 md:py-5 px-8 md:px-16 rounded-full font-semibold text-white tracking-wider hover:to-[#6d9df6] transition-all">
                  <span className="material-symbols-outlined">north_east</span>
                  Github
                </button>
              </Link>
              <Link
                to="https://linktr.ee/Mayank.Roy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex flex-row justify-between gap-4 bg-gradient-to-r from-[#54ed6d] to-[#6af1c7] dark:from-[#0D47A1] dark:to-[#004D40] py-3 md:py-5 px-8 md:px-16 rounded-full font-semibold text-white tracking-wider hover:to-[#32ef5e] transition-all">
                  <span className="material-symbols-outlined">north_east</span>
                  Linktree
                </button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="App h-screen bg-landing-one bg-cover bg-no-repeat bg-left-top m-auto flex flex-col md:flex-row-reverse px-8 md:px-20 py-24 md:py-36">
        <div className="glass-cards rounded-xl drop-shadow-2xl max-w-[700px] p-6 flex justify-center">
          <div className="flex flex-col p-6 justify-between items-center">
            <h3 className="font-bold text-2xl"> ABOUT ME</h3>
            <hr className="text-black border-black h-px w-full" />
            <p>
              I am a keen and fervid developer{" "}
              <span className="font-semibold">(and an avgeek)</span> in my Senior
              Year Bachelors CSE course at SRM Institute of Science and Technology.
              Looking forward to build something of value in the world and grasp
              every opportunity to grow.
            </p>
            <p className="font-bold">⚓🛞Voyaging the world of Machine Learning</p>
            <div className="flex flex-wrap gap-4">
              <p className="border-black border my-1 px-6 py-1 rounded-full font-medium">
                Full(MERN)-Stack Web Developer
              </p>
              <p className="border-black border my-1 px-6 py-1 rounded-full font-medium">
                Machine Learning
              </p>
            </div>
            <a href="mailto:roy050703@gmail.com?body=Contact_Mayank">
              <button className="bg-blue-600 p-3 rounded-3xl text-cyan-50 flex items-center justify-center gap-2">
                Reach me here "roy050703@gmail.com"
                <span className="material-symbols-outlined">north_east</span>
              </button>
            </a>
          </div>
        </div>
      </div> </>
  );
}
