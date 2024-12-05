import React, { useState, useEffect } from 'react'
import './Skills.css'
import { chevrons, spanish, english } from '../../data/SkillsData'
import SkillsCard from './SkillsCard.jsx'
import { chooseLanguage } from '../../utils/otherUtils';
import { Dropdown } from '../Dropdown/Dropdown';

const Skills = ({ language, isVisible, setIsVisible }) => {
  const [selector, setSelector] = useState(1)
  const [animation, setAnimation] = useState(null);
  const textData = chooseLanguage(language, english, spanish);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(null);
    }, 10);

    return () => clearTimeout(timeout);
  }, [animation]);
  const operation = (operation) => {
    if (operation === "+") {
      if (selector === 3) {
        setSelector(prev => prev)
      } else {
        setSelector(prev => prev + 1);
        setAnimation('slide-right');
      }

    } else {
      if (selector === 1) {
        setSelector(prev => prev)
      } else {
        setSelector(prev => prev - 1);
        setAnimation('slide-left');
      }
    }
  };


  return (
    <section id="skills">

      <Dropdown title={textData.title} isVisible={isVisible} setIsVisible={setIsVisible} />

      {isVisible && <section className={`skills ${isVisible ? 'section--active' : ''}`}>

        <div className="skills__container">

          

            {selector === 1 && <SkillsCard array={textData.languages} title={textData.languagesTitle} animation={animation} chevrons={chevrons} operation={operation} />}
            {selector === 2 && <SkillsCard array={textData.frontend} title="Frontend" animation={animation} chevrons={chevrons} operation={operation} />}
            {selector === 3 && <SkillsCard array={textData.backend} title={textData.backendTitle} animation={animation} chevrons={chevrons} operation={operation} />}


        </div>
      </section>}
    </section>
  );
}

export default Skills
