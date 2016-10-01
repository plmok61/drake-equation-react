import React from 'react';
import '../assets/App.css';

const RStarInput = (props) =>
  <div>
    <div>Rate of star formation: {props.rStar}</div>
    <input onChange={() => {props.handleInputChange(document.getElementById('rStar').id) }}
      type="range" min="1" max="15" step="1" value={props.rStar} id="rStar"
      className="drake-input"/>
  </div>

export default RStarInput;
