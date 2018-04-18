// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import Orders from 'components/Pages/Orders/Orders'

class OrdersPage extends React.Component {
  static defaultProps = {
    pathName: 'Orders',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Orders" />
        <Orders />
      </Page>
    )
  }
}

export default OrdersPage
