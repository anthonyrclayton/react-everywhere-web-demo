import React, { Component } from 'react';
import Session from './Session'

class SessionList extends Component {
  render() {
    const { sessions } = this.props;

    return(
      <div>
        { sessions.map(session => <Session key={session.Id} {...session} />) }
      </div>
    )
  }
}

SessionList.propTypes = {
  sessions: React.PropTypes.array.isRequired,
}

export default SessionList;
