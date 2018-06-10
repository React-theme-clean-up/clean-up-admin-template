import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ProductEdit from './ProductEdit'

class ProductEditPage extends React.Component {
  static defaultProps = {
    pathName: 'Product Edit',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Product Edit" />
        <ProductEdit />
      </Page>
    )
  }
}

export default ProductEditPage
