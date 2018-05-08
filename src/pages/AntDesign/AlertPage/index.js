import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import AlertItems from 'components/AntDesign/Alert/index'

class AlertPage extends React.Component {
  static defaultProps = {
    pathName: 'Alert',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Alert" />
        <AlertItems />
      </Page>
    )
  }
}

export default AlertPage
