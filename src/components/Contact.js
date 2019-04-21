import React from "react";

const Contact = props => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="title">
          <h1>Contact Me</h1>
          <hr className="underline" />
        </div>
        <form className="contact-form">
          <input
            className="w3-input"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            className="w3-input"
            type="email"
            name="email"
            placeholder="email address"
          />
          <textarea
            className="w3-input"
            name="message"
            row="6"
            col="2"
            placeholder="message"
          />
          <button className="contact-btn">submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
