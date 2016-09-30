import React, { Component } from 'react';
import './App.css';
import InfoBox from './InfoBox';
import Result from './Result';

class Equation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rStar: 7,
      fPlanets: 1,
      nEarthLike: 1,
      fLife: 0.1,
      fIntelligent: 0.1,
      fComm: 0.1,
      L: 10000,
      numCivs: 0
    };
    this.calculateCivs = this.calculateCivs.bind(this);
  }


  //TODO: Fix this
  handleInputChange(id) {
    var newVal = document.getElementById(id).value;
    this.setState({
      id: newVal
    })
  }

  calculateCivs() {
    var inputs = Array.from(document.getElementsByTagName('input'));
    var values = inputs.map(function(i) {
      return i.value;
    })
    var result = Math.round(values.reduce(function(result, i) {
      return result * i;
    }));  
    this.setState({
      numCivs: result
    });  
  }

  render() {
    return (
      <div>
        <div>
          <InfoBox />
        </div>
        <div>
          <input onChange={() => {this.handleInputChange(document.getElementById('rStar').id) }} type="range" min="1" max="1000" step="1" value={this.state.rStar} placeholder="7" id="rStar" />
          <input onChange={() => {this.calculateCivs()}} type="range" min="0" max="1" step="0.01" value={this.state.fPlanets} placeholder="1" id="fPlanets" />
          <input onChange={() => {this.calculateCivs()}} type="range" min="0" max="10" step="1" value={this.state.nEarthLike} placeholder="1" id="nEarthLike" />
          <input onChange={() => {this.calculateCivs()}} type="range" min="0" max="1" step="0.01" value={this.state.fLife} placeholder="0.1" id="fLife" />
          <input onChange={() => {this.calculateCivs()}} type="range" min="0" max="1" step="0.01" value={this.state.fIntelligent} placeholder="0.1" id="fIntelligent" />
          <input onChange={() => {this.calculateCivs()}} type="range" min="0" max="1" step="0.01" value={this.state.fComm} placeholder="0.1" id="fComm" />
          <input onChange={() => {this.calculateCivs()}} type="range" min="0" max="1" step="0.01" value={this.state.L} placeholder="10000" id="L" />
        </div>
        <Result numCivs={this.state.numCivs}/>
      </div>
    )
  }
}

export default Equation;