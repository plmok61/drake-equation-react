import React, { PropTypes } from 'react';
import '../assets/App.css';

const Result = ({ numCivs }) => (
  <div className="result">
    <h3>Civilizations:</h3>
    <h3><span className="result-value">{numCivs}</span></h3>
  </div>
);

Result.propTypes = {
  numCivs: PropTypes.number.isRequired,
};

export default Result;
