import React from 'react'
import NavbarLinks from './NavbarLinks';
import NavbarContact from './NavbarContact';
import NavbarLanguage from './NavbarLanguage';
import {resetToHeader}  from '../../../utils/scrollUtils';


const NavbarDesktop = ({ textData, language, setLanguage, setAreVisible  }) => {
    return (
        <div className="navbar--desktop">
            <div className="navbar--name" onClick={()=>resetToHeader(setAreVisible )}>
                <img className="navbar--name--image" src={textData.myPhoto} alt="myPhoto" />
                <p>Iago Soler Veira</p>
            </div>

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
    )
}

export default NavbarDesktop