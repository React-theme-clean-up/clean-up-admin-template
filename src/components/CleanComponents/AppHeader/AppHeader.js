// @flow
import React from 'react'
import { connect } from 'react-redux'
import ProfileMenu from './AppHeader_ProfileMenu'

const mapStateToProps = (state, props) => ({})

@connect(mapStateToProps)
class AppHeader extends React.Component {
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

export default AppHeader
