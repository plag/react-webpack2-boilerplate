import React, { Component } from 'react';
import styles from './FirstPage.css';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (<div className={styles.firstPage}>
      <h2>Test second page</h2>
      <Link to="/">Go to first</Link>
    </div>)
  }
}

export default About;
