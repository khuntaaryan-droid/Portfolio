import React from 'react';
import { Code, Database, Layout, Terminal, Brain } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code size={24} />,
      skills: ["Python", "JavaScript (Basic)", "Object-Oriented Programming (OOP)"]
    },
    {
      title: "Data & AI",
      icon: <Brain size={24} />,
      skills: ["NumPy", "Pandas", "Scikit-Learn", "Machine Learning Basics", "Artificial Intelligence"]
    },
    {
      title: "Web Development",
      icon: <Layout size={24} />,
      skills: ["Django", "HTML5", "CSS3", "REST APIs"]
    },
    {
      title: "Database Management",
      icon: <Database size={24} />,
      skills: ["SQL", "Relational Databases", "Data Integration"]
    },
    {
      title: "Tools & Workflow",
      icon: <Terminal size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Cursor AI", "GitHub Copilot"]
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
