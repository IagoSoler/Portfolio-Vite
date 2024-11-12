import React from 'react'
import './Skills.css'
import {spanish,english} from '../../data/SkillsData'
import SkillsCard from './SkillsCard.jsx'
import { chooseLanguage } from '../../utils/otherUtils';
const Skills = ({language}) => {
  const textData = chooseLanguage(language, english, spanish);
  return (
    <div id="skills">
      <h2>{textData.title}</h2>
      <h4>{textData.languagesTitle}</h4>
      <div className='skills--grid'>
        <SkillsCard array={textData.languages}/>
      </div>
      <h4>Frontend:</h4>
      <div className='skills--grid'>
      <SkillsCard array={textData.frontend}/>
      </div>
      <h4>{textData.backendTitle}</h4>
      <div className='skills--grid'>
      <SkillsCard array={textData.backend}/>
      </div>
    </div>
  );
}

export default Skills
