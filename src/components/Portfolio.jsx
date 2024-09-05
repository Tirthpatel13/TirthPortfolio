import React from 'react';
import installNode from '../images/portfolio/installNode.jpg';
import navbar from '../images/portfolio/navbar.jpg';
import reactParallax from '../images/portfolio/reactParallax.jpg';
import reactSmooth from '../images/portfolio/reactSmooth.jpg';
import reactWeather from '../images/portfolio/reactWeather.jpg';
import Renew_Wheels from '../images/project/Renew_Wheels.png';

const Portfolio = () => {

    const portfolios=[
        {
            id:1,
            src : Renew_Wheels,
            link: 'https://github.com/Tirthpatel13/EECS4413_Group_Project_WS' // Replace with actual link
        },
        {
            id:2,
            src : reactParallax,
            link: 'https://github.com/Tirthpatel13/EECS1012_CodeBreakerGame_F' // Replace with actual link
        },
        {
            id:3,
            src : navbar,
            link: 'https://github.com/Tirthpatel13/TirthPortfolio/tree/test-branch' // Replace with actual link
        },
        {
            id:4,
            src : reactSmooth,
            link: 'https://github.com/Tirthpatel13/Car-price-Prediction' // Replace with actual link
        },
        {
            id:5,
            src : installNode,
            link: 'https://github.com/Tirthpatel13/JobFresher' // Replace with actual link
        },
        {
            id:6,
            src : reactWeather,
            link: 'https://github.com/yourusername/reactWeather' // Replace with actual link
        },
    ];

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen' >

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'>
                {
                    portfolios.map(({id, src, link}) => (
                    
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover-scale-105' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button 
                                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                                    onClick={() => window.open(link, '_blank')}
                                >
                                    Code
                                </button>
                            </div>
                        </div>

                        
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Portfolio
