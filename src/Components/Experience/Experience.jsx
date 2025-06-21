import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Bridge Group Solutions",
      location: "Noida, Uttar Pradesh",
      role: "Software Engineer Trainee",
      duration: "feb 2025- april 2025",
      description: [
        "Developed and maintained web applications using React.js and Node.js",
        "Implemented responsive designs and optimized application performance",
        "Collaborated with cross-functional teams to deliver high-quality solutions", "Gained hands-on experience in real-time client projects and agile development."
      ]
    },
  ];

  const achievements = [
    {
      title: "Open Source Contributor",
      organization: " GSSoC 2024",
      description: "Contributed to multiple projects during GirlScript Summer of Code 2024, including web development and feature improvements. Worked on real-world issues, enhanced UI components, fixed bugs, and optimized code for performance and accessibility across various GitHub repositories"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Experience & Achievements</h2>
        
        <div className="experience-content">
          <div className="experience-column">
            <h3 className="subsection-title">Work Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <h4 className="experience-title">{exp.title}</h4>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <div className="experience-meta">
                  <p className="experience-duration">{exp.duration}</p>
                  <p className="experience-location">{exp.location}</p>
                  <p className="experience-role">{exp.role}</p>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="experience-column">
            <h3 className="subsection-title">Achievements</h3>
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-org">{achievement.organization}</p>
                <p className="achievement-desc">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 