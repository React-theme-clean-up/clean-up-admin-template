// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import Pricingtable from 'components/Pages/PricingTable/PricingTable'

class PricingtablePage extends React.Component {
  static defaultProps = {
    pathName: 'Pricing Table',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Pricing Table" />
        <Pricingtable />
      </Page>
    )
  }
}

export default PricingtablePage
