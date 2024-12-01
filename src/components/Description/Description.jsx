import React from 'react'
import './Description.css'
import reactIcon from '../../assets/description_images/React_icon.PNG'
import { chooseLanguage } from '../../utils/otherUtils';
import { spanish, english } from '../../data/DescriptionData'
import { Dropdown } from '../Dropdown/Dropdown';

const Description = ({ language, isVisible, setIsVisible }) => {
  const textData = chooseLanguage(language, english, spanish);
  return (
    <div id="description">
      <Dropdown title={textData.title} isVisible={isVisible} setIsVisible={setIsVisible} />

      {isVisible && <div className={`description ${isVisible ? 'section--active' : ''}`}>
        <div className='description--container'>
          <p>{textData.firstParragraph} </p>
          <h4>{textData.firstSubtitle}</h4>
          <p>{textData.secondParragraph}  </p>
          <p>{textData.thirdParragraph} </p>
          <a href="https://github.com/IagoSoler/portfolio" target="_blank" rel="noopener noreferrer">
            <button className='description--container--button'>{textData.githubButton} </button>
          </a>
        </div>
        <img className='description--container--image' src={reactIcon} alt="React Icon" />
      </div>}
    </div>
  )
}

export default Description