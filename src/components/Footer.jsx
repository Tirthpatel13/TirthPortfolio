import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';  // Import LeetCode icon

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6">
      <div className="max-w-screen-lg mx-auto text-center">

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/tirth-p-4a4a84179/" 
             target="_blank" 
             rel="noreferrer" 
             className="text-gray-400 hover:text-white">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Tirthpatel13" 
             target="_blank" 
             rel="noreferrer" 
             className="text-gray-400 hover:text-white">
            <FaGithub size={30} />
          </a>
          <a href="mailto:tp131101@gmail.com" 
             target="_blank" 
             rel="noreferrer" 
             className="text-gray-400 hover:text-white">
            <HiOutlineMail size={30} />
          </a>
          <a href="/Tirth_Patel_Resume.pdf" 
             download 
             className="text-gray-400 hover:text-white">
            <BsFillPersonLinesFill size={30} />
          </a>
          <a href="https://leetcode.com/u/tirthp_01/"  // Replace with your LeetCode URL
             target="_blank" 
             rel="noreferrer"
             className="text-gray-400 hover:text-white">
            <SiLeetcode size={30} />  {/* LeetCode Icon */}
          </a>
        </div>

        {/* Copyright Information */}
        <div className="mt-4 text-gray-500">
          <p>&copy; 2024 Tirth Patel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
