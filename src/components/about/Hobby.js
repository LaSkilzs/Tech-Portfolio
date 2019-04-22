import React from "react";

const Hobby = props => {
  return (
    <div className="hobby">
      <ol className="skills-list">
        <li className="item-list double">
          <i className="fas fa-campground" />
          <h3>Outdoor Activities</h3>
        </li>
        <li className="item-list">
          <i className="fas fa-history" />
          <h3>Enjoy History</h3>
        </li>
        <li className="item-list">
          <i className="fas fa-paw" />
          <h3>Pet Lover</h3>
        </li>
        <li className="item-list">
          <i className="fas fa-running" />
          <h3>Working Out</h3>
        </li>
      </ol>
      <div className="area-hobby">
        <h2>My Hobbies</h2>
        <p>
          I like to consider myself very diverse in my hobbies. I am avivd
          sports enthusiam, having recieve a full athletic scholarship, and
          winning the MSG Golden Gloves Tournament. In addition, I enjoy being
          outdoors, hiking,skiing, canoeing and much more. Strategic board
          games, reading about history are a few things that I enjoy.
        </p>
      </div>
    </div>
  );
};

export default Hobby;
