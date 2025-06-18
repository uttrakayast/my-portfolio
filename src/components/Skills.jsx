import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-logos">
  <FaHtml5 title="HTML5" className="html-logo" />
  <FaCss3Alt title="CSS3" className="css-logo" />
  <FaJs title="JavaScript" className="js-logo" />
  <FaReact title="React" className="react-logo" />
  <FaGithub title="GitHub" className="github-logo" />
</div>

    </section>
  );
};

export default Skills;

