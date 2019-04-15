import React, { Component, Fragment } from 'react';
import './App.css';
import QueryForm from './QueryForm';
import Viewport from './Viewport';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Historical RAOBS</h1>
        <QueryForm/>
        <Viewport/>
      </Fragment>
      
    );
  }
}

export default App;
