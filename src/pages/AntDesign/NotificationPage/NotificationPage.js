// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import NotificationPageItems from 'components/AntComponents/NotificationPage/index'

class NotificationPage extends React.Component {
  static defaultProps = {
    pathName: 'Notification',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Notification" />
        <NotificationPageItems />
      </Page>
    )
  }
}

export default NotificationPage
