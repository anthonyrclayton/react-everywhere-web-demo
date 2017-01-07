import React from 'react'
import { Link } from 'react-router'

const Speaker = ({ Id, FirstName, LastName, GravatarUrl }) => (
  <div className="speaker">
    <div><img alt={FirstName} src={GravatarUrl}/></div>

    <h9>
      <Link to={`/speakers/${Id}`}>
        {FirstName}&nbsp;{LastName}
      </Link>
    </h9>
  </div>
)

Speaker.propTypes =  {
  Id: React.PropTypes.string.isRequired,
  FirstName: React.PropTypes.string.isRequired,
  LastName: React.PropTypes.string.isRequired,
  GravatarUrl: React.PropTypes.string.isRequired
}

export default Speaker;
