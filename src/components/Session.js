import React, { Component } from 'react';

class Session extends Component {
  render() {
    const { Title, Abstract } = this.props

    return(
      <div className="session">
        <h2>{Title}</h2>
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
