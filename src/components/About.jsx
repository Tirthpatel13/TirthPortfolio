import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Aspiring Computer Science student seeking to crack the code for innovation and creativity . Driven by a knack for solving problems and crafting elegant solutions that leave a lasting impact.</p>

            <br />

            <p className='text-xl'>
            With strong analytical abilities gained via hands-on projects and courses, I thrive in dynamic workplaces where I can work with peers to solve problems front on. I am eager to offer my skills and experience to a forward-thinking organization where I may continue to learn and develop as a technology professional. </p>
        </div>
    </div>
  )
}

export default About