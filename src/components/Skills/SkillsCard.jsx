
import React from 'react'
const SkillsCard = ({ array, title, animation, chevrons, operation }) => {
  return (
    <div className="skills-list" >
      <h4 className="skills__subtitle">{title}</h4>
      <div className="skills__content">
        <div className="skills__navigation"
          onClick={() => operation("-")}>
          <img
            className="skills-nav__chevron"
            src={chevrons.left}
            alt="chevron left"
          />
        </div>
        <div className={`skills-list__grid ${animation}`}>
          {array.map(item => (
            <div className="skills-card" key={item.title}>
              <h3 className="skills-card__title">{item.title}</h3>
              <img
                className={`skills-card__image ${item.title === 'Gallego' || item.title === 'Galician'
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
        <div className="skills__navigation"
          onClick={() => operation("+")}>
          <img
            className="skills-nav__chevron"
            src={chevrons.right}
            alt="chevron right"
          />
        </div>
      </div>
    </div>
  )
}

export default SkillsCard