import { createReducer } from 'redux-act';

import { increaseCounter } from '../actions/counter';

const defaultState = { counter: 0 };

const counter = createReducer({
  [increaseCounter]: (state) => ({
    ...state,
    counter: state.counter + 1,
  }),
}, defaultState);

export default counter;
