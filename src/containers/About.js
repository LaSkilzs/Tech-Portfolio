import React from "react";

const About = props => {
  return (
    <section id="about">
      <div className="title">
        <h1>About Me</h1>
        <hr className="underline" />
      </div>
      <div className="about-container">
        <div className="left-side">
          <div className="avatar">
            <div className="card">
              <img src={require("../images/me.jpg")} alt="bio pic" />
            </div>
            <h1>MSW, MBA w/finance </h1>
            <h3>Fullstack developer </h3>
            <button>
              <i className="fas fa-download" />
              download resume
            </button>
            <div className="bio">
              <h3>Who am I </h3>
              <p>
                Vivamus suscipit tortor eget felis porttitor volutpat.
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Curabitur aliquet quam id dui posuere blandit. Curabitur
                aliquet quam id dui posuere blandit.
              </p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="skills">
            <h3 className="skills-head">tech skills</h3>
            <ol className="skills-list">
              <li className="item-list">
                <i className="fab fa-html5" />
                <h3>HTML</h3>
              </li>
              <li className="item-list">
                <i className="fab fa-css3-alt" />
                <h3>CSS</h3>
              </li>
              <li className="item-list">
                <i className="fas fa-gem" />
                <h3>Ruby, Rails</h3>
              </li>
              <li className="item-list">
                <i className="fab fa-js" />
                <h3>JavaScript</h3>
              </li>
              <li className="item-list">
                <i className="fab fa-java" />
                <h3>Java</h3>
              </li>
              <li className="item-list">
                <i className="fab fa-react" />
                <h3>React/Redux</h3>
              </li>
              <li className="item-list">
                <i className="fab fa-node" />
                <h3>NodeJs, Express</h3>
              </li>
              <li className="item-list">
                <i className="fas fa-database" />
                <h3>MySQL/Postgresql</h3>
              </li>
              <li className="item-list">
                <i className="fab fa-github" />
                <h3>GitHub, Github Pages</h3>
              </li>
            </ol>
          </div>
          <div className="interests">
            <h3 className="skills-head">interests</h3>
            <ol className="skills-list">
              <li className="item-list">
                <i className="fab fa-bitcoin" />
                <h3>BlockChain</h3>
              </li>
              <li className="item-list">
                <i className="fab fa-css3-alt" />
                <h3>Entreprenuership</h3>
              </li>
              <li className="item-list">
                <i className="fas fa-users" />
                <h3>At-risk Populations</h3>
              </li>
              <li className="item-list">
                <i className="fas fa-dumbbell" />
                <h3>Sports</h3>
              </li>
              <li className="item-list">
                <i className="fas fa-book" />
                <h3>Reading</h3>
              </li>
              <li className="item-list">
                <i className="fas fa-history" />
                <h3>History</h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
