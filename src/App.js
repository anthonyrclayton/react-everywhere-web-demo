import React, { Component } from 'react';
import logo from './logo.svg';
import Session from './components/Session'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CodeMash Schedule</h2>
        </div>

        <Session title="React Everywhere"/>
      </div>
    );
  }
}

export default App;
