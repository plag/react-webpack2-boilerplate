import React, { Component } from 'react';
import styles from './FirstPage.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { increaseCounter } from '../redux/actions/counter';

const mapStateToProps = (state) => ({
  counter: state.counter,
})

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => {
    dispatch(increaseCounter());
  },
})

class About extends Component {
  render() {
    return (<div className={styles.firstPage}>
      <h2>Test second page</h2>
      <div>Counter: { this.props.counter.counter }</div>
      <button onClick={ this.props.increaseCounter }>Increase counter</button>
      <Link to="/">Go to first</Link>
    </div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
