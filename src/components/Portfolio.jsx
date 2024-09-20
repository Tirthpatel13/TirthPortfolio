import React, { useState } from 'react';
import Portfolio_1 from '../images/project/Portfolio.png';
import Car_Price from '../images/project/Car_Price_Prediction.png';
import Renew_Wheels from '../images/project/Renew_Wheels.png';
import Code_breaker_1 from '../images/project/Code_breaker_1.png';
import Job_Finder_1 from '../images/project/JobFinder_2.png';

const Portfolio = () => {
    const [activeDesc, setActiveDesc] = useState(null);

    const toggleDescription = (id) => {
        setActiveDesc(activeDesc === id ? null : id);
    };

    const portfolios = [
        {
            id: 1,
            src: Renew_Wheels,
            title: 'Renew Wheels',
            description: `E-commerce platform for purchasing electric vehicles using Java, Bootstrap, and SQLite. Deployed on AWS.`,
            link: 'https://github.com/Tirthpatel13/EECS4413_Group_Project_WS'
        },
        {
            id: 2,
            src: Code_breaker_1,
            title: 'Code Breaker Game',
            description: `Interactive game built with JavaScript, HTML, and CSS, featuring dynamic game mechanics and server-side logic.`,
            link: 'https://github.com/Tirthpatel13/Code_Breaker_Game/tree/Master'
        },
        {
            id: 3,
            src: Portfolio_1,
            title: 'Portfolio Navbar',
            description: `Responsive navigation bar created with React and Tailwind CSS, showcasing personal projects and skills.`,
            link: 'https://github.com/Tirthpatel13/TirthPortfolio/tree/test-branch'
        },
        {
            id: 4,
            src: Job_Finder_1,
            title: 'Job Finder App',
            description: `Full-stack job search app built with Spring Boot and React, utilizing MongoDB for data management.`,
            link: 'https://github.com/Tirthpatel13/JobFresher'
        },
        {
            id: 5,
            src: Car_Price,
            title: 'Car Price Prediction',
            description: `Machine learning model predicting car prices using Python and Jupyter Notebook, optimizing with regression algorithms.`,
            link: 'https://github.com/Tirthpatel13/Car-price-Prediction'
        },
    ];

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-900 w-full text-white md-h-screen pb-20">
            <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto h-full text-center">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline">Portfolio</h2>
                    <p className="py-6 text-gray-400">Explore some of my key projects below</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
                    {portfolios.map(({ id, src, title, description, link }) => (
                        <div key={id} className="relative group shadow-lg shadow-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <img 
                                src={src} 
                                alt={title} 
                                className="rounded-md duration-200 transform group-hover:scale-110 group-hover:brightness-75"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60">
                                <h3 className="text-2xl font-bold text-white bg-opacity-50 px-4 py-2 rounded">{title}</h3>
                                <button 
                                    className="text-white bg-gray-800 hover:bg-gray-600 rounded-full mt-4 p-2 transition duration-300"
                                    onClick={() => toggleDescription(id)}
                                    aria-label={`More info about ${title}`}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 19a7 7 0 100-14 7 7 0 000 14z"></path>
                                    </svg>
                                </button>
                            </div>

                            {activeDesc === id && (
                                <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-95 p-4 rounded-b-lg">
                                    {/* Close Button */}
                                    <button 
                                        className="absolute top-2 right-2 text-white bg-transparent hover:bg-gray-800 rounded-full p-1 transition duration-200"
                                        onClick={() => toggleDescription(id)}
                                        aria-label="Close description"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                    <div>
                                        <p className="text-sm text-gray-300">{description}</p>
                                    </div>
                                    <div className="flex justify-center mt-4 space-x-4">
                                        <a 
                                            href={link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white border-2 px-4 py-2 duration-200 hover:bg-white hover:text-black rounded-lg"
                                        >
                                            Code
                                        </a>
                                        <button className="text-white border-2 px-4 py-2 duration-200 hover:bg-white hover:text-black rounded-lg">Demo</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
