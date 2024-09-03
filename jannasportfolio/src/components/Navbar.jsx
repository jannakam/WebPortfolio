import React from 'react';
import './css/App.css';

function Navbar() {
    return (
        <nav className="navbar">
          <div className="navbar-logo">
            <img src="path-to-your-logo.png" alt="Logo" />
          </div>
          <ul className="navbar-menu">
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
          </ul>
        </nav>
      );
}

export default Navbar;