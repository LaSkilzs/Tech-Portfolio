import React from "react";

const Card = props => {
  const { image, title, language, summary } = props.project;
  if (props.showImage) {
    return (
      <div className="project-card">
        <div className="project-pic">
          <div className="project">
            <img src={image} onClick={props.clickHandler} alt="bio pic" />
          </div>
          <div className="project-btns">
            <button className="proj-btn">readme</button>
            <button className="proj-btn">github</button>
            <button className="proj-btn">demo</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="projects">
        <div className="project-pic">
          <div className="project" onClick={props.clickHandler}>
            <h1>{title}</h1>
            <h3>{language}</h3>
            <h5>{summary}</h5>
          </div>
          <div className="project-btns">
            <button className="proj-btn">readme</button>
            <button className="proj-btn">github</button>
            <button className="proj-btn">demo</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
