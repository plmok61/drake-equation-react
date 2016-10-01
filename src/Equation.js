import React, { Component } from 'react';
import './assets/App.css';
import Result from './Result';
import RStarInput from './drakeInputs/RStarInput';
import FPlanetsInput from './drakeInputs/FPlanetsInput';
import NEarthLikeInput from './drakeInputs/NEarthLikeInput';
import FLifeInput from './drakeInputs/FLifeInput';
import FIntellegentInput from './drakeInputs/FIntellegentInput';
import FCommInput from './drakeInputs/FCommInput';
import LCommInput from './drakeInputs/LCommInput';

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
      lComm: 10000,
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
        <div className="inputs-wrap">
          <RStarInput rStar={this.state.rStar}
            handleInputChange={this.handleInputChange} />
          <FPlanetsInput fPlanets={this.state.fPlanets}
            handleInputChange={this.handleInputChange} />
          <NEarthLikeInput nEarthLike={this.state.nEarthLike}
            handleInputChange={this.handleInputChange} />
          <FLifeInput fLife={this.state.fLife}
            handleInputChange={this.handleInputChange} />
          <FIntellegentInput fIntelligent={this.state.fIntelligent}
            handleInputChange={this.handleInputChange} />
          <FCommInput fComm={this.state.fComm}
            handleInputChange={this.handleInputChange} />
          <LCommInput lComm={this.state.lComm}
            handleInputChange={this.handleInputChange} />
        </div>
        <Result numCivs={this.state.numCivs}/>
      </div>
    )
  }
}

export default Equation;
