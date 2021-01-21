import React from 'react';
import '../../App.css';
import Project from "./Project";
import ProjectData from "./projects.json";

class ProjectsView extends React.Component {
    render() {
        const projects = ProjectData.data;
        return (
            <div className='projectsView'>
                <h1 className="projectsTitle">Projects</h1>
                <div className='projectsRow'>
                    {
                        projects.map((project) => {
                            return <Project key={project.id} title={project.title} url={project.url} image={project.image}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ProjectsView;