import React from "react";
import "../style/Projects.css";

const projects = [
  { title: "Uttaranchal Tennis Association (UTA)", desc: "Tennis Tournament Registration Portal – Frontend (React.js)", link: "https://uttaranchal-tennis-association.vercel.app/" },
  { title: "Portfolio", desc: "My personal profile built with React", link:"https://my-personal-portfolio-alpha-cyan.vercel.app/" },
  { title: "Summit-Seekers", desc: "Summit-Seekers website - Frontend (React.js)", link: "https://summit-seekers-ashen.vercel.app/" },
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
