import React, { useState, useEffect } from 'react';
import './App.css';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Project from './Components/Project';
import About from './Components/About';
import profile from './assets/profile.jpg';
import Footer from './Components/Footer';

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
    const header = document.getElementById('header');
    header.classList.remove('scaled-blurred');
  };

  const applyTransform = () => {
    const header = document.getElementById('header');
    header.classList.add('scaled-blurred');
  };

  useEffect(() => {
    // Add 'is-preload' class to body when component mounts
    document.body.classList.add('is-preload');

    // Remove 'is-preload' class after a delay
    const timer = setTimeout(() => {
      document.body.classList.remove('is-preload');
    }, 100);

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='wrapper' className='content'>
      {/* Navigation Button */}
      <header id="header">
        <div className="logo overflow-hidden">
          <img src={profile} alt="" />
        </div>
        <div className="content">
          <div className="inner text-white">
            <h2 className=''>HI, I'm Gowthaman S V</h2>
            <h3 className=''>A MERN Stack Developer</h3>
            <p>I am adept at overseeing backend processes and creating user interfaces that are easy to use.</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><button onClick={() => { setIsAboutOpen(true); applyTransform(); }}>About</button></li>
            <li><button onClick={() => { setIsProjectOpen(true); applyTransform(); }}>Project</button></li>
            <li><button onClick={() => { setIsEducationOpen(true); applyTransform(); }}>Education</button></li>
            <li><button onClick={() => { setIsContactOpen(true); applyTransform(); }}>Contact</button></li>
          </ul>
        </nav>
      </header>

      <div className={`overlay ${isAboutOpen || isProjectOpen || isEducationOpen || isContactOpen ? 'visible' : ''}`} onClick={closeOverlay}>
        {isAboutOpen && <About close={closeOverlay} />}
        {isProjectOpen && <Project close={closeOverlay} />}
        {isEducationOpen && <Education close={closeOverlay} />}
        {isContactOpen && <Contact close={closeOverlay} />}
      </div>

      <Footer/>
    </div>
  );
};

export default App;
