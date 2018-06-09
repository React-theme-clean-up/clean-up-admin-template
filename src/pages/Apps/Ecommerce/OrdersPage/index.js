import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Orders from './Orders'

class OrdersPage extends React.Component {
  static defaultProps = {
    pathName: 'Orders',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Orders" />
        <Orders />
      </Page>
    )
  }
}

export default OrdersPage
