// src/components/About.jsx

import React from "react";
import desGif from "../assets/des.gif"; // Make sure this path is correct

const About = () => {
  return (
    <section id="about" >
        <div >
          <img src={desGif} alt="Frontend Dev" className="custom-image" />
        </div>

      <h2 >About Me</h2>

      <div >
      
        <div>
          <h3>Passionate Frontend Developer</h3>
          <p >
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
