import React, { PropTypes } from 'react';
import '../assets/App.css';

const Result = props => (
  <div className="result">
    If these values are correct <span className="result-value">{props.numCivs}</span> alien civilizations currently exist.
  </div>
);

Result.propTypes = {
  numCivs: PropTypes.number.isRequired,
};

export default Result;
