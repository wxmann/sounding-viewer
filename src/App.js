import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Header';
import Orchestrator from './Orchestrator';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Orchestrator />
      </Fragment>
    );
  }
}

export default App;
