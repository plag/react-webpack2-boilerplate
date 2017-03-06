import { take, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { increaseRandomAsync, setCounter } from '../actions/counter';

export default function* root() {
  while (yield take(increaseRandomAsync)) {
    yield delay(1000);
    yield put(setCounter(Math.floor(Math.random() * 1000)));
  }
}
