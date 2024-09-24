import React from 'react'
import Navbar from '../../components/Navbar'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import './contact.css'

const Contact = () => {
    const handleLinkedInClick = () => {
        window.location.href =
          "https://www.linkedin.com/in/nishant-chauhan-b76371255/";
      };
    
      const handleGithubClick = () => {
        window.location.href = "https://github.com/NISHANTCHAUHAN1";
      };
    
      const handleInstagramClick = () => {
        window.location.href = "https://www.instagram.com/_.sky_14/";
      };
    
      return (
        <>
        <Navbar />
        <div className="contact h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="text-white text-center">
            <h1 className="text-3xl ">👋</h1>
            <h1 className="contact text-3xl font-extrabold py-2">
              Thanks for checking my website!
            </h1>
              <a href="mailto: nishchaynish8@email.com" className="contact text-xl font-extrabold hover:text-blue-200" target='_blank'><p>nishchaynish8@gmail.com</p></a>
          </div>
          <ul className="wrapper">
            <li className="icon facebook" onClick={handleLinkedInClick}>
              <span className="tooltip">Linkdein</span>
              <FaLinkedin size="1.5em" />
            </li>
            <li className="icon twitter" onClick={handleGithubClick}>
              <span className="tooltip">Github</span>
              <FaGithub size="1.5em" />
            </li>
            <li className="icon instagram" onClick={handleInstagramClick}>
              <span className="tooltip">Instagram</span>
              <FaInstagram size="1.5em" />
            </li>
          </ul>
        </div>
        </>
      )
}

export default Contact
