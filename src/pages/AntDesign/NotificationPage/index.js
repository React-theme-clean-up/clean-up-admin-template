import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import NotificationItems from 'components/AntComponents/Notification/index'

class NotificationPage extends React.Component {
  static defaultProps = {
    pathName: 'Notification',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Notification" />
        <NotificationItems />
      </Page>
    )
  }
}

export default NotificationPage
