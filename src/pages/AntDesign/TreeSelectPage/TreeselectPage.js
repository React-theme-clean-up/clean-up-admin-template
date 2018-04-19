// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import TreeselectPageItems from 'components/AntComponents/TreeselectPage/index'

class TreeselectPage extends React.Component {
  static defaultProps = {
    pathName: 'TreeSelect',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - TreeSelect" />
        <TreeselectPageItems />
      </Page>
    )
  }
}

export default TreeselectPage
