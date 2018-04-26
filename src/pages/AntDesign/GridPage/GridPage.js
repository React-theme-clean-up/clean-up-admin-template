
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import GridPageItems from 'components/AntDesign/GridPage/index'

class GridPage extends React.Component {
  static defaultProps = {
    pathName: 'Grid',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Grid" />
        <GridPageItems />
      </Page>
    )
  }
}

export default GridPage
