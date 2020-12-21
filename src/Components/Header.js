import React, { Component } from "react";
import {Link, NavLink} from "react-router-dom";
import githubIcon from '../Assets/github.png';
import linkedinIcon from '../Assets/linkedin.png';
import mailIcon from '../Assets/email.png';

function Header () {
        return (
            <div className="navHeader">
                <nav>
                    <ul>
                        <NavLink to="/"><button>Home</button></NavLink>
                        <NavLink to="/projects"><button>Projects</button></NavLink>
                        <a href="https://github.com/mcoulier" target="_blank">
                            <img src={githubIcon} alt="githubIcon" width={30} height={30}/>
                        </a>
                        <a href="https://www.linkedin.com/in/michiel-coulier/" target="_blank">
                            <img src={linkedinIcon} alt="linkedinIcon" width={30} height={30}/>
                        </a>
                        <a href="mailto:michielcoulier@gmail.com">
                            <img src={mailIcon} alt="mailIcon" width={30} height={30}/>
                        </a>
                    </ul>
                </nav>
            </div>
        )
}

export default Header;