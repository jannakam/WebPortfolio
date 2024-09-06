import React from "react";
import "../css/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About Me</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Janna Almuqaisib. All rights reserved.</p>
    </footer>
  );
};

export default Footer;