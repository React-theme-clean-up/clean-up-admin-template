// @flow
import React from 'react'
import { Link } from 'react-router-dom'

class Path extends React.Component {
  render() {
    return (
      <nav className="cat__core__top-sidebar cat__core__top-sidebar--bg">
        <span className="cat__core__title d-block mb-2">
          <Link to={`/dashboard`} className="text-muted">
            Home
          </Link>
          <span className="rfq__utility__arrow"> ▸</span>
          <span>
            {this.props.name}
          </span>
        </span>
      </nav>
    )
  }
}

export default Path
