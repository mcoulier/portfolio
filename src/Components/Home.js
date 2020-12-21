import React from 'react';
import '../App.css';
import {NavLink} from "react-router-dom";

function Home() {
    return (
        <div className='home'>
            <h1 className='mainTitle'>Michiel Coulier, Web Developer</h1>
            <NavLink to="/projects"><button className="projectButton">Projects</button></NavLink>
        </div>
    )
}

export default Home;