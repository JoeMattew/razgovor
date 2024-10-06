import React from 'react';
import backgroundImage from '../assets/bg.png';  // Adjust the path based on your file structure


const Header = () => {
  return (
    <header 
      id="up" 
      className="bg-center bg-fixed bg-no-repeat h-screen relative
                 bg-cover md:bg-contain"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Replace with your background image path
    >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      {/* Overlay Background + Center Control */}
      <div className="relative z-10 h-screen bg-opacity-50 flex items-center justify-center">
        <div className="mx-2 text-center">
          <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
            <span className="text-white">Kidcode</span>
          </h1>
          <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
          Интерактивные <span className="text-white">уроки</span> по <span className="text-white">программированию</span> 
          </h2>
          <div className="inline-flex">
          <a href="https://t.me/marat5686" target="_blank" rel="noopener noreferrer">
  <button className="p-2 my-5 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">
  Бесплатный урок
  </button>
</a>
            <a href="#about-section">
              <button className="p-2 my-5 mx-2 bg-transparent border-2 bg-indigo-200 bg-opacity-75 hover:bg-opacity-100 border-indigo-700 rounded hover:border-indigo-800 font-bold text-indigo-600 shadow-md transition duration-500 md:text-lg">
              Узнать больше
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
