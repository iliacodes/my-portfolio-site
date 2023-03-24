import React from 'react';
import './styles/header.css'

const Header = () => {

  const scrollToSection = (event) => {
    event.preventDefault();
    const sectionId = event.target.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="#skills" onClick={scrollToSection}>Skills</a></li>
          <li><a href="#projects" onClick={scrollToSection}>Projects</a></li>
          <li><a href="#contact" onClick={scrollToSection}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
