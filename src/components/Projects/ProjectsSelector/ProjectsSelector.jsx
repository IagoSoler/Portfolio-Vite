import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable';
import './ProjectsSelector.css'
import { chevrons } from '../../../data/ProjectsData'

export const ProjectsSelector = ({ projects, displayProject }) => {

    const [currentProjectNum, setCurrentProjectNum] = useState(0)
    const [project, setProject] = useState(projects[currentProjectNum])
    const numberOfProjects = projects.length;
    useEffect(()=>{
        setProject(projects[currentProjectNum])
    },[currentProjectNum])

    const changeProject = (type) => {
        if (type === "back") {
            if(currentProjectNum>0)  setCurrentProjectNum(prev=>prev-1)
        }
        else {
            if(currentProjectNum<numberOfProjects-1)  setCurrentProjectNum(prev=>prev+1)
        }

    }
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if(currentProjectNum<numberOfProjects-1)  setCurrentProjectNum(prev=>prev+1)
        },
        onSwipedRight: () => {
            if(currentProjectNum>0)  setCurrentProjectNum(prev=>prev-1)
        },
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: false
      });


    return (
        <div className='projects--selector' {...handlers}>
            <img
                className="projects--selector--chevron"
                src={chevrons.left}
                alt="chevron left"
                onClick={()=>changeProject("back")}
            />
            {<div className='projects--project' >
                {displayProject(project)}
            </div>}
            <img
                className="projects--selector--chevron"
                src={chevrons.right}
                alt="chevron right"
                onClick={ ()=>changeProject("next")}
            />
        </div>
    )
}
