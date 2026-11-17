import React from 'react';
import { Code, Database, Layout, Terminal } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Code size={24} />,
      skills: ["Python", "Django", "Django REST Framework", "REST API", "OOP Concepts"]
    },
    {
      title: "Database Management",
      icon: <Database size={24} />,
      skills: ["SQL", "Database Operations", "Data Management", "Migration"]
    },
    {
      title: "Frontend (Basics)",
      icon: <Layout size={24} />,
      skills: ["HTML", "CSS", "JavaScript (Basics)"]
    },
    {
      title: "Tools & Environment",
      icon: <Terminal size={24} />,
      skills: ["Git & GitHub", "VS Code", "GitHub Copilot", "Cursor AI"]
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <h2 className="heading-secondary">Technical <span className="text-gradient">Skills</span></h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card glass" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="skill-header">
                <div className="skill-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="skill-bullet"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
