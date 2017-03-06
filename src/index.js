import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import Main from './components/Main';

import reducers from './redux/reducers';

import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

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
}




