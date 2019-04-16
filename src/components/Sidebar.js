import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = (props) => {
  return (
  <div className="nav-container">
    <ul className="navlist">
      <li className="navitem">La</li>
      <li className="navitem"><i className="fas fa-home"></i></li>
      <li className="navitem"><i className="fas fa-id-card"></i></li>
      <li className="navitem"><i className="fas fa-business-time"></i></li>
      <li className="navitem"><i className="fas fa-book-open"></i></li>
      <li className="navitem"><i className="fas fa-envelope-open-text"></i></li>

    </ul>
    <ul className="contact-list">
      <li className="navitem"><i className="fab fa-linkedin-in"></i></li>
      <li className="navitem"><i className="fab fa-github"></i></li>
      <li className="navitem"><i className="fab fa-twitter"></i></li>
    </ul>
  </div>
  )
}

export default Sidebar;
