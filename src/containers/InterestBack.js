import React from "react";
import PropTypes from "prop-types";

const InterestBack = props => {
  return (
    <React.Fragment>
      <div>
        <div className="interest">
          {this.props.interests.map(interest => {
            <ol className="skills-list">
              <li className="item-list double">
                <h4>
                  Years of Experience: <span>{interest.years}</span>
                </h4>
                <h4>
                  Ability: <span>{interest.abilty}</span>
                </h4>
                <h4>
                  Experience Type: <span>{interest.type}</span>
                </h4>
              </li>
            </ol>;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default InterestBack;

InterestBack.propTypes = {
  interests: PropTypes.array
};
InterestBack.defaultProps = {
  interests: [{}]
};
