import React from 'react';
import '../../App.css';
import ProjectImage from '../../Assets/project.jpg';

function ProjectThree() {
    return (
        <div className='project'>
            <h2 className='projectTitle'>MERN app</h2>
            <img src={ProjectImage} alt="projectImage" width={200} height={140}/>
        </div>
    )
}

export default ProjectThree;