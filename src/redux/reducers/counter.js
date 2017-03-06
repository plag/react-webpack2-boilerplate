import { createReducer } from 'redux-act';

import { increaseCounter, setCounter } from '../actions/counter';

const defaultState = { counter: 0 };

const counter = createReducer({
  [increaseCounter]: (state) => ({
    ...state,
    counter: state.counter + 1,
  }),
  [setCounter]: (state, counter) => ({
    ...state,
    counter,
  }),
}, defaultState);

export default counter;
