import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import GridBootstrap from 'components/Pages/GridBootstrap/GridBootstrap'

class GridBootstrapPage extends React.Component {
  static defaultProps = {
    pathName: 'Grid',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Grid" />
        <GridBootstrap />
      </Page>
    )
  }
}

export default GridBootstrapPage
