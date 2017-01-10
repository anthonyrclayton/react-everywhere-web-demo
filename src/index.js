import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SpeakerDetails from './components/SpeakerDetails';
import SessionList from './components/SessionList';
import './index.css';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="sessions" />
      <Route path="sessions" component={SessionList}/>
      <Route path="speakers/:id" component={SpeakerDetails}/>
    </Route>
  </Router>
)

ReactDOM.render(router,
  document.getElementById('root')
);
