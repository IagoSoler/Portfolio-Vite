import React from 'react'
import { scrollToSection } from '../../utils/scrollUtils';
import { chooseLanguage } from '../../utils/otherUtils';
import {spanish, english} from '../../data/ContactData'


const ContactNav = ({language}) => {
    const textData = chooseLanguage(language, english, spanish);
    return (
            <ul>
                <li>
                    <button
                        onClick={() => scrollToSection('about')}>
                       {textData.navButtonAbout}
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection('career')}>
                        {textData.navButtonCareer}
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection('skills')}>
                        {textData.navButtonSkills}
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection('description')}>
                        {textData.navButtonDescription}
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection('projects')}>
                        {textData.navButtonProjects}
                    </button>
                </li>
            </ul>
    )
}

export default ContactNav