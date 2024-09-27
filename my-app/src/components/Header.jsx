import React from 'react';
import { NavLink } from 'react-router-dom';
import tacrlogo from '../assets/tacrlogo.png';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={tacrlogo} alt="TA Creatives Logo" className="logo" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Shopify Projects</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
