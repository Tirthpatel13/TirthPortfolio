import React from 'react';
import ProfileImage from '../images/heroImage.jpeg'; // Replace with your actual profile image path

const About = () => {
  return (
    <div 
      name="about" 
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* About Me Header */}
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
          <p className="mt-4 text-gray-400">Get To Know More</p>
        </div>

        {/* Bio Section */}
        <div className="mt-12 max-w-screen-lg mx-auto px-4 text-center sm:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4">
            A proficient Computer Science student with a strong foundation in software design, development, and testing. Skilled in the full software development lifecycle, agile methodologies, and project management, with hands-on expertise in multiple programming languages and technologies.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4">
            A dedicated and effective communicator, adept at leading cross-functional teams to deliver innovative solutions in dynamic IT environments. Committed to continuous learning and staying updated with emerging technologies, striving to drive innovation and excellence in software development.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Driven by a knack for solving problems and crafting elegant solutions that leave a lasting impact. I thrive in dynamic workplaces where I can work with peers to solve problems head-on. I am eager to offer my skills and experience to a forward-thinking organization where I may continue to learn and develop as a technology professional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
