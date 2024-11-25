
import React from 'react'
const SkillsCard = ({ array, title }) => {
  return (
    <div className="skills-list">
      <h4 className="skills__subtitle">{title}</h4>
      <div className="skills-list__grid">
        {array.map(item => (
          <div className="skills-card" key={item.title}>
            <h3 className="skills-card__title">{item.title}</h3>
            <img
              className={`skills-card__image ${
                item.title === 'Gallego' || item.title === 'Galician' 
                  ? 'skills-card__image--rounded' 
                  : ''
              }`}
              src={item.image}
              alt={`${item.title} image`}
            />
            <p className="skills-card__description">{item.description}</p>
            <div className="progress-bar">
              <div
                className="progress-bar__fill"
                style={{ width: `${item.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsCard