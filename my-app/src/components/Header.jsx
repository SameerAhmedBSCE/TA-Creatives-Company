import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/talogo.png';
import './Header.css'; 
import  { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu on click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
         <a href="/"> <img src={logo} alt="Logo" className="h-12 w-auto"  /></a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-10">
          <a href="about" className="relative group text-lg font-medium hover:text-cyan-400">
            About
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          <a href="services" className="relative group text-lg font-medium hover:text-cyan-400">
            Services
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          <a href="portfolio" className="relative group text-lg font-medium hover:text-cyan-400">
            Ecommerce
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          <a href="reviews" className="relative group text-lg font-medium hover:text-cyan-400">
            Reviews
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          <a href="contact" className="relative group text-lg font-medium hover:text-cyan-400">
            Contact
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </div>

        {/* Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl z-50 relative focus:outline-none"
        >
          {isOpen ? '✖️' : '☰'}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 right-0 w-2/3 bg-gray-900 bg-opacity-95 h-full md:hidden transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out shadow-lg z-40`}>
          <div className="flex flex-col items-center mt-16 space-y-10 p-6 text-center">

            {/* About Link */}
            <a
              href="#about"
              className="text-2xl text-gray-300 hover:text-cyan-400 transition-all duration-300 ease-in-out hover:scale-110 tracking-wide relative group"
              onClick={() => setIsOpen(false)}
            >
              About
              <div className="h-0.5 w-full bg-indigo-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>

            {/* Services Link */}
            <a
              href="#services"
              className="text-2xl text-gray-300 hover:text-cyan-400 transition-all duration-300 ease-in-out hover:scale-110 tracking-wide relative group"
              onClick={() => setIsOpen(false)}
            >
              Services
              <div className="h-0.5 w-full bg-indigo-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>

            {/* Portfolio Link */}
            <a
              href="#portfolio"
              className="text-2xl text-gray-300 hover:text-cyan-400 transition-all duration-300 ease-in-out hover:scale-110 tracking-wide relative group"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
              <div className="h-0.5 w-full bg-indigo-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>

            {/* Reviews Link */}
            <a
              href="#reviews"
              className="text-2xl text-gray-300 hover:text-cyan-400 transition-all duration-300 ease-in-out hover:scale-110 tracking-wide relative group"
              onClick={() => setIsOpen(false)}
            >
              Reviews
              <div className="h-0.5 w-full bg-indigo-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>

            {/* Contact Link */}
            <a
              href="#contact"
              className="text-2xl text-gray-300 hover:text-cyan-400 transition-all duration-300 ease-in-out hover:scale-110 tracking-wide relative group"
              onClick={() => setIsOpen(false)}
            >
              Contact
              <div className="h-0.5 w-full bg-indigo-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;