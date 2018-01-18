import React, { Component } from 'react';
import '../App.css';

class projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <h3>PROJECTS</h3>
        <p className="slash">////////////</p>
        <div className="project-container">
          <div className="pro-card">
            <a href="#">
              <img src="../images/synth.jpg" />
            </a>
            {/* <h4 className="pro-title"><a href="#">Synth Lab</a></h4>
            <p>A site dedicated to vintage synthesizers. Fully responsive and all just for fun. Future iterations will provide user forms, so anyone can add to the database!</p> */}
          </div>
          <div className="pro-card">
            <a href="#">
              <img src="../images/sloth.jpg" />
            </a>
            {/* <h4 className="pro-title"><a href="#">Sleuth</a></h4>
            <p>Now that net nutrality is long gone, Sleuth provides some accountabilty. Future iterations will provide help tickets to the user's ISP when speed has dropped below user's paid-for speed!</p> */}
          </div>
          <div className="pro-card">
            <a href="#">
              <img src="../images/fable.jpg" />
            </a>
            {/* <h4 className="pro-title"><a href="#">Fable Forum</a></h4>
            <p>The Fable forum is a place where readers and authors can signup and share their short stories and get feedback from other users. Happy Reading!</p> */}
          </div>
          <div className="pro-card">
            <a href="#">
              <img src="../images/mood.jpg" />
            </a>
            {/* <h4 className="pro-title"><a href="#">MOOD.</a></h4>
            <p>An app that takes in a user's mood and weather conditions, then gives the user a playlist of 10 songs based on those conditions.</p> */}
          </div>
          <div className="pro-card">
            <a href="#">
              <img src="../images/inbox.jpg" />
            </a>
            {/* <h4 className="pro-title"><a href="#">MOOD.</a></h4>
            <p>An app that takes in a user's mood and weather conditions, then gives the user a playlist of 10 songs based on those conditions.</p> */}
          </div>
          <div className="pro-card">
            <a href="#">
              <img src="../images/MEGLogo.jpg" />
            </a>
            {/* <h4 className="pro-title"><a href="#">MOOD.</a></h4>
            <p>An app that takes in a user's mood and weather conditions, then gives the user a playlist of 10 songs based on those conditions.</p> */}
          </div>
          <div className="pro-card">
            <a href="#">
              <img src="../images/tonicLogo.jpg" />
            </a>
            {/* <h4 className="pro-title"><a href="#">MOOD.</a></h4>
            <p>An app that takes in a user's mood and weather conditions, then gives the user a playlist of 10 songs based on those conditions.</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default projects;
