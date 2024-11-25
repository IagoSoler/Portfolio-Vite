import React, { useState } from 'react'
import './Skills.css'
import { chevrons, spanish, english } from '../../data/SkillsData'
import SkillsCard from './SkillsCard.jsx'
import { chooseLanguage } from '../../utils/otherUtils';

const Skills = ({ language }) => {
  const [selector, setSelector] = useState(1)
  const textData = chooseLanguage(language, english, spanish);

  const operation = (operation) => {
    if (operation === "+") {
      selector === 3 ? setSelector(prev => prev) : setSelector(prev => prev + 1)
    } else {
      selector === 1 ? setSelector(prev => prev) : setSelector(prev => prev - 1)
    }
  }


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
          {selector===1 && <SkillsCard array={textData.languages} title={textData.languagesTitle} /> }
          {selector===2 && <SkillsCard array={textData.frontend} title="Frontend" /> }
          {selector===3 && <SkillsCard array={textData.backend} title={textData.backendTitle} /> }
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
