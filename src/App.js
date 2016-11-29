import React, { Component } from 'react'
import logo from './assets/galaxy-2.png'
import './assets/App.css'
import { Col } from 'react-bootstrap'
import Equation from './Equation'
import InfoBox from './InfoBox'

class App extends Component {
  render () {
    return (
      <div bsClass='row' className='App'>
        <Col xs={12} md={3} />
        <Col xs={12} md={6}>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Drake Equation</h2>
          </div>
          <p className="App-intro">
          How many alien civilizations are there right now?
          </p>
          <Equation />
          <InfoBox />
        </Col>
        <Col xs={12} md={3} />
      </div>
    );
  }
}

export default App;
