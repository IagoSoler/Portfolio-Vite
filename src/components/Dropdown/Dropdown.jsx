import React from 'react';
import './Dropdown.css'
import chevronDown from '../../assets/about_images/chevronDown.svg';
import chevronUp from '../../assets/about_images/chevronUp.svg';


export const Dropdown = ({title,isVisible,setIsVisible}) => {
  return (
    <div className={`dropdown ${isVisible ? 'dropdown--active' : ''}`} onClick={() => setIsVisible()}>
    <h2>{title}</h2>

    {isVisible ?
      <img className='dropdown--chevron' src={chevronUp} alt="chevron up" />
      :
      <img className='dropdown--chevron' src={chevronDown} alt="chevron down" />
    }
  </div>
  )
}
