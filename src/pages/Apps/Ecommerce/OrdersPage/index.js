import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Orders from './Orders'

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
