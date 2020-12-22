import React from 'react';
import '../../App.css';
import ProjectImage from '../../Assets/project.jpg';

function ProjectFour() {
    return (
        <div className='project'>
            <h2 className='projectTitle'>Music API</h2>
            <img className='projectImage' src={ProjectImage} alt="projectImage" width={200} height={140}/>
        </div>
    )
}

export default ProjectFour;