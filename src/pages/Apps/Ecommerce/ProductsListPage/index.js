import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import ProductsList from './ProductsList'

class ProductsListPage extends React.Component {
  static defaultProps = {
    pathName: 'Products List',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Products List" />
        <ProductsList />
      </Page>
    )
  }
}

export default ProductsListPage
