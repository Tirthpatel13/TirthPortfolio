import React, { useState } from 'react';
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import reactImage from "../images/react.png";
import nodejs from "../images/node.png";
import express from "../images/express.png";
//import docker from "../images/docker.png";
//import git from "../images/Git.png";
import tailwind from "../images/tailwind.png";

// Skill data arrays
const programmingLanguages = [
  { id: 1, title: 'Java', proficiency: '90%' },
  { id: 2, title: 'Python', proficiency: '85%' },
  { id: 3, title: 'C++', proficiency: '80%' },
  { id: 4, title: 'JavaScript', proficiency: '80%' },
  { id: 5, title: 'C', proficiency: '75%' },
];

const webDevelopment = [
  { id: 1, src: html, title: 'HTML', proficiency: '95%', style: 'shadow-orange-500' },
  { id: 2, src: css, title: 'CSS', proficiency: '90%', style: 'shadow-blue-500' },
  { id: 3, src: javascript, title: 'JavaScript', proficiency: '85%', style: 'shadow-yellow-500' },
  { id: 4, src: reactImage, title: 'React', proficiency: '85%', style: 'shadow-blue-300' },
  { id: 5, src: nodejs, title: 'Node.js', proficiency: '80%', style: 'shadow-green-500' },
  { id: 6, src: express, title: 'Express.js', proficiency: '80%', style: 'shadow-gray-500' },
  { id: 7, src: tailwind, title: 'Tailwind CSS', proficiency: '85%', style: 'shadow-teal-400' },
];

const technologies = [
  { id: 1, title: 'Spring Boot', proficiency: '80%' },
  { id: 2, title: 'AWS EC2', proficiency: '75%' },
  { id: 3, title: 'Docker', proficiency: '70%'},
  { id: 4, title: 'Kubernetes', proficiency: '65%' },
  { id: 5, title: 'Microservices', proficiency: '85%' },
];

const otherSkills = [
  { id: 1, title: 'Git & GitHub', proficiency: '90%' },
  { id: 2, title: 'JIRA', proficiency: '75%' },
];

const fundamentalKnowledge = [
  { id: 1, title: 'Data Structures', proficiency: '95%' },
  { id: 2, title: 'Algorithms', proficiency: '90%' },
  { id: 3, title: 'Database Design', proficiency: '85%' },
  { id: 4, title: 'Software Design', proficiency: '90%' },
  { id: 5, title: 'OOP', proficiency: '95%' },
  { id: 6, title: 'Complexity Analysis', proficiency: '90%' },
];

const softSkills = [
  { id: 1, title: 'Communication', proficiency: '90%' },
  { id: 2, title: 'Problem-Solving', proficiency: '85%' },
  { id: 3, title: 'Teamwork', proficiency: '90%' },
  { id: 4, title: 'Leadership', proficiency: '85%' },
];

const Experience = () => {
  // State to manage dropdown visibility
  const [openSection, setOpenSection] = useState(null);

  // Function to toggle dropdown sections
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-900 to-black w-full h-screen text-white">
      <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto h-full text-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">Skills</p>
          <p className="py-6 text-gray-400">Here are the Skills I specialize in:</p>
        </div>

        <Dropdown title="Programming Languages" skills={programmingLanguages} openSection={openSection} toggleSection={toggleSection} />
        <Dropdown title="Web Development" skills={webDevelopment} isImage openSection={openSection} toggleSection={toggleSection} />
        <Dropdown title="Technologies" skills={technologies} isImage openSection={openSection} toggleSection={toggleSection} />
        <Dropdown title="Other Skills" skills={otherSkills} isImage openSection={openSection} toggleSection={toggleSection} />
        <Dropdown title="Fundamental Knowledge" skills={fundamentalKnowledge} openSection={openSection} toggleSection={toggleSection} />
        <Dropdown title="Soft Skills" skills={softSkills} openSection={openSection} toggleSection={toggleSection} />
      </div>
    </div>
  );
};

// Reusable Dropdown Component with subtle animations and icons
const Dropdown = ({ title, skills, isImage, openSection, toggleSection }) => (
  <div className="w-full mb-6">
    <button
      onClick={() => toggleSection(title)}
      className="text-2xl font-semibold mb-4 w-full text-left focus:outline-none bg-gray-800 p-4 rounded-md transition-transform duration-300 transform hover:scale-105"
    >
      {title}
    </button>
    {openSection === title && (
      <div className="flex flex-col p-4 bg-gray-900 rounded-lg shadow-md transition-all duration-500 ease-in-out">
        {skills.map(({ id, title, proficiency, src, style }) => (
          <div key={id} className={`flex items-center mb-4 ${style ? style : ''}`}>
            {isImage && src && <img src={src} alt={title} className="w-8 h-8 mr-4" />}
            <div className="flex-1">
              <p className="font-medium">{title}</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: proficiency }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Experience;