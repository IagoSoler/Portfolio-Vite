import React from 'react'
import NavbarLinks from './NavbarLinks';
import NavbarContact from './NavbarContact';
import NavbarLanguage from './NavbarLanguage';


const NavbarDesktop = ({ textData, language, setLanguage }) => {
    return (
        <div className="navbar--desktop">
            <div className="navbar--name">
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