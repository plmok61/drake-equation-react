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


  //TODO: Fix this
  handleInputChange(id) {
    var newVal = document.getElementById(id).value;
    this.setState({
      [id]: newVal
    })
    console.log(this.state[id])
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
        <div>
          <input onChange={() => {this.handleInputChange(document.getElementById('rStar').id) }}
            type="range" min="1" max="1000" step="1" value={this.state.rStar} id="rStar"
            className="drake-input"/>
            <div>{this.state.rStar}</div>

          <input onChange={() => {this.handleInputChange(document.getElementById('fPlanets').id) }}
            type="range" min="0" max="1" step="0.01" value={this.state.fPlanets} id="fPlanets"
            className="drake-input"/>


          <input onChange={() => {this.handleInputChange(document.getElementById('nEarthLike').id) }}
            type="range" min="0" max="10" step="1" value={this.state.nEarthLike} id="nEarthLike"
            className="drake-input"/>


          <input onChange={() => {this.handleInputChange(document.getElementById('fLife').id) }}
            type="range" min="0" max="1" step="0.01" value={this.state.fLife} id="fLife"
            className="drake-input"/>


          <input onChange={() => {this.handleInputChange(document.getElementById('fIntelligent').id) }}
            type="range" min="0" max="1" step="0.01" value={this.state.fIntelligent} id="fIntelligent"
            className="drake-input"/>


          <input onChange={() => {this.handleInputChange(document.getElementById('fComm').id) }}
            type="range" min="0" max="1" step="0.01" value={this.state.fComm} id="fComm"
            className="drake-input"/>


          <input onChange={() => {this.handleInputChange(document.getElementById('L').id) }}
            type="range" min="100" max="1000000000" step="0.01" value={this.state.L} id="L"
            className="drake-input"/>


        </div>
        <Result numCivs={this.state.numCivs}/>
      </div>
    )
  }
}

export default Equation;