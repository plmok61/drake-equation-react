import React, { PropTypes } from 'react';
import '../assets/App.css';

const Result = ({ numCivs }) => {
  let resultText;
  if (numCivs === 0) {
    resultText = 'What a lonely galaxy';
  } else if (numCivs === 1) {
    resultText = 'Only us';
  } else if (numCivs < 100) {
    resultText = 'Likely too far away to reach';
  } else if (numCivs >= 100 && numCivs < 1000) {
    resultText = 'The truth is out there';
  } else if (numCivs >= 1000 && numCivs < 100000) {
    resultText = 'The Ancient Aliens guy would be happy';
  } else if (numCivs >= 100000 && numCivs < 1000000) {
    resultText = 'Somebody call the MIB';
  } else if (numCivs >= 1000000) {
    resultText = 'Aliens everywhere!';
  }

  return (
    <div className="result">
      <h3>Civilizations: <span className="result-value">{numCivs}</span></h3>
      {resultText}
    </div>
  );
};

Result.propTypes = {
  numCivs: PropTypes.number.isRequired,
};

export default Result;
