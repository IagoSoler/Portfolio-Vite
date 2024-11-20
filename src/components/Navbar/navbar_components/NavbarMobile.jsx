import React from 'react'
import { Menu, X } from 'lucide-react';
import NavbarLinks from './NavbarLinks';
import NavbarContact from './NavbarContact';
import NavbarLanguage from './NavbarLanguage';


const NavbarMobile = ({ textData, language, setLanguage, isMenuOpen, setIsMenuOpen }) => {

    return (
        <>
            {isMenuOpen && <div className='navbar--mobile--over__layout' onClick={() => setIsMenuOpen(false)}></div>}
            <div className={`navbar--name--mobile ${isMenuOpen ? 'show' : ''}`}>
                <img className="navbar--name--image" src={textData.myPhoto} alt="myPhoto" />
                <p>Iago Soler Veira</p>
            </div>


            <button
                className="navbar--menu--button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`navbar--mobile ${isMenuOpen ? 'show' : ''}`}>

                <NavbarLinks language={language}
                    textData={textData}
                />
                <NavbarLanguage
                    textData={textData}
                    setLanguage={setLanguage}
                    language={language}
                />

                <NavbarContact
                    githubLogo={textData.githubLogo}
                    linkedinLogo={textData.linkedinLogo}
                />
            </div>
        </>
    )
}

export default NavbarMobile