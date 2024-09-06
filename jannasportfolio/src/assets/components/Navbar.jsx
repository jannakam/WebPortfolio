import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
          <ul className="navbar-menu">
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
          </ul>
        </nav>
      );
}

export default Navbar;