import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col justify-center items-center max-w-screen-lg mx-auto h-full text-center'>
        
        {/* Centered Contact Header */}
        <div className='pb-8'>
          <p className='text-5xl font-bold inline border-b-4 border-blue-500'>Get in Touch</p>
          <p className='py-6 text-lg'>I'd love to hear from you! Feel free to send a message for any inquiries or collaborations.</p>
        </div>
        
        {/* Contact Form */}
        <div className='flex justify-center items-center w-full'>
          <form action='https://getform.io/f/xboMq3eg' method='POST' className='flex flex-col w-full md:w-1/2 space-y-4'>
            <input 
              type='text' 
              name="name" 
              placeholder='Your Name' 
              className='p-3 bg-transparent border-2 border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300' 
            />
            <input 
              type='email' 
              name="email" 
              placeholder='Your Email' 
              className='p-3 bg-transparent border-2 border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300' 
            />
            <textarea 
              name="message" 
              rows="6" 
              placeholder='Your Message'
              className='p-3 bg-transparent border-2 border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300' 
            />
            <button className='text-white bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 mt-4 rounded-full hover:scale-105 transition-transform duration-300'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
