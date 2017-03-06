import React, { Component } from 'react';

import {
  Router,
  browserHistory,
} from 'react-router'

import { routes } from './routes';

class Main extends Component {
  render() {
    return (
      <Router key={ Math.random() } history={ browserHistory }>
        { routes }
      </Router>
    );
  }
}

export default Main;



