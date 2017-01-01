import React, { Component } from 'react';
import Speaker from './Speaker'

class Session extends Component {
  render() {
    const { Title, Abstract, Speakers } = this.props

    return(
      <div className="session">
        <h2>{Title}</h2>

        <Speaker {...Speakers[0]} />

        <div>{Abstract}</div>
      </div>
    )
  }
}

Session.propTypes = {
  Title: React.PropTypes.string.isRequired,
  Abstract: React.PropTypes.string.isRequired
}

export default Session;
