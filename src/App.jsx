import React, { useState, useEffect } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Project from "./Components/Project";
import About from "./Components/About";
import profile from "./assets/profile.jpg";
import Footer from "./Components/Footer";

const App = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const closeOverlay = () => {
    setIsAboutOpen(false);
    setIsContactOpen(false);
    setIsEducationOpen(false);
    setIsProjectOpen(false);
    const header = document.getElementById("header");
    header.classList.remove("scaled-blurred");
  };

  const applyTransform = () => {
    const header = document.getElementById("header");
    header.classList.add("scaled-blurred");
  };

  useEffect(() => {
    // Add 'is-preload' class to body when component mounts
    document.body.classList.add("is-preload");

    // Remove 'is-preload' class after a delay
    const timer = setTimeout(() => {
      document.body.classList.remove("is-preload");
    }, 100);

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="wrapper"
      className="w-full flex relative items-center flex-col h-full p-10 mobile:p-0"
    >
      {/* Navigation Button */}
      <header
        id="header"
        className="first:mt-0 pb-10 flex relative flex-col items-center text-center p-3 mobile:p-0 mobile:pb-10 space-y-[3.5rem]"
      >
        <div className="logo w-24 h-24 leading-5 border rounded-full overflow-hidden relative mt-[3.5rem] transition-opacity duration-325 ease-in-out before:content-[''] before:block before:absolute before:top-[-3.5rem] before:left-1/2 before:-translate-x-1/2 before:w-[1px] before:h-[calc(3.5rem+1px)] before:bg-white">
          <img src={profile} alt="" />
        </div>
        <div className="content border-solid border-white border-t border-b max-w-[100%] mobile:max-w-[70%]  relative mt-[3.5rem] transition-opacity duration-325 ease-in-out before:content-[''] before:block before:absolute before:top-[-3.5rem] before:left-1/2 before:-translate-x-1/2 before:w-[1px] before:h-[calc(3.5rem+1px)] before:bg-white">
          <div className="inner text-white max-h-[45rem] w-full text-center px-3 py-5 mobile:px-8 mobile:py-8">
            <h2 className="">HI, I'm Gowthaman S V</h2>
            <h3 className="">A MERN Stack Developer</h3>
            <p>
              I am adept at overseeing backend processes and creating user
              interfaces that are easy to use.
            </p>
          </div>
        </div>
        <nav className="relative before:content-[''] before:block before:absolute before:top-[-3.5rem] before:left-1/2 before:-translate-x-1/2 before:w-[1px] before:h-[calc(3.5rem+1px)] before:bg-white">
          <ul className="flex flex-col mobile:flex-row border rounded">
            <li className="">
              <button
                onClick={() => {
                  setIsAboutOpen(true);
                  applyTransform();
                }}
              >
                About
              </button>
            </li>
            <li className="border-l-0 border-t mobile:border-l mobile:border-t-0">
              <button
                onClick={() => {
                  setIsProjectOpen(true);
                  applyTransform();
                }}
              >
                Project
              </button>
            </li>
            <li className="border-l-0 border-t mobile:border-l mobile:border-t-0">
              <button
                onClick={() => {
                  setIsEducationOpen(true);
                  applyTransform();
                }}
              >
                Education
              </button>
            </li>
            <li className="border-l-0 p-0 border-t mobile:border-l mobile:border-t-0">
              <button
                onClick={() => {
                  setIsContactOpen(true);
                  applyTransform();
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={`overlay ${
          isAboutOpen || isProjectOpen || isEducationOpen || isContactOpen
            ? "visible"
            : ""
        }`}
        onClick={closeOverlay}
      >
        {isAboutOpen && <About close={closeOverlay} />}
        {isProjectOpen && <Project close={closeOverlay} />}
        {isEducationOpen && <Education close={closeOverlay} />}
        {isContactOpen && <Contact close={closeOverlay} />}
      </div>

      <Footer />
    </div>
  );
};

export default App;
