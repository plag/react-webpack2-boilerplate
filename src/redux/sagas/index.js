import { fork } from 'redux-saga/effects';
import counter from './counter';

export default function* root() {
  yield fork(counter);
}
