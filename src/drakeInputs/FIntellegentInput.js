import React from 'react';
import '../assets/App.css';

const FIntellegentInput = (props) =>
  <div>
    <div>Fraction in which intelligence arises: {props.fIntelligent}</div>
    <input onChange={() => {props.handleInputChange('fIntelligent') }}
      type="range" min="0" max="1" step="0.01" value={props.fIntelligent} id="fIntelligent"
      className="drake-input"/>
  </div>

export default FIntellegentInput;
