import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import Main from './components/Main';

import reducers from './redux/reducers';

import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';

import sagas from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

let sagaTask = sagaMiddleware.run(sagas);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={ store }/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Main);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Main', () => {
    render(Main)
  });

  module.hot.accept('./redux/reducers', () => {
    const reducers = require('./redux/reducers').default;
    return store.replaceReducer(reducers);
  });

  module.hot.accept('./redux/sagas', () => {
    const newSagas = require('./redux/sagas').default;
    sagaTask.cancel()
    sagaTask.done.then(() => {
      sagaTask = sagaMiddleware.run(newSagas);
    })
  })
}




