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
              I am a motivated BCA graduate with a strong foundation in Full Stack Development and Database Management Systems.
              My passion lies in Artificial Intelligence, Machine Learning, and backend development. 
              I strive to build scalable software systems that solve real-world problems.
            </p>
            <p>
              Having worked on projects like an online selling platform for farmers and a Django-based bike rental system, 
              I've gained practical experience translating complex requirements into efficient code.
            </p>
          </div>

          <div className="education-cards">
            <div className="edu-card glass">
              <div className="edu-icon">
                <GraduationCap size={24} />
              </div>
              <div className="edu-details">
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p className="edu-school">Dr. Subhash University, Junagadh</p>
                <p className="edu-date">July 2023 - April 2026</p>
              </div>
            </div>
            
            <div className="edu-card glass">
              <div className="edu-icon">
                <BookOpen size={24} />
              </div>
              <div className="edu-details">
                <h3>Relevant Coursework</h3>
                <p className="edu-courses">
                  Data Structures & Algorithms, Software Engineering, Web Technologies, DBMS.
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
