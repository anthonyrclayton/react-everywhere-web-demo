import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from "react-helmet"


const SpeakerDetails = ({ routeParams, FirstName="Speaker", LastName="Smith", GravatarUrl="http://github.com/ignu.png" }) => (
  <div className="speaker">
    <Helmet title={FirstName + ' ' + LastName}/>

    <div>
      <Link to="/sessions">
        Back to Sessions
      </Link>
    </div>

    <div><img alt={FirstName} src={GravatarUrl}/></div>

    <h9>{FirstName}&nbsp;{LastName}&nbsp;{routeParams.id}</h9>
  </div>
)

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(SpeakerDetails);
