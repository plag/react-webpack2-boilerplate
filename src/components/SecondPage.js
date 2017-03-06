import React, { Component } from 'react';
import styles from './FirstPage.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { increaseCounter, increaseRandomAsync } from '../redux/actions/counter';

const mapStateToProps = (state) => ({
  counter: state.counter,
})

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => {
    dispatch(increaseCounter());
  },
  increaseRandomAsync: () => {
    dispatch(increaseRandomAsync());
  },
})

class About extends Component {
  render() {
    return (<div className={styles.firstPage}>
      <h2>Test second page</h2>
      <div>Counter: { this.props.counter.counter }</div>
      <button onClick={ this.props.increaseCounter }>Increase counter</button>
      <button onClick={ this.props.increaseRandomAsync }>Increase async randomly</button>
      <Link to="/">Go to first</Link>
    </div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
