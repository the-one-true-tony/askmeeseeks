import React, { Component } from 'react';
import logo from '../img/meeseek.png';
import Meeseeks from './meeseeks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Ask Meeseeks</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Meeseeks />
      </div>
    );
  }
}

export default App;
