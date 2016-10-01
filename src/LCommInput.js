import React from 'react';
import './App.css';

const LCommInput = (props) =>
  <div>
    <div>Number of years civilizations remain communicative: {props.lComm}</div>
    <input onChange={() => {props.handleInputChange(document.getElementById('lComm').id) }}
      type="range" min="1000" max="1000000" step="0.01" value={props.lComm} id="lComm"
      className="drake-input"/>
  </div>

export default LCommInput;
