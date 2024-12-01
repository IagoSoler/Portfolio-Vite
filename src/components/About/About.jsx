import React from 'react'
import './About.css'
import { chooseLanguage } from '../../utils/otherUtils';
import { scrollToSection } from '../../utils/scrollUtils';
import { spanish, english } from '../../data/AboutData'
import searchIcon from '../../assets/about_images/search_icon.png'
import { Dropdown } from '../Dropdown/Dropdown';


const About = ({ language, isVisible, setIsVisible }) => {
  const textData = chooseLanguage(language, english, spanish);
  return (
    <div id="about" >

      <Dropdown title={textData.title} isVisible={isVisible} setIsVisible={setIsVisible} />

      {isVisible && <div className={`about ${isVisible ? 'section--active' : ''}`}>
        <div className='about--text'>
          <p>
            {textData.firstParragraph}
          </p>
          <h4>
            {textData.secondTtitle}
          </h4>
          <p>
            {textData.secondParragraph}
          </p>
          <button className='about--contact__button' onClick={() => scrollToSection("contact")}> {textData.contactButton}</button>

        </div>

        <img className='about--image' src={searchIcon} alt="Search Icon" />

      </div>}
    </div>
  )
}

export default About