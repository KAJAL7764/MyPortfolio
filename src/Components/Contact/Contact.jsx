import React, { useState } from 'react';
import './Contact.css'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Form submission logic
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoCards = [
    {
      icon: 'fas fa-running',
      title: 'ABOUT CLUB',
      content: (
        <>
          Running Guide<br />Workouts
        </>
      )
    },
    {
      icon: 'fas fa-phone',
      title: 'PHONE (LANDLINE)',
      content: (
        <>
          + 912 3 567 8987<br />+ 912 5 252 3336
        </>
      )
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'OUR OFFICE LOCATION',
      content: (
        <>
          The Interior Design Studio Company<br />The Courtyard, Al Quoz 1, Colorado, USA
        </>
      )
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Contact Us</h2>
          <p>Any questions or remarks? Just write us a message!</p>
        </motion.div>

        <div className="contact-container">
          {/* Info Cards Section with blue band */}
          <div className="contact-info">
            {infoCards.map((card, idx) => (
              <motion.div
                className="info-card"
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="info-icon">
                  <i className={card.icon}></i>
                </div>
                <div className="info-content">
                  <h3>{card.title}</h3>
                  <p>{card.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter a valid email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Name"
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="3"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  SUBMITTING...
                </>
              ) : (
                <>SUBMIT</>
              )}
            </motion.button>
            {submitStatus === 'success' && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fas fa-check-circle"></i>
                Message sent successfully!
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fas fa-exclamation-circle"></i>
                Oops! Something went wrong. Please try again.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 