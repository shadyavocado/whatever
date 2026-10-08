import React, { useState } from 'react';
import Model from './Model';
import './Contact.css';
import Axios from 'axios';
function Contact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3000/api/createcontact", {
      name,email,subject,message
    })
    .then((response) => {
      console.log(response);
      alert("Contact Registered Successfully!");

      // Clear inputs
      setEmail('');
      setName('');
      setMessage('');
      setSubject('');
    })
    .catch((error) => {
      console.log("ERROR:", error);
      console.log("Response:", error.response);
      console.log("Message:", error.message);

      alert(error.response?.data?.message || error.message);
    });
  };
    // <input type="text" id="contactName"  value={name} onChange={(e) => setName(e.target.value)}  placeholder="John Doe" />
  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        {/* Header Section */}
        <div className="contact-header">
          <span className="badge">Reach Out</span>
          <h2>{props.title || 'Contact Us'}</h2>
          <p>Have questions, feedback, or need assistance? Send us a message below.</p>
        </div>

        <div className="contact-content">
          {/* Left Column: Contact Cards */}
          <div className="contact-info">
            <div className="info-card">
              <div className="icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <h4>Email Us</h4>
                <p>support@example.com</p>
                <p>contact@example.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+92 (312) 345-6789</p>
                <p>+1 (555) 000-1234</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h4>Visit Us</h4>
                <p>123 Business Avenue, Suite 400</p>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <form className="contact-card" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>

            <div className="input-group">
              <label htmlFor="contactName">Your Name</label>
              <input type="text" id="contactName"  value={name} onChange={(e) => setName(e.target.value)}  placeholder="John Doe" />
            </div>

            <div className="input-group">
              <label htmlFor="contactEmail">Email Address</label>
              <input type="email" id="contactEmail" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="contact@example.com" />
            </div>

            <div className="input-group">
              <label htmlFor="contactSubject">Subject</label>
              <input type="text" id="contactSubject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="How can we help?" />
            </div>

            <div className="input-group">
              <label htmlFor="contactMessage">Message</label>
              <textarea id="contactMessage" rows="4" value={message} onChange={(e) => setMessage(e.target.value)}  placeholder="Write your message here..."></textarea>
            </div>

            <button type="submit" className="btn-primary">
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <Model />
    </div>
  );
}

export default Contact;