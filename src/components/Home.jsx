import React from "react";
import Image from '../images/heroImage.jpeg';
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return (
        <div 
        name="home" 
        className="h-screen w-full bg-gradient-to-b from-black via-black
         to-gray-800 text-white"
         >
            <div 
            className="max-w-screen-lg mx-auto flex flex-col 
            items-center justify-between h-full px-6 md:flex-row">
                    <div className="flex flex-col justify-center h-full w-full">
                        <h1 className="text-4xl font-bold mb-4">
                            Hi, I'm a Full Stack Developer
                        </h1>
                        <p className="text-white-500 mb-2 py-4 max-w-md">
                            I specialize in building high-quality software applications using modern technologies.
                        </p>
                        <div>
                            <button className="group text-white w-fit py-3 px-6 my-2 
                            flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200">
                                Portfolio
                                <span className="group-hover:rotate-90 duration-300">
                                    <HiArrowNarrowRight size={17} className="ml-2"/>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-5/2">
                        <img src={Image} alt="my profile" className="rounded-2xl px-4 w-5/2 md:w-30"/>
                    </div>
            </div>       
    </div>
    );
};

export default Home;