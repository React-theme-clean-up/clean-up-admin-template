import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import AnchorItems from 'components/AntComponents/Anchor/index'

class AnchorPage extends React.Component {
  static defaultProps = {
    pathName: 'Anchor',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Anchor" />
        <AnchorItems />
      </Page>
    )
  }
}

export default AnchorPage
