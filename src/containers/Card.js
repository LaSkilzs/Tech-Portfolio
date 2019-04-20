import React from "react";

const Card = props => {
  const { image, title, language, summary } = props.project;

  return (
    <div className="projects">
      <div className="project-pic">
        {props.showImage ? (
          <img src={image} onClick={props.clickHandler} alt="bio pic" />
        ) : (
          <div>
            <h1>{title}</h1>
            <h4>{language}</h4>
            <h4>{summary}</h4>
            onClick={props.clickHandler}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
