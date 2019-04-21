import React from "react";
import doggie from "../images/Doggie_Daycare.png";
import hair from "../images/shear.png";
import jobs from "../images/timetravel.png";
import car from "../images/carcollection.png";
import social from "../images/flatbook.png";
import portfolio from "../images/portfolio.png";
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
          language: "Rails, Redux, Rails API, CSS, DJ.3, Node.JS, Socket.io",
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
        },
        {
          id: 4,
          title: "Car Collection",
          language: "React Rails API, BootStrap",
          summary:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
          image: car
        },
        {
          id: 5,
          title: "Flatbook",
          language: "CSS React DAPP Solidarity Rails API",
          summary:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
          image: social
        },
        {
          id: 6,
          title: "Portfolio",
          language: "React, Firebase, CSS",
          summary:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
          image: portfolio
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
            <hr className="underline" style={{ align: "left", width: "50%" }} />
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
