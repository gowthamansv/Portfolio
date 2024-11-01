import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <ul>
                    <li><a href='https://github.com/gowthamansv' className='m-1 hover:underline hover:cursor-pointer'>Git</a></li>
                    <li><FaLinkedin className='mt-2 text-sm'/><a href='https://www.linkedin.com/in/gowthaman02/' className='m-1 hover:underline hover:cursor-pointer'>Linkedin</a></li>
                    <li><MdEmail className='mt-2 text-base'/><a href='mailto:gowtham03gmv@gmail.com' className='m-1 hover:underline hover:cursor-pointer'>Email</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;