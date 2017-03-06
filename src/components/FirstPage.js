import React, { Component } from 'react';
import styles from './FirstPage.css';
import { Link } from 'react-router';

class FirstPage extends Component {
  render() {
    return (<div className={styles.firstPage}>
      <h2>Test first page</h2>
      <Link to="/second">Go to second</Link>
    </div>);
  }
}

export default FirstPage;
