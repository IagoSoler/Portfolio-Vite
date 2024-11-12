import React, { useEffect, useState } from 'react';
import './Header.css'
import { handleFirstScroll } from '../../utils/scrollUtils';
import myPhoto from '../../assets/header_images/myphoto.PNG'
import chevronDown from '../../assets/header_images/chevronDown.svg';
import { chooseLanguage } from '../../utils/otherUtils';
import { spanish, english } from '../../data/HeaderData';



const Header = ({ language }) => {
  const [isVisible, setIsVisible] = useState(true);
  const textData = chooseLanguage(language, english, spanish);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.wheelDeltaY < 0 && isVisible) {
        handleFirstScroll(setIsVisible, isVisible,55);
      }
    }
    document.addEventListener('wheel', handleScroll);
    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, [isVisible]);
  return (

    <div id='header' className={isVisible ? '' : 'hidden'}>
      <div className='header--container'>
        <img className='header--container--image' src={myPhoto} alt="myphoto" />
        <div className='header--container--title'>
          <h1 className='header--container--title--text'>{textData.title}</h1>
          <h3 className='header--container--subtitle'>{textData.subtitle}</h3>

        </div>
      </div>
      <img onClick={() => handleFirstScroll(setIsVisible, isVisible,55)} className='header--chevron__down' src={chevronDown} alt="chevronDown" />
    </div>

  )
}

export default Header