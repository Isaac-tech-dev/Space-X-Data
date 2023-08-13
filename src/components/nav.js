import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-semibold">Space X</div>

        {/* Mobile Menu Toggle Button (Visible only in mobile view) */}
        <button
          className="md:hidden text-black text-xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation (Visible only in desktop view) */}
        <ul className="hidden md:flex space-x-4 md:space-x-6">
          <li><a href="/" className="text-black text-sm hover:text-blue-500 hover:border-b-2 hover:border-blue-500">Home</a></li>
          <li><a href="#" className="text-black text-sm hover:text-blue-500 hover:border-b-2 hover:border-blue-500">Search</a></li>
          <li><a href="#" className="text-black text-sm hover:text-blue-500 hover:border-b-2 hover:border-blue-500">Data Grid</a></li>
        </ul>

        <div className="text-black text-sm font-semibold p-2 rounded-lg cursor-pointer hover:text-white hover:bg-blue-500 hidden">Know More</div>
      </div>

      {/* Mobile Menu (Visible only in mobile view) */}
      <ul className={`md:hidden space-y-2 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <li><a href="/" className="block text-black text-sm hover:text-blue-500 hover:border-b-2 hover:border-blue-500">Home</a></li>
        <li><a href="#" className="block text-black text-sm hover:text-blue-500 hover:border-b-2 hover:border-blue-500">Search</a></li>
        <li><a href="#" className="block text-black text-sm hover:text-blue-500 hover:border-b-2 hover:border-blue-500">Data Grid</a></li>
        <li><div className="block text-black text-sm font-semibold p-2 rounded-lg cursor-pointer hover:text-white hover:bg-blue-500">Know More</div></li>
      </ul>
    </nav>
  );
};

export default Nav;
