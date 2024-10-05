import React from 'react';
import logo1 from "../assets/logo1.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 p-4">
      <nav className="bg-gray-300 font-sans flex flex-row justify-between items-center py-2 px-6 shadow w-full rounded-full">
        
        {/* Logo on the left (always stays on the left) */}
        <div className="flex items-center">
          <div className="h-10 w-auto mr-2">
            <img className="h-full w-auto" src={logo1} alt="Logo" />
          </div>
        </div>
        
        {/* KidCode text: centered on large/medium screens, moved to the right on small screens */}
        <div className="flex-grow text-right sm:text-center">
          <span className="text-xl font-bold no-underline text-black">KidCode</span>
        </div>

        {/* Links: visible on medium and large screens, hidden on small screens */}
        <div className="hidden sm:flex items-center">
          <a href="#about-section" className="text-md no-underline text-black hover:text-blue-500 ml-2 px-1">О нас</a>
          <a href="#whywe-section" className="text-md no-underline text-black hover:text-blue-500 ml-2 px-1">Почему мы</a>
          {/* <a href="#" className="text-md no-underline text-black hover:text-blue-500 ml-2 px-1">Процедура</a> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
