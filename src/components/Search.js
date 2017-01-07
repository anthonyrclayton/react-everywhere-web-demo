import React from 'react'
import { connect } from 'react-redux'
import { searchSessions } from '../store/index'

class Search extends React.Component {
  search(e) {
    e.preventDefault()
    this.props.search(this.refs.search.value)
  }

  render() {
    return(
      <div className="speaker">
        <form>
          <input ref="search" type="text" />
          <button onClick={this.search.bind(this)}>Search</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (searchTerm) => dispatch(searchSessions(searchTerm))
  }
}


export default connect(null, mapDispatchToProps)(Search);
