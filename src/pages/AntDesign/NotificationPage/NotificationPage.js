import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import NotificationItems from 'components/AntDesign/Notification/index'

class NotificationPage extends React.Component {
  static defaultProps = {
    pathName: 'Notification',
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
