import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      on: props.on === true || false
    }
  }

  toggle(e) {
    e.preventDefault()
    this.setState({on: !this.state.on})
    this.props.onToggle()
  }

  render () {
    return(
      <span className={`toggle ${this.state.on ? 'on' : 'off'}`}>
        <a href="#" onClick={this.toggle.bind(this)}>{this.props.text}</a>
      </span>
    )
  }
}

Toggle.propTypes = {
  on: React.PropTypes.bool,
  onToggle: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired
}
export default Toggle
