import React from 'react';
import '../App.css';
import {NavLink} from "react-router-dom";

function Home() {
    return (
        <div className='home'>
            <div className='mainTitle'>
                <h1>
                    <span>M</span><span>i</span><span>c</span><span>h</span><span>i</span><span>e</span><span>l </span>
                    <span>C</span><span>o</span><span>u</span><span>l</span><span>i</span><span>e</span><span>r</span> Junior
                    Web Developer
                </h1>
            </div>
            <div className="projectButton">
                <NavLink to="/projects">
                    <button>Projects</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Home;