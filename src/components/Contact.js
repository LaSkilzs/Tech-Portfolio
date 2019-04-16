import React from 'react';

const Contact = (props) => {
  return (
    <section id="contact">
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
    </section>
  )
}

export default Contact;
