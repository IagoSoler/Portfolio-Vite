import React, { useEffect } from 'react';
import './Header.css'
import { handleFirstScroll } from '../../utils/scrollUtils';
import myPhoto from '../../assets/header_images/myphoto.PNG'
import chevronDown from '../../assets/header_images/chevronDown.svg';
import { chooseLanguage } from '../../utils/otherUtils';
import { spanish, english } from '../../data/HeaderData';



const Header = ({ language, isVisible, setIsVisible }) => {
  const textData = chooseLanguage(language, english, spanish);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.wheelDeltaY < 0 && isVisible) {
        handleFirstScroll(setIsVisible, 55);
      }
    };

    const handleTouchMove = (e) => {
      if (isVisible) {
        e.preventDefault();
      }
    };

    document.addEventListener('wheel', handleScroll);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      document.removeEventListener('wheel', handleScroll);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isVisible]);

  
  return (
    <div id='header' className={isVisible ? '' : 'hidden'}>
      <div className='header--layout'>
        <div className='header--container'>
          <img className='header--container--image' src={myPhoto} alt="myphoto" />
          <div className='header--container--title'>
            <h1 className='header--container--title--text'>{textData.title}</h1>
            <h3 className='header--container--subtitle'>{textData.subtitle}</h3>

          </div>
        </div>
        <img onClick={() => handleFirstScroll(setIsVisible, 55)} className='header--chevron__down' src={chevronDown} alt="chevronDown" />
      </div>
    </div>

  )
}

export default Header