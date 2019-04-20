import React from "react";
import doggie from "../images/Doggie_Daycare.png";
import hair from "../images/Shear_Elegance.png";
import jobs from "../images/Time_Travel.png";
import Card from "./Card";

class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      showProjects: true,
      projects: [
        {
          id: 1,
          title: "Sniff Scratch n' Shake",
          language: "Ruby, Rails, Bootstrap",
          summary:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
          image: doggie
        },
        {
          id: 2,
          title: "Shear Elegance",
          language: "Rails, Redux, Rails API, CSS",
          summary:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
          image: hair
        },
        {
          id: 3,
          title: "Time Travel",
          language: "Javascript, Rails API",
          summary:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
          image: jobs
        }
      ]
    };
  }

  clickHandler = () => {
    this.setState({ showProjects: !this.state.showProjects });
  };

  render() {
    return (
      <section id="projects">
        <div className="project-container">
          <div className="title">
            <h1>Projects</h1>
          <hr className="underline" />
          </div>
          <div className="filter">
            <button>All</button>
            <button>Rails</button>
            <button>JavaScript</button>
            <button>React/Redux</button>
          </div>
          <div className="wrapper">
            {this.state.projects.map(project => (
              <Card
                showImage={this.state.showProjects}
                clickHandler={this.clickHandler}
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
