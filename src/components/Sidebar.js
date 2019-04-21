import React from "react";
import { Link } from "react-router-dom";

const Sidebar = props => {
  return (
    <section id="sidebar">
      <div className="nav-container">
        <nav className="navbar">
          <ul className="navlist">
            <span className="navitem">
              <strong>La</strong>
            </span>
            <p className="navtext">Fountain</p>
            <br />
            <br />
            <br />
            <Link to="/home">
              <li className="navitem">
                <i className="fas fa-home" />
              </li>
            </Link>
            <Link to="/about">
              <li className="navitem">
                <i className="fas fa-id-card" />
              </li>
            </Link>
            <Link to="/projects">
              <li className="navitem">
                <i className="fas fa-business-time" />
              </li>
            </Link>
            <Link to="/blogs">
              <li className="navitem">
                <i className="fas fa-book-open" />
              </li>
            </Link>
            <Link to="/contact">
              <li className="navitem">
                <i className="fas fa-envelope-open-text" />
              </li>
            </Link>
            <br />
            <br />
            <br />
            <br />
            <a href="https://www.linkedin.com/in/la-fountain-649253112/">
              <li className="navitem">
                <i className="fab fa-linkedin-in" />
              </li>
            </a>
            <a href="https://www.github.com/LaSkilzs">
              <li className="navitem">
                <i className="fab fa-github" />
              </li>
            </a>
            <a href="https://www.twitter.com/98a8ec669cb8487">
              <li className="navitem">
                <i className="fab fa-twitter" />
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
