import React from "react";
import "../style/About.css";

export default function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        I'm a passionate frontend developer who loves building clean,
        modern, and responsive web applications using React.js and CSS.
      </p>
      
      <h3>Education</h3>
      <ul className="education-list">
      <li>
          <strong>2023-2025:</strong> Master's in Computer Application<br />
          Dev Bhoomi Uttarakhand University
        </li>
        <li>
          <strong>2020-2023:</strong> Bachelor's in Computer Application<br />
          Dev Bhoomi Uttarakhand University
        </li>
        <li>
          <strong>2019-2020:</strong> Intermediate<br />
          S.G.R.R kandoli, Dehradun
        </li>
        <li>
          <strong>2017-2018:</strong> High School<br />
          The Sapience School Vikasnagar
        </li>
      </ul>
    </div>
  );
}
