import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import GridItems from 'components/AntDesign/Grid/index'

class GridPage extends React.Component {
  static defaultProps = {
    pathName: 'Grid',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Grid" />
        <GridItems />
      </Page>
    )
  }
}

export default GridPage
