import React, { Component } from 'react';
import '../App.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <h3>CONTACT</h3>
        <p className="slash">////////////</p>
        <div className="contact-content">
          <h4 className="contact-title">Drop me a line!</h4>
          <p><a href="mailto:davefrancese@gmail.com"><i class="fa fa-envelope-open-o icon" aria-hidden="true"></i>davefrancese@gmail.com</a></p>
          <p><a href="https://github.com/davefrancese"><i class="fa fa-github icon" aria-hidden="true"></i>github.com/davefrancese</a></p>
          <p><a href="https://www.linkedin.com/in/dave-francese/"><i class="fa fa-linkedin-square icon" aria-hidden="true"></i>linkedIn.com/davefrancese</a></p>
        </div>
      </div>
    );
  }
}

export default Contact;
