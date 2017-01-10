import React, { Component } from 'react';
import logo from './logo.svg';
import store, { updateSessions } from './store'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'
import './App.css';

const SESSIONS_URL = '/sessions.json'

class App extends Component {
  constructor(props) {
    super(props)

    fetch(SESSIONS_URL).then(r => r.json()).then((sessions) => {
      store.dispatch(updateSessions(sessions))
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
         <Helmet
           htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
           title="CodeMash"
           titleTemplate="CodeMash - %s" />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <h2>CodeMash Schedule</h2>
          </div>

          { this.props.children }
        </div>
      </Provider>
    );
  }
}

export default App;
