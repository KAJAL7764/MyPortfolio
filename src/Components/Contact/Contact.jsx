import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">
          Love to hear from you,<br />
          Get in touch <span role="img" aria-label="waving hand">👋</span>
        </h2>
        <form className="contact-form">
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" placeholder="Edward Snowden" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" placeholder="itanexample@gmail.com" />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="interest">What you are interested</label>
              <select id="interest" name="interest">
                <option value="">Design & Branding</option>
                {/* Add more options here if needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="budget">Project Budget</label>
              <select id="budget" name="budget">
                <option value="">Select your budget</option>
                {/* Add more options here if needed */}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Let us know your project about"></textarea>
          </div>
          <button type="submit" className="submit-button">
            Just Send <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 