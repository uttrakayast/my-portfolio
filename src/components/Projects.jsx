import portImage from "../assets/port.jpg"; // adjust path based on your folder

import { FaReact, FaJs, FaCss3Alt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <div className="max-w-4xl mx-auto">

        <p>A modern, fully responsive portfolio built with React, showcasing my frontend development skills. The site features a typewriter effect, smooth scrolling, and structured sections like About, Skills, Projects, and Contact. Designed with accessibility and mobile-first design principles in mind, the project demonstrates clean UI/UX, reusable components, and real-world frontend practices.</p>
      </div>
      <div className="w-96 rounded-xl shadow-xl">
      <img
        src={portImage}
        alt="Project Screenshot"
        className="project-image"
      />
      </div> 

      <div className="project-links">
        <a className="btn" href="https://www.youtube.com/watch?v=GASKO2xIr5I" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a className="btn secondary" href="https://github.com/uttrakayast/my-portfolio" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
      {/* <div className="project-card">
          <h3>Chat App</h3>
          <p>Two-user chat application using Firebase, React, and real-time messaging.</p>
        </div> */}

    </section>
  );
};

export default Projects;

