import React, { useState, useEffect } from 'react';
import { scrollToSection, handleScroll } from '../../../utils/scrollUtils';



const NavbarLinks = ({ textData }) => {
  const [activeSection, setActiveSection] = useState('');


  useEffect(() => {
    const scrollHandler = handleScroll(setActiveSection);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <ul>
      <li>
        <button
          onClick={() => scrollToSection('about')}
          className={activeSection === 'about' ? 'active' : ''} >
          {textData.navButtonAbout}
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection('career')}
          className={activeSection === 'career' ? 'active' : ''} >
          {textData.navButtonCareer}
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection('skills')}
          className={activeSection === 'skills' ? 'active' : ''}>
          {textData.navButtonSkills}
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection('description')}
          className={activeSection === 'description' ? 'active' : ''} >
          {textData.navButtonDescription}
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection('projects')}
          className={activeSection === 'projects' ? 'active' : ''} >
          {textData.navButtonProjects}
        </button>
      </li>
    </ul>
  )
}

export default NavbarLinks
