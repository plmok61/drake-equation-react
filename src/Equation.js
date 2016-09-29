import React, { Component } from 'react';
import './App.css';
import InfoBox from './InfoBox';
import Result from './Result';

class Equation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentInput: 'rStar',
      numCivs: 70,
    };
    this.calculateCivs = this.calculateCivs.bind(this);
  }

  onChangeInputFocus(currentInput) {
    this.setState({
      currentInput: currentInput.id
    });
  }

  calculateCivs() {
    var inputs = Array.from(document.getElementsByTagName('input'));
    if (inputs.length !== 0) {
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
  }

  render() {
    return (
      <div>
        <div>
          <InfoBox />
        </div>
        <div>
          <input type="number" placeholder="7" id="rStar" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <input type="number" placeholder="1" id="fPlanets" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <input type="number" placeholder="1" id="nEarthLike" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <input type="number" placeholder="0.1" id="fLife" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <input type="number" placeholder="0.1" id="fIntelligent" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <input type="number" placeholder="0.1" id="rComm" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <input type="number" placeholder="10000" id="L" onFocus={ () => {this.onChangeInputFocus(document.getElementById("rStar"))}} />
          <button onClick={() => {this.calculateCivs()}}>Submit</button>
        </div>
        <Result numCivs={this.state.numCivs}/>
      </div>
    )
  }
}

export default Equation;