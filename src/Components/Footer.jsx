import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithubSquare, FaMailchimp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer w-[100%] mobile:w-[40%] px-0 py-0 mobile:px-28 text-white">
      <div>
        <ul className="flex justify-between list-none">
          <li className="flex justify-center p-4 uppercase leading-8 tracking-widest1 text-xs font-normal hover:text-orange-600 hover:cursor-pointer">
            <FaGithubSquare className="mt-[0.8rem] text-sm" />
            <a href="https://github.com/gowthamansv" className="m-1">
              Git
            </a>
          </li>
          <li className="flex justify-center p-4 uppercase leading-8 tracking-widest1 text-xs font-normal hover:text-orange-600 hover:cursor-pointer">
            <FaLinkedin className="mt-[0.8rem] text-sm" />
            <a href="https://www.linkedin.com/in/gowthaman02/" className="m-1">
              Linkedin
            </a>
          </li>
          <li className="flex justify-center p-4 uppercase leading-8 tracking-widest1 text-xs font-normal hover:text-orange-600 hover:cursor-pointer">
            <MdEmail className="mt-[0.7rem] text-lg" />
            <a href="mailto:gowtham03gmv@gmail.com" className="m-1">
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
