import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import '../assets/App.css';
import Result from './Result';
import DrakeInput from './DrakeInput';
import { updateNumCivs } from '../actions/equationActions';

class Equation extends Component {
  constructor(props) {
    super(props);
    this.calculateCivs = this.calculateCivs.bind(this);
  }

  componentDidMount() {
    console.log('props ', this.props);
  }

  calculateCivs() {
    const inputs = Array.from(document.getElementsByTagName('input'));
    const values = inputs.map(i => i.value);
    const result = Math.round(values.reduce((res, i) => res * i));

    this.props.dispatch(updateNumCivs(result));
  }

  render() {
    return (
      <div>
        <Result numCivs={this.props.numCivs}/>
        <div className="inputs-wrap">
          {
            this.props.inputs.map(vals => (
              <DrakeInput 
                inputId={vals.inputId}
                calculateCivs={this.calculateCivs}
                min={vals.min}
                max={vals.max}
                step={vals.step}
                inputValue={vals.startValue}
                descriptionText={vals.descriptionText}
                key={vals.inputId}
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
  dispatch: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired,
};

const mapStateToProps = store => ({
  inputs: store.equation.inputs,
  numCivs: store.equation.numCivs,
});

export default connect(mapStateToProps)(Equation);
