// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import Dashboard from 'components/Pages/Dashboard/Dashboard'

class DashboardPage extends React.Component {
  static defaultProps = {
    pathName: 'Dashboard',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Dashboard" />
        <Dashboard />
      </Page>
    )
  }
}

export default DashboardPage
