import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
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
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
            <Code2 className="logo-icon" />
            <span className="logo-text">Aryan<span className="text-gradient">Khunt</span></span>
          </a>

          {/* Desktop Nav */}
          <ul className="nav-links desktop-nav">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
            <li>
              <button className="nav-resume-btn" onClick={downloadResume}>
                <Download size={15} />
                <span>Resume</span>
              </button>
            </li>
          </ul>

          {/* Mobile Nav Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown with Solid Backdrop */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-wrapper">
            <div 
              className="mobile-backdrop" 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
            <div className="mobile-menu-drawer">
              <ul className="mobile-nav-links">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="mobile-nav-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mobile-menu-footer">
                <button 
                  className="mobile-resume-btn"
                  onClick={() => {
                    downloadResume();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;