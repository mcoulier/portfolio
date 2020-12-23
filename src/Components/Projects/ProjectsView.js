import React from 'react';
import '../../App.css';
import Project from "./Project";

const projectsJSON = {
    "data": {
        "Project_1": [
            {
                "title": "",
                "url": "",
                "image": ""
            }],
        "Project_2": [
            {
                "title": "",
                "url": "",
                "image": ""
            }],
        "Project_3": [
            {
                "title": "",
                "url": "",
                "image": ""
            }]
    }
};


function ProjectsView() {
    return (
        <div className='projectsView'>
            <h1 className="projectsTitle">Projects</h1>
            <div className='projectsRow'>
                <div className='projectsColumn'>
                    <Project title="Ticketing system" url="https://github.com/nikkizol/challenge-workflow"
                             image="https://portfolio-dac64.web.app/ticket-system.png"/>
                    <Project title="Pokédex API" url="https://github.com/mcoulier/challenge-pokemon-php"
                             image="https://portfolio-dac64.web.app/pokedex-api.png"/>
                </div>
                <div className='projectsColumn'>
                    <Project title="MySQL CRUD PHP" url="https://github.com/MonoraxXiV/php-crud"
                             image="https://portfolio-dac64.web.app/php-crud-mysql.png"/>
                    <Project title="In Progress" url="https://github.com/mcoulier"
                             image="https://portfolio-dac64.web.app/project.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default ProjectsView;