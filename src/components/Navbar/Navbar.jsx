import React from 'react';
import './Navbar.css';
import myPhoto from '../../assets/header_images/myphoto.PNG'
import githubLogo from '../../assets/contact_images/github_logo.png';
import linkedinLogo from '../../assets/contact_images/linkedin_logo.png';
import NavbarLinks from './NavbarLinks';
import { chooseLanguage } from '../../utils/otherUtils';
import {spanish, english} from '../../data/NavbarData'


const Navbar = ({ setLanguage, language }) => {
const textData = chooseLanguage(language, english, spanish);
  return (
    <nav className="navbar">
      <div className='navbar--name'>
        <img className='navbar--name--image' src={myPhoto} alt="myPhoto" />
        <p>Iago Soler veira</p>
      </div>

      <NavbarLinks language={language} />

      <div className='navbar--language'>
        <img className='navbar--language--flag' src={textData.flagSrc} alt={language + "Flag"}  />
        <select className='navbar--language--selector'value={language}  onChange={(e) => setLanguage(e.target.value)}>
          <option value="spanish"> {textData.selectorOption1}</option>
          <option value="english">{textData.selectorOption2}</option>
        </select>
      </div>


      <div className='navbar--contact'>
        <a href="https://github.com/IagoSoler" target="_blank" rel="noopener noreferrer">
          <img className='navbar--contact--github__image' src={githubLogo} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/iago-soler-veira-73a2a9188" target="_blank" rel="noopener noreferrer">
          <img className='navbar--contact--linkedin__image' src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
