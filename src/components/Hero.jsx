import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="hero section-padding">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting animate-fade-in">Hi, I'm</p>
          <h1 className="heading-primary animate-fade-in delay-100">
            Aryan Khunt <br />
            <span className="text-gradient">Python/AI Developer</span>
          </h1>
          <p className="hero-description animate-fade-in delay-200">
            Motivated BCA graduate with hands-on experience in Python, Django, SQL, and web development. 
            Passionate about Artificial Intelligence, Machine Learning, and building real-world software solutions.
          </p>
          
          <div className="hero-cta animate-fade-in delay-300">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-socials animate-fade-in delay-400">
            <a href="https://github.com/khuntaaryan-droid" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/aaryan-khunt/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="mailto:khuntaaryan@gmail.com" className="social-link" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in delay-200">
          <div className="visual-circle primary"></div>
          <div className="visual-circle secondary"></div>
          <div className="profile-container glass">
            <img src={profileImg} alt="Aryan Khunt" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
