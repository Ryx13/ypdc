import React from 'react';
import logo from '../images/logo.png';
import firstpic from '../images/firstpic.jpeg'; // ✅ Import background image

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${firstpic})` }} // ✅ Use local image
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-blue-950/70"></div>

      {/* Content */}
      <div className="relative z-10 px-4 flex flex-col items-center">
        {/* Logo Box */}
        <div className="mb-8 p-8 bg-gradient-to-br from-indigo-900/80 to-blue-900/80 rounded-2xl shadow-2xl backdrop-blur-sm w-80 h-80 flex flex-col justify-center items-center">
          <img
            src={logo}
            alt="YPDC Logo"
            className="w-full h-full mb-4 object-cover shadow-lg"
          />
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl md:text-6xl font-black max-w-4xl"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}
        >
          Expert Tax Solutions for <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            Your Success
          </span>
        </h1>

        {/* Description */}
        <p
          className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
        >
          Yardman Projects & Development provides comprehensive tax services, accounting solutions,
          and financial guidance to individuals and businesses.
        </p>
      </div>
    </section>
  );
};

export default Hero;
