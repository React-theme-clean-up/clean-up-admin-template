import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import CollapseItems from 'components/AntDesign/Collapse/index'

class CollapsePage extends React.Component {
  static defaultProps = {
    pathName: 'Collapse',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Collapse" />
        <CollapseItems />
      </Page>
    )
  }
}

export default CollapsePage
