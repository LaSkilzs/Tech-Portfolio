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
                <i class="fas fa-envelope" />
                <span> email</span>
              </button>
              <button className="about-mini-btns">
                <i className="fab fa-linkedin-in" />
                <span> visit </span>
              </button>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="skills">
            <ol className="skills-list">
              <li className="item-list double">
                <i className="fab fa-html5" />
                <h3>HTML</h3>
              </li>
              <li className="item-list">
                <i className="fab fa-css3-alt" />
                <h3>CSS</h3>
              </li>
              <li className="item-list">
                <i className="fas fa-gem" />
                <h3>Ruby on Rails</h3>
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
                <h3>NodeJs</h3>
              </li>
              <li className="item-list">
                <i className="fas fa-database" />
                <h3>MySQL/Postgresql</h3>
              </li>
              <li className="item-list">
                <i className="fab fa-github" />
                <h3>GitHub</h3>
              </li>
              <li className="item-list">
                <i class="fas fa-cloud" />
                <h3>Salesforce</h3>
              </li>
              <li className="item-list">
                <i class="fab fa-hubspot" />
                <h3>Hubspot</h3>
              </li>
              <li className="item-list">
                <i class="fab fa-adobe" />
                <h3>Adobe Photoshop</h3>
              </li>
            </ol>
            <div className="about-buttons">
              <button className="about-btns">interests</button>
              <button className="about-btns">hobbies</button>
              <button className="about-btns">summary</button>
              <button className="about-btns">tech skills</button>
            </div>
          </div>
          {/* <div className="interests">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
