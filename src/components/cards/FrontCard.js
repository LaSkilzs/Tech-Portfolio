import React from "react";

const FrontCard = props => {
  return (
    <React.Fragment>
      <div className="project">
        <img src={props.image} alt="bio pic" />
      </div>
      <div className="project-btns">
        <h1 className="pro-title" onClick={() => props.clickHandler()}>
          {props.title}
        </h1>
      </div>
    </React.Fragment>
  );
};

export default FrontCard;
