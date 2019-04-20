import React from 'react';

const Sidebar = (props) => {
  return (
<section id="sidebar">
    <div className="nav-container">
    <nav className="navbar">
      <ul className="navlist">
        <span className="navitem"><strong>La</strong></span>
        <p className="navtext">Fountain</p>
        <br/>
        <br/>
        <br/>
        <li className="navitem"><i className="fas fa-home"></i></li>
        <li className="navitem"><i className="fas fa-id-card"></i></li>
        <li className="navitem"><i className="fas fa-business-time"></i></li>
        <li className="navitem"><i className="fas fa-book-open"></i></li>
        <li className="navitem"><i className="fas fa-envelope-open-text"></i></li>
        <br />
        <br />
        <br />
        <br />
        <li className="navitem"><i className="fab fa-linkedin-in"></i></li>
        <li className="navitem"><i className="fab fa-github"></i></li>
        <li className="navitem"><i className="fab fa-twitter"></i></li>
      </ul>
      </nav>
    </div>
  </section>
  )
}

export default Sidebar;
