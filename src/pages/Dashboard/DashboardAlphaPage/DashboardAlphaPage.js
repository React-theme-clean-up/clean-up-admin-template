// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import DashboardAlpha from './DashboardAlpha'

class DashboardAlphaPage extends React.Component {
  static defaultProps = {
    pathName: 'Dashboard Alpha',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Dashboard Alpha" />
        <DashboardAlpha />
      </Page>
    )
  }
}

export default DashboardAlphaPage
