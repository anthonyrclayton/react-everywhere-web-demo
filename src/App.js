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

        <Session
      title="React Everywhere"
      description="Traction android venture business-to-consumer iteration rockstar non-disclosure agreement client.Accelerator value proposition entrepreneur churn rate low hanging fruit iteration supply chain first mover advantage rockstar. Gamification network effects long tail gen-z incubator facebook mass market. First mover advantage partner network holy grail. Responsive web design mass market crowdsource. Social media investor customer long tail channels partner network iPad business-to-business."/>
      </div>
    );
  }
}

export default App;
