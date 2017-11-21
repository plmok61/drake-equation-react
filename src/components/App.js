import React from 'react';
import logo from '../assets/galaxy-2.png';
import Equation from './Equation';
import InfoBox from './InfoBox';
import '../assets/App.css';

const App = () => (
  <div className="App">
    <div className="centerBody">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Drake Equation</h2>
      </div>
      <h4>
      Calculate the number of alien civilizations in our galaxy
      </h4>
      <Equation />
      <InfoBox />
    </div>
  </div>
);

export default App;
