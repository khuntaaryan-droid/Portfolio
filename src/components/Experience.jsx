import React from 'react';
import { Briefcase, FolderGit2, Calendar, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Vibe Developer",
      company: "Leotude Lifestyle Private Limited",
      date: "Sep 2026 – Present",
      points: [
        "Working with Python and Django for backend development and software application management.",
        "Developing and maintaining REST APIs using Django REST Framework.",
        "Working with SQL databases, database operations, data management, and migration.",
        "Handling application debugging, software maintenance, and system improvements.",
        "Working on HRMS software management and application functionality."
      ]
    },
    {
      role: "Python Developer Intern",
      company: "Satvarth Solutions",
      date: "Nov 2025 – Dec 2025",
      points: [
        "Completed 120-hour internship in Python and Django.",
        "Gained hands-on experience in OOP concepts and web development.",
        "Worked on real-time projects and assignments."
      ]
    },
    {
      role: "AI/ML Intern",
      company: "Edunet Foundation",
      date: "Feb 2025",
      points: [
        "Completed foundational training and practical assignments in Artificial Intelligence and Machine Learning concepts."
      ]
    }
  ];

  const projects = [
    {
      title: "Bike Rental System (Final Year Project)",
      role: "Oct 2025 – Mar 2026",
      description: "Developed a web-based Bike Rental System to automate the rental process. The system allows users to search, compare, and book bikes online, while dealers manage listings and admins control system operations.",
      points: [
        "Automated bike rental workflow with user search, comparison, and online booking",
        "Empowered dealers to manage bike listings and availability",
        "Provided comprehensive admin controls for monitoring and system management"
      ],
      tech: ["Python", "Django", "Django REST Framework", "SQL"]
    },
    {
      title: "Agri Shop – Farmer Online Selling Application",
      role: "Project",
      description: "Developed an Agri Shop web application connecting farmers directly with customers. Implemented product listing, inventory management, online ordering, and admin management features to improve transparency and efficiency in agricultural trading.",
      points: [
        "Direct farmer-to-customer connection improving trading efficiency",
        "Product listing, inventory control, and real-time online ordering",
        "Robust admin management system for platform oversight"
      ],
      tech: ["Python", "Django", "SQL", "Web Technologies"]
    }
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        
        {/* Experience Section */}
        <div className="section-block">
          <h2 className="heading-secondary">Professional <span className="text-gradient">Experience</span></h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item glass">
                <div className="timeline-icon">
                  <Briefcase size={24} />
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.role}</h3>
                    <span className="timeline-company">{exp.company}</span>
                    <div className="timeline-date">
                      <Calendar size={16} />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                  <ul className="timeline-points">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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