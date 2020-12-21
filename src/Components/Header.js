import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                </ul>
            </nav>
        )
    }
}

export default Header;