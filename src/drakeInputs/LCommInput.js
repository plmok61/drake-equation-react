import React from 'react';
import '../assets/App.css';

const LCommInput = (props) =>
  <div>
    <div>Number of years civilizations remain communicative: {props.lComm}</div>
    <input onChange={() => {props.handleInputChange('lComm') }}
      type="range" min="1000" max="1000000" step="1000" value={props.lComm} id="lComm"
      className="drake-input"/>
  </div>

export default LCommInput;