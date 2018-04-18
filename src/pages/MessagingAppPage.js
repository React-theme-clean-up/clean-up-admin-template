// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import MessagingApp from 'components/Pages/MessagingApp/MessagingApp'

class MessagingAppPage extends React.Component {
  static defaultProps = {
    pathName: 'Messaging App',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Messaging App" />
        <MessagingApp />
      </Page>
    )
  }
}

export default MessagingAppPage
