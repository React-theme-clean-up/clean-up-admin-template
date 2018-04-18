// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import Profile from 'components/Pages/Profile/Profile'

class MailAppPage extends React.Component {
  static defaultProps = {
    pathName: 'Profile',
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

export default MailAppPage
