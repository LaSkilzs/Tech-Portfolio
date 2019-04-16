import React from 'react';
import PropTypes from 'prop-types';

const Contact = (props) => {
  return (
  <div className="contact-container">
    <div className="title"> <h1>Contact Me</h1> </div>
    <hr />
      <form className="contact-form">
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email address" />
        <textarea name="message" row="6" col="2" placeholder="message"></textarea>
        <button>submit</button>
      </form>




  </div>
  )
}

export default Contact;
