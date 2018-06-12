import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ProductDetails from './ProductDetails'

class ProductDetailsPage extends React.Component {
  static defaultProps = {
    pathName: 'Products Details',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Products Details" />
        <ProductDetails />
      </Page>
    )
  }
}

export default ProductDetailsPage
