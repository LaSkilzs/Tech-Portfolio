import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <section id="home">
      <div className="home-container">
        <h2 className="greeting">Hi, I am</h2>
        <h4 className="greeting">La Fountain</h4>
        <div className="nav-btn">
          <Link to="/projects">
            <button className="btn">view my work</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
