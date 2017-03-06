import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import Main from './components/Main';

console.log('Main', Main);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
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
}


