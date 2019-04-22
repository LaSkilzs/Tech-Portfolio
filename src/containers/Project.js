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
      filter: [],
      projects: [
        {
          id: 1,
          title: "Sniff Scratch n' Shake",
          language: "Ruby Rails Bootstrap",
          summary:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
          author: "La Fountain",
          goal: {
            start: "date",
            name: "name of goal",
            estimated_time: "time to complete"
          },
          image: doggie
        },
        {
          id: 2,
          title: "Shear Elegance",
          language: "Rails React Redux Rails API CSS DJ.3 Node.JS Socket.io",
          summary:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
          author: "La Fountain",
          goal: {
            start: "date",
            name: "name of goal",
            estimated_time: "time to complete"
          },
          image: hair
        },
        {
          id: 3,
          title: "Time Travel",
          language: "Javascript Rails API",
          summary:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
          author: "La Fountain",
          goal: {
            start: "date",
            name: "name of goal",
            estimated_time: "time to complete"
          },
          image: jobs
        },
        {
          id: 4,
          title: "Car Collection",
          language: "React Rails API BootStrap",
          summary:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
          author: "La Fountain",
          goal: {
            start: "date",
            name: "name of goal",
            estimated_time: "time to complete"
          },
          image: car
        },
        {
          id: 5,
          title: "Flatbook",
          language: "CSS React DAPP Solidarity Rails API",
          summary:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
          author: "La Fountain",
          goal: {
            start: "date",
            name: "name of goal",
            estimated_time: "time to complete"
          },
          image: social
        },
        {
          id: 6,
          title: "Portfolio",
          language: "React Firebase CSS",
          summary:
            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
          author: "La Fountain",
          goal: {
            start: "date",
            name: "name of goal",
            estimated_time: "time to complete"
          },
          image: portfolio
        }
      ]
    };
  }

  filterProjects = name => {
    let filter = this.state.projects.filter(project =>
      project.language.includes(name)
    );
    this.setState({ projects: filter });
  };

  render() {
    const project = this.state.projects.map(project => {
      return (
        <Card
          showImage={this.state.showProjects}
          clickHandler={this.clickHandler}
          key={project.id}
          project={project}
        />
      );
    });

    return (
      <section id="projects">
        <div className="project-container">
          <div className="title">
            <h1>Projects</h1>
            <hr className="underline" style={{ align: "left", width: "50%" }} />
          </div>
          <div className="filter">
            <button onClick={() => this.filterProjects(" ")}>All</button>
            <button onClick={() => this.filterProjects("Rails")}>Rails</button>
            <button onClick={() => this.filterProjects("Javascript")}>
              JavaScript
            </button>
            <button onClick={() => this.filterProjects("React")}>
              React/Redux
            </button>
          </div>
          <div className="wrapper">{project}</div>
        </div>
      </section>
    );
  }
}

export default Project;
