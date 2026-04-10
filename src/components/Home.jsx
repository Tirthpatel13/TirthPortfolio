import React from 'react';
import Image from '../images/Tirth_Photo.jpg';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import TypingEffect from 'react-typing-effect';

const Home = () => {
    return (
        <div name="home" className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white flex items-center">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row space-y-8 md:space-y-0">
                
               {/* Left Section: Profile Image */}
<div className="w-full md:w-1/2 flex justify-center md:justify-start">
  <div className="group" style={{ perspective: "1000px" }}>
    
    <div 
      className="relative transition duration-500 transform group-hover:scale-105"
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>

      {/* Image */}
      <div 
        className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-900 transition duration-500"
        style={{
          transform: "rotateX(0deg) rotateY(0deg)"
        }}
      >
        <img 
          src={Image} 
          alt="my profile" 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          style={{ objectPosition: 'center 20%' }}
        />
      </div>

    </div>
  </div>
</div>


                {/* Right Section: Text and Buttons */}
                <div className="flex flex-col justify-center items-center md:items-start h-full text-center md:text-left md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Tirth Patel
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-400 mb-4">
                        <TypingEffect
                            text={['Computer Science Student', 'Software Developer', 'Full Stack Developer', 'Game Developer']}
                            speed={80}
                            eraseDelay={300}
                            typingDelay={50}
                            cursorRenderer={cursor => <b>{cursor}</b>}
                        />
                    </h3>
                    <p className="text-gray-400 mb-4 max-w-md">
                        I specialize in building high-quality software applications using modern technologies.
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                        <a 
                            href="/Tirth_resume.pdf"
                            download="Tirth_Patel_Resume"
                            className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 transition duration-200"
                        >
                            Download CV
                        </a>
                        <Link 
                            to="contact" 
                            smooth 
                            duration={500} 
                            className="px-6 py-3 rounded-md border border-gray-400 text-white hover:bg-gray-700 transition duration-200 cursor-pointer"
                        >
                            Contact Info
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start space-x-6 mt-6">
                        <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin text-2xl"></i>
                        </a>
                        <a href="https://github.com" className="text-gray-400 hover:text-white">
                            <i className="fab fa-github text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
