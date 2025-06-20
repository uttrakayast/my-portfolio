// src/components/About.jsx

import React from "react";
import desGif from "../assets/des.gif";

const About = () => {
  return (
    <section id="about" className="about-section">
      
      <h2 className="about-title">About Me</h2>

      <div className="about-content">
        <div>
          <div className="about-image-container">
        <img src={desGif} alt="Frontend Dev" className="about-image" />
      </div>

          <h3 className="about-subtitle">Passionate Frontend Developer</h3>
          <p className="about-text">
            I specialize in building responsive, dynamic, and visually appealing user interfaces using
            modern web technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>.
            My goal is to craft seamless user experiences that are both functional and elegant. Every project
            I take on is a reflection of my creativity, coding precision, and user-focused approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
