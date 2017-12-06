import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import '../assets/App.css';
import Result from './Result';
import DrakeInput from './DrakeInput';
import * as actions from '../actions/equationActions';

const inputs = [
  {
    inputId: 'rStar',
    min: 1,
    max: 15,
    step: 1,
    startValue: 3,
    descriptionText: 'Rate of star formation: ',
  },
  {
    inputId: 'fPlanets',
    min: 0,
    max: 1,
    step: 0.01,
    startValue: 1,
    descriptionText: 'Fraction of stars with planets: ',
  },
  {
    inputId: 'nEarthLike',
    min: 0,
    max: 5,
    step: 0.1,
    startValue: 0.4,
    descriptionText: 'Number of Earth-like planets: ',
  },
  {
    inputId: 'fLife',
    min: 0,
    max: 1,
    step: 0.01,
    startValue: 0.01,
    descriptionText: 'Fraction of planets with life: ',
  },
  {
    inputId: 'fIntelligent',
    min: 0,
    max: 1,
    step: 0.01,
    startValue: 0.1,
    descriptionText: 'Fraction with intelligent life: ',
  },
  {
    inputId: 'fComm',
    min: 0,
    max: 1,
    step: 0.01,
    startValue: 0.1,
    descriptionText: 'Fraction that communicate their existence: ',
  },
  {
    inputId: 'lComm',
    min: 1000,
    max: 1000000,
    step: 1000,
    startValue: 10000,
    descriptionText: 'Number of years communicative: ',
  },
];

class Equation extends Component {
  componentDidMount() {
    this.props.updateNumCivs();
  }

  render() {
    return (
      <div>
        <Result numCivs={this.props.numCivs} />
        <div className="inputs-wrap">
          {
            inputs.map(vals => (
              <DrakeInput
                inputId={vals.inputId}
                min={vals.min}
                max={vals.max}
                step={vals.step}
                inputValue={vals.startValue}
                descriptionText={vals.descriptionText}
                key={vals.inputId}
                {...this.props}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Equation.propTypes = {
  numCivs: PropTypes.number.isRequired,
  updateNumCivs: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  inputs: store.equation.inputs,
  numCivs: store.equation.numCivs,
});

export default connect(mapStateToProps, actions)(Equation);
