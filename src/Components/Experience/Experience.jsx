import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Company Name",
      duration: "2022 - Present",
      description: [
        "Developed and maintained web applications using React.js and Node.js",
        "Implemented responsive designs and optimized application performance",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Previous Company",
      duration: "2021 - 2022",
      description: [
        "Built user interfaces using modern JavaScript frameworks",
        "Worked on improving website accessibility and user experience",
        "Participated in code reviews and implemented best practices"
      ]
    }
  ];

  const achievements = [
    {
      title: "Best Developer Award",
      organization: "Tech Conference 2023",
      description: "Recognized for outstanding contribution in web development"
    },
    {
      title: "Hackathon Winner",
      organization: "CodeFest 2022",
      description: "Led team to victory in 48-hour coding competition"
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      description: "Active contributor to various open-source projects"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Experience & Achievements</h2>
        
        <div className="experience-content">
          <div className="experience-timeline">
            <h3 className="subsection-title">Work Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="job-title">{exp.title}</h4>
                  <p className="company-name">{exp.company}</p>
                  <p className="duration">{exp.duration}</p>
                  <ul className="job-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="achievements-section">
            <h3 className="subsection-title">Achievements</h3>
            <div className="achievements-grid">
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
      </div>
    </section>
  );
};

export default Experience; 