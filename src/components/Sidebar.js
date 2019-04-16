import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = (props) => {
  return (
  <div className="nav-container">
    <ul className="navlist">
      <li className="navitem">La Fountain</li>
      <li className="navitem">Home</li>
      <li className="navitem">About</li>
      <li className="navitem">Portfolio</li>
      <li className="navitem">Blog</li>
      <li className="navitem">Contact</li>
    </ul>
  </div>
  )
}

export default Sidebar;
