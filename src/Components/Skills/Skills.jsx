import React from 'react';
import './Skills.css';

const skills = [
  {
    icon: 'fab fa-html5',
    name: 'HTML',
  },
  {
    icon: 'fab fa-css3-alt',
    name: 'CSS',
  },
  {
    icon: 'fab fa-react',
    name: 'React.js',
  },
  {
    icon: 'fab fa-node-js',
    name: 'Node.js',
  },
  {
    icon: 'fas fa-server',
    name: 'Express.js',
  },
  {
    icon: 'fas fa-leaf',
    name: 'MongoDB',
  },
  {
    icon: 'fab fa-angular',
    name: 'Angular',
  },
  {
    icon: 'fas fa-code',
    name: 'Next.js',
  },
  {
    icon: 'fab fa-aws',
    name: 'AWS',
  },
  {
    icon: 'fas fa-database',
    name: 'SQL',
  },
  {
    icon: 'fas fa-exchange-alt',
    name: 'REST API',
  },
  {
    icon: 'fab fa-github',
    name: 'GitHub',
  },
  {
    icon: 'fab fa-git-alt',
    name: 'Git',
  }
];

const programmingLanguages = [
  {
    icon: 'fas fa-c',
    name: 'C',
  },
  {
    icon: 'fas fa-plus',
    name: 'C++',
  },
  {
    icon: 'fab fa-java',
    name: 'Java',
  },
  {
    icon: 'fab fa-js-square',
    name: 'JavaScript',
  },
  {
    icon: 'fab fa-typescript',
    name: 'TypeScript',
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section-dark">
      <div className="skills-container">
        <div className="skills-header">
          <h2>My Skills</h2>
          <div className="skills-underline"></div>
        </div>
        <div className="skills-category">
          <h3><i className="fas fa-laptop-code"></i>Technologies</h3>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div className="skill-card" key={idx}>
                <i className={skill.icon}></i>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3><i className="fas fa-code-branch"></i>Programming Languages</h3>
          <div className="skills-grid">
            {programmingLanguages.map((lang, idx) => (
              <div className="skill-card" key={idx}>
                <i className={lang.icon}></i>
                <div className="skill-name">{lang.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
