import React, { useState } from 'react';
import './Intro.css';
import spanishFlag from '../../assets/intro_images/spain_flag.png'
import englishFlag from '../../assets/intro_images/uk_flag.png'

const Intro = ({ setLanguage }) => {
  const [exiting, setExiting] = useState(false);

  const handleLanguageChange = (lang) => {
    setExiting(true);
    setTimeout(() => {
      setLanguage(lang);
    }, 1000); 
  };
  return (
    <div className='intro'>
            <h1 className={`intro--title ${exiting ? 'exiting__right' : 'left'}`} onClick={() => handleLanguageChange("spanish")}>ESPAÑOL</h1>
            <h1 className={`intro--title ${exiting ? 'exiting__left' : 'right'}`}onClick={() => handleLanguageChange("english")}>ENGLISH</h1>
    </div>
  );
}

export default Intro;