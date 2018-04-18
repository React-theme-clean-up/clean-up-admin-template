// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import ProductsList from 'components/Pages/ProductsList/ProductsList'

class ProdusctsListPage extends React.Component {
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

export default ProdusctsListPage
