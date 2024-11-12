import React from 'react'
import './About.css'
import { chooseLanguage } from '../../utils/otherUtils';
import { scrollToSection } from '../../utils/scrollUtils';
import { spanish, english } from '../../data/AboutData'

import searchIcon from '../../assets/about_images/search_icon.png'
const About = ({ language }) => {
  const textData = chooseLanguage(language, english, spanish);
  return (

    <div id="about" >
      <div className='about--text'>
        <h2>{textData.title}</h2>
        <p>
          {textData.firstParragraph}
        </p>
        <h4>
          {textData.secondTtitle}
        </h4>
        <p>
          {textData.secondParragraph}
        </p>
        <button className='about--contact__button' onClick={()=>scrollToSection("contact")}> {textData.contactButton}</button>
    
      </div>
      <img className='about--image' src={searchIcon} alt="Search Icon" />

    </div>
  )
}

export default About