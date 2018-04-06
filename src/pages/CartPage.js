// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import Cart from 'components/Pages/Cart/Cart'

class CartPage extends React.Component {
  static defaultProps = {
    pathName: 'Cart / Checkout',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Cart/Checkout" />
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