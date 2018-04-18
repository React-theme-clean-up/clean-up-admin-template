// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import EcommerceDashboard from 'components/Pages/EcommerceDashboard/EcommerceDashboard'

class EcommerceDashboardPage extends React.Component {
  static defaultProps = {
    pathName: 'Ecommerce Dashboard',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Ecommerce Dashboard" />
        <div className="card">
          <div className="card-body">
            <EcommerceDashboard />
          </div>
        </div>
      </Page>
    )
  }
}

export default EcommerceDashboardPage
