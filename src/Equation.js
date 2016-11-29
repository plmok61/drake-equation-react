import React, { Component } from 'react';
import './assets/App.css';
import Result from './Result';
import DrakeInput from './DrakeInput'

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
          <DrakeInput 
            inputId='rStar'
            handleInputChange={this.handleInputChange}
            min={1}
            max={15}
            step={1}
            startValue={this.state.rStar}
            descriptionText={'Rate of star formation: '}
          />

          <DrakeInput 
            inputId='fPlanets'
            handleInputChange={this.handleInputChange}
            min={0}
            max={1}
            step={0.01}
            startValue={this.state.fPlanets}
            descriptionText={'Fraction of stars with planets: '}
          />


          <DrakeInput 
            inputId='nEarthLike'
            handleInputChange={this.handleInputChange}
            min={0}
            max={5}
            step={0.1}
            startValue={this.state.nEarthLike}
            descriptionText={'Number of Earth-like planets per star: '}
          />          

          <DrakeInput 
            inputId='fLife'
            handleInputChange={this.handleInputChange}
            min={0}
            max={1}
            step={0.01}
            startValue={this.state.fLife}
            descriptionText={'Fraction of planets with life: '}
          />

          <DrakeInput 
            inputId='fIntelligent'
            handleInputChange={this.handleInputChange}
            min={0}
            max={1}
            step={0.01}
            startValue={this.state.fIntelligent}
            descriptionText={'Fraction in which intelligence arises: '}
          /> 
          
          <DrakeInput 
            inputId='fComm'
            handleInputChange={this.handleInputChange}
            min={0}
            max={1}
            step={0.01}
            startValue={this.state.fComm}
            descriptionText={'Fraction in which intellent beings communicate their existence: '}
          /> 
          
          <DrakeInput 
            inputId='lComm'
            handleInputChange={this.handleInputChange}
            min={1000}
            max={1000000}
            step={1000}
            startValue={this.state.lComm}
            descriptionText={'Number of years civilizations remain communicative: '}
          />
          
          
        </div>
        <Result numCivs={this.state.numCivs}/>

       

      </div>
    )
  }
}

export default Equation;
