import React from 'react';
import '../../App.css';
import ProjectImage from '../../Assets/project.jpg';

function ProjectTwo() {
    return (
        <div className='project'>
            <h2>Project 2</h2>
            <img src={ProjectImage} alt="projectImage" width={200} height={140}/>
        </div>
    )
}

export default ProjectTwo;