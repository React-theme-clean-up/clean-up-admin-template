
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import AnchorPageItems from 'components/AntDesign/AnchorPage/index'

class AnchorPage extends React.Component {
  static defaultProps = {
    pathName: 'Anchor',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Anchor" />
        <AnchorPageItems />
      </Page>
    )
  }
}

export default AnchorPage
