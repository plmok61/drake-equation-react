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
      numCivs: 70
    };
    this.calculateCivs = this.calculateCivs.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(id) {
    var newVal = document.getElementById(id).value;
    this.setState({
      [id]: newVal
    })
    this.calculateCivs();
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
        <div className="inputs-wrap">
          <div>Rate of star formation: {this.state.rStar}</div>
          <input onChange={() => {this.handleInputChange(document.getElementById('rStar').id) }}
            type="range" min="1" max="15" step="1" value={this.state.rStar} id="rStar"
            className="drake-input"/>

          <div>Fraction of stars with planets: {this.state.fPlanets}</div>
          <input onChange={() => {this.handleInputChange(document.getElementById('fPlanets').id) }}
            type="range" min="0" max="1" step="0.01" value={this.state.fPlanets} id="fPlanets"
            className="drake-input"/>

          <div>Number of Earth-like planets per star: {this.state.nEarthLike}</div>
          <input onChange={() => {this.handleInputChange(document.getElementById('nEarthLike').id) }}
            type="range" min="0" max="5" step="0.01" value={this.state.nEarthLike} id="nEarthLike"
            className="drake-input"/>

          <div>Fraction of planets with life: {this.state.fLife}</div>
          <input onChange={() => {this.handleInputChange(document.getElementById('fLife').id) }}
            type="range" min="0" max="1" step="0.01" value={this.state.fLife} id="fLife"
            className="drake-input"/>

          <div>Fraction in which intelligence arises: {this.state.fIntelligent}</div>
          <input onChange={() => {this.handleInputChange(document.getElementById('fIntelligent').id) }}
            type="range" min="0" max="1" step="0.01" value={this.state.fIntelligent} id="fIntelligent"
            className="drake-input"/>

          <div>Fraction in which intellent beings communicate their existence: {this.state.fComm}</div>
          <input onChange={() => {this.handleInputChange(document.getElementById('fComm').id) }}
            type="range" min="0" max="1" step="0.01" value={this.state.fComm} id="fComm"
            className="drake-input"/>

          <div>Number of years civilizations remain communicative: {this.state.L}</div>
          <input onChange={() => {this.handleInputChange(document.getElementById('L').id) }}
            type="range" min="1000" max="1000000" step="0.01" value={this.state.L} id="L"
            className="drake-input"/>


        </div>
        <Result numCivs={this.state.numCivs}/>
      </div>
    )
  }
}

export default Equation;
