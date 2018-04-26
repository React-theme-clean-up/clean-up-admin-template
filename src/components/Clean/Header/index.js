import React from 'react'
import { connect } from 'react-redux'
import ProfileMenu from './ProfileMenu'

const mapStateToProps = (state, props) => ({})

@connect(mapStateToProps)
class Header extends React.Component {
  render() {
    return (
      <div>
        CAT React Logo
        <div style={{ float: 'right', width: 64, height: 64, overflow: 'hidden' }}>
          <ProfileMenu />
        </div>
      </div>
    )
  }
}

export default Header
