import './Projects.css'
import { motion } from 'framer-motion'
import videomeetScreenshot from '../../assets/videomeet-screenshot.png'
import recipeApp from '../../assets/recipeapp.png'
import airbnbProject from '../../assets/airbnbproject.png'

const Projects = () => {
  const projects = [
    {
      title: "VideoMeet Application",
      description: "A full-stack video conferencing platform that enables high-quality virtual meetings with features like screen sharing, HD video, and secure communication. Ideal for connecting with friends, family, or colleagues—anytime, anywhere.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.IO","WebRTC"],
      image: videomeetScreenshot,
      github: "https://github.com/KAJAL7764/VideoMeet",
      live: "https://videomeetappfrontend-9bls.onrender.com"
    },
    {
      title: "All-in-One Recipe Manager & Planner",
      description: "The ultimate recipe organizer for quick access to all your recipes across devices. Features include recipe storage, meal planning, and a shopping list generator.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "CSS"],
      image: recipeApp,
      github: "https://github.com/KAJAL7764/recipe-app",
      live: "https://github.com/KAJAL7764/recipe-app"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team features, and progress tracking.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/task-manager",
      live: "https://your-task-manager-demo.com"
    },
    {
      title: "Vacation Rental Platform",
      description: "A web application for browsing and booking vacation rentals, inspired by Airbnb. Features include property listings, search functionality, and a user-friendly interface.",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Bootstrap", "ejs"],
      image: airbnbProject,
      github: "https://github.com/KAJAL7764/AirbnbFullStack",
      live: "https://airbnbfullstack-2.onrender.com"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and clean design.",
      technologies: ["React", "CSS3", "Framer Motion", "Vite"],
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.com"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">My Work</span>
          <h2>Featured Projects</h2>
          <p>Here are some of my recent projects</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link github"
                    >
                      <i className="fab fa-github"></i>
                      <span>View Code</span>
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link live"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 