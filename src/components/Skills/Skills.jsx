import React, { useState,useEffect } from 'react'
import './Skills.css'
import { chevrons, spanish, english } from '../../data/SkillsData'
import SkillsCard from './SkillsCard.jsx'
import { chooseLanguage } from '../../utils/otherUtils';

const Skills = ({ language }) => {
  const [selector, setSelector] = useState(1)
  const [animation, setAnimation] = useState(null); // New state for animation
  const textData = chooseLanguage(language, english, spanish);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(null); // Reset animation after transition
    }, 500); // Match the transition duration
  
    return () => clearTimeout(timeout);
  }, [animation]);
  const operation = (operation) => {
    if (operation === "+") {
      if (selector === 3){
        setSelector(prev => prev)
      } else {
        setSelector(prev => prev + 1);
        setAnimation('slide-right'); // Set animation class
      }

    } else {
      if (selector === 1){
        setSelector(prev => prev)
      } else {
        setSelector(prev => prev - 1);
        setAnimation('slide-left'); // Set animation class
      }
    }
  };


  return (
    <section id="skills">
      <h2 className="skills__title">{textData.title}</h2>
      <div className="skills__container">
        <div className="skills__navigation">
          <img
            onClick={() => operation("-")}
            className="skills-nav__chevron"
            src={chevrons.left}
            alt="chevron left"
          />
        </div>
        <div className="skills__content">
          {selector===1 && <SkillsCard array={textData.languages} title={textData.languagesTitle} animation={animation} /> }
          {selector===2 && <SkillsCard array={textData.frontend} title="Frontend" animation={animation} /> }
          {selector===3 && <SkillsCard array={textData.backend} title={textData.backendTitle} animation={animation} /> }
        </div>
        <div className="skills__navigation">
          <img
            onClick={() => operation("+")}
            className="skills-nav__chevron"
            src={chevrons.right}
            alt="chevron right"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills
