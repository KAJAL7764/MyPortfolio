import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "987dafde-0223-4281-ba04-978c609b7f9f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Feedback Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">
          Love to hear from you,<br />
          Get in touch <span role="img" aria-label="waving hand">👋</span>
        </h2>
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" placeholder="kajal chauhan" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" placeholder="example@gmail.com" />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="interest">What you are interested</label>
              <select id="interest" name="interest">
                <option value="design-branding">Design & Branding</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="budget">Project Budget</label>
              <select id="budget" name="budget">
                <option value="">Select your budget</option>
                <option value="<5k">Less than $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-20k">$10,000 - $20,000</option>
                <option value=">20k">More than $20,000</option>
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
        <span className="result-message">{result}</span>
      </div>
    </section>
  );
};

export default Contact; 