import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import ProductsCatalog from './ProductsCatalog'

class ProductsCatalogPage extends React.Component {
  static defaultProps = {
    pathName: 'Products Catalog',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Products Catalog" />
        <ProductsCatalog />
      </Page>
    )
  }
}

export default ProductsCatalogPage
