import React from 'react'
import './Projects.css'
import { spanish, english } from '../../data/ProjectsData.js'
import { chooseLanguage } from '../../utils/otherUtils';
import { Dropdown } from '../Dropdown/Dropdown';
import githubSVG from '../../assets/projects_images/githubLogo.svg'

const Projects = ({ language, isVisible, setIsVisible }) => {
  const textData = chooseLanguage(language, english, spanish);
  const projectsElements = () => {

    return textData.projects.map(item => (
      <div className='projects--grid--project' key={item.title}>


        <div className='projects--grid--project--card'
          onClick={() => window.open(item.link, '_blank')} >
          <a className='projects--card--github__link' href={item.githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <button className='projects--grid--project--card--github__image'><img className='projects--card--button--image' src={githubSVG} alt="Github SVG" /> </button>
            <button className='projects--grid--project--card--button'>{item.githubButton} </button>
          </a>
          <h3>{item.title}</h3>
          <img className='projects--grid--project--card--image' src={item.image} alt={item.title + " image"} />
          <p>{item.description}</p>
          <div className='projects--card--tools' >
            {toolsOnProject(item.tools)}
          </div>
        </div>
      </div>
    ));
  }
  const toolsOnProject = (tools) => {
    return tools.map((tool, index) => (
      <p className='projects--card--tools--tool' key={index}>
        {tool}
      </p>
    ))
  }

  return (
    <div id="projects">
      <Dropdown title={textData.title} isVisible={isVisible} setIsVisible={setIsVisible} />

      {isVisible && <div className={`projects ${isVisible ? 'section--active' : ''}`}>
        <div className='projects--grid'>
          {projectsElements()}
        </div>
      </div>}
    </div>
  );
}

export default Projects
