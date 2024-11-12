import React from 'react'
import academyIcon from '../../assets/career_images/academy_icon.png'
import './Career.css'
import { chooseLanguage } from '../../utils/otherUtils';
import { spanish, english } from '../../data/CareerData'
const Career = ({ language }) => {
    const textData = chooseLanguage(language, english, spanish);
    return (
        <div id='career'>
            <img className='career--image' src={academyIcon} alt="Academy Icon" />
            <div className='career--text'>
                <h2>{textData.title}</h2>
                <p> {textData.parragraph} </p>
                <br />
                <a className='career--text--link' href="./CV/CV_IagoSolerVeira.pdf" download>{textData.downloadLink}</a>
            </div>
        </div>
    )
}

export default Career