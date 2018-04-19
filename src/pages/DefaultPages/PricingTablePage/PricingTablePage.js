// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import PricingTable from './PricingTable'

class PricingTablePage extends React.Component {
  static defaultProps = {
    pathName: 'Pricing Table',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Pricing Table" />
        <PricingTable />
      </Page>
    )
  }
}

export default PricingTablePage
