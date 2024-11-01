import React from 'react';
import { IoClose } from "react-icons/io5";
import profile from '../assets/profile.jpg'

const About = ({close}) => {
    return (
        <div className="" onClick={close} id='main'>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <div className='flex justify-end'><button className='close text-2xl p-2 rounded-full' onClick={close}><IoClose /></button></div>
            <div className='flex flex-row justify-between'>
                <h2>About Me</h2>
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-row pb-2'>
              <img src={profile} alt="profile" className='w-40 h-60 mr-3 rounded-lg'/>
              <p className=''>Hello! I’m a MERN Stack Developer dedicated to crafting efficient, user-centered web applications with a keen eye for both design and functionality.
              I am skilled in designing intuitive user interfaces, managing backend operations, and implementing secure authentication systems. I’m passionate about staying updated with the latest industry trends and technologies to deliver modern, optimized applications.
              </p>
              </div>
              {/* <p>Some highlights of my work include:</p>
              <ul className='aboutlist'>
                <li><p>Implement separate pages for product and cart functionality in a ReactJS application. The cart feature allow users to add or remove products from the cart and ensure smooth navigation between product and cart pages.</p></li>
                <li><p>Develop a fully functional Income Expense Calculator using HTML, CSS, and JavaScript. This project enables adding, editing, and deleting of income and expense entries and provides a summary of income versus expenses to track financial status.</p></li>
                <li><p>Build an interactive Memory Game using HTML, CSS, and JavaScript. The game includes players flip cards to find matching pairs and javaScript and DOM manipulation handle game functionality and scoring.</p></li>
                <li><p>The Admin Dashboard for a comprehensive view of user management, analytics, and administrative tasks.</p></li>
              </ul> */}
            </div>
          </div>
        </div>
    );
};

export default About;