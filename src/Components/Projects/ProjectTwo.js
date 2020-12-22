import React from 'react';
import '../../App.css';
import ProjectImage from '../../Assets/project.jpg';

function ProjectTwo() {
    return (
        <div className='project'>
            <h2 className='projectTitle'>CRUD MySQL PHP</h2>
            <a href="https://github.com/MonoraxXiV/php-crud" target="_blank" rel="noreferrer">
                <img className='projectImage' src={ProjectImage} alt="projectImage" width={200} height={140}/>
            </a>
        </div>
    )
}

export default ProjectTwo;