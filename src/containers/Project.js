import React from 'react';

const Project  = (props) => {
  return (
    <section id="projects">
      <div className="project-container">
        <div className="title"><h1>Projects</h1></div>
        <hr/>
          <div className="filter">
            <button>All</button>
            <button>Rails</button>
            <button>JavaScript</button>
            <button>React/Redux</button>
          </div>
        <div className="projects">
          <div className="project-pic">
            <h1>title</h1>
            <h4>language</h4>
          </div>
          <div className="project-pic">
            <img src={require("../images/Doggie_Daycare.png")} alt="bio pic" />
            <img src={require("../images/Shear_Elegance.png")} alt="bio pic" />
            <img src={require("../images/Time_Travel.png")} alt="bio pic" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
