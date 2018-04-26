import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import AnchorItems from 'components/AntDesign/Anchor/index'

class AnchorPage extends React.Component {
  static defaultProps = {
    pathName: 'Anchor',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Anchor" />
        <AnchorItems />
      </Page>
    )
  }
}

export default AnchorPage
