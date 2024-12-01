import React, { useState } from 'react';
import NavbarDesktop from './navbar_components/NavbarDesktop';
import NavbarMobile from './navbar_components/NavbarMobile';
import './Navbar.css';

import { chooseLanguage } from '../../utils/otherUtils';
import { spanish, english } from '../../data/NavbarData'



const Navbar = ({ setLanguage, language, setAreVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textData = chooseLanguage(language, english, spanish);


  return (
    <nav className="navbar">

    
      <NavbarDesktop
        textData={textData}
        language={language}
        setLanguage={setLanguage}
        setAreVisible={setAreVisible}
      />

     
      <NavbarMobile
        textData={textData}
        language={language}
        setLanguage={setLanguage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setAreVisible={setAreVisible}
 
      />




    </nav>
  );
};

export default Navbar;