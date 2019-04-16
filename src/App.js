import React from 'react';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import About from './containers/About';
import Blog from './containers/Blog';
import Project from './containers/Project';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Sidebar />
        <Home />
        <About />
        <Project />
        <Blog />
        <Contact />
      </div>
    );
  }
}

export default App;
