import React from "react";

const BackCard = props => {
  const { title, language, goal, author } = props.project;
  return (
    <React.Fragment>
      <div className="project backcard">
        <h2 onClick={() => props.clickHandler()}>
          <strong>Author(s): </strong>
          {author}
        </h2>
        <ol onClick={() => props.clickHandler()}>
          <p>
            <strong>Language: </strong>
            <li>{language}</li>
          </p>
          <p>
            <strong>Goal: </strong>
            <li>{goal.name}</li>
          </p>
          <p>
            <strong>Start Date: </strong> <li>{goal.start}</li>
            <strong>Project Finished: </strong> <li>{goal.estimated_time}</li>
          </p>
        </ol>
        <div className="project-btns">
          <a href="https://www.github.com/LaSkilzs">
            <button className="proj-btn">readme</button>
          </a>
          <a href="https://www.github.com/LaSkilzs">
            <button className="proj-btn">github</button>
          </a>
          <a href="https://www.youtube.com">
            <button className="proj-btn">demo</button>
          </a>
        </div>
      </div>

      <div className="project-btns">
        <h1 className="pro-title" onClick={() => props.clickHandler()}>
          {title}
        </h1>
      </div>
    </React.Fragment>
  );
};

export default BackCard;
