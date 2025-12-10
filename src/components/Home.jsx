import React from "react";
import "../style/Home.css";
import profile from "../assets/vipul.jpg";
import resume from "../assets/resume.pdf";
import { FaGithub, FaLinkedin, FaPhone, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <header id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* LEFT SIDE (TEXT SECTION) */}
          <div className="hero-left">
            <div className="work-availability">
              <span className="blink-circle"></span>
              <a href="mailto:rawatvipul14@gmail.com" className="blink-text">
                Available for work!
              </a>
            </div>
            <h1>
              Hi, I’m <span>Vipul</span>
            </h1>
            <h3>Frontend Developer | React.js Enthusiast</h3>
            <p>
              I build responsive and modern websites using React, HTML, CSS, and JavaScript.
            </p>

            <a href="#projects" className="btn">See My Work</a>

            <div className="social-links">
              <a href="https://github.com/vipul0072" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/vipul-rawat-82b3b9255" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/vipul_rawat_01" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="tel:+916396702962"><FaPhone /></a>
            </div>

            

            <div className="btn-group">
              <button className="primary" onClick={() => window.location = "mailto:rawatvipul14@gmail.com"}>
                Hire me
              </button>
              <a
                href={resume}
                download="Vipul-Rawat.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary"
              >
                Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (IMAGE SECTION) */}
          <div className="hero-right">
            <img src={profile} alt="Vipul Rawat" className="profile-img" />
          </div>
        </div>
      </div>
    </header>
  );
}
