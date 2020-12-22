import React from 'react';
import '../../App.css';
import ProjectImage from '../../Assets/project.jpg';

function ProjectFour() {
    return (
        <div className='project'>
            <h2 className='projectTitle'>Record db REST API</h2>
            <a href="https://github.com/mcoulier/record-collection-api" target="_blank" rel="noreferrer">
                <img className='projectImage' src={ProjectImage} alt="projectImage" width={200} height={140}/>
            </a>
        </div>
    )
}

export default ProjectFour;