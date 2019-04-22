import React from "react";
import Tech from "../components/about/Tech";
import Interest from "../components/about/Interest";
import Hobby from "../components/about/Hobby";
import Summary from "../components/about/Summary";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "Summary"
    };
  }

  handleTopic = topic => {
    console.log(topic);
    this.setState({ topic });
  };

  render() {
    const topic = () => {
      if (this.state.topic === "Tech") {
        return <Tech />;
      } else if (this.state.topic === "Hobby") {
        return <Hobby />;
      } else if (this.state.topic === "Interest") {
        return <Interest />;
      } else if (this.state.topic === "Summary") {
        return <Summary />;
      }
    };
    return (
      <section id="about">
        <div className="title">
          <h1>About Me</h1>
          <hr className="underline" />
        </div>
        <div className="about-container">
          <div className="left-side">
            <div className="avatar">
              <img src={require("../images/me.jpg")} alt="bio pic" />
            </div>
            <div className="about-card">
              <h1>La Fountain, MSW, MBA </h1>
              <h3>Fullstack developer </h3>
              <div className="mini-btns">
                <button className="about-mini-btns">
                  <i className="fas fa-download" />
                  <span> download </span>
                </button>
                <button className="about-mini-btns">
                  <i className="fas fa-envelope" />
                  <span> email</span>
                </button>
                <a
                  href="https://www.linkedin.com/in/la-fountain-649253112/"
                  className="about-mini-btns"
                  style={{ width: "100%" }}
                >
                  <i className="fab fa-linkedin-in" />
                  <span> visit </span>
                </a>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="skills">{topic()}</div>
            <div className="about-buttons">
              <button
                className="about-btns"
                onClick={() => this.handleTopic("Interest")}
              >
                interests
              </button>
              <button
                className="about-btns"
                onClick={() => this.handleTopic("Hobby")}
              >
                hobbies
              </button>
              <button
                className="about-btns"
                onClick={() => this.handleTopic("Summary")}
              >
                summary
              </button>
              <button
                className="about-btns"
                onClick={() => this.handleTopic("Tech")}
              >
                tech skills
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
