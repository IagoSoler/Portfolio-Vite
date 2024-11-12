import React from 'react'
import './Projects.css'
import { spanish, english } from '../../data/ProjectsData'
import { chooseLanguage } from '../../utils/otherUtils';

const Projects = ({ language }) => {
  const textData = chooseLanguage(language, english, spanish);
  const projectsElements = () => {

    return textData.projects.map(item => (
      <div className='projects--grid--project' key={item.title}>
        
        <div className='projects--grid--project--card'
          onClick={() => window.open(item.link, '_blank')} >
          <h3>{item.title}</h3>
          <img className='projects--grid--project--card--image' src={item.image} alt={item.title + " image"} />
          <p>{item.description}</p>
        </div>

        <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
          <button className='projects--grid--project--card--button'>{item.githubButton} </button>
        </a>

      </div>
    ));
  }

  return (
    <div id="projects">
      <h2>{textData.title}</h2>
      <div className='projects--grid'>
        {projectsElements()}
      </div>
    </div>
  );
}

export default Projects
