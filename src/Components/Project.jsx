import React from 'react';
import { IoClose } from "react-icons/io5";
import dashboard from '../assets/dashboard.png'
import shop from '../assets/Shopping-cart.png'
import game from '../assets/memory-game.png'
import calculator from '../assets/calculator.png'
import austin from '../assets/austin.png'
import sunrise from '../assets/sunrise.png'

const Project = ({close}) => {
    return (
        <div className="" onClick={close} id='main'>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
          <div className='flex justify-end'><button className='text-2xl p-2 rounded-full hover:bg-gray-200' onClick={close}><IoClose /></button></div>
            <div className='flex flex-row justify-between'>
                <h2>work</h2>
            </div>
            <div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='stack w-80 flex justify-center'onClick={() => {window.location.href = 'https://admin-dashboard-77.netlify.app/';}}>
                    <img src={dashboard} alt="dashboard" className=''/>
                    <h2 className='overlay-title'>A Admin Dashboard</h2>
                    </div>
                <p>The Admin Dashboard for a comprehensive view of user management, analytics, and administrative tasks.</p>    
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='stack w-80 flex justify-center' onClick={() => {window.location.href = 'https://nimble-bubblegum-ad0a14.netlify.app/';}}>
                    <img src={shop} alt="shopping-cart" className=''/>
                    <h2 className='overlay-title'>Shopping Cart</h2>
                    </div>
                <p>Implement separate pages for product and cart functionality in a ReactJS application. The cart feature allow users to add or remove products from the cart and ensure smooth navigation between product and cart pages.</p>    
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='stack w-80 flex justify-center' onClick={() => {window.location.href = 'https://storied-concha-13d507.netlify.app/';}}>
                    <img src={calculator} alt="Income-Expense-Calculator" className=''/>
                    <h2 className='overlay-title'>Income-Expense Calculator</h2>
                    </div>
                <p>Develop a fully functional Income Expense Calculator using HTML, CSS, and JavaScript. This project enables adding, editing, and deleting of income and expense entries and provides a summary of income versus expenses to track financial status.</p>    
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='stack w-80 flex justify-center' onClick={() => {window.location.href = 'https://memorytask.netlify.app/';}}>
                    <img src={game} alt="memory-game" className=''/>
                    <h2 className='overlay-title'>Flipping-Memory Game</h2>
                    </div>
                <p>Build an interactive Memory Game using HTML, CSS, and JavaScript. The game includes players flip cards to find matching pairs and javaScript and DOM manipulation handle game functionality and scoring.</p>    
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='stack w-80 flex justify-center'  onClick={() => {window.location.href = 'https://austinpartnership.in/';}}>
                    <img src={austin} alt="austin-partnership" className=''/>
                    <h2 className='overlay-title'>Stock Trading Platform</h2>
                    </div>
                <p>Through the application, users can easily navigate listings, view detailed property information, and interact with various features designed to streamline the real estate process.</p>    
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='stack w-80 flex justify-center' onClick={() => {window.location.href = 'https://sunrisemarine.org/';}}>
                    <img src={sunrise} alt="marine service" className=''/>
                    <h2 className='overlay-title'>Marine Service Platform</h2>
                    </div>
                <p>The key features include a responsive design for compatibility across devices, interactive components such as About, Contact, Service, Footer, and Home with smooth scrolling and user-friendly navigation. </p>    
                </div>
            </div>
          </div>
        </div>
    );
};

export default Project;