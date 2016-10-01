import React, { Component } from 'react';
import logo from './assets/galaxy-2.png';
import './assets/App.css';
import Equation from './Equation';
import InfoBox from './InfoBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Drake Equation</h2>
        </div>
        <p className="App-intro">
        How many alien civilizations are there right now?
        </p>
        <Equation />
        <InfoBox />
      </div>
    );
  }
}

export default App;
