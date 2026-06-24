import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', onclick: downloadResume },
  ];

function downloadResume() {
  const resumeUrl = '/Aryan-cv.pdf';
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Aryan_Khunt_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <Code2 className="logo-icon" />
          <span className="logo-text">Aryan<span className="text-gradient">Khunt</span></span>
        </a>

        {/* Desktop Nav */}
        <ul className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.href ? <a href={link.href} className="nav-link">{link.name}</a> : <button className=" btn" onClick={link.onclick}>{link.name}</button>}
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu glass">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                  {link.href ? 
                    <a href={link.href} 
                      className="mobile-nav-link"
                      onClick={() => setIsMobileMenuOpen(false)} > 
                       {link.name}
                    </a>
                      : 
                      <button className=" btn" onClick={link.onclick}>{link.name}</button>
                    }
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
