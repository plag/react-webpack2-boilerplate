import { createAction } from 'redux-act';

export const increaseCounter = createAction('counter.increase');
export const increaseRandomAsync = createAction('counter.increaseRandomAsync');
export const setCounter = createAction('counter.set');
