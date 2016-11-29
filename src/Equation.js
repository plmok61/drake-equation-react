import React, { Component } from 'react';
import './assets/App.css';
import Result from './Result';
import DrakeInput from './DrakeInput'
import DefaultValues from './DefaultValues'

class Equation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numCivs: 70
    };
    this.calculateCivs = this.calculateCivs.bind(this);
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

    const defaultValues = DefaultValues

    return (
      <div>
        <div className="inputs-wrap">

          {
            defaultValues.map((vals, key) => (
              <DrakeInput 
                inputId={vals.inputId}
                calculateCivs={this.calculateCivs}
                min={vals.min}
                max={vals.max}
                step={vals.step}
                startValue={vals.startValue}
                descriptionText={vals.descriptionText}
                key={key}
              />
            ))
          }
      
        </div>
        <Result numCivs={this.state.numCivs}/>
      </div>
    )
  }
}

export default Equation;
