import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import CollapsePageItems from 'components/AntDesign/CollapsePage/index'

class CollapsePage extends React.Component {
  static defaultProps = {
    pathName: 'Collapse',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Collapse" />
        <CollapsePageItems />
      </Page>
    )
  }
}

export default CollapsePage
