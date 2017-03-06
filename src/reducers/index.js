import { combineReducers } from 'redux';

const initialValues = {
  inputs: [
    {
      inputId: 'rStar',
      min: 1,
      max: 15,
      step: 1,
      startValue: 3,
      descriptionText: 'Rate of star formation: ',
    },
    {
      inputId: 'fPlanets',
      min: 0,
      max: 1,
      step: 0.01,
      startValue: 1,
      descriptionText: 'Fraction of stars with planets: ',
    },
    {
      inputId: 'nEarthLike',
      min: 0,
      max: 5,
      step: 0.1,
      startValue: 0.4,
      descriptionText: 'Number of Earth-like planets per star: ',
    },
    {
      inputId: 'fLife',
      min: 0,
      max: 1,
      step: 0.01,
      startValue: 0.01,
      descriptionText: 'Fraction of planets with life: ',
    },
    {
      inputId: 'fIntelligent',
      min: 0,
      max: 1,
      step: 0.01,
      startValue: 0.1,
      descriptionText: 'Fraction where intelligence arises: ',
    },
    {
      inputId: 'fComm',
      min: 0,
      max: 1,
      step: 0.01,
      startValue: 0.1,
      descriptionText: 'Fraction that communicate their existence: ',
    },
    {
      inputId: 'lComm',
      min: 1000,
      max: 1000000,
      step: 1000,
      startValue: 10000,
      descriptionText: 'Number of years communicative: ',
    },
  ],
  numCivs: 0,
};


function equationReducer(state = initialValues, action) {
  switch (action.type) {
    case 'UPDATE_NUM_CIVS':
      return Object.assign({}, state, { numCivs: action.payload });
    default:
      return state;
  }
}

export default combineReducers({
  equation: equationReducer,
});
