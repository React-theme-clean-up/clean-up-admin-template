// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import ProfileApp from './ProfileApp'

class ProfileAppPage extends React.Component {
  static defaultProps = {
    pathName: 'Profile',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Profile" />
        <ProfileApp />
      </Page>
    )
  }
}

export default ProfileAppPage
