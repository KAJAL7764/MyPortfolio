import React from 'react';
import { Link } from 'react-scroll';
import './About.css';

const About = () => {
  const techIcons = [
    { name: 'HTML', icon: 'fab fa-html5', color: '#e34f26' },
    { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572b6' },
    { name: 'SASS', icon: 'fab fa-sass', color: '#cc6699' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
    { name: 'React JS', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#f05032' },
    { name: 'Node JS', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Firebase', icon: 'fas fa-fire', color: '#ffca28' },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47a248' },
    { name: 'Dockers', icon: 'fab fa-docker', color: '#2496ed' }
  ];

  const circleRadius = 150; // Distance from center to icon center (main circle radius 300 / 2)

  return (
    <section id="home" className="about-section-new">
      <div className="about-container-new">
        <div className="about-left-new">
          <div className="about-header-new">
            <p className="about-greeting"><span role="img" aria-label="waving hand">👋</span> Hello, I'm</p>
            <h1 className="your-name-gradient">Your Name</h1>
            <h2 className="about-title-developer">Full Stack Developer</h2>
            <p className="about-description-text">
              I craft digital experiences that combine beautiful design with powerful functionality. Let's build something amazing together.
            </p>
          </div>
          <div className="about-cta-buttons-new">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn-main-new"
            >
              View Projects <i className="fas fa-arrow-right"></i>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn-outline-new"
            >
              Get in Touch <i className="fas fa-envelope"></i>
            </Link>
          </div>
          <div className="about-social-icons-new">
            <div className="social-icon-circle"><a href="https://github.com/KAJAL7764" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></div>
            <div className="social-icon-circle"><a href="https://www.linkedin.com/in/kajalkumarichauhan/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></div>
            <div className="social-icon-circle"><i className="fab fa-twitter"></i></div>
          </div>
        </div>
        <div className="about-right-new">
          <div className="wavy-background-one"></div>
          <div className="wavy-background-two"></div>
          <div className="main-image-circle">
            <img src="https://i.pravatar.cc/300?img=68" alt="Profile" className="main-profile-img-new" />
            
            {techIcons.map((tech, index) => {
              const angle = index * (360 / techIcons.length);
              return (
                <div
                  key={index}
                  className="tech-icon-container"
                  style={{
                    '--angle': `${angle}deg`,
                    transform: `rotate(${angle}deg) translate(${circleRadius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <div className="tech-icon-circle" style={{ backgroundColor: tech.color }}>
                    <i className={tech.icon}></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 