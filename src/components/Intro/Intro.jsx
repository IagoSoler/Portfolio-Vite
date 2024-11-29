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
{/*       <h1 className={`intro--title ${exiting ? 'exiting__right' : 'left'}`}>Elige tu idioma</h1>
      <h1 className={`intro--title ${exiting ? 'exiting__left' : 'right'}`}>Choose your language</h1>
      <div className={`intro--buttons__container ${exiting ? 'exiting__down' : 'entering__up'}`}>
        <button className='intro--buttons__container--button' onClick={() => handleLanguageChange("spanish")}>
          <img src={spanishFlag} alt='Bandera Española' className='intro--button-flag' />
          Español
        </button>
        <button className='intro--buttons__container--button' onClick={() => handleLanguageChange("english")}> 
        <img src={englishFlag} alt='Bandera Española' className='intro--button-flag' />
          English 
        </button>
      </div> */}
    </div>
  );
}

export default Intro;