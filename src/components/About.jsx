import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="heading-secondary">About <span className="text-gradient">Me</span></h2>
        
        <div className="about-content">
          <div className="about-text glass">
            <p>
              I am a Python Developer with experience in Python, Django, Django REST Framework, SQL, and backend development. 
              Skilled in developing and maintaining web applications, working with REST APIs, database management, and software systems.
            </p>
            <p>
              Experienced in Python development through professional work, internships, and projects. Currently working as a Vibe Developer 
              at Leotude Lifestyle Private Limited, building REST APIs and managing database operations for HRMS software and application functionality.
            </p>
          </div>

          <div className="education-cards">
            <div className="edu-card glass">
              <div className="edu-icon">
                <GraduationCap size={24} />
              </div>
              <div className="edu-details">
                <h3>Bachelor of Computer Application (BCA)</h3>
                <p className="edu-school">Dr. Subhash University, Junagadh</p>
                <p className="edu-date">June 2023 – Mar 2026 • CGPA: 8.48</p>
              </div>
            </div>
            
            <div className="edu-card glass">
              <div className="edu-icon">
                <BookOpen size={24} />
              </div>
              <div className="edu-details">
                <h3>Core Focus & Expertise</h3>
                <p className="edu-courses">
                  Python, Django, Django REST Framework, SQL Database Management, and OOP Concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
