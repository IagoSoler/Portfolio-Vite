import React from 'react'

const SkillsCard = ({ array }) => {
  return (
    array.map(item => (
      <div className='skills--card' key={item.title} >
        <h3>{item.title}</h3>
        <img className={`skills--card--image ${item.title}`} src={item.image} alt={item.title + " image"} />
        <p>{item.description}</p>
        <div className="skills--progress__bar">
          <div className="skills--progress__fill" style={{ width: `${item.level}%` }}></div>
        </div>
      </div>
    )
    )
  )
}

export default SkillsCard