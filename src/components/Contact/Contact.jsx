import React from 'react'
import './Contact.css'
import githubLogo from '../../assets/contact_images/github_logo.png';
import linkedinLogo from '../../assets/contact_images/linkedin_logo.png';
import copyIcon from '../../assets/contact_images/copy.svg';
import emailIcon from '../../assets/contact_images/send_email.svg';
import ContactNav from './ContactNav';
import { sendEmail, copyToClipboard, chooseLanguage } from '../../utils/otherUtils';
import { spanish, english } from '../../data/ContactData'

const Contact = ({ language }) => {
  const email = 'iago.svjp@gmail.com';
  const textData = chooseLanguage(language, english, spanish);
  return (
    <div id="contact">
      <div className='contact-margin--filler'></div>
      <div className="contact">

        <div className='contact--nav'>
          <h3> {textData.navTitle}:</h3>
          <ContactNav language={language} />
        </div>

        <div className='contact--numberandemail'>
          <h3>{textData.contactTitle}</h3>
          <div className='contact--number'>
            <span className='contact--number--text'>{textData.contactPhone}: (+34) 673 340 500</span>
          </div>
          <div className='contact--email__container'>
            <span>Email:</span>
            <div className="contact--email">
              <span className="contact--email--text">{email}</span>
              <button onClick={() => copyToClipboard(email)} className="contact--email--button">
                <img src={copyIcon} alt="Copiar correo" />
              </button>
              <button onClick={() => sendEmail(email)} alt="Copiar correo" className="contact--email--button">
                <img src={emailIcon} alt="Enviar correo" className="contact--email--image" />
              </button>
            </div>
          </div>
        </div>


        <div className='contact--social__media'>
          <h3>{textData.socialMediaTitle}</h3>
          <div className='contact--social__media--container' >
            <a href="https://github.com/IagoSoler" target="_blank" rel="noopener noreferrer">
              <img className='contact--social__media--githubimage' src={githubLogo} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/iago-soler-veira-73a2a9188" target="_blank" rel="noopener noreferrer">
              <img className='contact--social__media--linkedinimage' src={linkedinLogo} alt="LinkedIn" />
            </a>
          </div>
        </div>

      </div>
      <div className='footer'><p>&copy;2024 - Iago Soler Veira. {textData.footer}</p></div>
    </div >
  )
}

export default Contact
