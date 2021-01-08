import React from 'react';
import '../../App.css';

function Project(props) {
    return (
        <div className='project'>
            <h2 className='projectTitle'>{props.title}</h2>
            <a href={props.url} target="_blank" rel="noreferrer">
                <img className='projectImage' src={props.image} alt="projectImage" width={200} height={140}/>
            </a>
        </div>
    )
}

export default Project;