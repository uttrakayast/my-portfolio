import React from "react";
import portImage from "../assets/project.jpg";
import { FaReact, FaJs, FaCss3Alt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>

      <div className="project-container">
        <p>
          A modern, fully responsive portfolio built with React, showcasing my
          frontend development skills. The site features a typewriter effect,
          smooth scrolling, and structured sections like About, Skills, Projects,
          and Contact. Designed with accessibility and mobile-first design principles
          in mind, the project demonstrates clean UI/UX, reusable components, and
          real-world frontend practices.
        </p>

        {/* <img
          src={portImage}
          alt="Project Screenshot"
          className="project-image"
        /> */}

        <div className="project-links">
          <a
            className="btn"
            href="https://www.youtube.com/watch?v=GASKO2xIr5I"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            className="btn secondary"
            href="https://github.com/uttrakayast/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
