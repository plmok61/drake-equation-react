import React from 'react';
import '../assets/App.css';

const FCommInput = (props) =>
  <div>
    <div>Fraction in which intellent beings communicate their existence: {props.fComm}</div>
    <input onChange={() => {props.handleInputChange(document.getElementById('fComm').id) }}
      type="range" min="0" max="1" step="0.01" value={props.fComm} id="fComm"
      className="drake-input"/>
  </div>

export default FCommInput;
