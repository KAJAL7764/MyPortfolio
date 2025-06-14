import React from 'react';
import './Skills.css';

const skills = [
  {
    icon: 'fab fa-html5',
    name: 'HTML 5',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
  },
  {
    icon: 'fab fa-css3-alt',
    name: 'CSS 3',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
  },
  {
    icon: 'fab fa-js-square',
    name: 'JavaScript',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
  },
  {
    icon: 'fab fa-python',
    name: 'Python',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
  },
  {
    icon: 'fab fa-sass',
    name: 'Sass',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
  },
  {
    icon: 'fas fa-database',
    name: 'MySQL',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
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
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-icon-circle">
                <i className={skill.icon}></i>
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-desc">{skill.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 