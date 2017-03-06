import React, { Component, PropTypes } from 'react';
import '../assets/App.css';

export default class DrakeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.inputValue,
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(id) {
    this.setState({ value: document.getElementById(id).value });
  }

  render() {
    return (
      <div>
        <h4>{this.props.descriptionText}<span className="input-value">{this.state.value}</span></h4>
        <input
          className="drake-input"
          type="range"
          onChange={() => {
            this.props.calculateCivs();
            this.changeValue(this.props.inputId);
          }}
          id={this.props.inputId}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.state.value}
        />
      </div>
    );
  }
}

DrakeInput.propTypes = {
  calculateCivs: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
  descriptionText: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};
