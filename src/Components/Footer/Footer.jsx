import './Footer.css'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Kajal chauhan</h3>
            <p>Full Stack Developer</p>
          </div>
          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} kajal chauhan All rights reserved.</p>
          <p className="footer-made">
            Made with <i className="fas fa-heart"></i> using React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
