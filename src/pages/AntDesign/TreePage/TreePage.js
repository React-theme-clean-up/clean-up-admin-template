import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import TreeItems from 'components/AntDesign/Tree/index'

class TreePage extends React.Component {
  static defaultProps = {
    pathName: 'Tree',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Tree" />
        <TreeItems />
      </Page>
    )
  }
}

export default TreePage
