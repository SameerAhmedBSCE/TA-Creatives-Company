import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-semibold mb-4 md:mb-0">
            <Link to="/" className="text-white hover:text-gray-400">
            TA Creatives
            </Link>
          </div>
          <div className="space-x-4">
            <Link to="/about" className="text-gray-400 hover:text-white">
              About
            </Link>
            <Link to="/services" className="text-gray-400 hover:text-white">
              Services
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} TA Creatives. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
