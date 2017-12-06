export function updateNumCivs() {
  return (dispatch, getState) => {
    const inputs = getState().equation.inputs;
    const inputKeys = Object.keys(inputs);
    const numCivs = Math.round(inputKeys.reduce((result, item) => (result * inputs[item]), 1));
    dispatch({
      type: 'UPDATE_NUM_CIVS',
      payload: numCivs,
    });
  };
}

export function updateInput(value, input) {
  return (dispatch, getState) => {
    dispatch({
      type: 'UPDATE_INPUT',
      value,
      input,
    });
    // Update number of civilizations
    updateNumCivs()(dispatch, getState);
  };
}
