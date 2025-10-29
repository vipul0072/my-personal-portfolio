import React from "react";
import "../style/Projects.css";

const projects = [
  { title: "Uttaranchal Tennis Association (UTA)", desc: "Tennis Tournament Registration Portal – Frontend (React.js)", link: "http://tenniswebsite.s3-website.ap-south-1.amazonaws.com/" },
  { title: "Portfolio", desc: "My personal profile built with React", link:"http://localhost:3000/" }
];

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
