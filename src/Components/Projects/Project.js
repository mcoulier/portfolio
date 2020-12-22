import React from 'react';
import '../../App.css';
import ProjectImage from '../../Assets/project.jpg';

function Project() {
    return (
        <div className='project'>
            <h2 className='projectTitle'>Ticket Desk App</h2>
            <a href="https://github.com/nikkizol/challenge-workflow" target="_blank" rel="noreferrer">
            <img className='projectImage' src={ProjectImage} alt="projectImage" width={200} height={140}/>
            </a>
        </div>
    )
}

export default Project;