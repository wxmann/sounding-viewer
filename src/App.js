import React, { Component, Fragment } from 'react';
import './App.css';
import QueryForm from './QueryForm';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h2>Historical Upper-Air Soundings</h2>
        <QueryForm/>
      </Fragment>
    );
  }
}

export default App;
