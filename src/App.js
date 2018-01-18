import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './components/Bio'
import Projects from './components/Projects'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-social">
            <p><em>Connect with Me</em></p>
            <a href="https://github.com/davefrancese" target="_blank">
              <i class="fa fa-github icon" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/dave-francese/" target="_blank">
              <i class="fa fa-linkedin-square icon" aria-hidden="true"></i>
            </a>
            <a href="#" target="_blank">
              <i class="fa fa-envelope-open-o icon" aria-hidden="true"></i>
            </a>
            <a href="https://homersparks.bandcamp.com/" target="_blank">
              <i class="fa fa-bandcamp icon" aria-hidden="true"></i>
            </a>
          </div>
          <h1 className="App-title">dave francese</h1>
          <p className="App-sub">Full Stack Web Developer</p>
          <p className="slash">////////////</p>
        </header>
        <main>
          <Bio />
          <Projects />
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
