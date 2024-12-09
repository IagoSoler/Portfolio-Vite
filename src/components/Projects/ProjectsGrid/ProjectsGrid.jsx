import React from 'react'
import './ProjectsGrid.css'


export const ProjectsGrid = ({ projects, displayProject }) => {

    return (
        <div className='projects--grid'>

            {projects.map(item => (
                <div className='projects--project' key={item.title}>
                    {displayProject(item)}
                </div>
            ))}


        </div >
    )
}
