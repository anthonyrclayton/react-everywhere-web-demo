import React, { Component } from 'react';

class Session extends Component {
  render() {
    return(
      <div className="session">
        <h2>{this.props.title}</h2>
        <div>{this.props.description}</div>
      </div>
    )
  }
}

Session.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

export default Session;
