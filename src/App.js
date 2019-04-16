import React, { Component } from 'react';
import './App.css';
import QueryForm from './QueryForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Historical RAOBS</h1>
        <QueryForm/>
      </div>
    );
  }
}

export default App;
