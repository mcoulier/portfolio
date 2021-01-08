import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import ProjectsView from "./Components/Projects/ProjectsView";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/projects' component={ProjectsView}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
