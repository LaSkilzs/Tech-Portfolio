import React from "react";
import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import About from "./containers/About";
import Blog from "./containers/Blog";
import Project from "./containers/Project";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Sidebar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Project} />
          <Route path="/blogs" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
