import React, { Component } from 'react';
import Session from './Session'
import Loading from './Loading'
import moment from 'moment'
import R from 'ramda'
import { connect } from 'react-redux'

class TimeSlot extends Component {
  render() {
    const { sessions, time } = this.props;
    const timeFormat = moment(time).format('MMMM Do YYYY, h:mm a')

    return(
      <div className="time">
        <div className="header"><h2>{timeFormat}</h2></div>

        <ul>
          { sessions.map(session => <Session key={session.Id} {...session} />) }
        </ul>
      </div>
    )
  }
}

class SessionList extends Component {
  render() {
    const { sessions } = this.props;
    const keys = R.keys(sessions);

    return(
      <Loading loading={this.props.loading}>
        <div>
          { keys.map((k) => <TimeSlot key={k} time={k} sessions={sessions[k]}/>) }
        </div>
      </Loading>
    )
  }
}

SessionList.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  sessions: React.PropTypes.object.isRequired
}

const mapStateToProps = ({sessions, loading}) => {
  return { sessions, loading }
}

export default connect(mapStateToProps)(SessionList);
