import React from "react";


const About = props => {
  return (
    <section id="about">
      <h1 className="title">About Me </h1>
      <hr/>
      <div className="about-container">
        <div className="left-side">
          <div className="avatar">
            <div className="card">
              <img src={require("../images/me.jpg")} alt="bio pic" />
            </div>
            <h1>MSW, MBA w/finance </h1>
            <h3>Fullstack developer </h3>
            <button>download resume</button>
          </div>
          <div className="bio">
            <h3>Who am I </h3>
            <p>Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
               ac diam sit amet quam vehicula elementum sed sit amet dui.
               Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet
               quam id dui posuere blandit.
             </p>
          </div>
        </div>
        <div className="right-side">
          <div className="skills">
            <h3 className="skills-head">tech skills</h3>
            <ol className="skills-list">
              <li>HTML<i className="fab fa-html5"></i></li>
              <li>CSS<i className="fab fa-css3-alt"></i></li>
              <li>Ruby<i className="fas fa-gem"></i></li>
              <li>JavaScript<i className="fab fa-js"></i></li>
              <li>Java<i className="fab fa-java"></i></li>
              <li>React/Redux<i className="fab fa-react"></i></li>
              <li>NodeJs<i className="fab fa-node"></i></li>
              <li>MySQL/Postgresql<i className="fas fa-database"></i></li>
              <li>Docker<i className="fab fa-docker"></i></li>
              <li>GitHub<i className="fab fa-github"></i></li>
            </ol>
            </div>
          <div className="interests">
            <h3 className="skills-head">interests</h3>
            <ol className="skills-list">
              <li>BlockChain<i className="fab fa-bitcoin"></i></li>
              <li>Entreprenuership<i className="fab fa-css3-alt"></i></li>
              <li>At-risk Populations<i className="fas fa-users"></i></li>
              <li>Research/Analysis<i className="fas fa-search-location"></i></li>
            </ol></div>
          <div className="social activities"><h3 className="skills-head">social activities</h3>
          <ol className="skills-list">
            <li>Sports<i className="fas fa-dumbbell"></i></li>
            <li>Reading<i className="fas fa-book"></i></li>
            <li>History<i className="fas fa-history"></i></li>
            <li>Hiking <i className="fas fa-hiking"></i></li>
            <li>Travel<i className="fas fa-plane"></i></li>
          </ol></div>
        </div>
      </div>
    </section>
  );
};

export default About;
