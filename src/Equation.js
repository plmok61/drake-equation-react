import React, { Component } from 'react';
import './App.css';
import InfoBox from './InfoBox';
import Result from './Result';

class Equation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentInput: 'rStar',
      numCivs: null
    };
  }

  onChangeInputFocus(currentInput) {
    this.setState({
      currentInput: currentInput.id
    });
  }

  calculateCivs(rStar, fPlanets, nEarthLike, fLife, fIntelligent, rComm, L) {
    var result = rStar * fPlanets * nEarthLike * fLife * fIntelligent * rComm * L;
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
          <input id="rStar" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <input id="fPlanets" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <input id="nEarthLike" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <input id="fLife" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <input id="fIntelligent" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <input id="rComm" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <input id="L" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
        </div>
        <Result calculateCivs={this.calculateCivs}/>
      </div>
    )
  }
}

export default Equation;