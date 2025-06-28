import React from 'react';
import './Skills.css';

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

const frontendSkills = [
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
    icon: 'fab fa-angular',
    name: 'Angular',
  },
  {
    icon: 'fab fa-vuejs',
    name: 'Vue.js',
  },
  {
    icon: 'fas fa-code',
    name: 'Next.js',
  },
  {
    icon: 'fas fa-cube',
    name: 'Redux',
  },
  {
    icon: 'fab fa-bootstrap',
    name: 'Bootstrap',
  },
  {
    icon: 'fas fa-wind',
    name: 'Tailwind CSS',
  },
  {
    icon: 'fab fa-sass',
    name: 'Sass/SCSS',
  }
];

const backendSkills = [
  {
    icon: 'fab fa-node-js',
    name: 'Node.js',
  },
  {
    icon: 'fas fa-server',
    name: 'Express.js',
  },
 
  {
    icon: 'fab fa-java',
    name: 'Spring Boot',
  },
  {
    icon: 'fas fa-leaf',
    name: 'MongoDB',
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
    icon: 'fas fa-fire',
    name: 'Redis',
  },
  {
    icon: 'fas fa-cloud',
    name: 'GraphQL',
  }
];

const otherTools = [
  {
    icon: 'fab fa-aws',
    name: 'AWS',
  },
  {
    icon: 'fab fa-github',
    name: 'GitHub',
  },
  {
    icon: 'fab fa-git-alt',
    name: 'Git',
  },
  {
    icon: 'fas fa-code',
    name: 'VS Code',
  },
  {
    icon: 'fas fa-jet-fighter',
    name: 'IntelliJ IDEA',
  },
  {
    icon: 'fas fa-paper-plane',
    name: 'Postman',
  },
  {
    icon: 'fab fa-docker',
    name: 'Docker',
  },
  {
    icon: 'fas fa-terminal',
    name: 'Terminal',
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

        <div className="skills-category">
          <h3><i className="fas fa-palette"></i>Frontend Technologies</h3>
          <div className="skills-grid">
            {frontendSkills.map((skill, idx) => (
              <div className="skill-card" key={idx}>
                <i className={skill.icon}></i>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3><i className="fas fa-server"></i>Backend Technologies And Database</h3>
          <div className="skills-grid">
            {backendSkills.map((skill, idx) => (
              <div className="skill-card" key={idx}>
                <i className={skill.icon}></i>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3><i className="fas fa-tools"></i>Other Tools & Platforms</h3>
          <div className="skills-grid">
            {otherTools.map((tool, idx) => (
              <div className="skill-card" key={idx}>
                <i className={tool.icon}></i>
                <div className="skill-name">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
