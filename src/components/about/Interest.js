import React from "react";

const Interest = props => {
  return (
    <React.Fragment>
      <div className="interest">
        <ol className="skills-list">
          <li className="item-list double">
            <i className="fab fa-bitcoin" />
            <h3>Blockstack/DAPP</h3>
          </li>
          <li className="item-list">
            <i className="fas fa-network-wired" />
            <h3>Systems Engineer</h3>
          </li>
          <li className="item-list">
            <i className="fab fa-aws" />
            <h3>AWS</h3>
          </li>
          <li className="item-list">
            <i className="fas fa-briefcase" />
            <h3>Entreprenuer</h3>
          </li>
        </ol>
        <div className="area-interest">
          <h5>Areas of interests</h5>
          <ol>
            <li>Aging out Youth</li>
            <li>Data Privacy</li>
            <li>Data Solutions</li>
            <li>Small Business Development</li>
            <li>Systems Architecture</li>
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Interest;
