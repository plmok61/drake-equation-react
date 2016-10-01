import React from 'react';
import './App.css';

const FLifeInput = (props) =>
  <div>
    <div>Fraction of planets with life: {props.fLife}</div>
    <input onChange={() => {props.handleInputChange(document.getElementById('fLife').id) }}
      type="range" min="0" max="1" step="0.01" value={props.fLife} id="fLife"
      className="drake-input"/>
  </div>

export default FLifeInput;
