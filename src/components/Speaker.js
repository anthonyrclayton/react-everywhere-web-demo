import React, { Component } from 'react'

const Speaker = ({ FirstName, LastName, GravatarUrl }) => (
  <div className="speaker">
    <div><img alt={FirstName} src={GravatarUrl}/></div>
  
    <h9>{FirstName}&nbsp;{LastName}</h9>
  </div>
)

Speaker.propTypes =  {
  FirstName: React.PropTypes.string.isRequired,
  LastName: React.PropTypes.string.isRequired,
  GravatarUrl: React.PropTypes.string.isRequired
}

export default Speaker;
