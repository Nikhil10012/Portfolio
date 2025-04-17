import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "Java", icon: "java" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "js" },
    { name: "React", icon: "react" },
    { name: "MySQL", icon: "mysql" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
  ];

  return (
    <section id="skills" className="skills_container">
      <h2 className="skills_title">My Skills</h2>
      <div className="skills_grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill_card">
            <img
              src={`https://skillicons.dev/icons?i=${skill.icon}`}
              width="55"
              height="55"
              alt={skill.name}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
