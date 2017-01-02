import React, { Component } from 'react';
import logo from './logo.svg';
import Session from './components/Session'
import './App.css';
const SESSIONS_URL = 'https://speakers.codemash.org/api/sessionsdata'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sessions: [],
      loading: true
    }

    fetch(SESSIONS_URL).then(r => r.json()).then((sessions) => {
      this.setState({
        sessions: sessions,
        loading: false
      })
    })
  }

  renderSessions() {
    return <h1>Loading...</h1>;

    return this.state.sessions.map(session => <Session {...session} />)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CodeMash Schedule</h2>
        </div>

        {this.renderSessions()}
      </div>
    );
  }
}

export default App;
