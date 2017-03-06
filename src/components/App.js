import React from 'react';
import { Col } from 'react-bootstrap';
import logo from '../assets/galaxy-2.png';
import Equation from './Equation';
import InfoBox from './InfoBox';
import '../assets/App.css';

const App = () => (
  <div bsClass="row" className="App">
    <Col xs={12} sm={3} md={3} />
    <Col xs={12} sm={6} md={6}>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Drake Equation</h2>
      </div>
      <h4>
      Calculate the number of alien civilizations in our galaxy
      </h4>
      <Equation />
      <InfoBox />
    </Col>
    <Col xs={12} sm={3} md={3} />
  </div>
);

export default App;
