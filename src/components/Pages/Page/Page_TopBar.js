// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Search from './Page_Search'
import ProfileMenu from './Page_ProfileMenu'

const mapStateToProps = (state, props) => ({})

@connect(mapStateToProps)
class TopBar extends React.Component {
  render() {
    return (
      <div className="cat__top-bar">
        <div className="cat__top-bar__left">
          <div className="cat__top-bar__logo">
            <Link to="/">
              <strong>Clean ui logo</strong>
            </Link>
          </div>
          <div className="cat__top-bar__item hidden-lg-down">
            <Search />
          </div>
        </div>
        <div className="cat__top-bar__right">
          <div className="cat__top-bar__item">
            <ProfileMenu />
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar
