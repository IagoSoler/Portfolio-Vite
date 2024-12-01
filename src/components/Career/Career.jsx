import React from 'react'
import academyIcon from '../../assets/career_images/academy_icon.png'
import './Career.css'
import { chooseLanguage } from '../../utils/otherUtils';
import { spanish, english } from '../../data/CareerData'
import { Dropdown } from '../Dropdown/Dropdown';


const Career = ({ language, isVisible, setIsVisible }) => {
    const textData = chooseLanguage(language, english, spanish);
    return (
        <div id='career'>
            <Dropdown title={textData.title} isVisible={isVisible} setIsVisible={setIsVisible} />

            {isVisible && <div className={`career ${isVisible ? 'section--active' : ''}`}>
                <img className='career--image' src={academyIcon} alt="Academy Icon" />
                <div className='career--text'>
                    <p> {textData.parragraph} </p>
                    <br />
                    <a className='career--text--link' href="./CV/CV_Iago_Soler.pdf" download>{textData.downloadLink}</a>
                </div>
            </div>}
        </div>


    )
}

export default Career