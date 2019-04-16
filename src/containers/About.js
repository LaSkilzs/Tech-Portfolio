import React from "react";
import PropTypes from "prop-types";

const About = props => {
  return (
    <div className="about-container">
      <h1 className="title">About Me </h1>
      <hr />
      <div className="left-side">
        <div className="avatar">
          <div className="card">
            <img src={require("../images/me.jpg")} alt="bio pic" />
          </div>
          <h1>Title Developer MBA MSW</h1>
        </div>
        <div className="bio">bio</div>
        <div className="resume">resume</div>
      </div>
      <div className="right-side">
        <div className="skills">skills</div>
        <div className="interests">interests</div>
        <div className="social activities">social activities</div>
      </div>
    </div>
  );
};

export default About;