import React from 'react';
import PropTypes from 'prop-types';

const Project  = (props) => {
  return (
  <div className="project-container">
    <div className="title"><h1>Projects</h1></div>
    <hr/>
    <div className="dashboard">
      github access,youtube, project filter/selector
      <div className="filter">
        <button>All</button>
        <button>Rails</button>
        <button>JavaScript</button>
        <button>React/Redux</button>
      </div>
    </div>
    <div className="projects">
      project grid
      <div className="project-pic">
        <h1>title</h1>
        <h4>language</h4>
      </div>
      <div className="project-pic">
        <img src="" alt=""/>
      </div>
    </div>
  </div>
  )
}

export default Project;
