import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import MessagingChat from './MessagingChat'

class MessagingAppPage extends React.Component {
  static defaultProps = {
    pathName: 'Messaging App',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Messaging App" />
        <MessagingChat />
      </Page>
    )
  }
}

export default MessagingAppPage
