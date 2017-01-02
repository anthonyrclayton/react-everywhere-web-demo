import React, { Component } from 'react';
import logo from './logo.svg';
import SessionList from './components/SessionList'
import Loading from './components/Loading'
import './App.css';

import store from './store'
import { Provider } from 'react-redux'

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

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>CodeMash Schedule</h2>
          </div>

          <Loading loading={this.state.loading}>
            <SessionList sessions={this.state.sessions}/>
          </Loading>
        </div>
      </Provider>
    );
  }
}

export default App;
