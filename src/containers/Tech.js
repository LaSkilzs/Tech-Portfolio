import React, { Component } from "react";

class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techskills: [
        {
          symbol: "fab fa-html5",
          name: "HTML",
          years: "3",
          ability: "not beginner/not advanced",
          experience: "college/projectts"
        },
        {
          symbol: "fab fa-css3-alt",
          name: "CSS",
          years: "3",
          ability: "not beginner/not advanced",
          experience: "college/projects"
        },
        {
          symbol: "fas fa-gem",
          name: "Ruby & Rails",
          years: "3",
          ability: "not beginner/not advanced",
          experience: "trade/projects"
        },
        {
          symbol: "fab fa-js",
          name: "Javascript",
          years: "3",
          ability: "not beginner/not advanced",
          experience: "college/projects"
        },
        {
          symbol: "fab fa-java",
          name: "Java",
          years: "3",
          ability: "beginner",
          experience: "college"
        },
        {
          symbol: "fab fa-react",
          name: "React/Redux<",
          years: "less than 1yr",
          ability: "beginner",
          experience: "trade/projects"
        },
        {
          symbol: "fab fa-node5",
          name: "NodeJs",
          years: "less than 1yr",
          ability: "beginner",
          experience: "on-job/projects"
        },
        {
          symbol: "fas fa-database",
          name: "MySQL/Postgresql",
          years: "3",
          ability: "beginner",
          experience: "school/trade/projects"
        },
        {
          symbol: "fab fa-github",
          name: "GitHub",
          years: "1 year",
          ability: "not beginner/not advanced",
          experience: "trade/projects"
        },
        {
          symbol: "fas fa-cloud",
          name: "Salesforce",
          years: "7 months",
          ability: "beginner",
          experience: "on-job/projects"
        },
        {
          symbol: "fab fa-hubspot",
          name: "Hubspot",
          years: "4 months",
          ability: "beginner",
          experience: "on-job/projects"
        },
        {
          symbol: "fab fa-adobe",
          name: "Adobe Photoshop",
          years: "1 year",
          ability: "beginner",
          experience: "on-job/projects"
        }
      ]
    };
  }
  render() {
    return <div />;
  }
}

export default Tech;
