// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import Invoice from 'components/CleanComponents/Invoice/Invoice'

class InvoicePage extends React.Component {
  static defaultProps = {
    pathName: 'Invoice',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Invoice" />
        <div className="card">
          <div className="card-body">
            <Invoice />
          </div>
        </div>
      </Page>
    )
  }
}

export default InvoicePage
