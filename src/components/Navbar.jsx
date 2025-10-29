import React, { useState } from "react";
import "../style/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const logo ="Vipul"
  return (
    <nav className="navbar">
      <span className="logo">{logo}</span>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}
