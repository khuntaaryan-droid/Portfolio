import React from 'react';
import { Briefcase, FolderGit2, Calendar, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const projects = [
    {
      title: "Bike Rental System (Final Year Project)",
      role: "Full Stack Developer",
      description: "A comprehensive web application for bike rentals to improve rental management through automation.",
      points: [
        "Developed a Django-based web application",
        "Implemented user registration, authentication, booking management, and admin dashboard",
        "Integrated database operations using SQL"
      ],
      tech: ["Django", "Python", "SQL"]
    },
    {
      title: "Agri Shop – Farmer Online Selling App",
      role: "Developer",
      description: "A platform connecting farmers directly with customers to enhance transparency and efficiency in agricultural trading.",
      points: [
        "Built product listing, inventory management, and online ordering modules"
      ],
      tech: ["Python", "Web Technologies"]
    }
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        
        {/* Experience Section */}
        <div className="section-block">
          <h2 className="heading-secondary">Internship <span className="text-gradient">Experience</span></h2>
          <div className="timeline">
            <div className="timeline-item glass">
              <div className="timeline-icon">
                <Briefcase size={24} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Python & Django Web Development Intern</h3>
                  <span className="timeline-company">Satvarth Solutions</span>
                  <div className="timeline-date">
                    <Calendar size={16} />
                    <span>Nov 2025 – Dec 2025</span>
                  </div>
                </div>
                <ul className="timeline-points">
                  <li>Completed a 120-hour internship focused on Python and Django development.</li>
                  <li>Worked on real-world web application assignments.</li>
                  <li>Applied Object-Oriented Programming concepts in project development.</li>
                  <li>Gained practical exposure to backend development and database integration.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="section-block" id="projects">
          <h2 className="heading-secondary">My <span className="text-gradient">Projects</span></h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card glass">
                <div className="project-header">
                  <FolderGit2 className="project-folder" size={32} />
                  <h3>{project.title}</h3>
                </div>
                <p className="project-role">{project.role}</p>
                <p className="project-desc">{project.description}</p>
                <ul className="project-points">
                  {project.points.map((point, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="check-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
