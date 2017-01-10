import React, { Component } from 'react';
import Session from './Session'
import Loading from './Loading'
import Toggle from './Toggle'
import Search from './Search'
import moment from 'moment'
import R from 'ramda'
import { applyFilter } from '../store/index'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

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
  toggleFilter(filter) {
    this.props.applyFilter(filter)
  }

  render() {
    const { sessions } = this.props;
    const keys = R.keys(sessions);

    return(
      <div>
        <Helmet title="Sessions" />
        <div className="toggles">
          <Toggle text="Pre-Compiler" onToggle={this.toggleFilter.bind(this, "Pre-Compiler")} />
          <Toggle text="General Session" onToggle={this.toggleFilter.bind(this, "General Session")} />
          <Toggle text="Kids Mash" on={true} onToggle={this.toggleFilter.bind(this, "Kidz Mash")} />
          <Toggle text="Sponsor Session" onToggle={this.toggleFilter.bind(this, "Sponsor Session")} />
          <Toggle text="After Dark" onToggle={this.toggleFilter.bind(this, "After Dark")} />
          <Toggle text="Hardware" onToggle={this.toggleFilter.bind(this, "CodeMash Schedule Item")} />
        </div>

        <Search />

        <Loading loading={this.props.loading}>

          <div>
            { keys.map((k) => <TimeSlot key={k} time={k} sessions={sessions[k]}/>) }
          </div>
        </Loading>
      </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    applyFilter: (filter) => dispatch(applyFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionList);
