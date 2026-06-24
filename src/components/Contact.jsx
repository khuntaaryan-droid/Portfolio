import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(event.target);

    // Replace this with your actual Web3Forms access key
    formData.append("access_key", "4054bb35-4805-4379-81ea-fbaabec64e6b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        event.target.reset();
      } else {
        console.error("Form error:", data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <h2 className="heading-secondary">Get In <span className="text-gradient">Touch</span></h2>
        
        <div className="contact-content">
          <div className="contact-info glass">
            <h3>Let's talk about everything!</h3>
            <p className="contact-desc">
              I'm currently seeking an AI/ML or Python Developer Internship to apply my technical skills 
              and contribute to real-world software solutions. Feel free to reach out.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:khuntaaryan@gmail.com" className="contact-value">khuntaaryan@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <a href="tel:+916356298807" className="contact-value">+91 63562 98807</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="contact-label">Location</p>
                  <span className="contact-value">Ahmedabad, India</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form glass" onSubmit={onSubmit}>
            {submitStatus === 'success' && (
              <div className="form-alert success">
                <CheckCircle2 size={20} />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-alert error">
                <AlertCircle size={20} />
                <span>Something went wrong. Please try again or email me directly.</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Internship Opportunity" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Hello Aryan..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
