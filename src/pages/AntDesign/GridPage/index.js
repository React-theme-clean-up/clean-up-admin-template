import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import GridItems from 'components/AntComponents/Grid/index'

class GridPage extends React.Component {
  static defaultProps = {
    pathName: 'Grid',
    roles: ['agent', 'administrator'],
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
