import React from 'react';
import '../assets/App.css';

const NEarthLikeInput = (props) =>
  <div>
    <div>Number of Earth-like planets per star: {props.nEarthLike}</div>
    <input onChange={() => {props.handleInputChange(document.getElementById('nEarthLike').id) }}
      type="range" min="0" max="5" step="0.01" value={props.nEarthLike} id="nEarthLike"
      className="drake-input"/>
  </div>

export default NEarthLikeInput;
