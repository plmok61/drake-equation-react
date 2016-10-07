import React from 'react';
import '../assets/App.css';

const FPlanetsInput = (props) =>
  <div>
    <div>Fraction of stars with planets: {props.fPlanets}</div>
    <input onChange={() => {props.handleInputChange('fPlanets') }}
      type="range" min="0" max="1" step="0.01" value={props.fPlanets} id="fPlanets"
      className="drake-input"/>
  </div>

export default FPlanetsInput;
