import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Cart from './Cart'

class CartPage extends React.Component {
  static defaultProps = {
    pathName: 'Cart / Checkout',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Cart/Checkout" />
        <div className="card">
          <div className="card-body">
            <Cart />
          </div>
        </div>
      </Page>
    )
  }
}

export default CartPage
