import React, { Component } from 'react';
import './App.css';
import QueryForm from './QueryForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Historical Upper-Air Soundings</h1>
        <QueryForm/>
      </div>
    );
  }
}

export default App;
