import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import Dashboard from './Dashboard'

class DashboardPage extends React.Component {
  static defaultProps = {
    pathName: 'Ecommerce Dashboard',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Ecommerce Dashboard" />
        <div className="card">
          <div className="card-body">
            <Dashboard />
          </div>
        </div>
      </Page>
    )
  }
}

export default DashboardPage
