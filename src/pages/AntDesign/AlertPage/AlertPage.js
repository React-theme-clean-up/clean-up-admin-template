import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import AlertPageItems from 'components/AntDesign/AlertPage/index'

class AlertPage extends React.Component {
  static defaultProps = {
    pathName: 'Alert',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Alert" />
        <AlertPageItems />
      </Page>
    )
  }
}

export default AlertPage
