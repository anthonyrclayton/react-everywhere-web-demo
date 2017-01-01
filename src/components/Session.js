import React, { Component } from 'react';
import Speaker from './Speaker'
import star from '../star.png'

class Session extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorite: false
    }
  }

  toggleFavorite() {
    this.setState({favorite: !this.state.favorite})
  }

  render() {
    const { Title, Abstract, Speakers } = this.props

    return(
      <div onClick={this.toggleFavorite.bind(this)} className="session">
        <h2>{Title}</h2>

        <div className="Session-details">
          <div>
            <Speaker {...Speakers[0]} />

            { this.state.favorite && <div><img className="Session-favorite" src={star} alt="Favorite"/></div> }
          </div>


          <div className="Session-abstract">{Abstract}</div>
        </div>

      </div>
    )
  }
}

Session.propTypes = {
  Title: React.PropTypes.string.isRequired,
  Abstract: React.PropTypes.string.isRequired
}

export default Session;
