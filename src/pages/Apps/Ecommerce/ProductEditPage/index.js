
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import ProductEdit from './ProductEdit'

class ProductEditPage extends React.Component {
  static defaultProps = {
    pathName: 'Product Edit',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Product Edit" />
        <ProductEdit />
      </Page>
    )
  }
}

export default ProductEditPage
