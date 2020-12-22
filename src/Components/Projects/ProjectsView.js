import React from 'react';
import '../../App.css';
import Project from "./Project";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";

function ProjectsView() {
    return (
        <div className='projectsView'>
            <h1 className="projectsTitle">Projects</h1>
            <div className='projectsRow'>
                <div className='projectsColumn'>
                    <Project/>
                    <ProjectTwo/>
                </div>
                <div className='projectsColumn'>
                    <ProjectThree/>
                    <ProjectFour/>
                </div>
            </div>
        </div>
    )
}

export default ProjectsView;