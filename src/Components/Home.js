import React from 'react';
import '../App.css';
import {NavLink} from "react-router-dom";

function Home() {
    return (
        <div className='home'>
            <h1 className='mainTitle'>
                <span>M</span><span>i</span><span>c</span><span>h</span><span>i</span><span>e</span><span>l </span>
                <span>C</span><span>o</span><span>u</span><span>l</span><span>i</span><span>e</span><span>r</span> Junior Web Developer</h1>
    <NavLink to="/projects">
        <button className="projectButton">Projects</button>
    </NavLink>
</div>
)
}

export default Home;