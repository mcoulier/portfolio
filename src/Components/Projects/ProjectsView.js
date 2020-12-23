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
                    <div className='projectsColumn'>
                        {
                            projects.map((value) => {
                                return <Project title={value.title} url={value.url} image={value.image}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsView;