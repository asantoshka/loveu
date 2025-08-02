import React, { useEffect, useState } from 'react';
import { initReveals } from '../utils/reveal';

/**
 * Contact page containing a hero banner, contact form and contact
 * information.  Form validation runs on the client side and displays
 * error messages for invalid input.  A success message appears on
 * successful submission.
 */
function Contact() {
  useEffect(() => {
    initReveals();
  }, []);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [successMsg, setSuccessMsg] = useState('');

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let valid = true;
    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email.trim()) {
      newErrors.email = 'Please enter your email';
      valid = false;
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }
    if (!message.trim()) {
      newErrors.message = 'Please enter your message';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg('');
    if (validate()) {
      setSuccessMsg('Thank you for your message! We will get back to you soon.');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 className="page-title">Get in&nbsp;Touch</h1>
          <p className="page-subtitle">We would love to hear from you.</p>
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title reveal">Contact&nbsp;Us</h2>
          <p className="section-subtitle reveal">
            Whether you have a question or just want to say hello, our inbox is
            always open.
          </p>
          <div className="contact-wrapper">
            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <small className="error-msg">{errors.name}</small>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small className="error-msg">{errors.email}</small>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <small className="error-msg">{errors.message}</small>
              </div>
              <button type="submit" className="btn btn-primary">
                Send&nbsp;Message
              </button>
              {successMsg && (
                <p className="success-msg" style={{ display: 'block' }}>
                  {successMsg}
                </p>
              )}
            </form>
            {/* Contact Info */}
            <div className="contact-info">
              <ul>
                <li>
                  ✉️<span>love@themetemplate.com</span>
                </li>
                <li>
                  📞<span>+1&nbsp;(555)&nbsp;123‑4567</span>
                </li>
                <li>
                  📍<span>1234&nbsp;Heart Avenue, Romance City</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;