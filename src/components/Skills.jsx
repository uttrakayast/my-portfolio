import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import pythonLogo from "../assets/python.png";
import sqlLogo from "../components/sql.png";
const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      
      <div className="skills-logos">
        <FaHtml5 title="HTML5" className="html-logo" size={48} />
        <FaCss3Alt title="CSS3" className="css-logo" size={48} />
        <FaJs title="JavaScript" className="js-logo" size={48} />
        <FaReact title="React" className="react-logo" size={48} />
         <img src={pythonLogo} alt="Python" title="Python" className="tech-logo" />
        <img src={sqlLogo} alt="SQL" title="SQL" className="tech-logo"/>
        <FaGithub title="GitHub" className="github-logo" size={48} />
      </div>

    </section>
  );
};

export default Skills;

