import React, { PropTypes } from 'react';
import '../assets/App.css';

const DrakeInput = props => (
  <div>
    <h4>{props.descriptionText}<span className="input-value">{props.inputs[props.inputId]}</span></h4>
    <input
      className="drake-input"
      type="range"
      onChange={(e) => {
        props.updateInput(e.target.value, props.inputId);
      }}
      id={props.inputId}
      min={props.min}
      max={props.max}
      step={props.step}
      value={props.inputs[props.inputId]}
    />
  </div>
);

DrakeInput.propTypes = {
  inputs: PropTypes.shape({
    inputId: PropTypes.string,
  }).isRequired,
  updateInput: PropTypes.func.isRequired,
  descriptionText: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default DrakeInput;
