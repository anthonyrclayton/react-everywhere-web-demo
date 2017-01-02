import React, { Component } from 'react';
import Session from './Session'
import Loading from './Loading'
import { connect } from 'react-redux'

class SessionList extends Component {
  render() {
    const { sessions } = this.props;

    return(
      <Loading loading={this.props.loading}>
        <div>
          { sessions.map(session => <Session key={session.Id} {...session} />) }
        </div>
      </Loading>
    )
  }
}

SessionList.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  sessions: React.PropTypes.array.isRequired
}

const mapStateToProps = ({sessions, loading}) => {
  return { sessions, loading }
}

export default connect(mapStateToProps)(SessionList);
