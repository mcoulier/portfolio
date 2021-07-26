import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import ProjectsView from "./Components/Projects/ProjectsView";

export default function App() {
  return (
    <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={ProjectsView} />
          </Switch>
        <Nav />
    </Router>
  );
}
