import { combineReducers } from 'redux';

const initialValues = {
  inputs: {
    rStar: 3,
    fPlanets: 1,
    nEarthLike: 0.4,
    fLife: 0.01,
    fIntelligent: 0.1,
    fComm: 0.1,
    lComm: 10000,
  },
  numCivs: 0,
};


function equationReducer(state = initialValues, action) {
  switch (action.type) {
    case 'UPDATE_NUM_CIVS':
      return { ...state, numCivs: action.payload };
    case 'UPDATE_INPUT':
      return { ...state, inputs: { ...state.inputs, [action.input]: action.value } };
    default:
      return state;
  }
}

export default combineReducers({
  equation: equationReducer,
});
