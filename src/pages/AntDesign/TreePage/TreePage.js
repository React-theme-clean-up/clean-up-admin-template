
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import TreePageItems from 'components/AntDesign/TreePage/index'

class TreePage extends React.Component {
  static defaultProps = {
    pathName: 'Tree',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Tree" />
        <TreePageItems />
      </Page>
    )
  }
}

export default TreePage
