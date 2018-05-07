import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Profile from './Profile'

class ProfileAppPage extends React.Component {
  static defaultProps = {
    pathName: 'Profile',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Profile" />
        <Profile />
      </Page>
    )
  }
}

export default ProfileAppPage
