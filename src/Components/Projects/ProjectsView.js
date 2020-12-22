import React from 'react';
import '../../App.css';
import Project from "./Project";

function ProjectsView() {
    return (
        <div className='projectsView'>
            <h1 className="projectsTitle">Projects</h1>
            <div className='projectsRow'>
                <div className='projectsColumn'>
                    <Project title="1" url="https://github.com/nikkizol/challenge-workflow" image="https://portfolio-dac64.web.app/project.jpg"/>
                    <Project title="2" url="https://github.com/nikkizol/challenge-workflow"/>
                </div>
                <div className='projectsColumn'>
                    <Project title="3" url="https://github.com/nikkizol/challenge-workflow"/>
                    <Project title="4" url="https://github.com/nikkizol/challenge-workflow"/>
                </div>
            </div>
        </div>
    )
}

export default ProjectsView;