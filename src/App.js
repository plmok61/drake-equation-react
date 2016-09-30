import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Equation from './Equation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Drake Equation</h2>
        </div>
        <p className="App-intro">
        How many aliens are there right now?
        </p>
        <Equation />
      </div>
    );
  }
}

export default App;
