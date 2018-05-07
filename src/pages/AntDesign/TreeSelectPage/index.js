import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import TreeselectItems from 'components/AntDesign/Treeselect/index'

class TreeselectPage extends React.Component {
  static defaultProps = {
    pathName: 'TreeSelect',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - TreeSelect" />
        <TreeselectItems />
      </Page>
    )
  }
}

export default TreeselectPage
