import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import menu_open from '../../assets/menu_open.png';
import menu_close from '../../assets/menu_close.png';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });
  const menuRef = useRef();

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const navbarVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <motion.nav className="navbar" initial="hidden" animate="visible" variants={navbarVariants}>
      <div className="navbar-container">
        <motion.h1 
          className="navbar-logo"
          whileHover={{ scale: 1.08, color: 'var(--primary-color-darker)' }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <a href="/" className="navbar-logo-link">Kajal</a>
        </motion.h1>

        {/* Centered Desktop Links */}
        <div className="navbar-center-group">
          <ul className="navbar-links">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <li key={item}>
                {item === "home" ? (
                  <a href="/" className="navbar-link">Home</a>
                ) : (
                  <ScrollLink
                    to={item}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="navbar-link"
                    activeClass="active"
                  >
                    {item === "projects" ? "My Work" : item === "about" ? "About Me" : item}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right-aligned elements (Theme Toggle and Mobile Menu Icon) */}
        <div className="navbar-right-group">
          {/* Theme Toggle Button */}
          <button className="theme-toggle-button" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile menu icon */}
          {!menuOpen && (
            <img
              src={menu_open}
              alt="open"
              className="menu-icon"
              onClick={openMenu}
            />
          )}
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {menuOpen && (
        <div className="mobile-menu-backdrop" onClick={closeMenu}></div>
      )}

      {/* Mobile menu */}
      <div 
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
      >
        <div className="mobile-menu-header">
          <img
            src={menu_close}
            alt="close"
            className="mobile-menu-close-icon"
            onClick={closeMenu}
          />
        </div>
        <ul className="mobile-links">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              {item === "home" ? (
                <a href="/" className="mobile-link" onClick={closeMenu}>Home</a>
              ) : (
                <ScrollLink
                  to={item}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={closeMenu}
                  className="mobile-link"
                  activeClass="active"
                >
                  {item === "projects" ? "My Work" : item === "about" ? "About Me" : item}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
