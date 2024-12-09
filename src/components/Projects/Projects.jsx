import React from 'react'
import './Projects.css'
import { spanish, english } from '../../data/ProjectsData.js'
import { chooseLanguage } from '../../utils/otherUtils';
import { Dropdown } from '../Dropdown/Dropdown';
import githubSVG from '../../assets/projects_images/githubLogo.svg'
import { ProjectsGrid } from './ProjectsGrid/ProjectsGrid.jsx';
import { ProjectsSelector } from './ProjectsSelector/ProjectsSelector.jsx';


const displayProject = (item) =>(
<div className='projects--project--card'
  onClick={() => window.open(item.link, '_blank')} >
  <a className='projects--card--github__link' href={item.githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
    <button className='projects--project--card--github__image'><img className='projects--card--button--image' src={githubSVG} alt="Github SVG" /> </button>
    <button className='projects--project--card--button'>{item.githubButton} </button>
  </a>
  <h3>{item.title}</h3>
  <img className='projects--project--card--image' src={item.image} alt={item.title + " image"} />
  <p>{item.description}</p>
  <div className='projects--card--tools' >
    {item.tools.map((tool, index) => (
      <span className='projects--card--tools--tool' key={index}>
        {tool}
      </span>
    ))}
  </div>
</div>
)



const Projects = ({ language, isVisible, setIsVisible }) => {
  const textData = chooseLanguage(language, english, spanish);
  return (
    <div id="projects">
      <Dropdown title={textData.title} isVisible={isVisible} setIsVisible={setIsVisible} />

      {isVisible && <div className={`projects ${isVisible ? 'section--active' : ''}`}>
        <ProjectsGrid projects={textData.projects} displayProject={displayProject} />
        <ProjectsSelector projects={textData.projects} displayProject={displayProject} />
      </div>}
    </div>
  );
}

export default Projects
